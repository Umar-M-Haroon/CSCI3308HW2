describe("rules", function() {
    describe("confirm empty strings", function(){
        it("should be able to check empty", function() {
            expect(isEmpty("")).toEqual(true);
        });
        it("should be able to check non empty", function() {
            expect(isEmpty("BLAH")).toEqual(false);
        })
        it("should be able to handle undefined", function() {
            expect(isEmpty(undefined)).toEqual(true);
        })
    })
})