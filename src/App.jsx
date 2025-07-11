import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from "./components/Home";
import NotFound from "./components/404.jsx"

console.log("Hey")

const App = () => {
  return (
         <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
 	<Route path="*" element={<NotFound />} />
	  </Route>        
      </Routes>
     
  )
}

export default App
