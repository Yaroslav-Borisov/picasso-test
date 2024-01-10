import { PostItem } from "../PostItem/PostItem";
import { useEffect, useState } from "react";
import { postsAPI } from "../../services/PostsService";
import debounce from 'lodash.debounce';

export function PostList() {
	const [limit, setLimit] = useState(20)
	const {data: posts, error, isLoading} = postsAPI.useFetchAllPostsQuery(limit)

	useEffect(() => {
		document.addEventListener('scroll', scrollHandler)
		return () => document.removeEventListener('scroll', scrollHandler)
	}, []);

	const scrollHandler = debounce(
		(e) => {
			if (e.target.documentElement.scrollHeight -	(e.target.documentElement.scrollTop + window.innerHeight) < 50) {
				console.log('пора делать запрос')
				setLimit(prev => prev + 20)
			}
	}, 800)

    return (
		
        <ul className="home-page__list">
			{isLoading && <h2>Loading...</h2>}
			{error && <h2>Failed to load posts...</h2>}
			{posts && posts.map((post) => (
				<PostItem post={post} key={post.id}/>
			))}
		</ul>
    )
}