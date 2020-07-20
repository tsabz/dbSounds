import React, { Component } from 'react';
import Midi from './components/Midi.js';
import { render } from '@testing-library/react';
import axios from 'axios';
import { EventEmitter } from 'events';



class Edit extends React.Component {
  state = {
    show: false
  }

  toggleShow = () => {
    this.setState({
        show: !this.state.show
    })
  }


  render = () => {
    const { p, updateProducer, updateName, updateGenre, updateNotes, updateLocation, deleteProducer} = this.props

    return (
      <div className = "editClass">
        <button onClick={this.toggleShow}>Edit</button>
        <div className = "editForm">
          {this.state.show ? (
              <form id={p.id} onSubmit={updateProducer}>
                  <input onChange={updateName} type="text" placeholder="name"/>
                  <input onChange={updateGenre} type="text" placeholder="Genre"/>
                  <input onChange={updateNotes} type="text" placeholder="notes"/>
                  <input onChange={updateLocation} type="text" placeholder="location"/>
                  <input type="submit" value="Update Name"/>
                  <button value={p.id} onClick={deleteProducer}>DELETE</button>
              </form>
              ) : (
                ''
              )}
        </div>
      </div>
    )

  }

}

class App extends Component {
  constructor(){ 
    super()
    this.state = {
      producers: [],
      show: false
   }
  }

  toggleShow = () => {
    this.setState({
        show: !this.state.show
    })
  }


  newProducerName = (event) => {
    this.setState({
      newName: event.target.value,
    })
  }

  newProducerGenre = (event) => {
    this.setState({
      newGenre: event.target.value,
    })
  }

  newProducerNotes = (event) => {
    this.setState({
      newNotes: event.target.value,
    })
  }

  newProducerLocation = (event) => {
    this.setState({
      newLocation: event.target.value,
    })
  }



  createProducers = () => { 
    // event.preventDefault();
    axios.post(
      'http://localhost:3000/dbsounds',
      {
        producer_name: this.state.newName,
        producer_genre: this.state.newGenre,
        producer_notes: this.state.newNotes,
        producer_location: this.state.newLocation
      }
      ).then(
      (response) => {
          this.setState({
            producers: response.data
          })
      } 
  )
}

loadProducers = () => { 
axios.get('http://localhost:3000/dbsounds').then(
  (response) => {
    this.setState({
      producers: response.data
    })
  }
)
}

  componentDidMount = () => {
    this.loadProducers()
  }

  changeName = (event) => {
    this.setState({
      updateName: event.target.value,
    })
  }

  changeGenre = (event) => {
    this.setState({
      updateGenre: event.target.value,
    })
  }

  changeNotes = (event) => {
    this.setState({
      updateNotes: event.target.value,
    })
  }

  changeLocation = (event) => {
    this.setState({
      updateLocation: event.target.value,
    })
  }

  updateProducer = (event) => {
    event.preventDefault();
    const id = event.target.getAttribute('id');
    axios.put(
      'http://localhost:3000/dbsounds',
      {
        id: id,
        producer_name: this.state.changeName,
        producer_genre: this.state.changeGenre,
        producer_notes: this.state.changeNotes,
        producer_location: this.state.changeLocation
      }
    ).then((response) => {
      this.setState(
      {
        producers: response.data
      }
      )
    })
  }


  deleteProducer = (event) => {
    event.preventDefault();
    axios.delete('http://localhost:3000/dbsounds/' + event.target.value).then(
        (response) => {
          this.loadProducers()
        }
      )
    }  


  render = () => {
    return ( 
    <div className="container">
      <h1 className="header">dbSounds</h1>
      <Midi />
      <div>
      </div>
      <button className="infobutton" onClick={this.toggleShow}>Insert Info Here</button>
      {this.state.show ? (
      <form onSubmit={this.createProducers}>
        <input onChange={this.newProducerName} type="text" placeholder="Name"/>
        <input onChange={this.newProducerGenre} type="text" placeholder="Genre"/>          
        <input onChange={this.newProducerNotes} type="text" placeholder="Notes"/>
        <input onChange={this.newProducerLocation} type="text" placeholder="Location"/>
          <input className="submit" type="submit" value="Submit"/>
      </form>
                    ) : (
                      ''
                    )}
        <div className="main">
          <ul>
            {
              this.state.producers.map(
                (p) => {
                  return (
                    <li>
                      <h4>Name: {p.producer_name}</h4>
                      <h4>Genre: {p.producer_genre}</h4>
                      <h4>Notes: {p.producer_notes}</h4>
                      <h4>Location: {p.producer_location}</h4>
                      <Edit 
                        updateProducer={this.updateProducer}
                        changeName={this.changeName}
                        changeGenre={this.changeGenre}
                        changeNotes={this.changeNotes}
                        changeLocation={this.changeLocation}
                        deleteProducer={this.deleteProducer}
                        p={p}/>
                    </li>
                  )
                }
              )
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default App;
