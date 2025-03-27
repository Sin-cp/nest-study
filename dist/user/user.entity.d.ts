import { Logs } from 'src/log/logs.entity';
import { Roles } from 'src/role/roles.entity';
import { Profile } from './profile.entity';
export declare class User {
    id: number;
    username: string;
    password: string;
    profile: Profile;
    logs: Logs[];
    roles: Roles[];
}
