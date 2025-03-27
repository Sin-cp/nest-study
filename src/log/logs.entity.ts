import { User } from 'src/user/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity() // 定义一个实体类
export class Logs {
  @PrimaryGeneratedColumn() // 定义一个主键列，自动生成
  id: number;

  @Column() // 定义一个列
  path: string;

  @Column() // 定义一个列
  method: string;

  @Column() // 定义一个列
  data: string;

  @Column() // 定义一个列
  result: number;

  @ManyToOne(() => User, (user) => user.logs) // 定义多对一的关系
  @JoinColumn()
  user: User;
}
