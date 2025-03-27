import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity() // 定义一个实体类
export class Profile {
  @PrimaryGeneratedColumn() // 定义一个主键列，自动生成
  id: number;

  @Column() // 定义一个列
  gender: number;

  @Column('text') // 定义一个列
  photo: string;

  @Column() // 定义一个列
  address: string;

  @OneToOne(() => User) // 定义一个一对一关系
  @JoinColumn({ name: 'user_id' }) // 定义一个外键列
  user: User;
}
