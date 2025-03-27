"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const yaml = require("js-yaml");
const path_1 = require("path");
const YAML_CONFIG_FILENAME = 'config.yml';
const filePath = (0, path_1.join)(__dirname, `../config/${YAML_CONFIG_FILENAME}`);
exports.default = () => {
    return yaml.load((0, fs_1.readFileSync)(filePath, 'utf8'));
};
//# sourceMappingURL=configuration.js.map