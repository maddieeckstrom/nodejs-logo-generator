// overall class of shape to reduce redundancies in other shape classes

class Shape {
    constructor(){
        this.color=''
    }
    setColor(color){
        this.color=(color);
    }
}

// class to create circle
class Circle extends Shape{
    render(){
        return `<circle cx="25" cy="75" width="200px" height="200px" fill="${this.shapeColor}"/>`
    }
}

// class to create square
class Square {
    render(){
        return `<rect x="10" y="10" width="200px" height="200px" fill="${this.shapeColor}"/>`
    }
}


// class to create traingle
class Traingle {
    render(){
        return `<polygon width="100%" height="100%" points="0,200 300,200 150,0" fill="${this.shapeColor}"/>`
    }
}

module.exports = {Circle, Square, Triangle}