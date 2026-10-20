/* Small CSV reader: supports UTF-8 BOM, quoted commas/newlines and escaped quotes. */
globalThis.parseRegistrations = function parseRegistrations(text) {
  const rows = [];
  let row = [], field = '', quoted = false, closed = false;
  text = text.replace(/^\uFEFF/, '');
  const endField = () => { row.push(field); field = ''; closed = false; };
  const endRow = () => { endField(); if (row.some(cell => cell.trim())) rows.push(row); row = []; };
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; }
        else { quoted = false; closed = true; }
      } else field += c;
    } else if (c === ',') endField();
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      endRow();
    } else if (c === '"' && !field && !closed) quoted = true;
    else {
      if (closed || c === '"') throw new Error('CSV 引号格式不正确');
      field += c;
    }
  }
  if (quoted) throw new Error('CSV 引号未闭合');
  endRow();
  if (!rows.length) throw new Error('文件为空');
  const header = rows.shift().map(cell => cell.trim());
  if (new Set(header).size !== header.length || !['id','name','department','hours'].every(key => header.includes(key))) throw new Error('列名必须包含 id,name,department,hours，且不能重复');
  const ids = new Set();
  return rows.map((cells, index) => {
    if (cells.length !== header.length) throw new Error(`第 ${index + 2} 条记录列数不正确`);
    const record = Object.fromEntries(header.map((key, i) => [key, cells[i].trim()]));
    const { id, name, department, hours } = record;
    if (!id || !name || !department || !hours || !Number.isFinite(Number(hours)) || Number(hours) < 0) throw new Error(`第 ${index + 2} 条记录有缺失或无效值`);
    if (ids.has(id)) throw new Error(`编号重复：${id}`);
    ids.add(id);
    return { ...record, id, name, department, hours: Number(hours) };
  });
};
