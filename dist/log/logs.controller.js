"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsController = void 0;
const common_1 = require("@nestjs/common");
const logs_service_1 = require("./logs.service");
let LogsController = class LogsController {
    constructor(logsservice) {
        this.logsservice = logsservice;
    }
    getUserLogs() {
        return this.logsservice.findUserLogs(5);
    }
    async getUserLogsGroupBy() {
        const res = await this.logsservice.findLogsByGroup(5);
        return res.map((o) => ({
            result: o.result,
            count: o.count,
        }));
    }
};
exports.LogsController = LogsController;
__decorate([
    (0, common_1.Get)('/list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], LogsController.prototype, "getUserLogs", null);
__decorate([
    (0, common_1.Get)('groupby'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LogsController.prototype, "getUserLogsGroupBy", null);
exports.LogsController = LogsController = __decorate([
    (0, common_1.Controller)('logs'),
    __metadata("design:paramtypes", [logs_service_1.LogsService])
], LogsController);
//# sourceMappingURL=logs.controller.js.map