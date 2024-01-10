import { useParams, Link } from "react-router-dom";
import { postAPI } from "../api/PostApi";

export function PostPage() {
    const {id} = useParams();
    const {data: post, error, isLoading} = postAPI.useFetchOnePostQuery(id)

    return (
        <div className="post-page page">
            {isLoading && <h2>Loading...</h2> }
			{error && <h2>Failed to load posts...</h2>}
            {post &&
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