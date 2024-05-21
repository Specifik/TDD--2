describe('ElectronsAroundTheCores', function () {
	var dicesArray;
    beforeEach(function () {
        searcher = new ElectronsAroundTheCores();
    });
    it('should return a message if the dicesArray is empty', function () {
        var dicesArray = [];
        expect(searcher.findElectrons(dicesArray)).toEqual('The Array Should not be empty');
    });

    it ("should return a message if the dicesArray has more than 6 values", function () {
        var dicesArray = [4, 5, 3, 3, 1, 6, 4, 2];
        expect(searcher.findElectrons(dicesArray)).toEqual('The Array Should not have more than 6 values');     
    })
});