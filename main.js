class Vehicle {
  constructor(name,wheel,maxSpeed){
    this.name = name
    this.wheelCount = wheel
    this.maxSpeed = maxSpeed
    this.speed = 0
  }
  accelerate(){
    if(this.speed < this.maxSpeed){
    this.speed += this.maxSpeed/3}
  }
}

class Car extends Vehicle{
  constructor(name,carSpeed){
    super(name,4,carSpeed)
    Car.maxSpeed = carSpeed
  }
  drive(){
    return 'Vroom. '
  }
}

class Ferrari extends Car{
  constructor(){
    super('Ferrari',180)
  }
  drive(){
    return super.drive() + `I'm a Ferrari!`
  }
  accelerate(){
    if(this.speed < this.maxSpeed){
      this.speed += this.maxSpeed/2}
  }
}



module.exports = {
  Vehicle,
  Car,
  Ferrari
}
