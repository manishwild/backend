import React from 'react'

const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e)
}

const onDrag = (e: React.DragEvent<HTMLDivElement>) => {
console.log(e)
}

const EventComponent: React.FC = () => {
  return (
    <div>
      <input  onChange={onChange}/>
      <div draggable onDragStart={onDrag}>Dragable Me!</div>
    </div>
  )
}

export default EventComponent
