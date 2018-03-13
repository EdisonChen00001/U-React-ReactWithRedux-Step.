export function selectBook(book){
//selectbook is an ActionCreator , it need s to return an action,
//an object with a type property 
    return {
        type: 'BOOK_SELECTED',
        payload:book
    };
}


export const selectKeys = (key) =>{
    return {
        type: 'KEY_SELECTED',
        payload: key //它本身携带的字符串
    }
}