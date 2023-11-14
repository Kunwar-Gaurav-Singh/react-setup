export const dataFormatter = (data = []) => {
  const formattedData = [];
  const visited = {};
  data.map((child) => {
    const currDir = child;
    const children = data.filter((el) => el.parentId === currDir.id);
    currDir["children"] = children;
    formattedData.push(currDir);
  });
  return filterFormattedData(formattedData);
};

const visited = {};
const dirData = [];
const filterFormattedData = (data) => {
  for (let i = 0; i < data.length; i++) {
    let dir = data[i];
    if (!visited[dir.id]) {
      visited[dir.id] = true;
      dirData.push(data[i]);
      if (dir.children) {
        markVisited(dir.children);
      }
    }
  }

  return dirData;
};

const markVisited = (data = []) => {
  data.forEach((child) => {
    visited[child.id] = true;
    if (child.children) markVisited(child.children);
  });

  return;
};
