import React from "react";
import axios from "axios";
import { dataFormatter } from "../../utils/dataFormatter";
import DirectoryTree from "../DirectoryTree";

const Test = () => {
  const [directoryData, setDirectoryData] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("https://api.npoint.io/a772fce7e400c8816672")
      .then((resp) => {
        const formattedData = dataFormatter(resp.data.data);
        setDirectoryData(formattedData);
      })
      .catch((err) => console.error(err));
  }, []);

  return <DirectoryTree data={directoryData} visited={{}} />;
};

export default Test;
