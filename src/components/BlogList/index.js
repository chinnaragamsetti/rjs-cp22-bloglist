// Write your JS code her
import BlogItem from './components/BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul className="listcontainer">
      {blogslist.map(each => (
        <BlogItem eachdetails={each} />
      ))}
    </ul>
  )
}

export default BlogList
