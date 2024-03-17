import { useState } from 'react';
import IndiretaFilho from './IndiretaFilhos';

export default function IndiretaPai(props) {
	const [nome, setNome] = useState('?');
	const [idade, setIdade] = useState(0);
	const [nerd, setNerd] = useState(false);
	function fornecerInformacoes(nome, idade, nerd) {
		setNome(nome);
		setIdade(idade);
		setNerd(nerd);
	}
	return (
		<div>
			<div>
				Pai: <span>{nome} </span>
				<span>
					<strong>{idade}</strong>
				</span>{' '}
				<span>{nerd ? 'verdadeiro' : 'falso'}</span>
			</div>
			<IndiretaFilho quandoClicar={fornecerInformacoes} />
		</div>
	);
}
