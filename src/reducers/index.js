import { combineReducers } from 'redux';
import CalculatorReducer from './reducer_calculator';

const rootReducer = combineReducers({ calculator: CalculatorReducer });

export default rootReducer;
