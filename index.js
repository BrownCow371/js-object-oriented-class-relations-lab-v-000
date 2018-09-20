const store = { drivers: [], trips: [], passengers: []};

let driverID = 0;

class Driver {

  constructor(name){
    this.id = ++driverID;
    this.name = name;

    store.drivers.push(this);
  }

  trips() {
    return store.trips.filter(trip => trip.driverID = this.id);
  };
  
    passengers() {
      return store.passengers.filter(passanger=> passanger.trips().filter(trip => trip.driverID === this.id));
    };

  //   passengers() {
  // return this.trips().map(trip => {
  //   return trip.passenger();
  // });
}
}

let passengerId = 0;

class Passenger {
  constructor(name) {
    this.id = ++passengerId;
    this.name = name;

    store.passengers.push(this);
  }

  trips(){
    return store.trips.filter(trip => trip.passengerId = this.id);
  };
  drivers(){
    return store.drivers.filter(driver=> driver.trips().filter(trip => trip.passengerId === this.id));
  };

  
}

let tripId = 0;

class Trip {
  constructor(driver, passanger){
    this.id = ++tripId;
    this.driverId = driver.id;
    this.passengerId = passanger.id;

    store.trips.push(this);
  }
  driver(){
    return store.drivers.find(driver => driver.id === this.driverId);
  };

  passenger(){
    return store.passengers.find(passenger => passenger.id === this.passengerId);
  };
}
