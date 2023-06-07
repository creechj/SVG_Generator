const Circle = require('./circle')

describe('Circle', () => {
    describe('render', () => {
        it('should render correct html output', () => {
            const shape = new Circle();
            shape.setColor("green");
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />');  
        })
    })  
});