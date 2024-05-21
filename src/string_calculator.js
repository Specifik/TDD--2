function ElectronsAroundTheCores(dicesArray){}
ElectronsAroundTheCores.prototype.findElectrons = function (dicesArray) {
    if(dicesArray.length == 0)
    {
        return "The Array Should not be empty";
    }
    else if (dicesArray.length > 6 || dicesArray.length < 4) 
    {
        return "The Array Should have between 4 and 6 values";
    }
    else 
    {
        let counter = 0;
        dicesArray.forEach(value => {
            if(value == 5){
                counter += 4;
            }
        });
        return counter;
    }
}