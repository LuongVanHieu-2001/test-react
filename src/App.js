import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import React from 'react';
import MyComponent from './components/MyConponent';

class App extends React.Component {
  

  render(){
    return (
      <div>
        Luong Van Hieu 
        
        <MyComponent></MyComponent>
      </div>
    );
  }
}




// const App = () => {
//   const count = useSelector((state) => state.counter.count);
//   const dispatch = useDispatch();

//   return (
   

//         <div className="App">
//           <header className="App-header">
//             <img src={logo} className="App-logo" alt="logo" />
//             <p>
//              Luong Van Hieu
//             </p>
//             <div>Count = {count}</div>
//             <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//             <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//          </header>
//         </div>
//   );
// };
export default App;
