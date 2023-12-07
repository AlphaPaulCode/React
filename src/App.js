import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
function App() {
  return (
    <div className="App">
      <Counter/>
      {/* <Message/> */}
     {/* <Greet name="Bruce" heroName="Batman">
      <p>
        This is Children Props
      </p>
     </Greet>
     <Greet name="Clark" heroName="Superman">
      <button>Activate</button>
     </Greet>
     <Greet name="Diana" heroName="WonderWoman"/>


     <Welcome name="Bruce" heroName="Batman" />
     <Welcome name="Clark" heroName="Superman" />
     <Welcome name="Diana" heroName="WonderWoman" /> */}
     {/* <Hello/> */}
    </div>
  );
}
 
export default App;
