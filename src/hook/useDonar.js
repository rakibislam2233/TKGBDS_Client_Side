import axios from "axios";
import { useQuery } from "react-query";
import useUser from "./UseUser";

const useDonar = () => {
  const [user] = useUser();
  const {
    data: isDonar,
    isLoading:isDonarLoading,
    refetch,
  } = useQuery({
    queryKey: ["isDonar", user?.email],
    enabled: user?.email !== "",
    queryFn: async () => {
      const res = await axios(`https://tkgbds-server-side.up.railway.app/isDonar/${user?.email}`);
      return res.data;
    },
  });
  return [isDonar,isDonarLoading,refetch];
};
export default useDonar;