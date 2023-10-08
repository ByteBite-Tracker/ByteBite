import { useState } from "react";
import Logo from "@/public/images/pexels-any-lane-5945660.jpg";
import { SelectedPage } from "@/pages/shared/types";
import { Link } from "./Link";
import ActionButton from "@/pages/shared/ActionButton";
import { Box, Button, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

export const Navbar = ({
  isTopOfPage,
  selectedPage,
  setSelectedPage,
}: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navbarBackground = isTopOfPage ? "" : "drop-shadow";
  const route = useRouter();

  return (
    <Box>
      <Flex justifyContent={"space-evenly"}>
        <Link
          page="Home"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Link
          page="foo"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Link
          page="bar"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Link
          page="Contact Us"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />

        <Box>
          <ActionButton buttonText="Log-in Now" routingPath={"./log-in"} />
          <ActionButton
            buttonText="Sign Up Now"
            routingPath={"./create_user"}
          />
        </Box>
      </Flex>
    </Box>
  );
};
