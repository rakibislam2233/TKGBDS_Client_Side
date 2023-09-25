import axios from "axios";
import useUser from "./UseUser";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
const useApplicationBlood = () => {
  const [user] = useUser();
  const { data:applicationBlood = [], isLoading , refetch} = useQuery({
    queryKey: ["applicationBlood", user?.email],
    enabled: user?.email !== '',
    queryFn: async () => {
      const res = await axios(`http://localhost:5000/application-blood/${user?.email}`);
      return res.data;

    },
  });
  return [applicationBlood,isLoading,refetch]
};

export default useApplicationBlood;
