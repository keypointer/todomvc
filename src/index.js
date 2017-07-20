// Import React and React-dom.
import React from 'react'
import ReactDOM from 'react-dom'

// Import the components.
import Sidebar from './app/Sidebar.jsx'

// Define the root element.
const root = document.querySelector('body')

// Append the DummyComponent to the root element.
ReactDOM.render(<Sidebar />, document.getElementById("container"))
