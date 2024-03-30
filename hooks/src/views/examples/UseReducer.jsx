import React, { useReducer, useState } from 'react';
import PageTitle from '../../components/layout/PageTitle';

const initialState = {
	number: 0,
	cart: [],
	user: null,
	products: [],
};

function reducer(state, action) {
	switch (action.type) {
		// times 7, divided 25, parse int , add n
		case 'number_add2':
			return { ...state, number: state.number + 2 };
		case 'number_times7':
			return { ...state, number: state.number * 7 };
		case 'number_divided_by25':
			return { ...state, number: state.number / 25 };
		case 'number_parse_int':
			return { ...state, number: parseInt(state.number) };
		case 'number_add_n':
			return {
				...state,
				number: parseInt(state.number) + parseInt(action.payload),
			};
		case 'login':
			return { ...state, user: { name: action.payload } };
		default:
			return state;
	}
}

const UseReducer = props => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const [num, setNum] = useState(0);
	return (
		<div className="UseReducer">
			<PageTitle
				title="Hook UseReducer"
				subtitle="Uma outra forma de ter estado em componentes funcionais!"
			/>
			<div className="center">
				{state.user ? (
					<span className="text">{state.user.name}</span>
				) : (
					<span className="text">Sem usuário</span>
				)}
				<span className="text">{state.number}</span>
				<div>
					<button
						className="btn"
						onClick={() => dispatch({ type: 'number_add2' })}
					>
						+2
					</button>
					<button
						className="btn"
						onClick={() => dispatch({ type: 'number_times7' })}
					>
						x7
					</button>
					<button
						className="btn"
						onClick={() => dispatch({ type: 'number_divided_by25' })}
					>
						/25
					</button>
					<button
						className="btn"
						onClick={() => dispatch({ type: 'number_parse_int' })}
					>
						Int
					</button>
					<button
						className="btn"
						onClick={() => dispatch({ type: 'login', payload: 'Maria' })}
					>
						Login
					</button>
				</div>
				<div>
					<input
						type="number"
						className="input"
						value={num}
						onChange={e => setNum(e.target.value)}
					/>
					<button
						className="btn"
						onClick={() => dispatch({ type: 'number_add_n', payload: num })}
					>
						Adicionar {num}
					</button>
				</div>
			</div>
		</div>
	);
};

export default UseReducer;
