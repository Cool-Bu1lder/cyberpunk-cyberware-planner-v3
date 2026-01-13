import './CategoryLabel.css'

export default function CategoryLabel({ children, textAlignRight }) {
  return (
    <div className={`category-label ${textAlignRight ? 'right' : 'left'}`}>
      {children}
    </div>
  )
}
