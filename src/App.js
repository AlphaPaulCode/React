import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
function App() {
  return (
    <div className="App">
      <ParentComponent/>
      {/* <EventBind/> */}
      {/* <ClassClick /> */}
      {/* <FunctionClick /> */}
      {/* <Counter/> */}
      {/* <Message/> */}
     {/* <Greet name="Bruce" heroName="Batman">
      <p>
        This is Children Props
      </p>
     </Greet>
     <Greet name="Clark" heroName="Superman">
      <button>Activate</button>
     </Greet> */}
     {/* <Greet name="Diana" heroName="Wonder Woman"/> */}


     {/* <Welcome name="Bruce" heroName="Batman" /> */}
     {/* <Welcome name="Clark" heroName="Superman" />
     <Welcome name="Diana" heroName="WonderWoman" /> */}

     {/* <Hello/> */}

    </div>
  );
}
 
export default App;
