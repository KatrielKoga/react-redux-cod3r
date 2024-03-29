import { useParams } from 'react-router-dom';

const Param = props => {
	const { id } = useParams();
	return (
		<div>
			<h1>Param</h1>
			<p>valor: {id}!</p>
		</div>
	);
};

export default Param;
