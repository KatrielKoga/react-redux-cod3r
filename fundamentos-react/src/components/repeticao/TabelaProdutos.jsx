import produtos from '../../data/produtos';
import './TabelaProduto.css';

export default function TabelaProdutos(props) {
	const produtosData = produtos.map((prod, i) => {
		return (
			<tr key={prod.id} className={i % 2 === 0 ? 'par' : 'impar'}>
				<td>{prod.id}</td>
				<td>{prod.nome}</td>
				<td>R$ {prod.preco.toFixed(2)}</td>
			</tr>
		);
	});
	return (
		<div className="tabelaProduto">
			<table>
				<thead>
					<tr>
						<th>Id</th>
						<th>Nome</th>
						<th>Preço</th>
					</tr>
				</thead>
				<tbody>{produtosData}</tbody>
			</table>
		</div>
	);
}
