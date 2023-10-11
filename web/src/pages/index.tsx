
import { SignupForm } from "@/components/forms/signup";
import Home from "@/components/ui/home";
import { useRouter } from "next/router";

import { FC } from "react";
import UserList from "./api/users";

export const App: FC = () => {

  //const route = useRouter();
  return <Home />;
};


export default App;
