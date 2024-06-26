import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';
import Tabs from '../common/tab/tabs';
import TabsHeader from '../common/tab/tabsHeader';
import TabsContent from '../common/tab/tabsContent';
import TabHeader from '../common/tab/tabHeader';
import TabContent from '../common/tab/tabContent';
import BillingCycleList from './billingCycleList';
import BillingCycleForm from './billingCycleForm';
import { create, init, remove, update } from './billingCycleActions';

class BillingCycle extends Component {
	componentWillMount() {
		this.props.init();
	}

	render() {
		return (
			<div>
				<ContentHeader title="Ciclos de Pagamento" small="Cadastro" />
				<Content>
					<Tabs>
						<TabsHeader>
							<TabHeader label="Listar" icon="bars" target="tabList" />
							<TabHeader label="Incluir" icon="plus" target="tabCreate" />
							<TabHeader label="Alterar" icon="pencil" target="tabUpdate" />
							<TabHeader label="Excluir" icon="trash-o" target="tabDelete" />
						</TabsHeader>
						<TabsContent>
							<TabContent id="tabList">
								<BillingCycleList />
							</TabContent>
							<TabContent id="tabCreate">
								<BillingCycleForm
									onSubmit={this.props.create}
									submitLabel="Incluir"
									submitClass="primary"
								/>
							</TabContent>
							<TabContent id="tabUpdate">
								<BillingCycleForm
									onSubmit={this.props.update}
									submitLabel="Alterar"
									submitClass="info"
								/>
							</TabContent>
							<TabContent id="tabDelete">
								<BillingCycleForm
									onSubmit={this.props.remove}
									readOnly
									submitLabel="Excluir"
									submitClass="danger"
								/>
							</TabContent>
						</TabsContent>
					</Tabs>
				</Content>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch =>
	bindActionCreators({ create, update, remove, init }, dispatch);

export default connect(null, mapDispatchToProps)(BillingCycle);
