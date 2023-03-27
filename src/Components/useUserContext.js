import { useContext } from "react"
import { UserContexts } from "./UserContexts"

export const useUserContext=()=>{
    return useContext(UserContexts)
};
