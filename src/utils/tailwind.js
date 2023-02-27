export const createGroupName = (text) =>
  JSON.stringify(text).replaceAll(/[^\w]/g, '').toLocaleLowerCase();
