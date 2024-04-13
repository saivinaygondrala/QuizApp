import Card from "./Card";
import { useEffect } from "react";
import {useHistory} from 'react-router-dom';

const Dashboard = () => {
    const history = useHistory();
  useEffect(() => {
    if (!localStorage.getItem("login-token")) {
       history.push("/signup");
    }
  });
  return (
    <>
      <Card />
    </>
  );
};

export default Dashboard;
