const evenNumbersInArray = (array) => {
    if(Array.isArray(array) && array.length > 0){
        var tempArr = [];
        for (let i = 0; i < array.length; i++) {
            if(array[i]%2 == 0){
                tempArr.push(array[i]);
            }
        }
        if(tempArr.length == 0){
            return "Passed array does not contain even numbers";
        }
        else{
            return tempArr;
        }
    }
    else{
        return "Passed argument is not an array or empty";
    }
};

module.exports = evenNumbersInArray;

