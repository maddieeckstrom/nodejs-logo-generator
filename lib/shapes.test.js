// jest test for shapes go here
const {Circle, Square, Triangle} = require("./shapes");

describe('shape', ()=> {
    it('should return a blue triangle', () => {
        const triangleShape = new Triangle();
        triangleShape.setColor("blue");
        expect(triangleShape.render()).toEqual('<polygon points="0,200 300,200 150,0" fill="blue"/>');
    })
    it('should return a blue square', () => {
        const squareShape = new Square();
        squareShape.setColor("blue");
        expect(squareShape.render()).toEqual('<rect x="50" y="0" width="200" height="200" fill="blue"/>');
    })
    it('should return a blue circle', () => {
        const circleShape = new Circle();
        circleShape.setColor("blue");
        expect(circleShape.render()).toEqual('<circle cx="150" cy="100" r="100" fill="blue"/>');
    })
})