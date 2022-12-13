import './header.css';

const Header = (props) => {
  const {task, completed, notCompleted} = props

    return(
      <header className='header-todo'>
        <h1>Create your task</h1>
        <h3>All tasks: {task}</h3>
        <h3>Completed: {completed}</h3> 
        <h3>Not Completed: {notCompleted}</h3>
      </header>
    )
  
}

export default Header