import React from 'react'

function Hello () {
  return (
    <div className="hello-container">
      <div>
        <h1>Welcome to Kiwi Roadies</h1>
        <div className="name-form-cont">
          <form className="name-form">
            <input type="name" className="form_-field" placeholder="What's your name?" />
            <button type="button" className="name-button">Lets get going</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Hello
