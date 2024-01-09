import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { postsActions } from "../../store/posts.slice";
import { PostItem } from "../PostItem/PostItem";
import { postsAPI } from "../../services/PostsService";

export function PostList() {
    // const dispatch = useDispatch()
	// const posts = useSelector((state) => state.posts.postList)
	// const currentPage = useSelector((state) => state.posts.currentPage)
	// const canScroll = useSelector((state) => state.posts.canScrolled)
	// const [fetching, setFetching] = useState(true);

    // useEffect(() => {
	// 	const fetchPosts = async () => {
	// 		if (fetching && canScroll) {
	// 			const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=20&_page=${currentPage}`)
	// 			dispatch(postsActions.setPostList(response.data))
	// 			dispatch(postsActions.setNewPage())
	// 			dispatch(postsActions.setTotalCount(response.headers['x-total-count']))
	// 			setFetching(false)
	// 		}
	// 	}

	// 	fetchPosts()
	// }, [fetching])

    // useEffect(() => {
	// 	document.addEventListener('scroll', scrollHandler)
	// 	return () => document.removeEventListener('scroll', scrollHandler)
	// }, []);

    // const scrollHandler = (e) => {
	// 	if (e.target.documentElement.scrollHeight -	(e.target.documentElement.scrollTop + window.innerHeight) < 50) {
	// 		setFetching(true)
	// 	}
	// };

	const {data: posts} = postsAPI.useFetchAllPostsQuery('')

    return (
        <ul className="home-page__list">
			{posts.map((post) => (
				<PostItem post={post} key={post.id}/>
			))}
		</ul>
    )
}