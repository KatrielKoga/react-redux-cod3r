import alunos from '../../data/alunos';

export default function ListaAlunos(props) {
	const alunosLI = alunos.map(aluno => {
		return (
			<li key={aluno.id}>
				{aluno.id}) {aluno.nome} ={'>'} {aluno.nota}
			</li>
		);
	});
	return (
		<div>
			<ul style={{ listStyle: 'none' }}>{alunosLI}</ul>
		</div>
	);
}
