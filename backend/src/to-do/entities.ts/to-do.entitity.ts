import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
export interface ToDoData {
  description: string;
  isDone: boolean;
}

@Entity()
export class ToDoDatatbase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  isDone: boolean;

  @Column()
  createdAt: Date;
}
