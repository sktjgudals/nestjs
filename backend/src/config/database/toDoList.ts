import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ToDoList {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  isDone: boolean;

  @Column()
  createdAt: Date;
}
