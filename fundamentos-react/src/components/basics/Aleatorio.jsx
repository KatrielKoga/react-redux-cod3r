import React from 'react';

export default function Aleatorio({ max = 10, min = 1 }) {
	const aleatorio = Math.floor(max * Math.random() + min);

	return (
		<>
			<h2>O número aleatorio gerado foi:</h2>
			<p>
				<strong>{aleatorio}</strong>
			</p>
		</>
	);
}
