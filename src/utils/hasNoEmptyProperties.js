export const hasNoEmptyProperties = (obj) => {
  return !Object.values(obj).some((value) => {
    return value === null || value === undefined || value === "";
  });
};
