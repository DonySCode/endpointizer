import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  method: string; // GET, POST, PUT, DELETE, etc.

  @Column()
  route: string; // e.g., "/users/create"

  @Column('json', { nullable: true })
  inputSchema: Record<string, any>; // Expected request body

  @Column('json', { nullable: true })
  responseSchema: Record<string, any>; // Expected response format

  @Column('simple-array', { nullable: true })
  middleware: string[]; // List of middleware functions (e.g., "auth, validation")

  @Column({ default: true })
  isActive: boolean; // Enable or disable task

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
