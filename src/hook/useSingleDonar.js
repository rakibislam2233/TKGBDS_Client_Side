
import axios from "axios";
import { useQuery } from "react-query";
import useUser from "./UseUser";

 const useSingleDonar = () =>{
    const [user] = useUser();
    const { data:singleDonar = {}, isLoading , refetch} = useQuery({
      queryKey: ["singleDonar", user?.email],
      enabled: user?.email !== '',
      queryFn: async () => {
        const res = await axios(`https://tkgbds-server-side.up.railway.app/get-one-user/${user?.email}`);
        console.log(res.data)
        return res.data;
  
      },
    });
    return [singleDonar,isLoading,refetch]

}
export default useSingleDonar;