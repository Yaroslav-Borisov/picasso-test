import { PostList } from "../../../entities/PostList/components/PostList";

export function HomePage() {

    return (
        <div className="home-page page">
			<h1 className="home-page__title">Home</h1>
			<PostList />
		</div>
    )
}