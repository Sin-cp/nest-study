import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Logs } from './logs.entity';

@Injectable()
export class LogsService {
  constructor(
    @InjectRepository(Logs)
    private readonly logsRepository: Repository<Logs>,
  ) {}

  findAll() {
    return this.logsRepository.find();
  }

  findOne(id: number) {
    return this.logsRepository.findOne({ where: { id } });
  }

  async findUserLogs(id: number) {
    const user = await this.findOne(id);
    return this.logsRepository.find({
      where: { user: user || {} },
      relations: {
        user: true,
      },
    });
  }

  findLogsByGroup(id: number) {
    // SELECT logs.result as result , COUNT(logs.result) as count FROM `logs`, `user` where (logs.userId = user.id and user.id = 5) GROUP BY logs.result

    return this.logsRepository
      .createQueryBuilder('logs')
      .select('logs.result', 'result')
      .addSelect('COUNT(result)', 'count')
      .leftJoinAndSelect('logs.user', 'users')
      .where('users.id = :id', { id }) // 防止 sql 注入
      .groupBy('result')
      .orderBy('result', 'DESC') // 降序
      .getRawMany();

    // return this.logsRepository.query( // 原生 sql查询
    //   'SELECT logs.result as result , COUNT(logs.result) as count FROM `logs`, `user` where (logs.userId = user.id and user.id = 5) GROUP BY logs.result',
    // );
  }
}
