import React, { Component } from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import LabelAndInput from '../common/form/labelAndInput';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { init } from './billingCycleActions';
import ItemList from './itemList';
import Summary from './summary';

class BillingCycleForm extends Component {
	calculateSummary() {
		const sum = (t, v) => t + v;
		return {
			sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
			sumOfDebts: this.props.debts.map(d => +d.value || 0).reduce(sum),
		};
	}

	render() {
		const { handleSubmit, readOnly, credits, debts } = this.props;
		const { sumOfCredits, sumOfDebts } = this.calculateSummary();
		return (
			<form role="form" onSubmit={handleSubmit}>
				<div className="box-body">
					<Field
						readOnly={readOnly}
						name="name"
						component={LabelAndInput}
						label="Nome"
						cols="12 4"
						placeholder="Informe o nome"
					/>
					<Field
						readOnly={readOnly}
						name="month"
						component={LabelAndInput}
						type="number"
						label="Mês"
						cols="12 4"
						placeholder="Informe o mês"
					/>
					<Field
						readOnly={readOnly}
						name="year"
						component={LabelAndInput}
						type="number"
						label="Ano"
						cols="12 4"
						placeholder="Informe o ano"
					/>
					<Summary credit={sumOfCredits} debt={sumOfDebts} />
					<ItemList
						cols="12 6"
						readOnly={readOnly}
						list={credits}
						field="credits"
						legend="Créditos"
					/>
					<ItemList
						cols="12 6"
						readOnly={readOnly}
						list={debts}
						field="debts"
						legend="Débitos"
						showStatus
					/>
				</div>
				<div className="box-footer">
					<button className={`btn btn-${this.props.submitClass}`} type="submit">
						{this.props.submitLabel}
					</button>
					<button
						className="btn btn-default"
						type="button"
						onClick={this.props.init}
					>
						Cancelar
					</button>
				</div>
			</form>
		);
	}
}

const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);
const selector = formValueSelector('billingCycleForm');
const mapStateToProps = state => ({
	credits: selector(state, 'credits'),
	debts: selector(state, 'debts'),
});

BillingCycleForm = reduxForm({
	form: 'billingCycleForm',
	destroyOnUnmount: false,
})(BillingCycleForm);

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm);
