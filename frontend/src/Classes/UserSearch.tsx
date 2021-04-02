import { Component } from 'react'

interface User{
  name: string,
  age: number
}
// same code clean version
interface userSearchProps {
  // users: { 
  //   name:string
  //   age: number
  //  }[]
  users: User[] 
}

interface userSearchState {
  name: string
  // user: { name: string, age: number } | undefined
  user: User | undefined
}

class UserSearch extends Component<userSearchProps>  {
  state: userSearchState = {
    name: '',
    user: undefined

  }
  
 clickHandler = () => {
  const foundUser = this.props.users.find((user) => {
    return user.name === this.state.name
  })
 
  this.setState({user:foundUser})
 }
  render() {
    const { name, user } = this.state
    return (
      <div>
        User Search
        {/*we can write this.state or name or destucture it defore like above line const { name, user } = this.state */}
        <input  value={name} onChange={e => this.setState({ name: e.target.value })}/>
        <button onClick={this.clickHandler}>Find user</button>
        <div>
          {user && user.name}
          {user && user.age}
        </div>
      </div>
    )
  }


}

export default UserSearch
//18