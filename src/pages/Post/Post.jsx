import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export function PostPage() {
    const {id} = useParams();
    const [post, setPost] = useState('')

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {
                setPost(response.data)
            })

    }, [])

    return (
        <div>
            <h1 className="home-page__title">Пост #{post.id}</h1>
            <div>{post.title}</div>
			<Link className='home-page__item-button' to={`/`}>назад</Link>

        </div>
    )
}