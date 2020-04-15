class BaseStation {
    fillCar() { }
}

class ShellStation extends BaseStation {
    fillCar() {
        console.log('Filling car with shell diesel..');
    }
}

class FakeStation extends BaseStation {
    fillCar() {
        console.log('Filling car with water.');
    }
}

class Driver {
    /**
     * 
     * @param {gasStation} gasStation 
     */
    goToClosestStation(gasStation) {
        gasStation.fillCar();
    }
}

var myStation = new ShellStation();
var FakeStation = new FakeStation();

myStation.fillCar();
FakeStation.fillCar();