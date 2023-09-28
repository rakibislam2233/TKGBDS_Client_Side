import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetAllDonar = () => {
  const [allDonar, setAllDonar] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`https://tkgbds-server-side.vercel.app/get-all-donar`)
      .then((res) => {
        setAllDonar(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message)
      });
  }, []);
  return [allDonar, isLoading];
};

export default useGetAllDonar;
