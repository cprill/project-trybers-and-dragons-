import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  static instances = 0;
  energyType: EnergyType = 'stamina';

  constructor(
    name: string,
  ) {
    super(name);
    Warrior.instances += 1;
  }

  public get name(): string {
    return this.name;
  }

  static get energyType(): EnergyType {
    return this.energyType;
  }

  static createdArchetypeInstances = (): number => this.instances;
}

export default Warrior;