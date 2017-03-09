export function toQueryString(data) {
  if (!data.company) delete data.company;
  return Object.keys(data).map(key => {
    return isObject(data[key]) ?
      toQueryArray(key, data[key]) :
      `${key}=${encodeURI(data[key])}`;
  }).filter(term => term).join('&');
}

function toQueryArray(name, items) {
  return Object.keys(items).map(item => {
    return `${name}=${encodeURI(item)}`
  }).join('&');
}

function isObject(val) {
  return typeof val === 'object' && val != null;
}
