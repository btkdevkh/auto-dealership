export var VehiculeType;
(function (VehiculeType) {
    VehiculeType["BUS"] = "Bus";
    VehiculeType["CAR"] = "Car";
})(VehiculeType || (VehiculeType = {}));
class Vehicule {
    constructor(_imatriculation, _type) {
        this._imatriculation = _imatriculation;
        this._type = _type;
    }
    get imatriculation() { return this._imatriculation; }
    get type() { return this._type; }
}
export default Vehicule;
//# sourceMappingURL=Vehicule.js.map