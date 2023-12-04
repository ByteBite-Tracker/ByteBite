import { graphql } from "@/gql";
import { UpdateUsersInfoMutationVariables } from "@/gql/graphql";
import EditableControls from "@/pages/shared/edit-textbox";
import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  SimpleGrid,
  Select,
  Input,
  CardFooter,
  Box,
  Text,
  Button,
} from "@chakra-ui/react";
import { FormikHelpers, useFormik } from "formik";

import React, { useEffect, useState } from "react";
import { gql, useMutation, useQuery } from "urql";
import { signOut, useSession } from "next-auth/react";

const UPDATE_SETTINGS = graphql(`
  mutation UpdateUsersInfo(
    $age: Int!
    $dailyCalories: Int!
    $gender: String!
    $goalWeight: Float!
    $height: Int!
    $weight: Float!
  ) {
    updateUsersInfo(
      age: $age
      dailyCalories: $dailyCalories
      gender: $gender
      goalWeight: $goalWeight
      height: $height
      weight: $weight
    ) {
      usersInfo {
        age
        dailyCalories
        gender
        goalWeight
        height
        weight
      }
    }
  }
`);

const USER_INFO = gql`
  query UserInfo($email: String!) {
    userInfoByEmail(email: $email) {
      age
      dailyCalories
      gender
      goalWeight
      height
      weight
    }
  }
`;

export const ProfileSettings = () => {
  const { data: sessionData } = useSession();
  const userEmail = sessionData?.user?.email;

  const [loading, setLoading] = useState(false);

  const [{ data, fetching }] = useQuery({
    query: USER_INFO,
    variables: { email: userEmail },
    pause: !userEmail,
  });
  const [editMode, setEditMode] = useState(false);
  const [, updateSettings] = useMutation(UPDATE_SETTINGS);

  useEffect(() => {
    if (userEmail) {
      setLoading(true);
      // Fetch the data
      // In this case, the useQuery hook is already fetching the data
      // So we just need to handle the response
      if (!fetching) {
        setLoading(false);
      }
    }
  }, [userEmail, data, fetching]);

  const handleCreate = async (
    {
      age,
      goalWeight,
      gender,
      weight,
      height,
      dailyCalories,
    }: UpdateUsersInfoMutationVariables,
    { resetForm }: FormikHelpers<any>
  ): Promise<void> => {
    // Define the variables for your mutation
    const variables = {
      age,
      dailyCalories,
      gender,
      goalWeight,
      height,
      weight,
    };
    setEditMode(false);

    // Execute the mutation
    const response = await updateSettings(variables);

    // if (response.error) {
    //   // Handle the error
    //   console.error("Error: ", response.error);
    //   toast({
    //     title: "Error",
    //     description: "There was an error creating the food item.",
    //     status: "error",
    //     duration: 9000,
    //     isClosable: true,
    //   });
    // } else {
    //   // Success! Handle the response
    //   console.log("Item created", response.data?.createFoodItem);
    //   resetForm();
    //   toast({
    //     position: "top",
    //     title: "Success",
    //     description: "Food item added successfully!",
    //     status: "success",
    //     duration: 9000,
    //     isClosable: true,
    //   });
    // }
  };

  const formik = useFormik({
    initialValues: {
      calories: 0,
      gender: data?.userInfoByEmail.gender,
      weight: "",
      goal_weight: "",
      height: "",
      age: "",
    },
    onSubmit: (values, formikBag) => {
      const parsedVals = {
        ...values,
        weight: parseInt(values.weight),
        goalWeight: parseInt(values.goal_weight),
        height: parseInt(values.height),
        age: parseInt(values.age),
        dailyCalories: 1234,
      };
      handleCreate(parsedVals, formikBag);
    },
  });

  return (
    <Card>
      <CardHeader>
        <Heading size="md">Profile Settings</Heading>
      </CardHeader>
      <CardBody>
        <form onSubmit={formik.handleSubmit} id="profile-settings-form">
          <SimpleGrid columns={2} spacing={4}>
            {editMode ? (
              <>
                <Box>
                  <Text as="b">Gender</Text>
                  <Select
                    id="gender"
                    name="gender"
                    isDisabled={!editMode}
                    value={formik.values.gender}
                    onChange={formik.handleChange}
                    placeholder="Select option"
                    size="sm"
                  >
                    <option value="MALE">Male</option>
                    <option value="FEMALE">Female</option>
                  </Select>
                </Box>
                <Box>
                  <Text as="b">Caloric Goal</Text>
                  <Input
                    value={formik.values.calories}
                    isReadOnly={true}
                    variant="outline"
                  />
                </Box>
                <Box>
                  <Text as="b">Weight (lbs)</Text>

                  <Input
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.weight}
                    id="weight"
                    name="weight"
                    placeholder="Your Weight"
                    isDisabled={!editMode}
                  />
                </Box>
                <Box>
                  <Text as="b">Weight Goal (lbs)</Text>

                  <Input
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.goal_weight}
                    id="goal_weight"
                    name="goal_weight"
                    placeholder="Your Weight Goal"
                    isDisabled={!editMode}
                  />
                </Box>
                <Box>
                  <Text as="b">Height(In)</Text>

                  <Input
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.height}
                    id="height"
                    name="height"
                    placeholder="Your Height"
                    isDisabled={!editMode}
                  />
                </Box>
                <Box>
                  <Text as="b">Age</Text>

                  <Input
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.age}
                    id="age"
                    name="age"
                    placeholder="Age"
                    isDisabled={!editMode}
                  />
                </Box>
              </>
            ) : (
              <>
                <Box>
                  <Text as="b">Gender</Text>
                  <Select
                    id="gender"
                    name="gender"
                    isDisabled={!editMode}
                    value={data?.userInfoByEmail.gender}
                    onChange={formik.handleChange}
                    placeholder="Select option"
                    size="sm"
                  >
                    <option value="MALE">Male</option>
                    <option value="FEMALE">Female</option>
                  </Select>
                </Box>
                <Box>
                  <Text as="b">Caloric Goal</Text>
                  <Input
                    value={formik.values.calories}
                    isReadOnly={true}
                    variant="outline"
                  />
                </Box>
                <Box>
                  <Text as="b">Weight (lbs)</Text>

                  <Input
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.weight}
                    id="weight"
                    name="weight"
                    placeholder="Your Weight"
                    isDisabled={!editMode}
                  />
                </Box>
                <Box>
                  <Text as="b">Weight Goal (lbs)</Text>

                  <Input
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.goal_weight}
                    id="goal_weight"
                    name="goal_weight"
                    placeholder="Your Weight Goal"
                    isDisabled={!editMode}
                  />
                </Box>
                <Box>
                  <Text as="b">Height(In)</Text>

                  <Input
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.height}
                    id="height"
                    name="height"
                    placeholder="Your Height"
                    isDisabled={!editMode}
                  />
                </Box>
                <Box>
                  <Text as="b">Age</Text>

                  <Input
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.age}
                    id="age"
                    name="age"
                    placeholder="Age"
                    isDisabled={!editMode}
                  />
                </Box>
              </>
            )}
          </SimpleGrid>
        </form>
      </CardBody>

      <CardFooter>
        {editMode ? (
          <Button type="submit" form="profile-settings-form">
            Save
          </Button>
        ) : (
          <Button
            type="button"
            onClick={(e): void => {
              e.preventDefault();
              setEditMode(true);
            }}
          >
            Edit
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
