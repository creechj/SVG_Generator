Shape = require('./shape')

class Triangle extends Shape {
    constructor(shape, color) {
        super(shape, color);
    }
    render() {
        return `<${this.type} points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}