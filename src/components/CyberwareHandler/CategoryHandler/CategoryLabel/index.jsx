import './CategoryLabel.css'

export default function CategoryLabel({ children, isRight }) {
  return (
    <div className={`category-label ${isRight ? 'right' : 'left'}`}>
      {children}
    </div>
  )
}
