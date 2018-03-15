import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){
    console.log('Action received :   this is coming from the reduxer ' , action);

    switch(action.type){
        case FETCH_WEATHER:
        //return state.oncat[action.payload.data]; 
        return [action.payload.data, ...state]; //actopk payload.data , ...state/
    }

    return state;

}; 