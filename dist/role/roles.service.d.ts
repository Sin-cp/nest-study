import { Repository } from 'typeorm';
import { Roles } from './roles.entity';
export declare class RolesService {
    private readonly rolesRepository;
    constructor(rolesRepository: Repository<Roles>);
    findAll(): Promise<Roles[]>;
    findOne(id: number): Promise<Roles | null>;
}
