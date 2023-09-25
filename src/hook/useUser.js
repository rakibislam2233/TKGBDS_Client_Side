import { useContext } from "react"
import { UserContext } from "../Provider/AuthProvider/AuthProvider"

const useUser = ()=>{
    const {user,loading} = useContext(UserContext);
    return[user,loading]
}
export default useUser