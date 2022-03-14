/**
 *    © 2022 Abraham Mitiku
 *    Open Source MERN Chat Application
 * 
 */
// -----------------------------------------------------------------

// setting localStorage data's
export const setLocalStorage = (key, value) =>{
  window.localStorage.setItem(key, JSON.stringify(value));
}
// getting localStorage data's
export const getLocalStorage = (key) =>{
    const value = window.localStorage.getItem(key);
    
    if(value){
        return JSON.parse(value)
    }
}
// remove localStorage data
export const removeLocalStorage = (key)=>{
    let removed = window.localStorage.removeItem(key);
    return removed;
}