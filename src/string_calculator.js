function ElectronsAroundTheCores(dicesArray){}
ElectronsAroundTheCores.prototype.findElectrons = function (dicesArray) {
    if (dicesArray.length > 6) 
    {
        return "The Array Should not have more than 6 values";
    }
    else if(dicesArray.length == 0)
    {
        return "The Array Should not be empty";
    }
    else 
    {
        let counter = 0;
        dicesArray.forEach(value => {
            
        });
        return counter;
    }
}