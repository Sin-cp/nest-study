/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Controller, Get } from '@nestjs/common';
import { LogsService } from './logs.service';

@Controller('logs')
export class LogsController {
  constructor(private logsservice: LogsService) {}

  @Get('/list')
  // 获取用户信息
  getUserLogs(): any {
    return this.logsservice.findUserLogs(5);
  }

  @Get('groupby')
  async getUserLogsGroupBy(): Promise<any> {
    const res = await this.logsservice.findLogsByGroup(5);
    return res.map((o) => ({
      result: o.result,
      count: o.count,
    }));
  }
}
