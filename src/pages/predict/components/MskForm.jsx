import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  Spinner,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import predictService from "../../../services/predict";
import CommonForm from "./CommonForm";

const MskForm = ({ setPredictedPrice }) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const formBgColor = useColorModeValue("gray.50", "gray.700");
  const inputBgColor = useColorModeValue("white", "gray.600");

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const resp = await predictService.predictMsk(JSON.stringify(data));
      setPredictedPrice(resp.data.predicted_price);
      reset();
    } catch (error) {
      console.error("Error predicting price:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Flex my={8} direction="column">
      <Box maxW="800px" mx="auto" w="100%">
        <VStack spacing={8} align="stretch">
          <Box bg={formBgColor} p={6} borderRadius="md" boxShadow="md">
            <form onSubmit={handleSubmit(onSubmit)}>
              <CommonForm register={register} errors={errors} />

              <FormControl mb={4} isInvalid={!!errors.distance_to_mkad}>
                <FormLabel>Расстояние от МКАД (км)</FormLabel>
                <NumberInput min={0} max={300}>
                  <NumberInputField
                    {...register("distance_to_mkad", {
                      valueAsNumber: true,
                      required: "Это поле обязательно",
                      min: {
                        value: 0,
                        message: "Значение должно быть не менее 0",
                      },
                      max: {
                        value: 300,
                        message: "Максимальное расстояние 300 км",
                      },
                    })}
                    bg={inputBgColor}
                  />
                </NumberInput>
              </FormControl>

              <Button
                mt={4}
                colorScheme="teal"
                type="submit"
                isLoading={isLoading}
                loadingText="Загрузка..."
              >
                {isLoading ? <Spinner size="sm" mr={2} /> : null}
                Предсказать цену
              </Button>
            </form>
          </Box>
        </VStack>
      </Box>
    </Flex>
  );
};

export default MskForm;
