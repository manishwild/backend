import React,{ useState,useRef,useEffect } from 'react'

const users = [
  { name:'Manish', age: 35},
  { name:'preetish', age: 11},
  { name:'preety', age: 25},
  { name:'serene', age: 5}

]

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [name, setName] = useState('')
  const [user, setUser] = useState<{name: string, age: number} | undefined>()
  
  useEffect(() => {
    if (!inputRef.current) {
      return
    }
    inputRef.current.focus()
 
  }, [])

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
      <input ref={inputRef} type="text" value={name} onChange={e => setName(e.target.value)}/>
      <button onClick={clickHandler}>Find user</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  )
}

export default UserSearch
