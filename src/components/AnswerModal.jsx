import {
    Code,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    CircularProgress,
} from "@chakra-ui/react";

const AnswerModal = ({ keywords, isOpen, isLoading, closeModal }) => {
    return (
        <>
            <Modal isOpen={isOpen} onClose={closeModal} size="6xl">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Refactored Code</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        {isLoading ? (
                            <CircularProgress
                                isIndeterminate
                                color="blue.300"
                            />
                        ) : (
                            <Code
                                display="block"
                                whiteSpace="pre"
                                overflowX="auto"
                                children={keywords}
                            />
                        )}
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={closeModal}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};
export default AnswerModal;
