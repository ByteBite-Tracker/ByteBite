import { useState } from "react";
import Logo from "@/public/images/pexels-any-lane-5945660.jpg";
import { SelectedPage } from "@/pages/shared/types";
import { NavbarLink } from "./navbar-link";
import { RouteButton } from "@/pages/shared/route-button";
import { useRouter } from "next/router";
import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Spacer,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  children: React.ReactNode;
};
const NavLink = (props: Props) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
};

export const Navbar = ({
  isTopOfPage,
  selectedPage,
  setSelectedPage,
}: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navbarBackground = isTopOfPage ? "" : "drop-shadow";
  const route = useRouter();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>Logo</Box>
          <NavbarLink
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <NavbarLink
                page="About Us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <NavbarLink
                page="Calculator"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <NavbarLink
                page="Contact Us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
          <Flex alignItems={"center"}>

            <Stack direction={"row"} spacing={7}>
              
          
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>

                  <Flex
                    justifyContent={{ base: "center", md: "flex-end" }}
                    marginTop={{ base: "10px", md: "0" }}
                  ></Flex>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
