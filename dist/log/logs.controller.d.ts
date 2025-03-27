import { LogsService } from './logs.service';
export declare class LogsController {
    private logsservice;
    constructor(logsservice: LogsService);
    getUserLogs(): any;
    getUserLogsGroupBy(): Promise<any>;
}
