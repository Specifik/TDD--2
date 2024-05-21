describe('ElectronsAroundTheCores', function () {
	var dicesArray;
    beforeEach(function () {
        searcher = new ElectronsAroundTheCores();
    });
    it('should return a message if the dicesArray is empty', function () {
        var dicesArray = [];
        expect(searcher.findElectrons(dicesArray)).toEqual('The Array Should not be empty');
      });
})