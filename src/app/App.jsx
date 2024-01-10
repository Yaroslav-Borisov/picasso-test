import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import { HomePage } from '../pages/Home/components/Home';
import { PostPage } from '../pages/Post/components/Post';
import { setupStore } from './store/store';
import { Provider } from 'react-redux';

const store = setupStore()

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/post/:id" element={<PostPage />} />
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
