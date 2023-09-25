
import useUser from "./UseUser";
import axios from "axios";
import { useQuery } from "react-query";

 const useSingleDonar = () =>{
    const [user] = useUser();
    const { data:singleDonar = {}, isLoading , refetch} = useQuery({
      queryKey: ["singleDonar", user?.email],
      enabled: user?.email !== '',
      queryFn: async () => {
        const res = await axios(`http://localhost:5000/get-one-user/${user?.email}`);
        return res.data;
  
      },
    });
    return [singleDonar,isLoading,refetch]

}
export default useSingleDonar;