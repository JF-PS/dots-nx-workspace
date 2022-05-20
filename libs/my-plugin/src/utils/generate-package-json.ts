import type { ProjectGraph } from '@nrwl/devkit';
import { writeJsonFile } from '@nrwl/devkit';

import { BuildNodeBuilderOptions } from './types';
import { createPackageJson } from '@nrwl/workspace/src/utilities/create-package-json';

export function generatePackageJson(
  projectName: string,
  graph: ProjectGraph,
  options: BuildNodeBuilderOptions
) {
  console.log('=========== OPTIONS GENERATES ===============');
  console.log(options);
  console.log('==========================');
  const packageJson = createPackageJson(projectName, graph, options);
  packageJson.main = packageJson.main ?? options.outputFileName;
  delete packageJson.devDependencies;
  console.log('==========================');
  console.log(options.outputPath);
  console.log('==========================');
  writeJsonFile(`${options.outputPath}/package.json`, packageJson);
}
