import Button from '../components/Button';
import Form from '../components/Form';
import Layout from '../components/Layout';
import Table from '../components/Table';
import useClients from '../hooks/useClients';

export default function Home() {
	const {
		deletedClient,
		newClient,
		saveClient,
		selectedClient,
		client,
		clients,
		isTableVisible,
		showTable,
	} = useClients();

	return (
		<div
			className={`flex h-screen justify-center items-center 
      bg-gradient-to-r from-blue-500 to-purple-500 text-white`}
		>
			<Layout title="Cadastro Simples">
				{isTableVisible ? (
					<>
						<div className="flex justify-end">
							<Button className="mb-4" color="green" onClick={newClient}>
								Novo Cliente
							</Button>
						</div>
						<Table
							clients={clients}
							selectedClient={selectedClient}
							deletedClient={deletedClient}
						/>
					</>
				) : (
					<Form
						client={client}
						canceled={() => showTable()}
						clientChanged={saveClient}
					/>
				)}
			</Layout>
		</div>
	);
}
