/**
 * @param {any} data
 * @param {Object} command
 */
function update(data, command) {
  // your code here
  for (const [key, value] of Object.entries(command)) {
    switch (key) {
      case "$push":
        return [...data, ...value];
      case "$set":
        return value; // TODO
      case "$merge":
        if (!(data instanceof Object)) {
          //
          throw Error("Invalid");
        }
        return { ...data, ...value };
      case "$apply":
        const val = value(data); // TODO
        return val;
      default:
        if (data instanceof Array) {
          //
          const res = [...data];
          res[key] = update(data[key], value);
          return res;
        } else {
          return {
            ...data,
            [key]: update(data[key], value), //
          };
        }
    }
  }
}
