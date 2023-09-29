import axios from "axios";
import { useQuery } from "react-query";
import useUser from "./UseUser";
const useApplicationBlood = () => {
  const [user] = useUser();
  const { data:applicationBlood = [], isLoading , refetch} = useQuery({
    queryKey: ["applicationBlood", user?.email],
    enabled: user?.email !== '',
    queryFn: async () => {
      const res = await axios(`https://tkgbds-server-side.up.railway.app/application-blood/${user?.email}`);
      return res.data;

    },
  });
  return [applicationBlood,isLoading,refetch]
};

export default useApplicationBlood;
