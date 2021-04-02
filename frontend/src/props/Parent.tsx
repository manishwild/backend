import { ChildAsFc } from './Child'

const Parent = () => {
  return (
    <ChildAsFc color='red' onClick={() => console.log('clicked')}>
      fdgdfg
    </ChildAsFc>
      
   
  )
}

export default Parent
