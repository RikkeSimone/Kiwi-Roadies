import React from 'react'
import { connect } from 'react-redux'

export const Error = (props) => {
  return (
    <>
      { props.errorMessage &&
      <div className='error'>
        <p>error message placeholder</p>
        {props.errorMessage}
      </div>
      }
    </>
  )
}

function mapStateToProps (state) {
  return {
    errorMessage: state.error
  }
}

export default connect(mapStateToProps)(Error)
