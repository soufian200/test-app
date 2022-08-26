const Post = ({ post }) => {
    return <div className="bg-white ml-8 mb-8 p-3 shadow rounded-lg w-1/4" >
        <h2 className="font-bold capitalize" >{post.title}</h2>
        <p className="mt-2 text-gray-800">{post.body}</p>
    </div>
}

export default Post;