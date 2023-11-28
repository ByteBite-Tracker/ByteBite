import Home from "@/components/ui/home";
import { FC } from "react";
import { useSession } from "next-auth/react";

import AddFoodItem from "@/components/forms/add-food";

import { CalorieIntakeCalculator } from "./calc";
import Dashboard from "@/components/ui/dashboard";

export const App: FC = () => {
  const testing = false;
  const { status } = useSession();
  if (testing) {
    return <AddFoodItem />;
  } else {
    if (status == "authenticated") return <Dashboard />;
    else return <Home />;
  }
};

export default App;
