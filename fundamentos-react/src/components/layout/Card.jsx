import React from 'react';
import './Card.css';

export default function Card({ titulo, children, color }) {
	const cardStyle = {
		backgroundColor: color || '#f00',
		borderColor: color || '#f00',
	};
	return (
		<div className="Card" style={cardStyle}>
			<div className="Title">{titulo}</div>
			<div className="Content">{children}</div>
		</div>
	);
}
