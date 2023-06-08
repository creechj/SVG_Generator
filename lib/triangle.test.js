const Triangle = require('./triangle')

describe('Triangle', () => {
    describe('render', () => {
        it('should render correct html output', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 275, 182 25, 182" fill="blue" />');  
        })
    })  
});