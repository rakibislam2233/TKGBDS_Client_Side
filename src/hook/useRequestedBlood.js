import axios from "axios";
import useUser from "./UseUser";
import { useQuery } from "react-query";
const useRequestedBlood = () => {
  const [user] = useUser();
  const { data:requestedBlood = [], isLoading , refetch} = useQuery({
    queryKey: ["requestedBlood", user?.email],
    enabled: user?.email !== '',
    queryFn: async () => {
      const res = await axios(`http://localhost:5000/request-blood/${user?.email}`);
      return res.data;

    },
  });
  return [requestedBlood,isLoading,refetch]
}

export default useRequestedBlood
