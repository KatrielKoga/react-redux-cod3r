import { useState } from 'react';
import './Mega.css';

export default function Mega(props) {
	const [qtde, setQtde] = useState(props.valorInicial || 6);
	const [numeros, setNumeros] = useState('');

	const gerarNumeros = qtde => {
		if (qtde > 60 || qtde < 1) {
			setNumeros('Quantidade de números inválida');
			return;
		}
		const numeros = [];
		for (let i = 0; i < qtde; i++) {
			let aleatorio = Math.floor(Math.random() * 60 + 1);
			while (numeros.includes(aleatorio))
				aleatorio = Math.floor(Math.random() * 60 + 1);
			numeros.push(aleatorio);
		}

		setNumeros(numeros.sort((a, b) => a - b).join(', '));
	};
	return (
		<>
			<div className="mega">
				<label htmlFor="qtdeNumeros">Quantidade de números:</label>
				<input
					type="number"
					id="qtdeNumeros"
					value={qtde}
					onChange={e => setQtde(+e.target.value)}
					max={60}
					min={1}
				/>
			</div>
			<button onClick={() => gerarNumeros(qtde)}>Gerar números</button>
			<div>{numeros}</div>
		</>
	);
}
