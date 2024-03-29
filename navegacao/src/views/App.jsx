import Content from '../components/layout/Content';
import Menu from '../components/layout/Menu';
import './App.css';

import { BrowserRouter } from 'react-router-dom';

const App = props => (
	<div className="app">
		<BrowserRouter>
			<Menu />
			<Content />
		</BrowserRouter>
	</div>
);

export default App;
