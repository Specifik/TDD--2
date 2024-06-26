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
        expect(searcher.findElectrons(dicesArray)).toEqual('The Array Should have between 4 and 6 values');     
    })

    it ("should return a message if the dicesArray has less than 4 values", function () {
        var dicesArray = [1, 2, 3];
        expect(searcher.findElectrons(dicesArray)).toEqual('The Array Should have between 4 and 6 values');     
    })

    it ("should return Zero if the dicesArray has no dices values with electrons", function () {
        var dicesArray = [1, 1, 1, 1, 1];
        expect(searcher.findElectrons(dicesArray)).toEqual(0);     
    })

    it ("should return 4 for this dicesArray", function () {
        var dicesArray = [4, 5, 2, 2];
        expect(searcher.findElectrons(dicesArray)).toEqual(4);     
    })

    it ("should return 4 for this dicesArray", function () {
        var dicesArray = [6, 6, 3, 3, 2];
        expect(searcher.findElectrons(dicesArray)).toEqual(4);     
    })
    it ("should return 14 for this dicesArray", function () {
        var dicesArray = [5, 3, 5, 5];
        expect(searcher.findElectrons(dicesArray)).toEqual(14);     
    })
});