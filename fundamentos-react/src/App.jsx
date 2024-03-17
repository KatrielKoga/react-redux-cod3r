import React from 'react';
import Primeiro from './components/basics/Primiro';
import ComParametro from './components/basics/ComParametro';
import Fragmento from './components/basics/Fragmento';
import Aleatorio from './components/basics/Aleatorio';
import Card from './components/layout/Card';
import './App.css';
import Familia from './components/basics/Familia';
import FamiliaMembro from './components/basics/FamiliaMembro';
import ListaAlunos from './components/repeticao/ListaAlunos';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import Input from './components/formulario/Input';
import Contador from './components/contador/Contador';
import Mega from './components/mega/Mega';

export default function App(props) {
	return (
		<div className="app">
			<h1>Fundamentos React</h1>
			<div className="cards">
				<Card titulo="Mega" color="#6fb5b6">
					<Mega valorInicial={6} />
				</Card>
				<Card titulo="Contador" color="#424242">
					<Contador valorInicial={10} />
				</Card>
				<Card titulo="Componente Controlado" color="#e45f56">
					<Input />
				</Card>
				<Card titulo="Comunicação indireta" color="#8bad39">
					<IndiretaPai />
				</Card>
				<Card titulo="Comunicação direta" color="#59323c">
					<DiretaPai />
				</Card>
				<Card titulo="Renderização condicional" color="#982395">
					<ParOuImpar numero={21} />
					<UsuarioInfo usuario={{ nome: 'Fernando' }} />
					<UsuarioInfo usuario={{ email: 'fernando@email.com' }} />
				</Card>
				<Card titulo="Desafio Repetição" color="#3a9ad9">
					<TabelaProdutos />
				</Card>
				<Card titulo="Repetição" color="#ff4c65">
					<ListaAlunos />
				</Card>
				<Card titulo="Componente com Filhos" color="#00c8f8">
					<Familia sobrenome="Ferreira">
						<FamiliaMembro nome="Pedro" />
						<FamiliaMembro nome="Ana" />
						<FamiliaMembro nome="Gustavo" />
					</Familia>
				</Card>
				<Card titulo="Desafio Aleatório" color="#fa6900">
					<Aleatorio max={10} min={1} />
				</Card>
				<Card titulo="Fragmento" color="#e94c6f">
					<Fragmento />
				</Card>
				<Card titulo="Com parametro" color="#e8b71a">
					<ComParametro titulo="Situacao do aluno" aluno="Pedro" nota={9.3} />
				</Card>
				<Card titulo="Primeiro Componente" color="#588c73">
					<Primeiro />
				</Card>
			</div>
		</div>
	);
}
