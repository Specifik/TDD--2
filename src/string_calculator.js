function ElectronsAroundTheCores(dicesArray){}
ElectronsAroundTheCores.prototype.findElectrons = function (dicesArray) {
    if (dicesArray.length > 6) {
        return "The Array Should not have more than 6 values";
    } else {
        return "The Array Should not be empty";
    }
}