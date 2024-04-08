import Card from './Card';
import React from 'react';

export default function Soma(props) {
	return (
		<Card title="Soma dos Números" blue>
			<div>
				<span>
					<span>Resultado: </span>
					<strong>10</strong>
				</span>
			</div>
		</Card>
	);
}
