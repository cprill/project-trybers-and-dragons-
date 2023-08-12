import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  static counterInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.counterInstances += 1;
  }

  static createdRacesInstances(): number { return Elf.counterInstances; }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;