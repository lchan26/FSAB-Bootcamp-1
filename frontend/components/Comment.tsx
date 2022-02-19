import {FC} from "react";
import {Box, Divider, Text} from "@chakra-ui/react";

interface Props {
    content: string;
    postedAt: string;
}

const Comment: FC<Props> = ({content, postedAt}) => {
    // TODO: Implemnt a Comment!
    return <div> 
        <Box maxW = "sm" borderWidth = "2px" borderRadius = "sm" p = {4} color = "gray.50">
            <Text fontSize = "sm">Content: {content}</Text>
            <Text fontSize = "sm">PostedAt: {postedAt}</Text>
        </Box>
    </div>
}

export default Comment;