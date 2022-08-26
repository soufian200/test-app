import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

function Posts() {
    const { user } = useContext(AuthContext);
    const history = useHistory();

    // this page only exposed for authenticated users 
    useEffect(() => {
        if (!user?.email) {
            history.replace("/login")
        }
    }, [user])

    return (
        <div>
            <h2>Posts</h2>
        </div>
    );
}
export default Posts;