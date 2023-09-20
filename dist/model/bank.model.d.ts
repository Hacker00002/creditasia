/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Types, Schema } from 'mongoose';
declare const BankModel: import("mongoose").Model<({
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    id?: {
        prototype?: Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    bank_name?: string;
    bank_percent?: number;
    bank_kredit_amount?: number;
    bank_deposit_amount?: number;
}) | (import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    id?: {
        prototype?: Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    bank_name?: string;
    bank_percent?: number;
    bank_kredit_amount?: number;
    bank_deposit_amount?: number;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    id?: {
        prototype?: Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    bank_name?: string;
    bank_percent?: number;
    bank_kredit_amount?: number;
    bank_deposit_amount?: number;
}), {}, {}, {}, import("mongoose").Document<unknown, {}, ({
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    id?: {
        prototype?: Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    bank_name?: string;
    bank_percent?: number;
    bank_kredit_amount?: number;
    bank_deposit_amount?: number;
}) | (import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    id?: {
        prototype?: Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    bank_name?: string;
    bank_percent?: number;
    bank_kredit_amount?: number;
    bank_deposit_amount?: number;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    id?: {
        prototype?: Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    bank_name?: string;
    bank_percent?: number;
    bank_kredit_amount?: number;
    bank_deposit_amount?: number;
})> & (({
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    id?: {
        prototype?: Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    bank_name?: string;
    bank_percent?: number;
    bank_kredit_amount?: number;
    bank_deposit_amount?: number;
} & {
    _id: Types.ObjectId;
}) | (import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    id?: {
        prototype?: Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    bank_name?: string;
    bank_percent?: number;
    bank_kredit_amount?: number;
    bank_deposit_amount?: number;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    id?: {
        prototype?: Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    bank_name?: string;
    bank_percent?: number;
    bank_kredit_amount?: number;
    bank_deposit_amount?: number;
} & Required<{
    _id: unknown;
}>)), Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    collection: string;
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    id?: {
        prototype?: Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    bank_name?: string;
    bank_percent?: number;
    bank_kredit_amount?: number;
    bank_deposit_amount?: number;
}, import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    id?: {
        prototype?: Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    bank_name?: string;
    bank_percent?: number;
    bank_kredit_amount?: number;
    bank_deposit_amount?: number;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    id?: {
        prototype?: Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    bank_name?: string;
    bank_percent?: number;
    bank_kredit_amount?: number;
    bank_deposit_amount?: number;
} & {
    _id: Types.ObjectId;
}>>;
export default BankModel;
