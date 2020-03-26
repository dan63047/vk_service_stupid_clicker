import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';

const App = () => {
	return (
		<View activePanel="main">
		<Panel id="main">
			<PanelHeader>VKUI</PanelHeader>
			<Group header={<Header mode="secondary">Items</Header>}>
			<Cell>Hello</Cell>
			<Cell>World</Cell>
			</Group>
		</Panel>
		</View>
	);
}

export default App;

