import Card from './Card';
import './Intervalo.css';
import React from 'react';

export default function Intervalo(props) {
	return (
		<Card title="Intervalo de Números" red>
			<div className="intervalo">
				<span>
					<strong>Mínimo:</strong>
					<input type="number" value={0} readOnly />
				</span>
				<span>
					<strong>Máximo:</strong>
					<input type="number" value={10} readOnly />
				</span>
			</div>
		</Card>
	);
}
