import Client from '../core/Client';
import { EditIcon, TrashIcon } from './Icons';

interface TableProps {
	clients: Client[];
	selectedClient?: (client: Client) => void;
	deletedClient?: (client: Client) => void;
}

export default function Table(props: TableProps) {
	const rowStyle = 'text-left p-4';

	const showActions = props.deletedClient || props.selectedClient;
	function renderHeader() {
		return (
			<tr>
				<th className={rowStyle}>Código</th>
				<th className={rowStyle}>Nome</th>
				<th className={rowStyle}>Idade</th>
				{showActions ? <th className={'p-4'}>Ações</th> : false}
			</tr>
		);
	}

	function renderActions(client: Client) {
		return (
			<td className="flex justify-center">
				{props.selectedClient ? (
					<button
						onClick={() => props.selectedClient?.(client)}
						className={`flex justify-center text-green-600 rounded-full p-2 m-1 
          hover:bg-purple-50`}
					>
						{EditIcon}
					</button>
				) : (
					false
				)}
				{props.deletedClient ? (
					<button
						onClick={() => props.deletedClient?.(client)}
						className={`flex justify-center text-red-500 rounded-full p-2 m-1 
          hover:bg-purple-50`}
					>
						{TrashIcon}
					</button>
				) : (
					false
				)}
			</td>
		);
	}

	function renderData() {
		return props.clients.map((client, i) => {
			return (
				<tr
					key={client.id}
					className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}
				>
					<td className={rowStyle}>{client.id}</td>
					<td className={rowStyle}>{client.name}</td>
					<td className={rowStyle}>{client.age}</td>
					{showActions ? renderActions(client) : false}
				</tr>
			);
		});
	}
	return (
		<table className="w-full rounded-xl overflow-hidden">
			<thead
				className={`
        text-gray-100
        bg-gradient-to-r from-purple-500 to-purple-800
      `}
			>
				{renderHeader()}
			</thead>
			<tbody>{renderData()}</tbody>
		</table>
	);
}
