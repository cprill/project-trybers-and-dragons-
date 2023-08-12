import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  static counterInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.counterInstances += 1;
  }

  static createdRacesInstances(): number { return Dwarf.counterInstances; }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf;