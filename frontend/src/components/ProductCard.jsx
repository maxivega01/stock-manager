import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Box, Heading, HStack, IconButton, Image, Text, Button, Input, Stack, Dialog, Portal, Field } from '@chakra-ui/react';
import { useColorModeValue } from './ui/color-mode';
import { useProductStore } from '@/store/product';
import { toaster } from './ui/toaster';
import { useState } from "react";

const ProductCard = ({ product }) => {
    const textColor = useColorModeValue('gray.700', 'gray.200');
    const bg = useColorModeValue('white', 'gray.800');
    const cardShadow = useColorModeValue("md", "xl");
    
    const { deleteProduct, updateProduct } = useProductStore();
    const [updatedProduct, setUpdatedProduct] = useState(product);

    const buttonBg = useColorModeValue('blue.900', 'blue.100')
    const buttonHoverBg = useColorModeValue('blue.800', 'blue.200')
    const focusColor = useColorModeValue('gray.200', 'gray.600');

    const handleDeleteProduct = async (pid) => {
        const { success, message } = await deleteProduct(pid);
        toaster.create({
            title: success ? "Success" : "Error",
            description: message,
            type: success ? "success" : "error",
            duration: 3000,
        });
    };

    const handleUpdateProduct = async (pid, updatedProduct) => {
        const { success, message } = await updateProduct(pid, updatedProduct);
        toaster.create({
            title: success ? "Success" : "Error",
            description: message,
            type: success ? "success" : "error",
            duration: 3000,
        });
    };

    return (
        <Box
            maxW="sm"
            shadow={cardShadow}
            rounded="xl"
            overflow="hidden"
            transition="all 0.3s ease-in-out"
            _hover={{ transform: "translateY(-5px)", shadow: "2xl" }}
            bg={bg}
        >
            <Image src={product.image} alt={product.name} h={56} w="full" objectFit="cover" />
            <Box p={5}>
                <Heading as="h3" size="md" mb={3} color={textColor}>
                    {product.name}
                </Heading>
                <Text fontWeight="semibold" fontSize="xl" color={textColor} mb={4}>
                    ${product.price}
                </Text>
                <HStack spacing={3} >
                    {/* UPDATE PRODUCT DIALOG */}
                    <Dialog.Root>
                        <Dialog.Trigger asChild>

                            <IconButton               
                            bg={buttonBg} 
                            _hover={{ bg: buttonHoverBg }} 
                            p={2}
                            borderRadius="md"
                              ><EditIcon />
                            </IconButton>

                        </Dialog.Trigger>
                        <Portal>
                            <Dialog.Backdrop />
                            <Dialog.Positioner>
                                <Dialog.Content>
                                    <Dialog.Header>
                                        <Dialog.Title>Update Product</Dialog.Title>
                                    </Dialog.Header>
                                    <Dialog.Body pb="4">
                                        <Stack spacing={4}>
                                            <Field.Root>
                                                <Field.Label>Product Name</Field.Label>
                                                <Input 
                                                    name="name" 
                                                    defaultValue={product.name}
                                                    onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
                                                    borderColor={focusColor}

                                                />
                                            </Field.Root>
                                            <Field.Root>
                                                <Field.Label>Product Price</Field.Label>
                                                <Input 
                                                    name="price" 
                                                    type="number" 
                                                    defaultValue={product.price}
                                                    onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
                                                    borderColor={focusColor}

                                                />
                                            </Field.Root>
                                            <Field.Root>
                                                <Field.Label>Image URL</Field.Label>
                                                <Input 
                                                    name="image" 
                                                    defaultValue={product.image}
                                                    onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
                                                    borderColor={focusColor}
                                                />
                                            </Field.Root>
                                        </Stack>
                                    </Dialog.Body>

                                    <Dialog.Footer>
                                        <Dialog.ActionTrigger asChild>
                                            <Button borderRadius="md" variant="outline">Cancel</Button>
                                        </Dialog.ActionTrigger>
                                        <Dialog.ActionTrigger asChild>
                                            <Button bg={buttonBg} borderRadius="md" _hover={{ bg: buttonHoverBg }} onClick={() => handleUpdateProduct(product._id, updatedProduct)}>Save</Button>
                                        </Dialog.ActionTrigger>
                                    </Dialog.Footer>
                                </Dialog.Content>
                            </Dialog.Positioner>
                        </Portal>
                    </Dialog.Root>

                    {/* DELETE BUTTON */}
                    <IconButton                             
                        bg={buttonBg} 
                        _hover={{ bg: buttonHoverBg }} 
                        p={2}
                        borderRadius="md"
                        onClick={() => handleDeleteProduct(product._id)}>
                            <DeleteIcon />
                    </IconButton>

                </HStack>
            </Box>
        </Box>
    );
};

export default ProductCard;
