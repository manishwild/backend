import React,{ useState } from 'react'

const users = [
  { name:'Manish', age: 35},
  { name:'preetish', age: 11},
  { name:'preety', age: 25},
  { name:'serene', age: 5}

]

const UserSearch: React.FC = () => {
  const [name, setName] = useState('')
  const [user, setUser] = useState<{name: string, age: number} | undefined>()
  
  const clickHandler = () => {
    const foundUser = users.find((user) => {
      return user.name === name
    })
    //console.log(foundUser)
    setUser(foundUser)
  }

  return (
    <div>
      User Search
      <input type="text" value={name} onChange={e => setName(e.target.value)}/>
      <button onClick={clickHandler}>Find user</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  )
}

export default UserSearch
