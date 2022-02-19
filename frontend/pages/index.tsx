import type {NextPage} from 'next'
import Card from "../components/Card";
import Comment from "../components/Comment"
import {Button, Container, HStack, Spacer, Text, VStack} from "@chakra-ui/react";
import Post from "../components/Post";
import NewPostModal from "../components/NewPostModal";
import {useState, useEffect} from "react";
import axios from "axios";

const Home: NextPage = () => {
    const [open, setOpen] = useState(false);
    const [posts, setPosts] = useState<any[]>([]);

    useEffect(() => {
        axios.get("http://localhost:8080/posts")
            .then(res => setPosts(res.data))
            .catch(err => console.log(err))
    }, [])

    // TODO: Implement this NextPage!
    return (<> 
        <Container maxW = "xl" centerContent>
            {posts?.length === 0 && <Text>No posts ):</Text>}
            {posts?.map(post => <Post key = {post._id} title = {post.title} body = {post.body} 
            postedAt = {new Date(post.createdAt)}/>)}
        </Container>
        <NewPostModal isOpen = {open} onClose = {() => setOpen(false)}/>
    </>
    )
}


export default Home