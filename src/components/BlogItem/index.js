// Write your JS code here

import './index.css'

const BlogItem = props => {
  const {eachdetails} = props
  const {date, title, description} = eachdetails
  return (
    <li className="eachlist">
      <div className="textcontainer">
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
      </div>
      <p className="date">{date}</p>
    </li>
  )
}

export default BlogItem
