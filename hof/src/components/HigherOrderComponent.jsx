import React from 'react';

class HigherOrderComponent extends React.Component {
  constructor(props) {
    super(props);

    // Define the initial state
    this.state = {
        userData: [
            { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
            { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
            { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
            { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
            { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}
        ]
    };
  }

  renderItems = () => {
    const data = this.state.userData;
    const mapRows = data.map((item) => (
        <React.Fragment key={item.id}>
            <li className="list-elements">
                {/* Passing unique value to 'key' prop, eases the process for virtual DOM to remove the specific element and update HTML tree  */}
                <span>Id: {item.id}</span>
                <span>Name : {item.name}</span>
                <span>User Type: {item.user_type}</span>
           </li>
        </React.Fragment>
    ));
    return mapRows;
  };

  renderItemsByUserType = (userType) => {
    const data = this.state.userData;
    const filteredData = data.filter(item => item.user_type === userType);
    const mapRows = filteredData.map((item) => (
        <React.Fragment key={item.id}>
            <li className="list-elements">
                <span>Id: {item.id}</span>
                <span>Name : {item.name}</span>
                <span>User Type: {item.user_type}</span>
           </li>
        </React.Fragment>
    ));
    return mapRows;
  };

  renderItemsStartingWithJ = () => {
    const data = this.state.userData;
    const filteredData = data.filter(item => item.name.startsWith('J'));
    const mapRows = filteredData.map((item) => (
        <React.Fragment key={item.id}>
            <li className="list-elements">
                <span>Id: {item.id}</span>
                <span>Name : {item.name}</span>
                <span>User Type: {item.user_type}</span>
           </li>
        </React.Fragment>
    ));
    return mapRows;
  };

  renderItemsByAge = () => {
    const data = this.state.userData;
    const filteredData = data.filter(item => item.age > 28 && item.age <= 50);
    const mapRows = filteredData.map((item) => (
        <React.Fragment key={item.id}>
            <li className="list-elements">
                <span>Id: {item.id}</span>
                <span>Name : {item.name}</span>
                <span>User Type: {item.user_type}</span>
           </li>
        </React.Fragment>
    ));
    return mapRows;
  };

  calculateTotalExperience = () => {
    const data = this.state.userData;
    const designers = data.filter(item => item.user_type === 'Designer');
    const totalExperience = designers.reduce((total, designer) => total + designer.years, 0);
    return totalExperience;
  };

  render() {
    return (
      <React.Fragment>
            <h1>Display all items</h1>
            <div className="display-box">
            <ul>{this.renderItems()} </ul>
            </div>
            <h1>Display based on user type</h1>
            <div className="display-box">
            <ul>{this.renderItemsByUserType('Developer')} </ul>
            </div>
            <h1>Filter all data starting with J</h1>
            <div className="display-box">
            <ul>{this.renderItemsStartingWithJ()} </ul>
            </div>
            <h1>Filter all data based age greater than 28 and age less than or equal to 50</h1>
            <div className="display-box">
            <ul>{this.renderItemsByAge()} </ul>
            </div>
            <h1>Find the total years of the designers</h1>
            <div className="display-box">
            <p>{this.calculateTotalExperience()} years</p>
            </div>
      </React.Fragment>
    );
  }
}

export default HigherOrderComponent;