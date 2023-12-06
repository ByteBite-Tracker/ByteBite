import { graphql } from '@/gql';
import { useMutation  } from 'urql';
import {FC} from 'react';
import {MutationCreateFoodItemArgs} from '@/gql/graphql';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  useColorModeValue,
  useToast
} from '@chakra-ui/react';
import {FormikHelpers, useFormik} from 'formik';

const UPDATE_WEIGHT = graphql(`
  mutation UpdateWeight(
    $calories: Int!
    $carbs: Decimal!
    $fat: Decimal!
    $name: String!
    $protein: Decimal!
  ) {
    createFoodItem(
      calories: $calories
      carbs: $carbs
      fat: $fat
      name: $name
      protein: $protein
    ) {
      foodItem {
        calories
        carbs
        fat
        name
        protein
      }
    }
  }
`);

export const AddFoodItem: FC = () => {
  const toast = useToast();
  const [ , updateWeight] = useMutation(MAKE_ITEM);

  const handleCreate = async (
    {calories, carbs, fat, name, protein }:MutationCreateFoodItemArgs,
    { resetForm }: FormikHelpers<any> ): Promise<void>  => {
    // Define the variables for your mutation
    const variables = {
      calories: calories,
      carbs: carbs,
      fat: fat,
      name: name,
      protein: protein
    };

    // Execute the mutation
    const response = await createItem(variables);

    if (response.error) {
      // Handle the error
      console.error('Error: ', response.error);
      toast({
        title: 'Error',
        description: 'There was an error creating the food item.',
        status: 'error',
        duration: 9000,
        isClosable: true
      });
    } else {
      // Success! Handle the response
      console.log('Item created', response.data?.createFoodItem);
      resetForm();
      toast({
        position: 'top',
        title: 'Success',
        description: 'Food item added successfully!',
        status: 'success',
        duration: 9000,
        isClosable: true
      });
    }
  };

  const formik = useFormik({
    initialValues: {
      newWeight: null
    },
    onSubmit: (values, formikBag) => {
      handleCreate(values, formikBag);
    }
  });

  return (
    <Flex align={'center'} justify={'center'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Update Your Weight
          </Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <form onSubmit={formik.handleSubmit}>
            <Stack spacing={4}>
              <Box>
                <FormControl isRequired>
                  <FormLabel htmlFor="name">Item</FormLabel>
                  <Input
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    id="name"
                    name="name"
                    placeholder="Pizza..."
                  />
                </FormControl>
              </Box>
              <HStack>
                <Box>
                  <FormControl isRequired>
                    <FormLabel htmlFor="calories">Calories</FormLabel>
                    <Input
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.calories}
                      id="calories"
                      name="calories"
                      placeholder="200"
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl isRequired>
                    <FormLabel htmlFor="carbs">Carbs</FormLabel>
                    <Input
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.carbs}
                      id="carbs"
                      name="carbs"
                      placeholder="10.40"
                    />
                  </FormControl>
                </Box>
              </HStack>
              <HStack>
                <Box>
                  <FormControl isRequired>
                    <FormLabel htmlFor="protein">Protein</FormLabel>
                    <Input
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.protein}
                      id="protein"
                      name="protein"
                      placeholder="32.00"
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl isRequired>
                    <FormLabel htmlFor="fat">Fat</FormLabel>
                    <Input
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.fat}
                      id="fat"
                      name="fat"
                      placeholder="120.00"
                    />
                  </FormControl>
                </Box>
              </HStack>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Adding Item..."
                  size="lg"
                  bg={'green.400'}
                  color={'white'}
                  _hover={{
                    bg: 'green.500'
                  }}
                  type="submit"
                >
                  Add Item
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

export default AddFoodItem;
