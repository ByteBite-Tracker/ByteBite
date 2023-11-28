import { Flex, Stack } from "@chakra-ui/react";
import React from "react";

import { CalorieCalc } from "@/components/calcs/cal-intake";
import { TdeeCalc } from "@/components/calcs/tdee-calc";
import { BmiCalc } from "@/components/calcs/bmi-calc";

export const CalorieIntakeCalculator = () => {
  return (
    <Flex align={"center"} justify={"center"}>
      <Stack
        spacing={4}
        p={4}
        direction={{ base: "column", md: "row" }}
        align="center"
      >
        <BmiCalc />
        <CalorieCalc />
        <TdeeCalc />
      </Stack>
    </Flex>
  );
};
