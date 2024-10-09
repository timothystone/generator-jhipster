import type { Field as BaseField } from '../../../lib/types/base/field.js';

export interface Field extends BaseField {
  propertyName: string;

  documentation?: string;

  enumFileName?: string;
  enumValues?: { name: string; value: string }[];
  fieldIsEnum?: boolean;
  columnName?: string;

  // Annotations
  skipClient?: boolean;
  skipServer?: boolean;

  filterableField?: boolean;
  transient?: boolean;
  columnRequired?: boolean;
  id?: boolean;
  /**
   * Faker template passed to `faker.helpers.fake()`.
   * @see https://fakerjs.dev/api/helpers.html#fake
   */
  fakerTemplate?: string;

  // Validation
  fieldValidate?: boolean;
  unique?: boolean;
  fieldValidateRules?: string[];
  fieldValidateRulesPattern?: string | RegExp;
  fieldValidateRulesMaxlength?: number;
  fieldValidateRulesMax?: number;
  fieldValidateRulesMin?: number;
  fieldValidateRulesMinlength?: number;
  maxlength?: number;

  // Temporary fields for Faker
  uniqueValue?: any[];
  generateFakeDataFromPattern?: () => string | undefined;
  /** @deprecated */
  createRandexp: () => any;

  generateFakeData?: () => any;

  // Java specific
  propertyJavaBeanName?: string;
  propertyDtoJavaType?: string;
  propertyJavaFilterType?: string;
  fieldInJavaBeanMethod?: string;
  fieldJavaBuildSpecification?: string;
  fieldJavaValueGenerator?: string;
  javaValueGenerator?: string;
  propertyJavaFilteredType?: string;
  liquibaseDefaultValueAttributeValue?: string;

  propertyJavaCustomFilter?: { type: string; superType: string; fieldType: string };

  // Blob
  fieldWithContentType?: boolean;
  contentTypeFieldName?: string;
  blobContentTypeText?: string;

  // Derived properties
  fieldTypeBinary?: boolean;
  fieldTypeDuration?: boolean;
  fieldTypeBoolean: boolean;
  /** @deprecated */
  fieldTypeTemporal: boolean;
  /** @deprecated */
  fieldTypeCharSequence: boolean;
  /** @deprecated */
  fieldTypeNumeric: boolean;

  /** @deprecated */
  reference?: any;
  relationshipsPath?: string[];
}