import { Heading, Image, Text } from "@chakra-ui/react";

const Header = () => {
    return (
        <>
            <Heading color="white" marginBottom="1rem">
                Open AI Code Help
            </Heading>
            <Text fontSize={25} textAlign="center">
                Paste in your code and we'll help you fix it!
            </Text>
        </>
    );
};
export default Header;
