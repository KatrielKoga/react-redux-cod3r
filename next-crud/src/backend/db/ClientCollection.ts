import Client from '../../core/Client';
import ClientRepository from '../../core/ClientRepository';
import firebase from '../config';

export default class ClientCollection implements ClientRepository {
	#converter = {
		toFirestore(client: Client) {
			return {
				name: client.name,
				age: client.age,
			};
		},
		fromFirestore(
			snapshot: firebase.firestore.QueryDocumentSnapshot,
			options: firebase.firestore.SnapshotOptions
		) {
			const data = snapshot.data(options);
			return new Client(data.name, data.age, snapshot.id);
		},
	};

	async save(client: Client): Promise<Client | undefined> {
		if (client.id) {
			await this.#collection().doc(client.id).set(client);
			return client;
		} else {
			const docRef = await this.#collection().add(client);
			const doc = await docRef.get();
			return doc.data();
		}
	}

	async delete(client: Client): Promise<void> {
		return this.#collection()
			.doc(client.id as string)
			.delete();
	}

	async getAll(): Promise<Client[]> {
		const query = await this.#collection().get();
		return query.docs.map(doc => doc.data()) ?? [];
	}

	#collection() {
		return firebase
			.firestore()
			.collection('clients')
			.withConverter(this.#converter);
	}
}
