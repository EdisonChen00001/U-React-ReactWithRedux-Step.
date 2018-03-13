export default function(st = null, action){
    switch(action.type){
        case 'KEY_SELECTED':
            return action.payload;
    }
    return st 
}