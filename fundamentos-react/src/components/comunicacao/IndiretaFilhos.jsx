export default function IndiretaFilho(props) {
	const gerarIdade = () => parseInt(Math.random() * 20) + 50;
	const gerarNerd = () => Math.random() > 0.5;

	return (
		<div>
			<div>Filho</div>
			<button
				onClick={e => props.quandoClicar('João', gerarIdade(), gerarNerd())}
			>
				Fornecer informações
			</button>
		</div>
	);
}
