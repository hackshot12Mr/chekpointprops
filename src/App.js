
import './App.css';
import { Profile } from './Component/Profile';
import fedi from './photo.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  const data  = 
  {
    fullname: "HackShot12Mr",
    Bio: "I'am student in GoMyCode",
    profession: "developper and hacker",
    Image: fedi
    
  }
  return (
    <div className="App">
      <Profile  item={data}/>
      
      
    </div>
  );
}

export default App;
