import React, { Component } from 'react'
import axios from 'axios'
import Idea from './Idea'
import update from 'immutability-helper'
import IdeaForm from './IdeaForm'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ideaActions from '../actions/ideaActions';
import PropTypes from 'prop-types';

class IdeasContainer extends Component {

  componentDidMount() {
    this.props.ideaActions.fetchIdeas()
  }

  addNewIdea = () => {
    this.props.ideaActions.addNewIdea()
  }


  enableEditing = (id) => {
    this.props.ideaActions.enableEditing(id,
      () => { this.props.idea.title.focus() },
  )}

  deleteIdea = (id) => {
    axios.delete(`http://localhost:3001/api/v1/ideas/${id}`)
    .then(response => {
      const ideaIndex = this.state.ideas.findIndex(x => x.id === id)
      const ideas = update(this.state.ideas, { $splice: [[ideaIndex, 1]]})
      this.setState({ideas: ideas})
    })
    .catch(error => console.log(error))
  }


  render() {
    if(!this.props.ideas){
        return (
            <div>
                Loading Stuff...
            </div>
        )
    }else{
    return (
      <div>
        <div>
          <button className="newIdeaButton"
            onClick={this.addNewIdea} >
            New Idea
          </button>
          <span className="notification">
            {this.props.notification}
          </span>
        </div>
        {this.props.ideas.map((idea) => {
          if(this.props.editingIdeaId === idea.id) {
            return(<IdeaForm idea={idea} key={idea.id}  resetNotification={this.resetNotification} titleRef= {input => this.title = input} />)
          } else {
            return (<Idea idea={idea} key={idea.id} onClick={this.enableEditing} onDelete={this.deleteIdea} />)
          }
        })}
      </div>
    );
  }
}
}

IdeasContainer.propTypes = {
    ideaActions: PropTypes.object,
    ideas: PropTypes.array
};

function mapStateToProps(state) {
    return {
        ideas: state.ideas.ideas,
        editingIdeaId: state.ideas.editingIdeaId,
        notification: state.ideas.notification
          };
}

function mapDispatchToProps(dispatch) {
    return {
       ideaActions: bindActionCreators(ideaActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(IdeasContainer);
