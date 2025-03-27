import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Logger,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  private logger = new Logger(UserController.name);
  constructor(private userservice: UserService) {
    // this.userservice = new UserService();
    this.logger.log('UserController created');
  }

  @Get('/list')
  // 获取用户信息
  getUsers(): any {
    const users = { isAdmin: true };
    if (!users.isAdmin) {
      throw new HttpException(
        'User is not admin, Forbidden',
        HttpStatus.FORBIDDEN,
      );
    }
    return this.userservice.findAll();
  }

  @Post()
  createUser(): any {
    const users = {
      username: 'test',
      password: '123456',
    } as User;
    return this.userservice.create(users);
  }

  @Get('/profile')
  getUserProfile(): any {
    return this.userservice.finProfile(5);
  }
}
