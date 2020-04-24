import { keys, cloneDeep } from 'lodash';

// filling object
export function fill(source, target, withCreatingKeys = false) {

  const sourceKeys = keys(source);
  const targetKeys = keys(target);
  const result = cloneDeep(target);
  sourceKeys.forEach(key => {
    if (!targetKeys.includes(key) && !withCreatingKeys) {
      return;
    }
    result[key] = source[key];
  });
  return result;
}

export const addFavoritList = (id) => {
  let favorits = localStorage.getItem('favorits');
  if(favorits) {
    favorits = JSON.parse(favorits);
  } else {
    favorits = []
  }
  const haveFavorits = favorits.includes(id);
  if (haveFavorits) {
    favorits = favorits.filter(item => item !== id);
  } else {
    favorits.push(id)
  }
  localStorage.setItem('favorits', JSON.stringify(favorits))
  return favorits;
}

export const getFavoritsList = () => {
  let favorits = localStorage.getItem('favorits');
  if(favorits) {
      favorits = JSON.parse(favorits);
  } else {
      favorits = []
  }
  return favorits;
}