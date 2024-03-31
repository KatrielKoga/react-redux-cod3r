import React, { useReducer, useState } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import { initialState, reducer } from '../../store';
import { login, numberAdd2 } from '../../store/actions';

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
					<button className="btn" onClick={() => numberAdd2(dispatch)}>
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
					<button className="btn" onClick={() => login(dispatch, 'Maria')}>
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
