interface childProps {
  color: string
  onClick: () => void
}

export const Child = ({ color, onClick }: childProps) => {
  return <div>
    {color}
    <button onClick={onClick}>Click me!</button>
    </div>
  
}

// anoter way defining component
export const ChildAsFc : React.FC<childProps> = ({color, onClick}) => {
  return <div>
    {color}
    <button onClick={onClick}>Click me!</button>
    </div>
  
}

