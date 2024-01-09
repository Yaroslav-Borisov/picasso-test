import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postsActions } from "../../store/posts.slice";
import { Link } from "react-router-dom";

export function HomePage() {
    const dispatch = useDispatch()
	const posts = useSelector((state) => state.posts.postList)
	const currentPage = useSelector((state) => state.posts.currentPage)
	const totalCount = useSelector((state) => state.posts.totalCount)

	// console.log(posts.length, totalCount)

	const [fetching, setFetching] = useState(true);

    useEffect(() => {
		if (fetching) {
			axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=20&_page=${currentPage}`)
				.then((response) => {
					dispatch(postsActions.setPostList(response.data))
					dispatch(postsActions.setNewPage())
					dispatch(postsActions.setTotalCount(response.headers['x-total-count']))
				})
				.finally(() => setFetching(false))
		}
	}, [fetching])

    useEffect(() => {
		document.addEventListener('scroll', scrollHandler)
		return () => document.removeEventListener('scroll', scrollHandler)
	}, []);

    const scrollHandler = (e) => {
		console.log(posts.length, totalCount)

		if (e.target.documentElement.scrollHeight -	(e.target.documentElement.scrollTop + window.innerHeight) < 50
		// && posts.length < totalCount
		) {
			setFetching(true)
		}
	};

    return (
        <div className="home-page">
			<h1 className="home-page__title">Главная</h1>
			<ul className="home-page__list">
				{posts.map((post, index) => (
					<li className="home-page__item" key={post.id}>
						<div className='home-page__item-number'>{post.id}</div>
						<div className='home-page__item-title'>{post.title}</div>
						<div className='home-page__item-body'>{post.body}</div>
						<Link className='home-page__item-button' to={`/post/${post.id}`}>Просмотр</Link>
					</li>
				))}
			</ul>
		</div>
    )
}