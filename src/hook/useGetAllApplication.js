import axios from "axios";
import { useQuery } from "react-query";

const useGetAllApplication = () => {
  const {
    data: getAppplication = [],
    isLoading:applicationLoading,
    refetch,
  } = useQuery({
    queryKey: ["applicationData"],
    queryFn: async () => {
      const res = await axios(`https://tkgbds-server-side.vercel.app/get-all-aplications`);
      return res.data;
    },
  });
  return [getAppplication,applicationLoading];
};

export default useGetAllApplication;
