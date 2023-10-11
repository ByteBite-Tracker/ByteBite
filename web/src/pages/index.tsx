import { SignupForm } from "@/components/forms/signup";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC } from "react";
import UserList from "./api/hello";

export const App: FC = () => {
  //const route = useRouter();


  return (
   <UserList/>
  )
}

export default App;
