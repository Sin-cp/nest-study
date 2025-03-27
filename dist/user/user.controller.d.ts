import { UserService } from './user.service';
export declare class UserController {
    private userservice;
    private logger;
    constructor(userservice: UserService);
    getUsers(): any;
    createUser(): any;
    getUserProfile(): any;
}
