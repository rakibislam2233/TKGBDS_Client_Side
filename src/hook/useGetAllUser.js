import axios from "axios";
import { useEffect, useState } from "react";

const useGetAllUser = () => {
  const [allUser, setAllUser] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`https://tkgbds-server-side.vercel.app/get-all-user`)
      .then((res) => {
        setAllUser(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message)
      });
  }, []);
  return [allUser, isLoading];
};

export default useGetAllUser;
