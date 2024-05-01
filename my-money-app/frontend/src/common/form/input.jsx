import React from 'react';

export default props => (
	<input
		type={props.type}
		{...props.input}
		placeholder={props.placeholder}
		readOnly={props.readOnly}
		className="form-control"
	/>
);
