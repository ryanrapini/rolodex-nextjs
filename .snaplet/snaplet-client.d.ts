type ScalarField = {
  name: string;
  type: string;
};
type ObjectField = ScalarField & {
  relationFromFields: string[];
  relationToFields: string[];
};
type Inflection = {
  modelName?: (name: string) => string;
  scalarField?: (field: ScalarField) => string;
  parentField?: (field: ObjectField, oppositeBaseNameMap: Record<string, string>) => string;
  childField?: (field: ObjectField, oppositeField: ObjectField, oppositeBaseNameMap: Record<string, string>) => string;
  oppositeBaseNameMap?: Record<string, string>;
};
type Override = {
  _prisma_migrations?: {
    name?: string;
    fields?: {
      id?: string;
      checksum?: string;
      finished_at?: string;
      migration_name?: string;
      logs?: string;
      rolled_back_at?: string;
      started_at?: string;
      applied_steps_count?: string;
    };
  }
  contacts?: {
    name?: string;
    fields?: {
      id?: string;
      firstname?: string;
      lastname?: string;
      phone?: string;
      email?: string;
      height?: string;
      gender?: string;
      ownerId?: string;
      users?: string;
      tags_contacts?: string;
    };
  }
  tags?: {
    name?: string;
    fields?: {
      id?: string;
      name?: string;
      tags_contacts?: string;
    };
  }
  tags_contacts?: {
    name?: string;
    fields?: {
      contactId?: string;
      tagId?: string;
      assignedAt?: string;
      assignedBy?: string;
      contacts?: string;
      tags?: string;
    };
  }
  users?: {
    name?: string;
    fields?: {
      id?: string;
      name?: string;
      password?: string;
      email?: string;
      created_at?: string;
      updated_at?: string;
      contacts?: string;
    };
  }}
export type Alias = {
  inflection?: Inflection | boolean;
  override?: Override;
};
interface FingerprintRelationField {
  count?: number | MinMaxOption;
}
interface FingerprintJsonField {
  schema?: any;
}
interface FingerprintDateField {
  options?: {
    minYear?: number;
    maxYear?: number;
  }
}
interface FingerprintNumberField {
  options?: {
    min?: number;
    max?: number;
  }
}
export interface Fingerprint {
  _prisma_migrations?: {
    finished_at?: FingerprintDateField;
    rolled_back_at?: FingerprintDateField;
    started_at?: FingerprintDateField;
    applied_steps_count?: FingerprintNumberField;
  }
  contacts?: {
    users?: FingerprintRelationField;
    tags_contacts?: FingerprintRelationField;
  }
  tags?: {
    tags_contacts?: FingerprintRelationField;
  }
  tags_contacts?: {
    assignedAt?: FingerprintDateField;
    contacts?: FingerprintRelationField;
    tags?: FingerprintRelationField;
  }
  users?: {
    created_at?: FingerprintDateField;
    updated_at?: FingerprintDateField;
    contacts?: FingerprintRelationField;
  }}