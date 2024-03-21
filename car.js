import Engine from './carEngine/engine.js';

const Car = {
    engine: Engine,
    make: "Ford",
    displayEngineInfo: function() {
        console.log("Car's Engine Information:");
        this.engine.displayInfo();
    }
};

export default Car;