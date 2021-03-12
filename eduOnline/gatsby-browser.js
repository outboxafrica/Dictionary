import React from 'react';
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer';
import 'bootstrap/dist/css/bootstrap.min.css';
// import fetch from 'whatwg-fetch' // require('whatwg-fetch') // if it's gatsby v2 - https://gatsby.app/no-mixed-modules

import fetch from 'node-fetch';

export const onClientEntry = () => {
	// Don't need to do anything here, but if you don't
	// export something, the import won't work.
}

export const wrapRootElement = ({ element }) => {
	return (
		<StateProvider initialState={initialState} reducer={reducer}>
			{element}
		</StateProvider>
	);
};
