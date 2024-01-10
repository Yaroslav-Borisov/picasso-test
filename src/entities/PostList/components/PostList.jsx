import { useEffect, useState } from "react";
import debounce from 'lodash.debounce';
import { PostItem } from "../../PostItem/components/PostItem";
import { POSTS_PER_FETCH } from "../constants/consts";
import { postsAPI } from "../api/PostsApi";
import { useScrolling } from "../hooks/useScrolling";

export function PostList() {
	const [limit, setLimit] = useState(POSTS_PER_FETCH)
	const {data: posts, error, isLoading} = postsAPI.useFetchAllPostsQuery(limit)

	const scrollHandler = debounce(
		(e) => {
			if (e.target.documentElement.scrollHeight -	(e.target.documentElement.scrollTop + window.innerHeight) < 50) {
				setLimit(prev => prev + POSTS_PER_FETCH)
			}
		}, 800)
	
	useScrolling(scrollHandler)
		
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