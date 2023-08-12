import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

interface Figther extends SimpleFighter {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy;
  attack(enemy: Figther): void;
  special?(enemy: Figther): void;
  levelUp(): void;
  receiveDamage(attackPoints: number): number;
}

export default Figther;