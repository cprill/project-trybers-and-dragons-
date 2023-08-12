import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  static instances = 0;
  energyType: EnergyType = 'mana';

  constructor(
    name: string,
  ) {
    super(name);
    Necromancer.instances += 1;
  }

  public get name(): string {
    return this.name;
  }

  static get energyType(): EnergyType {
    return this.energyType;
  }

  static createdArchetypeInstances = (): number => this.instances;
}

export default Necromancer;