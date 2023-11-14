import React from "react";
const visited = {};

const DirectoryTree = ({ data }) => {
  return data.map((el) => {
    return <Directory data={el} />;
  });
};

const Directory = ({ data }) => {
	console.log(data);
  const [showData, setShowData] = React.useState(false);
  return (
    <div style={{ marginLeft: "20px" }} key={data.id}>
      <p onClick={() => setShowData(!showData)}>{data.name}</p>
      <div style={{ display: showData ? "block" : "none" }}>
        {data.children
          ? data.children.map((childTree) => {
              return <Directory data={childTree} />;
            })
          : null}
      </div>
    </div>
  );
};

export default DirectoryTree;
