const Square = require('./square')

describe('Square', () => {
    describe('render', () => {
        it('should render correct html output', () => {
            const shape = new Square();
            shape.setColor("red");
            expect(shape.render()).toEqual('<rect x="70" y="20" height="160" width="160" fill="red" />');  
        })
    })  
});