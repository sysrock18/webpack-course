import React from 'react'
import Teacher from '../components/teacher'

class Teachers extends React.Component {
  render() {
    return (
      <ul className="Teachers">
        {
          this.props.data.teachers.map(teacher => <Teacher {...teacher} />)
        }
      </ul>
    )
  }
}

export default Teachers
