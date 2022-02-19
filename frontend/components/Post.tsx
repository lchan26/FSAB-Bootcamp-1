import {FC} from "react";
import {Box, Divider, Text, VStack} from "@chakra-ui/react";
import Comment from "./Comment";

interface Props {
    title: string;
    body: string;
    postedAt: Date;
}

const Post: FC<Props> = ({title, body, postedAt}) => {
    // TODO: Implemnt a Post!
    return <div> 
    <Box maxW = "sm" borderWidth = "2px" borderRadius = "sm" p = {10} color = "tomato" m = {5}>
        <Text fontSize = "5xl">Title: {title}</Text>
        <Text fontSize = "5sm">Body: {body}</Text>
        <Text fontSize = "sm">PostedAt: {postedAt.toString()}</Text>
    </Box>
</div>
}

export default Post;