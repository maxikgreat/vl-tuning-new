import {VFC} from 'react';

export const Loader: VFC = () => (
	<div className="flex items-center justify-center">
		<div className="lds-roller">
			<div/>
			<div/>
			<div/>
			<div/>
			<div/>
			<div/>
			<div/>
			<div/>
		</div>
	</div>
);
