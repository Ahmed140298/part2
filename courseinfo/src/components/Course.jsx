/* eslint-disable react/prop-types */
const Header = ({name}) => {
    console.log(name)
    return (
      <>
        <h2>{name}</h2>
      </>
    )
  }
  const Part = ({part}) => {
    console.log(part)
    return (
      <>
      <h5>{part.name} {part.exercises}</h5>
      </>
    )
  }
  const Content = ({parts}) => {
    console.log(parts)
    return (
      <>
        {
            parts.map((part) => <Part key={part.id} part={part}/>)
        }
      </>
    )
  }
  const Total = ({parts}) => {
    const total = parts.reduce((sum, parts) => parts.exercises + sum, 0)
    return (
      <>
        <h3>
          Total of {total}
        </h3>
      </>
    )
  }

const Course = ({ course }) => { 
    console.log(course)
    return (
      <>
        <Header name ={course.name}/>
        <Content parts = {course.parts}/>
        <Total parts ={course.parts}/>
      </>
    )
}

export default Course;