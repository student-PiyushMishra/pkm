import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from "./components/Home";
import NotFound from "./components/404.jsx"
import BlogArchive from "./components/Blogs.jsx"
import SpecificBlog from "./components/Blog.jsx"

console.log("Hey")

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs">
              <Route index element={<BlogArchive/>}/>
              <Route path=":uid" element={<SpecificBlog/>}/>
          </Route>
 	        <Route path="*" element={<NotFound />} />
	      </Route>        
      </Routes> 
  )
}

export default App
