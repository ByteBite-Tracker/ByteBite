import { Button, Link } from "@chakra-ui/react";
import { SelectedPage } from "./types";
import React from "react";
import { useRouter } from "next/router";
import { Url } from "next/dist/shared/lib/router/router";
type Props = {
  buttonText: string;
  routingPath: Url;
};

const ActionButton = ({ buttonText, routingPath }: Props) => {
  const route = useRouter();
  return (
    <Button
      colorScheme="green"
      onClick={(): void => {
        route.push(routingPath);
      }}
      marginRight="5px"
    >
      {buttonText}
    </Button>
  );
};

export default ActionButton;
