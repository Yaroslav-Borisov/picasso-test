import { PostList } from "../../components/PostList/PostList";

export function HomePage() {

    return (
        <div className="home-page page">
			<h1 className="home-page__title">Home</h1>
			<PostList />
		</div>
    )
}