import axios from "axios";
import { useQuery } from "react-query";
import useUser from "./UseUser";
const useRequestedBlood = () => {
  const [user] = useUser();
  const { data:requestedBlood = [], isLoading , refetch} = useQuery({
    queryKey: ["requestedBlood", user?.email],
    enabled: user?.email !== '',
    queryFn: async () => {
      const res = await axios(`https://tkgbds-server-side.vercel.app/request-blood/${user?.email}`);
      return res.data;

    },
  });
  return [requestedBlood,isLoading,refetch]
}

export default useRequestedBlood
