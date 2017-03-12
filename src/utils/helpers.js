export function toQueryString(data) {
  data = Object.assign({}, data);
  if (!data.company) delete data.company;
  return Object.keys(data).map(key => {
    return isObject(data[key]) ?
      toQueryArray(key, data[key]) :
      `${key}=${encodeURIComponent(data[key])}`;
  }).filter(term => term).join('&');
}

export function except(object, key) {
  const dup = Object.assign({}, object);
  delete dup[key];
  return dup;
}

export function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

export function preventDefault(e) {
  e.preventDefault();
}

function toQueryArray(name, items) {
  return Object.keys(items).map(item => {
    return `${name}=${encodeURIComponent(item)}`
  }).join('&');
}

function isObject(val) {
  return typeof val === 'object' && val != null;
}
