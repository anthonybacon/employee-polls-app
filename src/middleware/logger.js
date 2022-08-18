/**
 * Logger for debug purposes
 */

const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("Action provided: ", action);
  const result = next(action);
  console.log("New state: ", store.getState());
  console.groupEnd();
  return result;
};

export default logger;
