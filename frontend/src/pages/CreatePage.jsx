import { useColorModeValue } from '@/components/ui/color-mode';
import { useProductStore } from '@/store/product';
import { Box, Button, Container, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { toaster } from '@/components/ui/toaster';
import { Text } from '@chakra-ui/react';


const CreatePage = () => {

  const buttonBg = useColorModeValue('blue.900', 'blue.100')
  const buttonHoverBg = useColorModeValue('blue.800', 'blue.200')
  const textColor = useColorModeValue('blue.900', 'blue.100');
  const focusColor = useColorModeValue('gray.200', 'gray.600');


  const [newProduct, setNewProduct] = useState({ name: "", price: "", image: "" });
  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);

    toaster.create({
      title: success ? "Success" : "Error",
      description: message,
      type: success ? "success" : "error",
      duration: 3000,
    });

    if (success) setNewProduct({ name: "", price: "", image: "" });
  };

  return (
    <Container maxW="lg" py={12}>
      <VStack spacing={8}>
        <Text 
    fontSize={{ base: '20px', md: '28px' }} 
    fontWeight="bold" 
    color={textColor} 
    letterSpacing="wide"
  >
    Create New Product
  </Text>
        
        <Box
          w="full"
          maxW="500px"
          bg={useColorModeValue("white", "gray.800")}
          p={6}
          rounded="lg"
          shadow="lg"
          transition="all 0.3s ease-in-out"
          _hover={{ shadow: "2xl" }}
        >
          <VStack spacing={5}>
            <Input
              placeholder="Name"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              borderColor={focusColor}
            />
            <Input
              placeholder="Price"
              type="number"
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
              borderColor={focusColor}
            />
            <Input
              placeholder="Image URL"
              value={newProduct.image}
              onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
              borderColor={focusColor}
            />
            <Button
              bg={buttonBg} 
              _hover={{ bg: buttonHoverBg }} 
              borderRadius="md"
              w="full"
              size="lg"
              onClick={handleAddProduct}
            >
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;
