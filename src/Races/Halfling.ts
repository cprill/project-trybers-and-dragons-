import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  static counterInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.counterInstances += 1;
  }

  static createdRacesInstances(): number { return Halfling.counterInstances; }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;