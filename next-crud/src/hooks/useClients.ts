import { useEffect, useState } from 'react';
import ClientRepository from '../core/ClientRepository';
import ClientCollection from '../backend/db/ClientCollection';
import Client from '../core/Client';
import useTableOrForm from './useTableOrForm';

export default function useClients() {
	const repo: ClientRepository = new ClientCollection();

	const { showForm, showTable, isFormVisible, isTableVisible } =
		useTableOrForm();

	const [client, setClient] = useState<Client>(Client.empty());
	const [clients, setClients] = useState<Client[]>([]);

	useEffect(getAll, []);

	function getAll() {
		repo.getAll().then(clients => {
			setClients(clients);
			showTable();
		});
	}

	function selectedClient(client: Client) {
		setClient(client);
		showForm();
	}
	async function deletedClient(client: Client) {
		await repo.delete(client);
		getAll();
	}
	async function saveClient(client: Client) {
		await repo.save(client);
		getAll();
	}
	function newClient() {
		setClient(Client.empty());
		showForm();
	}

	return {
		client,
		clients,
		newClient,
		saveClient,
		deletedClient,
		selectedClient,
		showForm,
		showTable,
		isTableVisible,
		isFormVisible,
	};
}
