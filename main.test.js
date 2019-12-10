const {
  Vehicle,
  Car,
  Ferrari,
} = require('./main.js')

let car, vehicle, colinsCar

beforeEach(() => {
  vehicle = new Vehicle();
  car = new Car();
  colinsCar = new Ferrari();
})

describe('Vehicle.name', () => {
  it(`is a property with a value`, () => {
    vehicle = new Vehicle('Knight Rider');
    expect(vehicle.name).toBeDefined();
  })

  it(`has the first value passed in to the constructor`, () => {
    vehicle = new Vehicle('Knight Rider');
    expect(vehicle.name).toBe('Knight Rider')
  })
});

describe('Vehicle.wheelCount', () => {
  it(`is a property with a value`, () => {
    vehicle = new Vehicle('Knight Rider', 4);
    expect(vehicle.wheelCount).toBeDefined();
  })

  it(`is set to the second parameter passed to the constructor`, () => {
    vehicle = new Vehicle('Knight Rider', 4);
    expect(vehicle.wheelCount).toBe(4);
  })
})

describe('Vehicle.maxSpeed', () => {
  it(`is set to the third variable passed in`, () => {
    vehicle = new Vehicle('Knight Rider', 4, 130)
    expect(vehicle.maxSpeed).toBe(130);
  })
});

describe('Vehicle.speed', () => {
  it(`starts at 0`, () => {
    expect(vehicle.speed).toBe(0);
  })
});

describe('Vehicle.accelerate', () => {
  it(`increases the speed by a third of maxSpeed`, () => {
    vehicle = new Vehicle('Knight Rider', 4, 120);
    vehicle.accelerate();
    expect(vehicle.speed).toBe(40);
    vehicle.accelerate();
    expect(vehicle.speed).toBe(80);
    vehicle.accelerate();
    expect(vehicle.speed).toBe(120);
  })
  
  it(`doesn't set the speed higher than the maxSpeed`, () => {
    vehicle = new Vehicle('Knight Rider', 4, 120);
    vehicle.accelerate();
    vehicle.accelerate();
    vehicle.accelerate();
    vehicle.accelerate();
    expect(vehicle.speed).toBe(120);
  })
});

describe('Car', () => {
  it(`inherits from Vehicle`, () => {
    expect(car instanceof Vehicle).toBe(true);
  })
});

// NOTE: this should be set using super!
describe('Car.name', () => {
  it(`is a property with a value`, () => {
    car = new Car('Knight Rider');
    expect(car.name).toBeDefined();
  })

  it(`has the first value passed in to the constructor`, () => {
    car = new Car('Knight Rider');
    expect(car.name).toBe('Knight Rider')
  })
});

describe('Car.wheelCount', () => {
// NOTE: this should be set using super and a hardcoded value!
  it(`always has 4 wheels`, () => {
    car = new Car('Knight Rider');
    expect(car.wheelCount).toBe(4);
  })
});

describe('Car.maxSpeed', () => {
  it(`has the second parameter passed into the constructor as its value`, () => {
    car = new Car('Knight Rider', 130)
    expect(car.maxSpeed).toBe(130);
  })
});

describe('Car.accelerate', () => {
  it(`is a method on Vehicle, not Car`, () => {
    expect(vehicle.__proto__.hasOwnProperty('accelerate')).toBe(true)
    expect(car.__proto__.hasOwnProperty('accelerate')).toBe(false)
  })
});

describe('Car.drive', () => {
  it(`returns "Vroom. "`, () => {
    expect(car.drive()).toBe('Vroom. ')
  })
});

describe('Ferrari', () => {
  it(`inherits from Car`, () => {
    expect(colinsCar instanceof Car).toBe(true);
  })
});

describe('Ferrari.wheelCount', () => {
  it(`always has 4 wheels`, () => {
    colinsCar = new Ferrari('Knight Rider');
    expect(colinsCar.wheelCount).toBe(4);
  })
});

describe('Ferrari.name', () => {
  it(`is always named "Ferrari"`, () => {
    expect(colinsCar.name).toBe('Ferrari')
  })
});

describe('Ferrari.maxSpeed', () => {
// NOTE: this should be set using super and a hardcoded value!
  it(`always has a maxSpeed of 180`, () => {
    colinsCar = new Ferrari();
    expect(colinsCar.maxSpeed).toBe(180);
  })
});

describe('Ferrari.drive', () => {
  // Use super in your return!
  it(`returns 'Vroom. I'm a Ferrari!'`, () => {
    expect(colinsCar.drive()).toBe(`Vroom. I'm a Ferrari!`)
  })
});

describe('Ferrari.accelerate', () => {
  it(`accelerates at half its maxSpeed instead of a third'`, () => {
    colinsCar.accelerate()
    expect(colinsCar.speed).toBe(90)
  })
  
  it(`doesn't set the speed higher than the maxSpeed`, () => {
    colinsCar.accelerate();
    colinsCar.accelerate();
    colinsCar.accelerate();
    expect(colinsCar.speed).toBe(180);
  })
});