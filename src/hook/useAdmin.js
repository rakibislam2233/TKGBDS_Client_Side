import axios from "axios";
import { useQuery } from "react-query";
import useUser from "./UseUser";

const useAdmin = () => {
  const [user] = useUser();
  const {
    data: isAdmin,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: user?.email !== "",
    queryFn: async () => {
      const res = await axios(`https://tkgbds-server-side.vercel.app/isAdmin/${user?.email}`);
      return res.data;
    },
  });
  return [isAdmin,isLoading,refetch];
};
export default useAdmin;