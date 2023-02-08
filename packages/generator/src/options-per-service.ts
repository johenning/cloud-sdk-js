import { parse } from 'path';
import { existsSync, readFileSync } from 'fs';
import { unixEOL, createLogger } from '@sap-cloud-sdk/util';
import { ParsedGeneratorOptions } from './options';
import { VdmServiceMetadata } from './vdm-types';
import { servicePathFromSwagger } from './swagger-parser/swagger-util';
import { ServiceMetadata } from './edmx-parser/edmx-file-reader';

const logger = createLogger({
  package: 'generator',
  messageContext: 'options-per-service'
});

/**
 * @internal
 */
export interface VdmMapping {
  [fileName: string]: OptionsPerService;
}
/**
 * @internal
 */
export interface OptionsPerService {
  /**
   * @internal
   */
  directoryName: string;
  /**
   * @internal
   */
  servicePath: string;
  /**
   * @internal
   */
  npmPackageName: string;
}
/**
 * @internal
 */
export function readOptionsPerService(
  options: ParsedGeneratorOptions
): VdmMapping {
  const configPath = options.optionsPerService;
  return configPath && existsSync(configPath)
    ? (JSON.parse(readFileSync(configPath, 'utf8')) as VdmMapping)
    : {};
}
/**
 * @internal
 */
export function optionsPerService(services: VdmServiceMetadata[]): VdmMapping {
  return services.reduce((vdmMapping, service) => {
    vdmMapping[service.originalFileName] = {
      directoryName: service.directoryName,
      servicePath: service.servicePath,
      npmPackageName: service.npmPackageName
    };

    return vdmMapping;
  }, {});
}
/**
 * @internal
 */
export function optionsPerServiceFile(services: VdmServiceMetadata[]): string {
  return JSON.stringify(optionsPerService(services), null, 2) + unixEOL;
}
/**
 * @internal
 */
export function getServicePath(
  metadata: ServiceMetadata,
  skipValidation: boolean,
  optionsPerServiceIn?: OptionsPerService
): string {
  let servicePath =
    optionsPerServiceIn?.servicePath ||
    servicePathFromSelfLink(metadata.edmx.selfLink) ||
    servicePathFromSwagger(metadata.swagger);
  if (!servicePath) {
    if (skipValidation) {
      logger.warn(
        `[ ${
          parse(metadata.edmx.path.toString()).name
        } ] No service path could be determined from available metadata! Setting "servicePath" to "/" in the "options-per-service.json".`
      );
      servicePath = '/';
    } else {
      throw new Error(
        `[ ${
          parse(metadata.edmx.path.toString()).name
        } ] No service path could be determined from available metadata! Set "servicePath" in the "options-per-service.json" to generate client.`
      );
    }
  }
  return servicePath;
}

function servicePathFromSelfLink(
  selfLink: string | undefined
): string | undefined {
  if (selfLink) {
    return selfLink
      .replace(/^https?:\/\//, '')
      .replace(/\/\$metadata$/, '')
      .replace(/^[^/]+/, '');
  }
}