import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { PieChart } from '../components/Charts';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('PieChart', () => {
	// Render a checkbox with label in the document
	const chart = shallow(<PieChart />);

	expect(chart.exists()).toBe(true);
});
