function useDebounce(callBack, delay=1000){
    let timeId;
    return (...args) =>{
        clearTimeout(timeId);
        timeId = setTimeout(() => {
            callBack(...args)
        }, delay);
    }
}
export default useDebounce;