import { useState } from "react";
import { Textarea, Button, useToast } from "@chakra-ui/react";

const TextInput = ({ refactorCode }) => {
    const [text, setText] = useState("");

    const toast = useToast();

    const submitText = () => {
        if (text === "") {
            toast({
                title: "Error",
                description: "Please enter some code",
                status: "error",
                duration: 5000,
                isClosable: false,
            });
        } else {
            refactorCode(text);
        }
    };

    return (
        <>
            <Textarea
                bg="blue.400"
                color="white"
                placeholder="Paste your code here"
                padding={4}
                marginTop={6}
                height={400}
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <Button
                marginTop={4}
                bg="blue.500"
                color="white"
                _hover={{ bg: "blue.700" }}
                width="100%"
                onClick={submitText}
            >
                Refactor My Code
            </Button>
        </>
    );
};
export default TextInput;
