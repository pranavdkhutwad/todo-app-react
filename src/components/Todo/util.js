export const transformObjToArr = (obj) => {
  const tempArr = [];

  for (let key in obj) {
    tempArr.push({ ...obj[key], id: key });
  }

  return tempArr;
};

export const filterListByCategories = (list) => {
  const highPriorities = list.filter((task) => task.priority === 1);
  const mediumPriorities = list.filter((task) => task.priority === 2);
  const lowPriorities = list.filter((task) => task.priority === 3);

  return {
    highPriorities,
    mediumPriorities,
    lowPriorities,
  };
};
