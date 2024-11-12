import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/Header';

import './index.css'
import Body from './components/Body';
import Country from './components/Country';


const App = () => {
  return (<div >
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />}>
         <Route index element={<Body />} />
        <Route path='/body' element={<Body />} />
        <Route path='/:id' element={<Country/>}/>
        </Route>
        
    </Routes>
    </BrowserRouter>
  </div> );
}
 
export default App;