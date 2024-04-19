import { Link } from "react-router-dom"

export const SectionTitle = ({ icon, title,category }) => {
  return (
    <Link to={`/category/${category}`} className="sectionTitle">{icon} <span>{title}</span></Link>
  )
}
