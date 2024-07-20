
import './App.css';
import './components/Bread.tsx';
import Bread from './components/Bread.tsx';
import Fillers from './components/Fillers.tsx';


function App() {
  return (
    <div className="App">
      
        <p>
        <Bread  BreadColor='goldenrod' BreadType='Top Bread'/>
        <Fillers FillerColor='brown' FillerType='Meat'/>
        <Fillers FillerColor='green' FillerType='Lettuce'/>
        <Fillers FillerColor='red' FillerType='Tomato'/>
        <Bread BreadColor='goldenrod' BreadType='Base Bread' />
        </p>
   
    </div>
  );
}

export default App;
