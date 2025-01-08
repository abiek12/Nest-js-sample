import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { GenderEnum } from '../enums/user.enums';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column({ type: 'varchar', name: 'name', nullable: false })
  name: string;

  @Column({ type: 'varchar', name: 'phone', nullable: false })
  phone: string;

  @Column({ type: 'varchar', name: 'password', nullable: false })
  password: string;

  @Column({ type: 'enum', name: 'gender', nullable: true, enum: GenderEnum })
  gender: string;
}
