import React from 'react'

const Course = (props) => {
    const { course } = props;
    var sum = (course.parts.reduce((total,currentItem) => 
    sum = total + currentItem.exercises, 0));
    return (
      <div>
        <ul>
        {course.parts.map(content => 
        <li key={content.id}>{content.name} {content.exercises}</li>)}
        <li>Total: { sum }</li>
        </ul>
      </div>
    )
  }

  export default Course