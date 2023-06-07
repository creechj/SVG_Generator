Shape = require('./shape')

class Square extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        return `<rect x="70" y="20" height="160" width="160" fill="${this.color}" />`
    }
}

module.exports = Square