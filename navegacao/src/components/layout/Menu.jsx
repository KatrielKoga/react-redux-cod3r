import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = props => (
	<aside className="menu">
		<nav>
			<ul>
				<li>
					<Link to="/">Inicio</Link>
				</li>
				<li>
					<Link to="/about">Sobre</Link>
				</li>
				<li>
					<Link to="/param/123">Param #01</Link>
				</li>
				<li>
					<Link to="/param/legal">Param #02</Link>
				</li>
				<li>
					<Link to="/naoExiste">Não Existe</Link>
				</li>
			</ul>
		</nav>
	</aside>
);

export default Menu;
