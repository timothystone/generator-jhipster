/**
 * Copyright 2013-2025 the original author or authors from the JHipster project.
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

import { asWritingTask } from '../base-application/support/task-type-inference.js';

/**
 * The default is to use a file path string. It implies use of the template method.
 * For any other config an object { file:.., method:.., template:.. } can be used
 */
export const commonFiles = {
  global: [
    {
      templates: ['README.md.jhi', '.editorconfig.jhi'],
    },
  ],
  sonar: [
    {
      templates: ['sonar-project.properties'],
    },
  ],
};

export function writeFiles() {
  return {
    writeFiles: asWritingTask(function ({ application }) {
      return this.writeFiles({
        sections: commonFiles,
        context: application,
      });
    }),
  };
}
