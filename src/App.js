




import { CardSale } from './screens/CardSaleScreen';
import Sidebar from './components/LeftSideBar';
import { useContext } from 'react';
import { AppContext } from './contexts/CardContext';
import TopBar from './components/AppBar';


function App() {
  const { isOpen } = useContext(AppContext);

  return (
    <div style={{backgroundColor :'#f3f2f2',width :'100%',height :'100%'}} >
    <Sidebar/>
   
    <div style={{marginLeft: isOpen ? '240px' : '40px',
          transition: 'margin-left 0.3s ease-in-out'}}>
        <CardSale/>
    </div>
    </div>
  );
}

export default App;
