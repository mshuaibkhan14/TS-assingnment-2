var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(_make, _model, _year) {
        this._make = _make;
        this._model = _model;
        this._year = _year;
    }
    Object.defineProperty(Vehicle.prototype, "make", {
        get: function () {
            return this._make;
        },
        set: function (anOtherMake) {
            if (!anOtherMake) {
                throw new Error("Make cannot be empty");
            }
            this._make = anOtherMake;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "model", {
        get: function () {
            return this._model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "year", {
        get: function () {
            return this._year;
        },
        enumerable: false,
        configurable: true
    });
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(make, model, year, _numSeats, _carType) {
        var _this = _super.call(this, make, model, year) || this;
        _this._numSeats = _numSeats;
        _this._carType = _carType;
        return _this;
    }
    return Car;
}(Vehicle));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(make, model, year, _fuleTank, _loadingcapacity) {
        var _this = _super.call(this, make, model, year) || this;
        _this._fuleTank = _fuleTank;
        _this._loadingcapacity = _loadingcapacity;
        return _this;
    }
    return Truck;
}(Vehicle));
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle(make, model, year, _engine, _mileage) {
        var _this = _super.call(this, make, model, year) || this;
        _this._engine = _engine;
        _this._mileage = _mileage;
        return _this;
    }
    return Motorcycle;
}(Vehicle));
var corolla = new Car("Toyota", "Corolla", 2018, 5, "sadan");
console.log(corolla);
var ravi = new Car("Suzuki", "Ravi", 2015, 36, "800kg");
console.log(ravi);
var bike = new Car("Honda", "CD-70", 2022, 70, "50km");
console.log(bike);
