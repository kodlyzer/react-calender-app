export function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function retrieve(key) {
    const item = localStorage.getItem(key);
    return item && JSON.parse(item) || {};
}

export function convertTopLevelDateStrToObj(obj) {
  for(let key in obj) {
    if (obj[key].date) {
      obj[key].date = new Date(obj[key].date);
    }
  }
  return obj;
}