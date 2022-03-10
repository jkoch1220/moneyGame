export default (obj: any, term: string) => {
    for (let key in obj){
        if (obj[key].indexOf(term) != -1) return true;
    }
    return false;
}