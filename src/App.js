// import logo from './logo.svg';
import './App.css';
import ExpenseBox from "./component/expenseBox"
import IncomeBox from './component/incomeBox';
import MidBox from './component/midBox';
// import { Grid} from "@material-ui/core";


function App() {




  return (
    <>
   <div className='container'>
    <div className='row'>
      <div className='boxWrapper'>
        <div className='box'>
          <div className='income-box'>
            {/* left */}
            <IncomeBox/>
          </div>
          <div className='mid-box'>
            {/* mid */}
            <MidBox/>
          </div>
          <div className='expense-box'>
            {/* right */}
            <ExpenseBox/>
          </div>
        </div>
      </div>
    </div>
   </div>
    
    </>
  );
}

export default App;
