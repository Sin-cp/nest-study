import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Logs } from 'src/log/logs.entity';
import { Roles } from 'src/role/roles.entity';
import { Profile } from './profile.entity';

@Entity() // 定义一个实体类
export class User {
  @PrimaryGeneratedColumn() // 定义一个主键列，自动生成
  id: number;

  @Column() // 定义一个列
  username: string;

  @Column({ select: false }) // 定义一个列
  password: string;

  @OneToOne(() => Profile, (profile) => profile.user) // 定义一个一对一关系
  profile: Profile;

  @OneToMany(() => Logs, (logs) => logs.user) // 定义一个一对多关系
  logs: Logs[];

  @ManyToMany(() => Roles, (roles) => roles.users) // 定义一个多对多关系
  @JoinTable({ name: 'user_roles' })
  roles: Roles[];
}
