import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  constructor(private _name: string) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(_name, this._dexterity);
    this._archetype = new Mage(_name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = { type_: 'mana', amount: getRandomInt(1, 10) };
  }

  get race(): Race { return this._race; }

  get archetype(): Archetype { return this._archetype; }

  get lifePoints(): number { return this._lifePoints; }

  get strength(): number { return this._strength; }

  get defense(): number { return this._defense; }

  get dexterity(): number { return this._dexterity; }

  get energy(): Energy {
    return { type_: this._energy.type_, amount: this._energy.amount };
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  receiveDamage(attackPoints: number): number {
    const damageReceived = attackPoints - this._defense;
    if (damageReceived > 0) {
      this._lifePoints -= damageReceived;
      if (this.lifePoints <= 0) this._lifePoints = -1;
    } 
    return this._lifePoints;
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;

    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }

    this._lifePoints = this._maxLifePoints;
  }

  special(): void {
    const newstrength = this.strength + (this._dexterity / 5);
    this._strength = newstrength;
  }
}

export default Character;