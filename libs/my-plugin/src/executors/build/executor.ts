import { ExecutorContext, readCachedProjectGraph } from '@nrwl/devkit';
import { BuildNodeBuilderOptions } from '../../utils/types';
import { normalizeBuildOptions } from '../../utils/normalize';
import { generatePackageJson } from '../../utils/generate-package-json';

export default async function runExecutor(
  rawOptions: BuildNodeBuilderOptions,
  context: ExecutorContext
) {
  console.log('===================🦄 PLUGIN EXECUTOR 🚀===================');
  console.log('------------------------- START ---------------------------');
  console.log('===========================================================');

  console.log('PROJECT NAME : ');
  console.log(context.projectName);
  console.log('----------------------------------------------------');

  const { sourceRoot, root } = context.workspace.projects[context.projectName];

  console.log('SOURCE ROOT : ');
  console.log(sourceRoot);
  console.log('----------------------------------------------------');

  console.log('ROOT : ');
  console.log(root);
  console.log('----------------------------------------------------');

  const projGraph = readCachedProjectGraph();
  console.log('PROJECT GRAPH : ');
  console.log(projGraph);
  console.log('----------------------------------------------------');

  console.log('RAW OPTIONS : ');
  console.log(rawOptions);
  console.log('----------------------------------------------------');

  console.log('CONTEXT ROOT: ');
  console.log(context.root);
  console.log('----------------------------------------------------');

  const options = normalizeBuildOptions(
    rawOptions,
    context.root,
    sourceRoot,
    root
  );

  console.log('OPTIONS: ');
  console.log(options);
  console.log('----------------------------------------------------');

  generatePackageJson(context.projectName, projGraph, options);

  console.log('===========================================================');
  console.log('------------------------- END -----------------------------');
  console.log('===========================================================');

  return {
    success: true,
  };
}
