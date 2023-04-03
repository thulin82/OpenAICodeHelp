import { useState } from "react";
import { Container, Box } from "@chakra-ui/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TextInput from "./components/TextInput";
import AnswerModal from "./components/AnswerModal";

const App = () => {
    const [answers, setAnswers] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const refactorCode = async (text) => {
        setIsLoading(true);
        setIsOpen(true);

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [
                    {
                        role: "system",
                        content:
                            "You are a helpful assistant that helps with refactoring code.",
                    },
                    {
                        role: "user",
                        content: "Refactor this code\n\n" + text + "",
                    },
                ],
                temperature: 0.5,
                max_tokens: 500,
                frequency_penalty: 0.8,
            }),
        };
        const response = await fetch(
            import.meta.env.VITE_OPENAI_API_URL,
            options
        );
        const json = await response.json();
        const data = json.choices[0].message.content.trim();
        setAnswers(data);
        setIsLoading(false);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <Box bg="blue.600" color="white" height="100vh" padding={130}>
            <Container maxW="3xl" centerContent>
                <Header />
                <TextInput refactorCode={refactorCode} />
                <Footer />
            </Container>
            <AnswerModal
                answers={answers}
                isOpen={isOpen}
                isLoading={isLoading}
                closeModal={closeModal}
            />
        </Box>
    );
};
export default App;
