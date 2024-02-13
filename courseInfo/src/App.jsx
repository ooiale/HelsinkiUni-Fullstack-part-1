const Header = (props) => {
  return (
    <>
      <h1>
        {props.course}
      </h1>
    </>
  )
}

const Total = (props) => {
  const total = props.exercisesList.reduce((acc, num) => acc + num.exercises, 0)
  return (
  <p>
    Number of exercises {total}
  </p>
  )
}


const Part = (props) => {
  return (
    <>
      <p>
        {props.part} {props.ex}
      </p>
    </>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part = {props.partsList[0].name} ex = {props.partsList[0].exercises} />
      <Part part = {props.partsList[1].name} ex = {props.partsList[1].exercises} />
      <Part part = {props.partsList[2].name} ex = {props.partsList[2].exercises} />
    </div>
  )
}



const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course = {course.name}/>
      <Content 
        partsList = {course.parts}
      />
      <Total exercisesList = {course.parts}/>
    </div>
  )
}

export default App