/**
 * Copyright 2013-2023 the original author or authors from the JHipster project.
 *
 * This file is part of the JHipster project, see https://www.jhipster.tech/
 * for more information.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { WriteFileBlock } from '../../base/api.mjs';
import { SERVER_TEST_SRC_DIR, SERVER_MAIN_SRC_DIR, SERVER_MAIN_RES_DIR, SERVER_TEST_RES_DIR } from '../../generator-constants.mjs';

export const replaceEntityFilePathVariables = (data: any, filePath: string) => {
  filePath = filePath
    ?.replace(/_package_/, data.packageFolder)
    ?.replace(/_entityPackage_/, data.entityJavaPackageFolder)
    ?.replace(/_mainClass_/, data.mainClass)
    ?.replace(/_[pP]ersistClass_/, data.persistClass)
    ?.replace(/_[eE]ntityClass_/, data.entityClass)
    ?.replace(/_[dD]toClass_/, data.dtoClass);
  return filePath?.includes('.jhi.') ? filePath : filePath?.replace(/_\w*/, '');
};

/**
 * Move the template to `javaPackageSrcDir` (defaults to`src/main/java/${packageFolder}/${filePath}`).
 * Removes trailing specifiers.
 */
export const moveToJavaPackageSrcDir = (data: any, filePath: string) =>
  `${data.javaPackageSrcDir}${replaceEntityFilePathVariables(data, filePath) ?? ''}`;

/**
 * Move the template to `javaPackageTestDir` (defaults to`src/main/java/${packageFolder}/${filePath}`).
 * Removes trailing specifiers.
 */
export const moveToJavaPackageTestDir = (data: any, filePath: string) =>
  `${data.javaPackageTestDir}${replaceEntityFilePathVariables(data, filePath) ?? ''}`;

export const moveToJavaEntityPackageSrcDir = (data: any, filePath: string) =>
  `${data.srcMainJava}${data.entityAbsoluteFolder}${replaceEntityFilePathVariables(data, filePath) ?? ''}`;

export const moveToJavaEntityPackageTestDir = (data: any, filePath: string) =>
  `${data.srcTestJava}${data.entityAbsoluteFolder}${replaceEntityFilePathVariables(data, filePath) ?? ''}`;

export const moveToSrcMainResourcesDir = (data: any, filePath: string) =>
  `${data.srcMainResources}${replaceEntityFilePathVariables(data, filePath) ?? ''}`;

export const moveToSrcTestResourcesDir = (data: any, filePath: string) =>
  `${data.srcTestResources}${replaceEntityFilePathVariables(data, filePath) ?? ''}`;

type RelativeWriteFileBlock = WriteFileBlock & { relativePath?: string };

export function javaMainPackageTemplatesBlock(blockOrRelativePath?: string): Pick<WriteFileBlock, 'path' | 'renameTo'>;
export function javaMainPackageTemplatesBlock(blockOrRelativePath: RelativeWriteFileBlock): WriteFileBlock;
export function javaMainPackageTemplatesBlock(
  blockOrRelativePath: string | RelativeWriteFileBlock = '',
): WriteFileBlock | Pick<WriteFileBlock, 'path' | 'renameTo'> {
  const block: RelativeWriteFileBlock | undefined = typeof blockOrRelativePath !== 'string' ? blockOrRelativePath : undefined;
  const relativePath: string = typeof blockOrRelativePath === 'string' ? blockOrRelativePath : blockOrRelativePath.relativePath ?? '';
  return {
    path: `${SERVER_MAIN_SRC_DIR}_package_/${relativePath}`,
    renameTo: (data: any, filePath: string) =>
      `${data.javaPackageSrcDir}${replaceEntityFilePathVariables(data, relativePath) ?? ''}${
        replaceEntityFilePathVariables(data, filePath) ?? ''
      }`,
    ...block,
  };
}

export function javaMainResourceTemplatesBlock(blockOrRelativePath?: string): Pick<WriteFileBlock, 'path' | 'renameTo'>;
export function javaMainResourceTemplatesBlock(blockOrRelativePath: RelativeWriteFileBlock): WriteFileBlock;
export function javaMainResourceTemplatesBlock(
  blockOrRelativePath: string | RelativeWriteFileBlock = '',
): WriteFileBlock | Pick<WriteFileBlock, 'path' | 'renameTo'> {
  const block: RelativeWriteFileBlock | undefined = typeof blockOrRelativePath !== 'string' ? blockOrRelativePath : undefined;
  const relativePath: string = typeof blockOrRelativePath === 'string' ? blockOrRelativePath : blockOrRelativePath.relativePath ?? '';
  return {
    path: `${SERVER_MAIN_RES_DIR}${relativePath}`,
    renameTo: (data: any, filePath: string) =>
      `${data.srcMainResources}${replaceEntityFilePathVariables(data, relativePath) ?? ''}${
        replaceEntityFilePathVariables(data, filePath) ?? ''
      }`,
    ...block,
  };
}

export function javaTestResourceTemplatesBlock(blockOrRelativePath?: string): Pick<WriteFileBlock, 'path' | 'renameTo'>;
export function javaTestResourceTemplatesBlock(blockOrRelativePath: RelativeWriteFileBlock): WriteFileBlock;
export function javaTestResourceTemplatesBlock(
  blockOrRelativePath: string | RelativeWriteFileBlock = '',
): WriteFileBlock | Pick<WriteFileBlock, 'path' | 'renameTo'> {
  const block: RelativeWriteFileBlock | undefined = typeof blockOrRelativePath !== 'string' ? blockOrRelativePath : undefined;
  const relativePath: string = typeof blockOrRelativePath === 'string' ? blockOrRelativePath : blockOrRelativePath.relativePath ?? '';
  return {
    path: `${SERVER_TEST_RES_DIR}${relativePath}`,
    renameTo: (data: any, filePath: string) =>
      `${data.srcTestResources}${replaceEntityFilePathVariables(data, relativePath) ?? ''}${
        replaceEntityFilePathVariables(data, filePath) ?? ''
      }`,
    ...block,
  };
}

export function javaTestPackageTemplatesBlock(blockOrRelativePath?: string): Pick<WriteFileBlock, 'path' | 'renameTo'>;
export function javaTestPackageTemplatesBlock(blockOrRelativePath: RelativeWriteFileBlock): WriteFileBlock;
export function javaTestPackageTemplatesBlock(
  blockOrRelativePath: string | RelativeWriteFileBlock = '',
): WriteFileBlock | Pick<WriteFileBlock, 'path' | 'renameTo'> {
  const block: RelativeWriteFileBlock | undefined = typeof blockOrRelativePath !== 'string' ? blockOrRelativePath : undefined;
  const relativePath: string = typeof blockOrRelativePath === 'string' ? blockOrRelativePath : blockOrRelativePath.relativePath ?? '';
  return {
    path: `${SERVER_TEST_SRC_DIR}_package_/${relativePath}`,
    renameTo: (data: any, filePath: string) =>
      `${data.javaPackageTestDir}${replaceEntityFilePathVariables(data, relativePath) ?? ''}${
        replaceEntityFilePathVariables(data, filePath) ?? ''
      }`,
    ...block,
  };
}
