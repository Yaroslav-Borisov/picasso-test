import { Link } from "react-router-dom";


export function PostItem({post}) {
    return (
        <li className="home-page__item">
			<div className='home-page__item-number'>Post #{post.id}</div>
			<div className='home-page__item-body'>{post.body}</div>
			<Link className='home-page__item-link' to={`/post/${post.id}`}>Просмотр</Link>
		</li>
    )
}