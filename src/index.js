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
        <p style={{fontSize: 70+'px', margin: 0}} id="count">0</p>
        <small style={{fontSize: 12+'px', margin: 0}}>+<span id="insec">0</span> в сек.</small><br/>
        <Button size="xl" onClick={ScoreUpClick}>Жми!<br/>+<span id="inclick">1</span> за клик</Button>
      </Div>
      <Header mode="secondary">Прокачка!</Header>
      <CardScroll>
        <Card size="s">
        <Div align="center">
          <div style={{ width: 180, height: 110 }}>
            <p>Больше очков за клик!</p>
            <p style={{fontSize: 12+'px'}}>Увеличивает количество очков за клик на +1</p>
            <Button onClick={BuyUpClick}>Купить за <span id='inclickcost'>100</span></Button>
          </div>
        </Div>
        </Card>
        <Card size="s">
        <Div align="center">
          <div style={{ width: 180, height: 110 }}>
            <p>Очки каждую секунду!</p>
            <p style={{fontSize: 12+'px'}}>Увеличивает начисляемые очки за секунду на +1</p>
            <Button onClick={BuyUpSec}>Купить за <span id='inseccost'>50</span></Button>
          </div>
        </Div>
        </Card>
      </CardScroll>
      <Group header={<Header mode="secondary">Статистика</Header>}>
        <Cell asideContent={<span id='timefuckup'>0:00:00.0</span>}>
        Потрачено времени
        </Cell>
        <Cell asideContent={<span id="total">0</span>}>
        Общий счет
        </Cell>
        <Cell asideContent={<span id="clicks">0</span>}>
        Количество кликов
        </Cell>
        <Cell asideContent={<span id="shopcount">0</span>}>
        Количество покупок
        </Cell>
        <Cell expandable>
        Таблица лидеров
        </Cell>
        <Cell expandable mode="danger">
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

var hscore = document.getElementById('count'),
    hinsec = document.getElementById('insec'),
    hinclick = document.getElementById('inclick'),
    hinclickcost = document.getElementById('inclickcost'),
    hinseccost = document.getElementById('inseccost'),
    htime = document.getElementById('timefuckup'),
    htotal = document.getElementById('total'),
    hshopcount = document.getElementById('shopcount'),
    hclicks = document.getElementById('clicks'),
    score = 0,
    upClick = 1,
    upSec = 0,
    upClickCost = 100,
    upSecCost = 50,
    stats = Array()
    stats['fuckuptime'] = 0
    stats['total'] = 0
    stats['shopcount'] = 0
    stats['clicks'] = 0;


//TakeFromDatabase();
setInterval(Time, 100);

function Time(){
  var time1_10 = Math.floor((stats['fuckuptime']) % 10),
  timesec = Math.floor((stats['fuckuptime']/10) % 60),
  timemin = Math.floor((stats['fuckuptime']/10/60) % 60),
  timehour = Math.floor(stats['fuckuptime']/10/60/60);

  stats['fuckuptime'] = stats['fuckuptime'] + 1;
  htime.innerHTML = timehour + ':' + ('0'+timemin).slice(-2) + ':' + ('0'+timesec).slice(-2) + '.' + time1_10;

  if (stats['fuckuptime'] % 10 == 0){
    score = score + upSec;
    stats['total'] = stats['total'] + upSec;
    hscore.innerHTML = Intl.NumberFormat('ru-RU').format(Math.trunc(score));
    htotal.innerHTML = Intl.NumberFormat('ru-RU').format(Math.trunc(stats['total']));
  }
  // set_cookie('score', score, 2038, 1, 1);
  // set_cookie('upSec', upSec, 2038, 1, 1);
  // set_cookie('upClick', upClick, 2038, 1, 1);
  // set_cookie('upClickCost', upClickCost, 2038, 1, 1);
  // set_cookie('upSecCost', upSecCost, 2038, 1, 1);
  // set_cookie('fuckuptime', stats['fuckuptime'], 2038, 1, 1);
  // set_cookie('total', stats['total'], 2038, 1, 1);
  // set_cookie('shopcount', stats['shopcount'], 2038, 1, 1);
  // set_cookie('clicks', stats['clicks'], 2038, 1, 1);
}

function ScoreUpClick(){
  score = score + upClick;
  stats['total'] = stats['total'] + upClick;
  stats['clicks'] = stats['clicks'] + 1;
  hscore.innerHTML = Intl.NumberFormat('ru-RU').format(Math.trunc(score));
  hclicks.innerHTML = Intl.NumberFormat('ru-RU').format(Math.trunc(stats['clicks']));
  htotal.innerHTML = Intl.NumberFormat('ru-RU').format(Math.trunc(stats['total']));
}
function BuyUpClick(){
  if(score >= upClickCost){
  score = score - upClickCost;
  upClick = upClick + 1;
  upClickCost = upClickCost + 20;
  hscore.innerHTML = Intl.NumberFormat('ru-RU').format(Math.trunc(score));
  hinclick.innerHTML = Intl.NumberFormat('ru-RU').format(Math.trunc(upClick));
  hinclickcost.innerHTML = Intl.NumberFormat('ru-RU').format(Math.trunc(upClickCost));
  stats['shopcount'] = stats['shopcount'] + 1;
  hshopcount.innerHTML = Intl.NumberFormat('ru-RU').format(Math.trunc(stats['shopcount']));
  }
}
function BuyUpSec(){
  if(score >= upSecCost){
  score = score - upSecCost;
  upSec = upSec + 1;
  upSecCost = upSecCost + 40;
  hscore.innerHTML = Intl.NumberFormat('ru-RU').format(Math.trunc(score));
  hinsec.innerHTML = Intl.NumberFormat('ru-RU').format(Math.trunc(upSec));
  hinseccost.innerHTML = Intl.NumberFormat('ru-RU').format(Math.trunc(upSecCost));
  stats['shopcount'] = stats['shopcount'] + 1;
  hshopcount.innerHTML = Intl.NumberFormat('ru-RU').format(Math.trunc(stats['shopcount']));
  }
}
function UpSec(){
  score = score + upSec;
  stats['total'] = stats['total'] + upSec;
  hscore.innerHTML = Intl.NumberFormat('ru-RU').format(Math.trunc(score));
  htotal.innerHTML = Intl.NumberFormat('ru-RU').format(Math.trunc(stats['total']));
}