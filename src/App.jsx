import { useState } from "react";
import { Container, Box } from "@chakra-ui/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TextInput from "./components/TextInput";

const App = () => {
    const [keywords, setKeywords] = useState("");
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
                model: "text-davinci-003",
                prompt: "Refactor this code\n\n" + text + "",
                temperature: 0.5,
                max_tokens: 200,
                frequency_penalty: 0.8,
            }),
        };
        const response = await fetch(
            import.meta.env.VITE_OPENAI_API_URL,
            options
        );
        const json = await response.json();
        const data = json.choices[0].text.trim();
        console.log(data);
        setKeywords(data);
        setIsLoading(false);
    };

    return (
        <Box bg="blue.600" color="white" height="100vh" padding={130}>
            <Container maxW="3xl" centerContent>
                <Header />
                <TextInput refactorCode={refactorCode} />
                <Footer />
            </Container>
        </Box>
    );
};
export default App;
