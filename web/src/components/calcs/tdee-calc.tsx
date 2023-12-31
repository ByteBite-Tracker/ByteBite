import React, { FC, useState } from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Select,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";
import { CalorieCalc } from "@/components/calcs/cal-intake";

interface TdeeCalcProps {
  bmr: number;
}
interface TdeeProps {
  bmr: number;
  activityFactor: number;
}

export const TdeeCalc: FC<TdeeCalcProps> = ({ bmr }) => {
  const [tdee, setTdee] = useState<number | null>(null);

  const calculateTdee = ({ bmr, activityFactor }: TdeeProps): void => {
    const tdeeValue = bmr * activityFactor;
    setTdee(tdeeValue);
  };

  return (
    <Flex align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Heading fontSize={"4xl"} textAlign={"center"}>
          Calculate TDEE (Total Daily Energy Expenditure)
        </Heading>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Formik
            initialValues={{
              bmr: bmr,
              activityFactor: 1.2, // Default to Sedentary
            }}
            onSubmit={(values): void => {
              console.log(values);
              const variables = {
                bmr: values.bmr > 0 ? values.bmr : bmr,
                activityFactor: values.activityFactor ?? 1.2,
              };
              calculateTdee(variables);
            }}
          >
            {({ handleSubmit }): React.ReactElement => (
              <form onSubmit={handleSubmit}>
                <Stack spacing={4}>
                  <FormControl isRequired>
                    <FormLabel htmlFor="bmr">BMR</FormLabel>
                    <Field
                      as={Input}
                      disabled
                      type="number"
                      id="bmr"
                      name="bmr"
                      value={bmr.toFixed(2)}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel htmlFor="activityFactor">
                      Activity Factor
                    </FormLabel>
                    <Field
                      as={Select}
                      id="activityFactor"
                      name="activityFactor"
                    >
                      <option value={1.2}>Sedentary</option>
                      <option value={1.375}>Lightly Active</option>
                      <option value={1.55}>Moderately Active</option>
                      <option value={1.725}>Very Active</option>
                      <option value={1.9}>Super Active</option>
                    </Field>
                  </FormControl>
                </Stack>
                <Stack spacing={10} pt={8}>
                  <Button
                    size="lg"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{ bg: "blue.500" }}
                    type="submit"
                  >
                    Calculate TDEE
                  </Button>
                </Stack>
              </form>
            )}
          </Formik>
          {tdee && (
            <Center pt={10} flexDirection="column" alignItems="center">
              <Text as={Heading} size="md" mb={2}>
                Your TDEE: {tdee.toFixed(2)}
              </Text>
              <Box textAlign="center">
                <Text fontSize="sm" color="gray.500">
                  (Calories per day)
                </Text>
              </Box>
            </Center>
          )}
        </Box>
      </Stack>
    </Flex>
  );
};
