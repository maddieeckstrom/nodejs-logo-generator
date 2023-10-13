// overall class of shape to reduce redundancies in other shape classes
class Shape {
    constructor(){
        this.shapeColor=''
    }
    setColor(color){
        this.shapeColor=color;
    }
}

// class to create circle
class Circle extends Shape{
    render(){
        return `<circle cx="150" cy="100" r="100" fill="${this.shapeColor}"/>`
    }
}

// class to create square
class Square extends Shape{
    render(){
        return `<rect x="50" y="0" width="200" height="200" fill="${this.shapeColor}"/>`
    }
}


// class to create triangle
class Triangle extends Shape{
    render(){
        return `<polygon points="0,200 300,200 150,0" fill="${this.shapeColor}"/>`
    }
}

module.exports = {Circle, Square, Triangle}