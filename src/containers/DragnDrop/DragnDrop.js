import React, {Component} from 'react'
import Task from '../../components/Task'
import './DragnDrop.css'

var jobTask = {
  planned: [{name: '#name1', info: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'}, {name: 'create repository', info: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'}],
  indev: [{name: '#found capital investor', info: 'Lorem ipsum dolor sit amet.'}],
  qa: [{name: '#create server', info: 'Lorem ipsum dolor sit amet'}],
  production: []
};

class DragnDrop extends Component {
  state = {
    tasks: jobTask
  }

  onDragStart(event, taskName) {
    let category = event.target.closest('li').getAttribute('data-title');
    let taskObj = this.state.tasks[category].find(item => item.name === taskName);

    event.dataTransfer.setData("taskName", taskName);
    event.dataTransfer.setData("taskCategory", category);
    event.dataTransfer.setData("taskObj", JSON.stringify(taskObj));
  }


  onDragOver(event) {
    event.preventDefault();
  }

  onDragEnter(event) {
    event.preventDefault();
    let thisElem = event.target.closest('li');
    thisElem.classList.add('hovered');
  }

  onDragLeave(event) {
    let thisElem = event.target.closest('li');
    thisElem.classList.remove('hovered');
  }

  onDrop(event, name) {
    let taskName = event.dataTransfer.getData('taskName');
    let taskCategory = event.dataTransfer.getData('taskCategory');
    let taskObj = JSON.parse(event.dataTransfer.getData('taskObj'));
    let thisElem = event.target.closest('li');

    thisElem.classList.remove('hovered');

    let tasks = {...this.state.tasks};
    tasks[taskCategory] = tasks[taskCategory].filter(item => item.name !== taskName);
    tasks[name].push(taskObj);
    this.setState({tasks});
  }


  render() {
    var tasks = {...this.state.tasks};

    Object.keys(tasks).forEach((item) => {
      tasks[item] = tasks[item].map( (item, index) => {
        return (
          <Task
            key={index}
            name={item.name}
            info={item.info}
            draggable
            onDragStart={this.onDragStart.bind(this)}
          />
        )
      });
    })

    console.log(this.state.tasks);

    return (
      <div className="hero">
        <h2>Drag Drop</h2>
        <div className="wrapper">
          <ul className="list">
            <li className="list__caption">Planned</li>
            <li className="list__caption">In dev</li>
            <li className="list__caption">QA</li>
            <li className="list__caption">Production</li>

            <li className="list__cell js-cell" id="planned"
              onDragOver={(event)=>this.onDragOver(event)}
              onDragEnter={(event)=>this.onDragEnter(event)}
              onDragLeave={(event)=>this.onDragLeave(event)}
              onDrop={(event)=>{this.onDrop(event, "planned")}}
              data-title="planned"
            >
              {tasks['planned']}
            </li>
            <li className="list__cell js-cell" id="indev"
              onDragOver={(event)=>this.onDragOver(event)}
              onDragEnter={(event)=>this.onDragEnter(event)}
              onDragLeave={(event)=>this.onDragLeave(event)}
              onDrop={(event)=>{this.onDrop(event, "indev")}}
              data-title="indev"
            >
              {tasks['indev']}
            </li>
            <li className="list__cell js-cell" id="qa"
              onDragOver={(event)=>this.onDragOver(event)}
              onDragEnter={(event)=>this.onDragEnter(event)}
              onDragLeave={(event)=>this.onDragLeave(event)}
              onDrop={(event)=>{this.onDrop(event, "qa")}}
              data-title="qa"
            >
              {tasks['qa']}
            </li>
            <li className="list__cell js-cell" id="production"
              onDragOver={(event)=>this.onDragOver(event)}
              onDragEnter={(event)=>this.onDragEnter(event)}
              onDragLeave={(event)=>this.onDragLeave(event)}
              onDrop={(event)=>{this.onDrop(event, "production")}}
              data-title="production"
            >
              {tasks['production']}
            </li>
          </ul>
      </div>
    </div>
    )
  }
}


export default DragnDrop
