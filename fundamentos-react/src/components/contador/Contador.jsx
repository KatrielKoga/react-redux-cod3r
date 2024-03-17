import { Component } from 'react';
import './Contador.css';
import ContadorDisplay from './Display';
import ContadorBotoes from './Botoes';
import ContadorPassoForm from './PassoForm';
export default class Contador extends Component {
	state = {
		numero: this.props.valorInicial || 0,
		passo: this.props.passoInicial || 5,
	};

	inc = () => {
		this.setState({
			numero: this.state.numero + this.state.passo,
		});
	};

	dec = () => {
		this.setState({
			numero: this.state.numero - this.state.passo,
		});
	};

	setPasso = novoPasso => {
		this.setState({
			passo: novoPasso,
		});
	};

	render() {
		return (
			<div className="contador">
				<h2>Contador</h2>
				<ContadorDisplay numero={this.state.numero} />
				<ContadorPassoForm passo={this.state.passo} setPasso={this.setPasso} />
				<ContadorBotoes setInc={this.inc} setDec={this.dec} />
			</div>
		);
	}
}
