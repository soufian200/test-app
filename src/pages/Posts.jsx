import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Post } from "../components";
import AuthContext from "../contexts/AuthContext";

function Posts() {
    const { user } = useContext(AuthContext);
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(true)
    const [posts, setPosts] = useState([]);


    // this page only exposed for authenticated users 
    useEffect(() => {
        if (!user?.email) {
            history.replace("/login")
        }
    }, [user])


    useEffect(() => {
        const loadPosts = async () => {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setPosts(response.data);
            setIsLoading(false)

        }
        loadPosts()
    }, []);

    return (
        <div>
            <Container>
                <div className="post-container">
                    <h2 className="head" >Posts {!isLoading && `(${posts.length})`}</h2>
                    <div className="posts-list">

                        {
                            isLoading
                                ? <p className="loading" >Loading...</p>
                                : posts.map((post, index) => <Post key={post.id} post={post} />)
                        }
                    </div>
                </div>

            </Container>
        </div>
    );
}
export default Posts;