import { b as baseService } from './generic_DMQmE1Cn.mjs';

const noopService = {
  ...baseService,
  propertiesToHash: ["src"],
  async transform(inputBuffer, transformOptions) {
    return {
      data: inputBuffer,
      format: transformOptions.format
    };
  }
};
var noop_default = noopService;

export { noop_default as default };
