import React from 'react';
import './App.css';
import Membre from './components/Membre';


const league = {
  membre1: {
    nom: 'Batman',
    age: 48
  },
  membre2: {
    nom: 'Superman',
    age: 46
  },
  membre3: {
    nom: 'Wonder Woman',
    age: 79
  },
  membre4: {
    nom: 'Catwoman',
    age: 35
  },
  membre5: {
    nom: 'Djoko',
    age: 38
  },
  membre6: {
    nom: 'Red',
    age: 12
  }
}

class App extends React.Component
{

  state = {
    league: league,
    plus: 2,
    isShow: false,
  }

  handleClick = (nb, id) => {
    //modifier un state de type objet
    //copie du state
    const league = {...this.state.league}
    league[id].age += nb
    this.setState({league: league})
  }

  handleChange = (event, id) => {
    const league = {...this.state.league}
    const nom = event.target.value
    league[id].nom = nom
    this.setState({league:league})
  }

  handleAgeChange = (event, id) => {
    const league = {...this.state.league}
    const age = parseInt(event.target.value)
    league[id].age = age
    this.setState({league:league})
  }

  hideName = (id) => {
    const league = {...this.state.league}
    league[id].nom = 'X'
    league[id].age = 0
    this.setState({league})
  }

  handeleShow = ()=>{
    const showValue = this.state.isShow
    this.setState({isShow: !showValue})
  }

  render(){
    const list = Object.keys(this.state.league).map(iteration => {
      return (
        <Membre 
          key= {iteration}
          nom={this.state.league[iteration].nom}
          age={this.state.league[iteration].age}
          handleChange={(event) => this.handleChange(event, iteration)}
          handleAgeChange={(event) => this.handleAgeChange(event, iteration)}
          hideName={() => this.hideName(iteration)}
          plus={this.state.plus}
          vieillir={() => this.handleClick(this.state.plus, iteration)}
        />
      )
    })

    return(
      <>
        <h1>Test</h1>
        <div className="list">
          {list}
        </div>

        <Membre
          nom="test"
          age="22"
        >
        {
          this.state.isShow ? (<strong>Je suis là</strong>) : null
        }
          <button
            onClick={this.handeleShow}
          >
            {
              this.state.isShow ? 'Cacher' : 'Montrer'
            }
          </button>
        </Membre>

      </>
    )
  }
}

export default App;
