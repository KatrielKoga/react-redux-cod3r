import React from 'react';
import '../common/template/dependencies';

import Messages from '../common/msg/messages';
import Footer from '../common/template/footer';
import Header from '../common/template/header';
import Sidebar from '../common/template/sidebar';

export default props => (
	<div className="wrapper">
		<Header />
		<Sidebar />
		<div className="content-wrapper">{props.children}</div>
		<Footer />
		<Messages />
	</div>
);
