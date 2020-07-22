import React from 'react'
import { connect } from 'react-redux'
import Greeting from './Greeting'
import RoadieForm from './RoadieForm'
import RoadieMap from './RoadieMap'

class InfoReq extends React.Component {
  state = { isLoading: true }

  componentDidMount () {
    this.setState({
      isLoading: false
    })
  }

  render () {
    return (
      <>
        { this.props.name &&
        <div className="inforeq-container">
          <div className="greet-form-container">
            <div className="greet-content">
              <Greeting />
              <RoadieForm />
            </div>
          </div>
          <RoadieMap />
        </div>
        }
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    name: state.name
  }
}

export default connect(mapStateToProps)(InfoReq)
