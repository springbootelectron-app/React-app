import React, {Component} from 'react';

import './static/css/index.css';

import NavBar from './components/navbar.js';

class App extends Component{

  state = {
    navbar : {
      dropdownActive: "hidden",
      pageSelected: [
        {id: 1, className:"pageSelected"},
        {id: 2, className:""},
        {id: 3, className:""},
        {id: 4, className:""}
      ],
      userMenuActive: "hidden"
    }
  }


  handlePhoneBurgerClick = () =>{
    const navbar = this.state.navbar;
    const pageSelected = this.state.navbar.pageSelected
    if (navbar.dropdownActive === "hidden"){
      pageSelected[0].className = "pageSelected"
      navbar.dropdownActive = "visibleDropdown"
    }
    else{
      pageSelected.map(p=>
        p.className = ""
      )
      navbar.dropdownActive = "hidden"
    }
    this.setState(pageSelected)
    this.setState(navbar)
  }

  handleSelectPhonePage = pageSelected => {
    const pageS = this.state.navbar.pageSelected.map(p=>
      p.id === pageSelected ? p.className = "pageSelected" : p.className = ""
    )
    this.setState(pageS)
  }

  handleUserClick = () => {
    const navbar = this.state.navbar
    if(navbar.userMenuActive === "hidden"){
      navbar.userMenuActive = "visibleDropdown"
    }
    else{
      navbar.userMenuActive = "hidden"
    }
    this.setState(navbar)
  }

  handlePageClick = pageId => {
    const pageS = this.state.navbar.pageSelected.map(p=>{
      p.id === pageId ? p.className = "pageSelected" : p.className = ""
    })
    this.setState(pageS)

  }

  render() {
    return (
      <React.Fragment>
        <NavBar
        dropdownActive={this.state.navbar.dropdownActive}
        onPhoneBurgerClick={this.handlePhoneBurgerClick}
        onSelectPhonePage={this.handleSelectPhonePage}
        pageSelected={this.state.navbar.pageSelected}
        onUserClick={this.handleUserClick}
        userMenuActive={this.state.navbar.userMenuActive}
        onPageClick={this.handlePageClick}/>
      </React.Fragment>
    )
  }
}

export default App;
