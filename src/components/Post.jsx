const Post = ({ post }) => {
    return <div className="post-card" >
        <h2 className="post-title" >{post.title}</h2>
        <p className="post-body">{post.body}</p>
    </div>
}

export default Post;