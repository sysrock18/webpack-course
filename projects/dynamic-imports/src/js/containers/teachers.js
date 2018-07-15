import React from 'react'
import Teacher from '../components/teacher'
import '../../css/teachers.scss'

class Teachers extends React.Component {
  render() {
    return (
      <ul className="Teachers">
        {
          this.props.data.teachers.map((teacher, i) => <Teacher key={i} {...teacher} />)
        }
      </ul>
    )
  }
}

export default Teachers
