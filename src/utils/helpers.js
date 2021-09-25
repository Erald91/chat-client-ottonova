export const cloneDeep = (object) => JSON.parse(JSON.stringify(object));

export const clearProps = (dataObject, props = []) => {
  const clone = cloneDeep(dataObject);
  props.forEach(prop => {
    if (clone.hasOwnProperty(prop)) {
      delete clone[prop];
    }
  });
  return clone;
};