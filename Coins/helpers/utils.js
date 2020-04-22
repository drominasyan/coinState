import { toInteger, keys, cloneDeep, isArray, isEmpty } from 'lodash';

// check if value is ID: integer number > 0
export function isID(value) {
  return Boolean(toInteger(value));
}

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