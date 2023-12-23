import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './componants/comp/Navbar';
import BodyCenter from './componants/comp/BodyCenter';



import './componants/style/Reset.css'
import './componants/style/Media(1100px).css'
import './componants/style/Media(800px) copy.css'
import './componants/style/Media(550px) copy 2.css'
import Owl from './componants/comp/Owl';
// import Owl from './componants/comp/Owl';

function App() {
  return (

    <div className="App">
    <Navbarr></Navbarr>
    <BodyCenter></BodyCenter>
    <Owl></Owl>
    </div>

  );
}

export default App;
