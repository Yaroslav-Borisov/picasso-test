import { Route, Routes } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/Home/Home';
import { PostPage } from './pages/Post/Post';

function App() {

	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/post/:id" element={<PostPage />} />
		</Routes>
	);
}

export default App;
