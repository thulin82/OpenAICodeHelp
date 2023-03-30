import { Heading, Image, Text } from "@chakra-ui/react";

const Header = () => {
    return (
        <>
            <Heading color="white" marginBottom="1rem">
                Open AI Code Refactor
            </Heading>
            <Text fontSize={25} textAlign="center">
                Paste in your code and we'll refactor it for you!
            </Text>
        </>
    );
};
export default Header;
