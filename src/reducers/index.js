import { combineReducers } from 'redux';
import CalculatorReducer from './reducer_calculator';

const rootReducer = combineReducers({ amounts: CalculatorReducer });

export default rootReducer;
