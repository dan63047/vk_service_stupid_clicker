import React from 'react';
import ReactDOM from 'react-dom';
import { View, Panel, PanelHeaderSimple, Root, Div, CardScroll, Card, Header, Button, Group, Cell } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

const App = () => {
	return (
		<Root activeView="main">
    <View id="main" header={false} activePanel="general">
      <Panel separator={false} id="general">
      <PanelHeaderSimple>Тупорылый кликер</PanelHeaderSimple>
      <Div align="center">
        <p style={{fontSize: 70+'px', margin: 0}}>0</p>
        <small style={{fontSize: 12+'px', margin: 0}}>+0 в сек.</small><br/>
        <Button size="xl">Жми!<br/>+<span>1</span> за клик</Button>
      </Div>
      <Header mode="secondary">Прокачка!</Header>
      <CardScroll>
        <Card size="s">
        <Div align="center">
          <div style={{ width: 180, height: 110 }}>
            <p>Больше очков за клик!</p>
            <p style={{fontSize: 12+'px'}}>Увеличивает количество очков за клик на +1</p>
            <Button>Купить! (цена: <span id='inclickcost'>100</span>)</Button>
          </div>
        </Div>
        </Card>
        <Card size="s">
        <Div align="center">
          <div style={{ width: 180, height: 110 }}>
            <p>Очки каждую секунду!</p>
            <p style={{fontSize: 12+'px'}}>Увеличивает начисляемые очки за секунду на +1</p>
            <Button>Купить! (цена: <span id='inseccost'>50</span>)</Button>
          </div>
        </Div>
        </Card>
      </CardScroll>
      <Group header={<Header mode="secondary">Статистика</Header>}>
        <Cell asideContent={<span>0:00:00.0</span>}>
        Потрачено времени
        </Cell>
        <Cell asideContent={<span>0</span>}>
        Общий счет
        </Cell>
        <Cell asideContent={<span>0</span>}>
        Количество кликов
        </Cell>
        <Cell asideContent={<span>0</span>}>
        Количество покупок
        </Cell>
        <Cell expandable>
        Таблица лидеров
        </Cell>
        <Cell expandable>
        Сбросить прогресс
        </Cell>
      </Group>
      </Panel>
      <Panel id="education">
        wait
      </Panel>
    </View>
    <View id="users-search" activePanel="users-search">
      <Panel id="users-search">
        wait
      </Panel>
    </View>
    <View id="check-user-actions" activePanel="check-user-actions">
      <Panel id="check-user-actions">
        wait
      </Panel>
    </View>
  </Root>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));
