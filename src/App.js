import React from 'react'
import Header from './components/Header'
import Course from './components/Course'

const App = (props) => {
  const { course } = props;
    return (
      <div>
        <Header course={course}/>
        <Course course={course}/>
      </div>
    )
  }

export default App