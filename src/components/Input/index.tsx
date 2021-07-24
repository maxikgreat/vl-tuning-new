import {useState, VFC} from 'react';

export const Input: VFC = () => {
	const [value, setValue] = useState('');
	return (
		<div>
			<input type="text" value={value} onChange={({target: {value}}) => setValue(value)} />
		</div>
	);
};

