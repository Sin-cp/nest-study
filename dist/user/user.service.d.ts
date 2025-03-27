import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    findAll(): Promise<User[]>;
    find(username: string): Promise<User | null>;
    create(users: User): Promise<User>;
    update(id: number, users: User): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    finProfile(id: number): Promise<User | null>;
}
