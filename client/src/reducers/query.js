import { assign } from 'lodash';

const query = (state = {topic: "", startDate:"", endDate:""}, action) => {
  switch (action.type) {
    case 'UPDATE_QUERY_SUCCESS':
      if (action.name in state){
        return assign({}, state, {[action.name]: action.value});
      } else {
        return state;
      }
      break;
    default: 
      return state;
  }
};

export default query;
