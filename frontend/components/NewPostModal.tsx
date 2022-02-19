import {FC, FormEvent, useState} from "react";
import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay
} from "@chakra-ui/modal";
import {Button, Text, Box, Input, Textarea, VStack, useDisclosure, FormControl, FormLabel,
    FormErrorMessage,
    FormHelperText} from "@chakra-ui/react";
import axios from "axios";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

// isOpen, onClose
const NewPostModal: FC<Props> = () => {
    // TODO: Fill out this handleSubmit function!
    function handleSubmit(e: any) {
        e.preventDefault(); // this line must be called 
        axios.post('http://localhost:8080/posts', {
    title: e.target.title.value,
    body: e.target.body.value
    })
      .then((response) => {
        // handle success...
        console.log("Yuh")
        location.reload()
      })
      .catch((error) => {
        // handle error...
        console.log(error)
      })
    }

    // const [title, setTitle] = useState("");
    // const handleChangeTitle = (event: any) => {
    //     setTitle(event.target.value);
    // }

    // const [body, setBody] = useState("");
    // const handleChangeBody = (event: any) => {
    //     setBody(event.target.value);
    // }

    const { isOpen, onOpen, onClose } = useDisclosure()

    return <div> 

        <Button colorScheme = "blue" onClick = {onOpen}>New Post</Button>

        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Yuh</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <form onSubmit={handleSubmit}>
                    <FormControl>
                    <FormLabel htmlFor='newPost'>New Post!</FormLabel>
                    <Input name = "title"/>
                    <Input name = "body"/>
                    <FormHelperText>Add a comment!</FormHelperText>
                    </FormControl>
                    <Button colorScheme='red' type = "submit">Post</Button>
                </form>
            </ModalBody>

            <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                </Button>

            </ModalFooter>
            </ModalContent>
        </Modal>

    </div>
}   

export default NewPostModal;