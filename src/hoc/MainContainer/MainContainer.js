import React, {Component} from 'react'
import './MainContainer.css'

class MainContainer extends Component {
  render() {
    //достаём параметр из props для более удобного использования
    var {visible} = this.props;

    //вызов функции извне
    firstFunctionForComponent();

    //изменение стиля видимости взависимости от принятого props
    var cls = [];

    if(visible) {
      cls.push('show');
    } else {
      cls.push('hidden');
    }

    return (
      <section className={cls.join(' ')}>
        {this.props.children}
      </section>
    )
  }
}

//Простая функция поиска данных из БД Firebase
function firstFunctionForComponent() {
  fetch('https://weather-app-bf1fd.firebaseio.com/users.json')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log('Error ', err));
}

export default MainContainer
