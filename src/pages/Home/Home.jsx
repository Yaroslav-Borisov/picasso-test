import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postsActions } from "../../store/posts.slice";
import { Link } from "react-router-dom";
import { PostList } from "../../components/PostList/PostList";

export function HomePage() {

    return (
        <div className="home-page page">
			<h1 className="home-page__title">Home</h1>
			<PostList />
		</div>
    )
}