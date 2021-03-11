import React from 'react';
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer';
import 'bootstrap/dist/css/bootstrap.min.css';

export const wrapRootElement = ({ element }) => {
	return (
		<StateProvider initialState={initialState} reducer={reducer}>
			{element}
		</StateProvider>
	);
};
