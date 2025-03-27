import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  findAll() {
    return this.userRepository.find();
  }
  find(username: string) {
    return this.userRepository.findOne({ where: { username } });
  }
  async create(users: User) {
    const userTem = await this.userRepository.create(users);
    return this.userRepository.save(userTem);
  }
  update(id: number, users: User) {
    return this.userRepository.update(id, users);
  }
  remove(id: number) {
    return this.userRepository.delete(id);
  }

  finProfile(id: number) {
    return this.userRepository.findOne({
      where: {
        id,
      },
      relations: {
        profile: true,
      },
    });
  }
}
