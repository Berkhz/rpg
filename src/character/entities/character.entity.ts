import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Character {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  class: string;

  @Column()
  attributes: object;

  @Column()
  feats: object;

  @Column()
  alignment: string;

  @Column()
  talents: object;

  @Column()
  spells: object;

  @Column()
  items: object;
}
