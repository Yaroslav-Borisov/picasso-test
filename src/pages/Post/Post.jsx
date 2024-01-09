import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export function PostPage() {
    const {id} = useParams();
    const [post, setPost] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {
                setPost(response.data)
                setIsLoading(false)
        })

    }, [])

    return (
        <div className="post-page page">
            {isLoading ? 
            <h2>Loading...</h2>
            :
            <>
                <h1 className="post-page__number">Post #{post.id}</h1>
                <div className="post-page__title">"{post.title}"</div>
                <div className="post-page__content">{post.body}</div>
                <Link className='post-page__link' to={`/`}>Back</Link>
            </>
            }

        </div>
    )
}