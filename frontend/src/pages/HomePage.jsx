import ProductCard from '@/components/ProductCard';
import { useColorMode } from '@/components/ui/color-mode';
import { useProductStore } from '@/store/product';
import { Container, Link, SimpleGrid, Text, VStack, Button } from '@chakra-ui/react';
import React, { useEffect } from 'react';

const HomePage = () => {
  const { colorMode } = useColorMode();
  

  const { fetchProducts, products } = useProductStore();
  const textColor = colorMode === "light" ? "blue.900" : "blue.100";
  const buttonBg = colorMode === "light" ? "blue.900" : "blue.100";
  const buttonHoverBg = colorMode === "light" ? "blue.800" : "blue.200";



  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={10} align="center">
        {/* Modern Title */}
        <Text fontSize={{ base: '20px', md: '28px' }} fontWeight="bold" color={textColor} letterSpacing="wide">
          Explore Our Products
        </Text>

        {/* Product Grid */}
        {products.length > 0 ? (
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }}  columnGap={6} rowGap={6} w="full">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </SimpleGrid>
        ) : 
        (
          // Empty State
        <VStack 
          spacing={6} 
          textAlign="center" 
          align="center" 
          justify="center" 
          height="50vh" // Adjust this if needed
        >
          <Text fontSize="lg" color={colorMode}>No products found.</Text>
          <Button as={Link} href="/create" 
            bg={buttonBg} 
            _hover={{ bg: buttonHoverBg }} 
            p={2}
            borderRadius="md"
          >
            Create a Product
          </Button>
        </VStack>



        )}
      </VStack>
    </Container>
  );
};

export default HomePage;
