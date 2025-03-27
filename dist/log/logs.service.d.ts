import { Repository } from 'typeorm';
import { Logs } from './logs.entity';
export declare class LogsService {
    private readonly logsRepository;
    constructor(logsRepository: Repository<Logs>);
    findAll(): Promise<Logs[]>;
    findOne(id: number): Promise<Logs | null>;
    findUserLogs(id: number): Promise<Logs[]>;
    findLogsByGroup(id: number): Promise<any[]>;
}
