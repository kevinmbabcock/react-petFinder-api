import { combineReducers } from 'redux';
import petListReducer from './petListReducer';
import changePetReducer from './changePetReducer';

const rootReducer = combineReducers({
  petList: petListReducer,
  currentPetId: changePetReducer
});

export default rootReducer;
