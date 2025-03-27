import { User } from 'src/user/user.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // 定义一个实体类
export class Roles {
  @PrimaryGeneratedColumn() // 定义一个主键列，自动生成
  id: number;

  @Column() // 定义一个列
  gender: number;

  @ManyToMany(() => User, (user) => user.roles)
  users: User[];
}
