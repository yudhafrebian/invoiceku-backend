
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model clients
 * 
 */
export type clients = $Result.DefaultSelection<Prisma.$clientsPayload>
/**
 * Model invoice_items
 * 
 */
export type invoice_items = $Result.DefaultSelection<Prisma.$invoice_itemsPayload>
/**
 * Model invoices
 * 
 */
export type invoices = $Result.DefaultSelection<Prisma.$invoicesPayload>
/**
 * Model products_services
 * 
 */
export type products_services = $Result.DefaultSelection<Prisma.$products_servicesPayload>
/**
 * Model user_profiles
 * 
 */
export type user_profiles = $Result.DefaultSelection<Prisma.$user_profilesPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model recurring_invoice
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type recurring_invoice = $Result.DefaultSelection<Prisma.$recurring_invoicePayload>
/**
 * Model recurring_invoice_item
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type recurring_invoice_item = $Result.DefaultSelection<Prisma.$recurring_invoice_itemPayload>
/**
 * Model user_payment_method
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type user_payment_method = $Result.DefaultSelection<Prisma.$user_payment_methodPayload>
/**
 * Model transaction
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type transaction = $Result.DefaultSelection<Prisma.$transactionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Status: {
  Pending: 'Pending',
  Paid: 'Paid',
  Overdue: 'Overdue',
  Confirmating: 'Confirmating'
};

export type Status = (typeof Status)[keyof typeof Status]


export const Type: {
  Service: 'Service',
  Product: 'Product'
};

export type Type = (typeof Type)[keyof typeof Type]


export const Recurrence: {
  Daily: 'Daily',
  Weekly: 'Weekly',
  Monthly: 'Monthly'
};

export type Recurrence = (typeof Recurrence)[keyof typeof Recurrence]


export const Unit: {
  Pcs: 'Pcs',
  Hour: 'Hour',
  Day: 'Day'
};

export type Unit = (typeof Unit)[keyof typeof Unit]


export const PaymentMethod: {
  Bank_Transfer: 'Bank_Transfer',
  Dana: 'Dana',
  Gopay: 'Gopay',
  Shopeepay: 'Shopeepay',
  Qris: 'Qris'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]

}

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type Type = $Enums.Type

export const Type: typeof $Enums.Type

export type Recurrence = $Enums.Recurrence

export const Recurrence: typeof $Enums.Recurrence

export type Unit = $Enums.Unit

export const Unit: typeof $Enums.Unit

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Clients
 * const clients = await prisma.clients.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Clients
   * const clients = await prisma.clients.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.clients`: Exposes CRUD operations for the **clients** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.clients.findMany()
    * ```
    */
  get clients(): Prisma.clientsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoice_items`: Exposes CRUD operations for the **invoice_items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoice_items
    * const invoice_items = await prisma.invoice_items.findMany()
    * ```
    */
  get invoice_items(): Prisma.invoice_itemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoices`: Exposes CRUD operations for the **invoices** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoices.findMany()
    * ```
    */
  get invoices(): Prisma.invoicesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.products_services`: Exposes CRUD operations for the **products_services** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products_services
    * const products_services = await prisma.products_services.findMany()
    * ```
    */
  get products_services(): Prisma.products_servicesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_profiles`: Exposes CRUD operations for the **user_profiles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_profiles
    * const user_profiles = await prisma.user_profiles.findMany()
    * ```
    */
  get user_profiles(): Prisma.user_profilesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recurring_invoice`: Exposes CRUD operations for the **recurring_invoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recurring_invoices
    * const recurring_invoices = await prisma.recurring_invoice.findMany()
    * ```
    */
  get recurring_invoice(): Prisma.recurring_invoiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recurring_invoice_item`: Exposes CRUD operations for the **recurring_invoice_item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recurring_invoice_items
    * const recurring_invoice_items = await prisma.recurring_invoice_item.findMany()
    * ```
    */
  get recurring_invoice_item(): Prisma.recurring_invoice_itemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_payment_method`: Exposes CRUD operations for the **user_payment_method** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_payment_methods
    * const user_payment_methods = await prisma.user_payment_method.findMany()
    * ```
    */
  get user_payment_method(): Prisma.user_payment_methodDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.transactionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    clients: 'clients',
    invoice_items: 'invoice_items',
    invoices: 'invoices',
    products_services: 'products_services',
    user_profiles: 'user_profiles',
    users: 'users',
    recurring_invoice: 'recurring_invoice',
    recurring_invoice_item: 'recurring_invoice_item',
    user_payment_method: 'user_payment_method',
    transaction: 'transaction'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "clients" | "invoice_items" | "invoices" | "products_services" | "user_profiles" | "users" | "recurring_invoice" | "recurring_invoice_item" | "user_payment_method" | "transaction"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      clients: {
        payload: Prisma.$clientsPayload<ExtArgs>
        fields: Prisma.clientsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.clientsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.clientsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload>
          }
          findFirst: {
            args: Prisma.clientsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.clientsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload>
          }
          findMany: {
            args: Prisma.clientsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload>[]
          }
          create: {
            args: Prisma.clientsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload>
          }
          createMany: {
            args: Prisma.clientsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.clientsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload>[]
          }
          delete: {
            args: Prisma.clientsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload>
          }
          update: {
            args: Prisma.clientsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload>
          }
          deleteMany: {
            args: Prisma.clientsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.clientsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.clientsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload>[]
          }
          upsert: {
            args: Prisma.clientsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload>
          }
          aggregate: {
            args: Prisma.ClientsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClients>
          }
          groupBy: {
            args: Prisma.clientsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientsGroupByOutputType>[]
          }
          count: {
            args: Prisma.clientsCountArgs<ExtArgs>
            result: $Utils.Optional<ClientsCountAggregateOutputType> | number
          }
        }
      }
      invoice_items: {
        payload: Prisma.$invoice_itemsPayload<ExtArgs>
        fields: Prisma.invoice_itemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.invoice_itemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_itemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.invoice_itemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_itemsPayload>
          }
          findFirst: {
            args: Prisma.invoice_itemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_itemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.invoice_itemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_itemsPayload>
          }
          findMany: {
            args: Prisma.invoice_itemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_itemsPayload>[]
          }
          create: {
            args: Prisma.invoice_itemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_itemsPayload>
          }
          createMany: {
            args: Prisma.invoice_itemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.invoice_itemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_itemsPayload>[]
          }
          delete: {
            args: Prisma.invoice_itemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_itemsPayload>
          }
          update: {
            args: Prisma.invoice_itemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_itemsPayload>
          }
          deleteMany: {
            args: Prisma.invoice_itemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.invoice_itemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.invoice_itemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_itemsPayload>[]
          }
          upsert: {
            args: Prisma.invoice_itemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_itemsPayload>
          }
          aggregate: {
            args: Prisma.Invoice_itemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoice_items>
          }
          groupBy: {
            args: Prisma.invoice_itemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Invoice_itemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.invoice_itemsCountArgs<ExtArgs>
            result: $Utils.Optional<Invoice_itemsCountAggregateOutputType> | number
          }
        }
      }
      invoices: {
        payload: Prisma.$invoicesPayload<ExtArgs>
        fields: Prisma.invoicesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.invoicesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.invoicesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>
          }
          findFirst: {
            args: Prisma.invoicesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.invoicesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>
          }
          findMany: {
            args: Prisma.invoicesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>[]
          }
          create: {
            args: Prisma.invoicesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>
          }
          createMany: {
            args: Prisma.invoicesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.invoicesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>[]
          }
          delete: {
            args: Prisma.invoicesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>
          }
          update: {
            args: Prisma.invoicesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>
          }
          deleteMany: {
            args: Prisma.invoicesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.invoicesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.invoicesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>[]
          }
          upsert: {
            args: Prisma.invoicesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>
          }
          aggregate: {
            args: Prisma.InvoicesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoices>
          }
          groupBy: {
            args: Prisma.invoicesGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoicesGroupByOutputType>[]
          }
          count: {
            args: Prisma.invoicesCountArgs<ExtArgs>
            result: $Utils.Optional<InvoicesCountAggregateOutputType> | number
          }
        }
      }
      products_services: {
        payload: Prisma.$products_servicesPayload<ExtArgs>
        fields: Prisma.products_servicesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.products_servicesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$products_servicesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.products_servicesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$products_servicesPayload>
          }
          findFirst: {
            args: Prisma.products_servicesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$products_servicesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.products_servicesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$products_servicesPayload>
          }
          findMany: {
            args: Prisma.products_servicesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$products_servicesPayload>[]
          }
          create: {
            args: Prisma.products_servicesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$products_servicesPayload>
          }
          createMany: {
            args: Prisma.products_servicesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.products_servicesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$products_servicesPayload>[]
          }
          delete: {
            args: Prisma.products_servicesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$products_servicesPayload>
          }
          update: {
            args: Prisma.products_servicesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$products_servicesPayload>
          }
          deleteMany: {
            args: Prisma.products_servicesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.products_servicesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.products_servicesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$products_servicesPayload>[]
          }
          upsert: {
            args: Prisma.products_servicesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$products_servicesPayload>
          }
          aggregate: {
            args: Prisma.Products_servicesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts_services>
          }
          groupBy: {
            args: Prisma.products_servicesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Products_servicesGroupByOutputType>[]
          }
          count: {
            args: Prisma.products_servicesCountArgs<ExtArgs>
            result: $Utils.Optional<Products_servicesCountAggregateOutputType> | number
          }
        }
      }
      user_profiles: {
        payload: Prisma.$user_profilesPayload<ExtArgs>
        fields: Prisma.user_profilesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_profilesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_profilesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_profilesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_profilesPayload>
          }
          findFirst: {
            args: Prisma.user_profilesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_profilesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_profilesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_profilesPayload>
          }
          findMany: {
            args: Prisma.user_profilesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_profilesPayload>[]
          }
          create: {
            args: Prisma.user_profilesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_profilesPayload>
          }
          createMany: {
            args: Prisma.user_profilesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_profilesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_profilesPayload>[]
          }
          delete: {
            args: Prisma.user_profilesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_profilesPayload>
          }
          update: {
            args: Prisma.user_profilesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_profilesPayload>
          }
          deleteMany: {
            args: Prisma.user_profilesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_profilesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_profilesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_profilesPayload>[]
          }
          upsert: {
            args: Prisma.user_profilesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_profilesPayload>
          }
          aggregate: {
            args: Prisma.User_profilesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_profiles>
          }
          groupBy: {
            args: Prisma.user_profilesGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_profilesGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_profilesCountArgs<ExtArgs>
            result: $Utils.Optional<User_profilesCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      recurring_invoice: {
        payload: Prisma.$recurring_invoicePayload<ExtArgs>
        fields: Prisma.recurring_invoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.recurring_invoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recurring_invoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.recurring_invoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recurring_invoicePayload>
          }
          findFirst: {
            args: Prisma.recurring_invoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recurring_invoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.recurring_invoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recurring_invoicePayload>
          }
          findMany: {
            args: Prisma.recurring_invoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recurring_invoicePayload>[]
          }
          create: {
            args: Prisma.recurring_invoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recurring_invoicePayload>
          }
          createMany: {
            args: Prisma.recurring_invoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.recurring_invoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recurring_invoicePayload>[]
          }
          delete: {
            args: Prisma.recurring_invoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recurring_invoicePayload>
          }
          update: {
            args: Prisma.recurring_invoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recurring_invoicePayload>
          }
          deleteMany: {
            args: Prisma.recurring_invoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.recurring_invoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.recurring_invoiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recurring_invoicePayload>[]
          }
          upsert: {
            args: Prisma.recurring_invoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recurring_invoicePayload>
          }
          aggregate: {
            args: Prisma.Recurring_invoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecurring_invoice>
          }
          groupBy: {
            args: Prisma.recurring_invoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<Recurring_invoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.recurring_invoiceCountArgs<ExtArgs>
            result: $Utils.Optional<Recurring_invoiceCountAggregateOutputType> | number
          }
        }
      }
      recurring_invoice_item: {
        payload: Prisma.$recurring_invoice_itemPayload<ExtArgs>
        fields: Prisma.recurring_invoice_itemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.recurring_invoice_itemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recurring_invoice_itemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.recurring_invoice_itemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recurring_invoice_itemPayload>
          }
          findFirst: {
            args: Prisma.recurring_invoice_itemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recurring_invoice_itemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.recurring_invoice_itemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recurring_invoice_itemPayload>
          }
          findMany: {
            args: Prisma.recurring_invoice_itemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recurring_invoice_itemPayload>[]
          }
          create: {
            args: Prisma.recurring_invoice_itemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recurring_invoice_itemPayload>
          }
          createMany: {
            args: Prisma.recurring_invoice_itemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.recurring_invoice_itemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recurring_invoice_itemPayload>[]
          }
          delete: {
            args: Prisma.recurring_invoice_itemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recurring_invoice_itemPayload>
          }
          update: {
            args: Prisma.recurring_invoice_itemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recurring_invoice_itemPayload>
          }
          deleteMany: {
            args: Prisma.recurring_invoice_itemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.recurring_invoice_itemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.recurring_invoice_itemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recurring_invoice_itemPayload>[]
          }
          upsert: {
            args: Prisma.recurring_invoice_itemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recurring_invoice_itemPayload>
          }
          aggregate: {
            args: Prisma.Recurring_invoice_itemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecurring_invoice_item>
          }
          groupBy: {
            args: Prisma.recurring_invoice_itemGroupByArgs<ExtArgs>
            result: $Utils.Optional<Recurring_invoice_itemGroupByOutputType>[]
          }
          count: {
            args: Prisma.recurring_invoice_itemCountArgs<ExtArgs>
            result: $Utils.Optional<Recurring_invoice_itemCountAggregateOutputType> | number
          }
        }
      }
      user_payment_method: {
        payload: Prisma.$user_payment_methodPayload<ExtArgs>
        fields: Prisma.user_payment_methodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_payment_methodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_payment_methodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_payment_methodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_payment_methodPayload>
          }
          findFirst: {
            args: Prisma.user_payment_methodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_payment_methodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_payment_methodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_payment_methodPayload>
          }
          findMany: {
            args: Prisma.user_payment_methodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_payment_methodPayload>[]
          }
          create: {
            args: Prisma.user_payment_methodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_payment_methodPayload>
          }
          createMany: {
            args: Prisma.user_payment_methodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_payment_methodCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_payment_methodPayload>[]
          }
          delete: {
            args: Prisma.user_payment_methodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_payment_methodPayload>
          }
          update: {
            args: Prisma.user_payment_methodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_payment_methodPayload>
          }
          deleteMany: {
            args: Prisma.user_payment_methodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_payment_methodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_payment_methodUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_payment_methodPayload>[]
          }
          upsert: {
            args: Prisma.user_payment_methodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_payment_methodPayload>
          }
          aggregate: {
            args: Prisma.User_payment_methodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_payment_method>
          }
          groupBy: {
            args: Prisma.user_payment_methodGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_payment_methodGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_payment_methodCountArgs<ExtArgs>
            result: $Utils.Optional<User_payment_methodCountAggregateOutputType> | number
          }
        }
      }
      transaction: {
        payload: Prisma.$transactionPayload<ExtArgs>
        fields: Prisma.transactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          findFirst: {
            args: Prisma.transactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          findMany: {
            args: Prisma.transactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>[]
          }
          create: {
            args: Prisma.transactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          createMany: {
            args: Prisma.transactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.transactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>[]
          }
          delete: {
            args: Prisma.transactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          update: {
            args: Prisma.transactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          deleteMany: {
            args: Prisma.transactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.transactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.transactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>[]
          }
          upsert: {
            args: Prisma.transactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.transactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.transactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    clients?: clientsOmit
    invoice_items?: invoice_itemsOmit
    invoices?: invoicesOmit
    products_services?: products_servicesOmit
    user_profiles?: user_profilesOmit
    users?: usersOmit
    recurring_invoice?: recurring_invoiceOmit
    recurring_invoice_item?: recurring_invoice_itemOmit
    user_payment_method?: user_payment_methodOmit
    transaction?: transactionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ClientsCountOutputType
   */

  export type ClientsCountOutputType = {
    invoices: number
    recurring_invoice: number
  }

  export type ClientsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoices?: boolean | ClientsCountOutputTypeCountInvoicesArgs
    recurring_invoice?: boolean | ClientsCountOutputTypeCountRecurring_invoiceArgs
  }

  // Custom InputTypes
  /**
   * ClientsCountOutputType without action
   */
  export type ClientsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientsCountOutputType
     */
    select?: ClientsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientsCountOutputType without action
   */
  export type ClientsCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invoicesWhereInput
  }

  /**
   * ClientsCountOutputType without action
   */
  export type ClientsCountOutputTypeCountRecurring_invoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recurring_invoiceWhereInput
  }


  /**
   * Count Type InvoicesCountOutputType
   */

  export type InvoicesCountOutputType = {
    invoice_items: number
    transaction: number
  }

  export type InvoicesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice_items?: boolean | InvoicesCountOutputTypeCountInvoice_itemsArgs
    transaction?: boolean | InvoicesCountOutputTypeCountTransactionArgs
  }

  // Custom InputTypes
  /**
   * InvoicesCountOutputType without action
   */
  export type InvoicesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoicesCountOutputType
     */
    select?: InvoicesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InvoicesCountOutputType without action
   */
  export type InvoicesCountOutputTypeCountInvoice_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invoice_itemsWhereInput
  }

  /**
   * InvoicesCountOutputType without action
   */
  export type InvoicesCountOutputTypeCountTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionWhereInput
  }


  /**
   * Count Type Products_servicesCountOutputType
   */

  export type Products_servicesCountOutputType = {
    invoice_items: number
    recurring_invoice_item: number
  }

  export type Products_servicesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice_items?: boolean | Products_servicesCountOutputTypeCountInvoice_itemsArgs
    recurring_invoice_item?: boolean | Products_servicesCountOutputTypeCountRecurring_invoice_itemArgs
  }

  // Custom InputTypes
  /**
   * Products_servicesCountOutputType without action
   */
  export type Products_servicesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products_servicesCountOutputType
     */
    select?: Products_servicesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Products_servicesCountOutputType without action
   */
  export type Products_servicesCountOutputTypeCountInvoice_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invoice_itemsWhereInput
  }

  /**
   * Products_servicesCountOutputType without action
   */
  export type Products_servicesCountOutputTypeCountRecurring_invoice_itemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recurring_invoice_itemWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    clients: number
    invoices: number
    products_services: number
    recurring_invoice: number
    user_payment_method: number
    user_profiles: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clients?: boolean | UsersCountOutputTypeCountClientsArgs
    invoices?: boolean | UsersCountOutputTypeCountInvoicesArgs
    products_services?: boolean | UsersCountOutputTypeCountProducts_servicesArgs
    recurring_invoice?: boolean | UsersCountOutputTypeCountRecurring_invoiceArgs
    user_payment_method?: boolean | UsersCountOutputTypeCountUser_payment_methodArgs
    user_profiles?: boolean | UsersCountOutputTypeCountUser_profilesArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountClientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clientsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invoicesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountProducts_servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: products_servicesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountRecurring_invoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recurring_invoiceWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUser_payment_methodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_payment_methodWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUser_profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_profilesWhereInput
  }


  /**
   * Count Type Recurring_invoiceCountOutputType
   */

  export type Recurring_invoiceCountOutputType = {
    recurring_invoice_item: number
  }

  export type Recurring_invoiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recurring_invoice_item?: boolean | Recurring_invoiceCountOutputTypeCountRecurring_invoice_itemArgs
  }

  // Custom InputTypes
  /**
   * Recurring_invoiceCountOutputType without action
   */
  export type Recurring_invoiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recurring_invoiceCountOutputType
     */
    select?: Recurring_invoiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Recurring_invoiceCountOutputType without action
   */
  export type Recurring_invoiceCountOutputTypeCountRecurring_invoice_itemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recurring_invoice_itemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model clients
   */

  export type AggregateClients = {
    _count: ClientsCountAggregateOutputType | null
    _avg: ClientsAvgAggregateOutputType | null
    _sum: ClientsSumAggregateOutputType | null
    _min: ClientsMinAggregateOutputType | null
    _max: ClientsMaxAggregateOutputType | null
  }

  export type ClientsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type ClientsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type ClientsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    is_deleted: boolean | null
    payment_ref: $Enums.PaymentMethod | null
  }

  export type ClientsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    is_deleted: boolean | null
    payment_ref: $Enums.PaymentMethod | null
  }

  export type ClientsCountAggregateOutputType = {
    id: number
    user_id: number
    name: number
    email: number
    phone: number
    address: number
    is_deleted: number
    payment_ref: number
    _all: number
  }


  export type ClientsAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type ClientsSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type ClientsMinAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    is_deleted?: true
    payment_ref?: true
  }

  export type ClientsMaxAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    is_deleted?: true
    payment_ref?: true
  }

  export type ClientsCountAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    is_deleted?: true
    payment_ref?: true
    _all?: true
  }

  export type ClientsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clients to aggregate.
     */
    where?: clientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clients to fetch.
     */
    orderBy?: clientsOrderByWithRelationInput | clientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: clientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned clients
    **/
    _count?: true | ClientsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientsMaxAggregateInputType
  }

  export type GetClientsAggregateType<T extends ClientsAggregateArgs> = {
        [P in keyof T & keyof AggregateClients]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClients[P]>
      : GetScalarType<T[P], AggregateClients[P]>
  }




  export type clientsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clientsWhereInput
    orderBy?: clientsOrderByWithAggregationInput | clientsOrderByWithAggregationInput[]
    by: ClientsScalarFieldEnum[] | ClientsScalarFieldEnum
    having?: clientsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientsCountAggregateInputType | true
    _avg?: ClientsAvgAggregateInputType
    _sum?: ClientsSumAggregateInputType
    _min?: ClientsMinAggregateInputType
    _max?: ClientsMaxAggregateInputType
  }

  export type ClientsGroupByOutputType = {
    id: number
    user_id: number
    name: string
    email: string
    phone: string
    address: string
    is_deleted: boolean
    payment_ref: $Enums.PaymentMethod
    _count: ClientsCountAggregateOutputType | null
    _avg: ClientsAvgAggregateOutputType | null
    _sum: ClientsSumAggregateOutputType | null
    _min: ClientsMinAggregateOutputType | null
    _max: ClientsMaxAggregateOutputType | null
  }

  type GetClientsGroupByPayload<T extends clientsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientsGroupByOutputType[P]>
            : GetScalarType<T[P], ClientsGroupByOutputType[P]>
        }
      >
    >


  export type clientsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    is_deleted?: boolean
    payment_ref?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    invoices?: boolean | clients$invoicesArgs<ExtArgs>
    recurring_invoice?: boolean | clients$recurring_invoiceArgs<ExtArgs>
    _count?: boolean | ClientsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clients"]>

  export type clientsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    is_deleted?: boolean
    payment_ref?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clients"]>

  export type clientsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    is_deleted?: boolean
    payment_ref?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clients"]>

  export type clientsSelectScalar = {
    id?: boolean
    user_id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    is_deleted?: boolean
    payment_ref?: boolean
  }

  export type clientsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "name" | "email" | "phone" | "address" | "is_deleted" | "payment_ref", ExtArgs["result"]["clients"]>
  export type clientsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    invoices?: boolean | clients$invoicesArgs<ExtArgs>
    recurring_invoice?: boolean | clients$recurring_invoiceArgs<ExtArgs>
    _count?: boolean | ClientsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type clientsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type clientsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $clientsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "clients"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      invoices: Prisma.$invoicesPayload<ExtArgs>[]
      recurring_invoice: Prisma.$recurring_invoicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      name: string
      email: string
      phone: string
      address: string
      is_deleted: boolean
      payment_ref: $Enums.PaymentMethod
    }, ExtArgs["result"]["clients"]>
    composites: {}
  }

  type clientsGetPayload<S extends boolean | null | undefined | clientsDefaultArgs> = $Result.GetResult<Prisma.$clientsPayload, S>

  type clientsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<clientsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientsCountAggregateInputType | true
    }

  export interface clientsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['clients'], meta: { name: 'clients' } }
    /**
     * Find zero or one Clients that matches the filter.
     * @param {clientsFindUniqueArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends clientsFindUniqueArgs>(args: SelectSubset<T, clientsFindUniqueArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Clients that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {clientsFindUniqueOrThrowArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends clientsFindUniqueOrThrowArgs>(args: SelectSubset<T, clientsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientsFindFirstArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends clientsFindFirstArgs>(args?: SelectSubset<T, clientsFindFirstArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clients that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientsFindFirstOrThrowArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends clientsFindFirstOrThrowArgs>(args?: SelectSubset<T, clientsFindFirstOrThrowArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.clients.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.clients.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientsWithIdOnly = await prisma.clients.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends clientsFindManyArgs>(args?: SelectSubset<T, clientsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Clients.
     * @param {clientsCreateArgs} args - Arguments to create a Clients.
     * @example
     * // Create one Clients
     * const Clients = await prisma.clients.create({
     *   data: {
     *     // ... data to create a Clients
     *   }
     * })
     * 
     */
    create<T extends clientsCreateArgs>(args: SelectSubset<T, clientsCreateArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {clientsCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const clients = await prisma.clients.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends clientsCreateManyArgs>(args?: SelectSubset<T, clientsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {clientsCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const clients = await prisma.clients.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientsWithIdOnly = await prisma.clients.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends clientsCreateManyAndReturnArgs>(args?: SelectSubset<T, clientsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Clients.
     * @param {clientsDeleteArgs} args - Arguments to delete one Clients.
     * @example
     * // Delete one Clients
     * const Clients = await prisma.clients.delete({
     *   where: {
     *     // ... filter to delete one Clients
     *   }
     * })
     * 
     */
    delete<T extends clientsDeleteArgs>(args: SelectSubset<T, clientsDeleteArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Clients.
     * @param {clientsUpdateArgs} args - Arguments to update one Clients.
     * @example
     * // Update one Clients
     * const clients = await prisma.clients.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends clientsUpdateArgs>(args: SelectSubset<T, clientsUpdateArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {clientsDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.clients.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends clientsDeleteManyArgs>(args?: SelectSubset<T, clientsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const clients = await prisma.clients.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends clientsUpdateManyArgs>(args: SelectSubset<T, clientsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {clientsUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const clients = await prisma.clients.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `id`
     * const clientsWithIdOnly = await prisma.clients.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends clientsUpdateManyAndReturnArgs>(args: SelectSubset<T, clientsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Clients.
     * @param {clientsUpsertArgs} args - Arguments to update or create a Clients.
     * @example
     * // Update or create a Clients
     * const clients = await prisma.clients.upsert({
     *   create: {
     *     // ... data to create a Clients
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clients we want to update
     *   }
     * })
     */
    upsert<T extends clientsUpsertArgs>(args: SelectSubset<T, clientsUpsertArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientsCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.clients.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends clientsCountArgs>(
      args?: Subset<T, clientsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientsAggregateArgs>(args: Subset<T, ClientsAggregateArgs>): Prisma.PrismaPromise<GetClientsAggregateType<T>>

    /**
     * Group by Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends clientsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clientsGroupByArgs['orderBy'] }
        : { orderBy?: clientsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, clientsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the clients model
   */
  readonly fields: clientsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for clients.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clientsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    invoices<T extends clients$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, clients$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recurring_invoice<T extends clients$recurring_invoiceArgs<ExtArgs> = {}>(args?: Subset<T, clients$recurring_invoiceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recurring_invoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the clients model
   */
  interface clientsFieldRefs {
    readonly id: FieldRef<"clients", 'Int'>
    readonly user_id: FieldRef<"clients", 'Int'>
    readonly name: FieldRef<"clients", 'String'>
    readonly email: FieldRef<"clients", 'String'>
    readonly phone: FieldRef<"clients", 'String'>
    readonly address: FieldRef<"clients", 'String'>
    readonly is_deleted: FieldRef<"clients", 'Boolean'>
    readonly payment_ref: FieldRef<"clients", 'PaymentMethod'>
  }
    

  // Custom InputTypes
  /**
   * clients findUnique
   */
  export type clientsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientsInclude<ExtArgs> | null
    /**
     * Filter, which clients to fetch.
     */
    where: clientsWhereUniqueInput
  }

  /**
   * clients findUniqueOrThrow
   */
  export type clientsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientsInclude<ExtArgs> | null
    /**
     * Filter, which clients to fetch.
     */
    where: clientsWhereUniqueInput
  }

  /**
   * clients findFirst
   */
  export type clientsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientsInclude<ExtArgs> | null
    /**
     * Filter, which clients to fetch.
     */
    where?: clientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clients to fetch.
     */
    orderBy?: clientsOrderByWithRelationInput | clientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clients.
     */
    cursor?: clientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clients.
     */
    distinct?: ClientsScalarFieldEnum | ClientsScalarFieldEnum[]
  }

  /**
   * clients findFirstOrThrow
   */
  export type clientsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientsInclude<ExtArgs> | null
    /**
     * Filter, which clients to fetch.
     */
    where?: clientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clients to fetch.
     */
    orderBy?: clientsOrderByWithRelationInput | clientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clients.
     */
    cursor?: clientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clients.
     */
    distinct?: ClientsScalarFieldEnum | ClientsScalarFieldEnum[]
  }

  /**
   * clients findMany
   */
  export type clientsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientsInclude<ExtArgs> | null
    /**
     * Filter, which clients to fetch.
     */
    where?: clientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clients to fetch.
     */
    orderBy?: clientsOrderByWithRelationInput | clientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing clients.
     */
    cursor?: clientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clients.
     */
    skip?: number
    distinct?: ClientsScalarFieldEnum | ClientsScalarFieldEnum[]
  }

  /**
   * clients create
   */
  export type clientsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientsInclude<ExtArgs> | null
    /**
     * The data needed to create a clients.
     */
    data: XOR<clientsCreateInput, clientsUncheckedCreateInput>
  }

  /**
   * clients createMany
   */
  export type clientsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clients.
     */
    data: clientsCreateManyInput | clientsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * clients createManyAndReturn
   */
  export type clientsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * The data used to create many clients.
     */
    data: clientsCreateManyInput | clientsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * clients update
   */
  export type clientsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientsInclude<ExtArgs> | null
    /**
     * The data needed to update a clients.
     */
    data: XOR<clientsUpdateInput, clientsUncheckedUpdateInput>
    /**
     * Choose, which clients to update.
     */
    where: clientsWhereUniqueInput
  }

  /**
   * clients updateMany
   */
  export type clientsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clients.
     */
    data: XOR<clientsUpdateManyMutationInput, clientsUncheckedUpdateManyInput>
    /**
     * Filter which clients to update
     */
    where?: clientsWhereInput
    /**
     * Limit how many clients to update.
     */
    limit?: number
  }

  /**
   * clients updateManyAndReturn
   */
  export type clientsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * The data used to update clients.
     */
    data: XOR<clientsUpdateManyMutationInput, clientsUncheckedUpdateManyInput>
    /**
     * Filter which clients to update
     */
    where?: clientsWhereInput
    /**
     * Limit how many clients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * clients upsert
   */
  export type clientsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientsInclude<ExtArgs> | null
    /**
     * The filter to search for the clients to update in case it exists.
     */
    where: clientsWhereUniqueInput
    /**
     * In case the clients found by the `where` argument doesn't exist, create a new clients with this data.
     */
    create: XOR<clientsCreateInput, clientsUncheckedCreateInput>
    /**
     * In case the clients was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clientsUpdateInput, clientsUncheckedUpdateInput>
  }

  /**
   * clients delete
   */
  export type clientsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientsInclude<ExtArgs> | null
    /**
     * Filter which clients to delete.
     */
    where: clientsWhereUniqueInput
  }

  /**
   * clients deleteMany
   */
  export type clientsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clients to delete
     */
    where?: clientsWhereInput
    /**
     * Limit how many clients to delete.
     */
    limit?: number
  }

  /**
   * clients.invoices
   */
  export type clients$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    where?: invoicesWhereInput
    orderBy?: invoicesOrderByWithRelationInput | invoicesOrderByWithRelationInput[]
    cursor?: invoicesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[]
  }

  /**
   * clients.recurring_invoice
   */
  export type clients$recurring_invoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurring_invoice
     */
    select?: recurring_invoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recurring_invoice
     */
    omit?: recurring_invoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recurring_invoiceInclude<ExtArgs> | null
    where?: recurring_invoiceWhereInput
    orderBy?: recurring_invoiceOrderByWithRelationInput | recurring_invoiceOrderByWithRelationInput[]
    cursor?: recurring_invoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Recurring_invoiceScalarFieldEnum | Recurring_invoiceScalarFieldEnum[]
  }

  /**
   * clients without action
   */
  export type clientsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientsInclude<ExtArgs> | null
  }


  /**
   * Model invoice_items
   */

  export type AggregateInvoice_items = {
    _count: Invoice_itemsCountAggregateOutputType | null
    _avg: Invoice_itemsAvgAggregateOutputType | null
    _sum: Invoice_itemsSumAggregateOutputType | null
    _min: Invoice_itemsMinAggregateOutputType | null
    _max: Invoice_itemsMaxAggregateOutputType | null
  }

  export type Invoice_itemsAvgAggregateOutputType = {
    id: number | null
    invoice_id: number | null
    product_id: number | null
    price_snapshot: number | null
    quantity: number | null
    total: number | null
  }

  export type Invoice_itemsSumAggregateOutputType = {
    id: number | null
    invoice_id: number | null
    product_id: number | null
    price_snapshot: number | null
    quantity: number | null
    total: number | null
  }

  export type Invoice_itemsMinAggregateOutputType = {
    id: number | null
    invoice_id: number | null
    product_id: number | null
    name_snapshot: string | null
    price_snapshot: number | null
    quantity: number | null
    total: number | null
  }

  export type Invoice_itemsMaxAggregateOutputType = {
    id: number | null
    invoice_id: number | null
    product_id: number | null
    name_snapshot: string | null
    price_snapshot: number | null
    quantity: number | null
    total: number | null
  }

  export type Invoice_itemsCountAggregateOutputType = {
    id: number
    invoice_id: number
    product_id: number
    name_snapshot: number
    price_snapshot: number
    quantity: number
    total: number
    _all: number
  }


  export type Invoice_itemsAvgAggregateInputType = {
    id?: true
    invoice_id?: true
    product_id?: true
    price_snapshot?: true
    quantity?: true
    total?: true
  }

  export type Invoice_itemsSumAggregateInputType = {
    id?: true
    invoice_id?: true
    product_id?: true
    price_snapshot?: true
    quantity?: true
    total?: true
  }

  export type Invoice_itemsMinAggregateInputType = {
    id?: true
    invoice_id?: true
    product_id?: true
    name_snapshot?: true
    price_snapshot?: true
    quantity?: true
    total?: true
  }

  export type Invoice_itemsMaxAggregateInputType = {
    id?: true
    invoice_id?: true
    product_id?: true
    name_snapshot?: true
    price_snapshot?: true
    quantity?: true
    total?: true
  }

  export type Invoice_itemsCountAggregateInputType = {
    id?: true
    invoice_id?: true
    product_id?: true
    name_snapshot?: true
    price_snapshot?: true
    quantity?: true
    total?: true
    _all?: true
  }

  export type Invoice_itemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invoice_items to aggregate.
     */
    where?: invoice_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoice_items to fetch.
     */
    orderBy?: invoice_itemsOrderByWithRelationInput | invoice_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: invoice_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoice_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoice_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned invoice_items
    **/
    _count?: true | Invoice_itemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Invoice_itemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Invoice_itemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Invoice_itemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Invoice_itemsMaxAggregateInputType
  }

  export type GetInvoice_itemsAggregateType<T extends Invoice_itemsAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoice_items]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoice_items[P]>
      : GetScalarType<T[P], AggregateInvoice_items[P]>
  }




  export type invoice_itemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invoice_itemsWhereInput
    orderBy?: invoice_itemsOrderByWithAggregationInput | invoice_itemsOrderByWithAggregationInput[]
    by: Invoice_itemsScalarFieldEnum[] | Invoice_itemsScalarFieldEnum
    having?: invoice_itemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Invoice_itemsCountAggregateInputType | true
    _avg?: Invoice_itemsAvgAggregateInputType
    _sum?: Invoice_itemsSumAggregateInputType
    _min?: Invoice_itemsMinAggregateInputType
    _max?: Invoice_itemsMaxAggregateInputType
  }

  export type Invoice_itemsGroupByOutputType = {
    id: number
    invoice_id: number
    product_id: number
    name_snapshot: string
    price_snapshot: number
    quantity: number
    total: number
    _count: Invoice_itemsCountAggregateOutputType | null
    _avg: Invoice_itemsAvgAggregateOutputType | null
    _sum: Invoice_itemsSumAggregateOutputType | null
    _min: Invoice_itemsMinAggregateOutputType | null
    _max: Invoice_itemsMaxAggregateOutputType | null
  }

  type GetInvoice_itemsGroupByPayload<T extends invoice_itemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Invoice_itemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Invoice_itemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Invoice_itemsGroupByOutputType[P]>
            : GetScalarType<T[P], Invoice_itemsGroupByOutputType[P]>
        }
      >
    >


  export type invoice_itemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoice_id?: boolean
    product_id?: boolean
    name_snapshot?: boolean
    price_snapshot?: boolean
    quantity?: boolean
    total?: boolean
    invoices?: boolean | invoicesDefaultArgs<ExtArgs>
    products_services?: boolean | products_servicesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice_items"]>

  export type invoice_itemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoice_id?: boolean
    product_id?: boolean
    name_snapshot?: boolean
    price_snapshot?: boolean
    quantity?: boolean
    total?: boolean
    invoices?: boolean | invoicesDefaultArgs<ExtArgs>
    products_services?: boolean | products_servicesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice_items"]>

  export type invoice_itemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoice_id?: boolean
    product_id?: boolean
    name_snapshot?: boolean
    price_snapshot?: boolean
    quantity?: boolean
    total?: boolean
    invoices?: boolean | invoicesDefaultArgs<ExtArgs>
    products_services?: boolean | products_servicesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice_items"]>

  export type invoice_itemsSelectScalar = {
    id?: boolean
    invoice_id?: boolean
    product_id?: boolean
    name_snapshot?: boolean
    price_snapshot?: boolean
    quantity?: boolean
    total?: boolean
  }

  export type invoice_itemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "invoice_id" | "product_id" | "name_snapshot" | "price_snapshot" | "quantity" | "total", ExtArgs["result"]["invoice_items"]>
  export type invoice_itemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoices?: boolean | invoicesDefaultArgs<ExtArgs>
    products_services?: boolean | products_servicesDefaultArgs<ExtArgs>
  }
  export type invoice_itemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoices?: boolean | invoicesDefaultArgs<ExtArgs>
    products_services?: boolean | products_servicesDefaultArgs<ExtArgs>
  }
  export type invoice_itemsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoices?: boolean | invoicesDefaultArgs<ExtArgs>
    products_services?: boolean | products_servicesDefaultArgs<ExtArgs>
  }

  export type $invoice_itemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "invoice_items"
    objects: {
      invoices: Prisma.$invoicesPayload<ExtArgs>
      products_services: Prisma.$products_servicesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      invoice_id: number
      product_id: number
      name_snapshot: string
      price_snapshot: number
      quantity: number
      total: number
    }, ExtArgs["result"]["invoice_items"]>
    composites: {}
  }

  type invoice_itemsGetPayload<S extends boolean | null | undefined | invoice_itemsDefaultArgs> = $Result.GetResult<Prisma.$invoice_itemsPayload, S>

  type invoice_itemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<invoice_itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Invoice_itemsCountAggregateInputType | true
    }

  export interface invoice_itemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['invoice_items'], meta: { name: 'invoice_items' } }
    /**
     * Find zero or one Invoice_items that matches the filter.
     * @param {invoice_itemsFindUniqueArgs} args - Arguments to find a Invoice_items
     * @example
     * // Get one Invoice_items
     * const invoice_items = await prisma.invoice_items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends invoice_itemsFindUniqueArgs>(args: SelectSubset<T, invoice_itemsFindUniqueArgs<ExtArgs>>): Prisma__invoice_itemsClient<$Result.GetResult<Prisma.$invoice_itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invoice_items that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {invoice_itemsFindUniqueOrThrowArgs} args - Arguments to find a Invoice_items
     * @example
     * // Get one Invoice_items
     * const invoice_items = await prisma.invoice_items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends invoice_itemsFindUniqueOrThrowArgs>(args: SelectSubset<T, invoice_itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__invoice_itemsClient<$Result.GetResult<Prisma.$invoice_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoice_itemsFindFirstArgs} args - Arguments to find a Invoice_items
     * @example
     * // Get one Invoice_items
     * const invoice_items = await prisma.invoice_items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends invoice_itemsFindFirstArgs>(args?: SelectSubset<T, invoice_itemsFindFirstArgs<ExtArgs>>): Prisma__invoice_itemsClient<$Result.GetResult<Prisma.$invoice_itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice_items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoice_itemsFindFirstOrThrowArgs} args - Arguments to find a Invoice_items
     * @example
     * // Get one Invoice_items
     * const invoice_items = await prisma.invoice_items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends invoice_itemsFindFirstOrThrowArgs>(args?: SelectSubset<T, invoice_itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__invoice_itemsClient<$Result.GetResult<Prisma.$invoice_itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invoice_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoice_itemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoice_items
     * const invoice_items = await prisma.invoice_items.findMany()
     * 
     * // Get first 10 Invoice_items
     * const invoice_items = await prisma.invoice_items.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoice_itemsWithIdOnly = await prisma.invoice_items.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends invoice_itemsFindManyArgs>(args?: SelectSubset<T, invoice_itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoice_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invoice_items.
     * @param {invoice_itemsCreateArgs} args - Arguments to create a Invoice_items.
     * @example
     * // Create one Invoice_items
     * const Invoice_items = await prisma.invoice_items.create({
     *   data: {
     *     // ... data to create a Invoice_items
     *   }
     * })
     * 
     */
    create<T extends invoice_itemsCreateArgs>(args: SelectSubset<T, invoice_itemsCreateArgs<ExtArgs>>): Prisma__invoice_itemsClient<$Result.GetResult<Prisma.$invoice_itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invoice_items.
     * @param {invoice_itemsCreateManyArgs} args - Arguments to create many Invoice_items.
     * @example
     * // Create many Invoice_items
     * const invoice_items = await prisma.invoice_items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends invoice_itemsCreateManyArgs>(args?: SelectSubset<T, invoice_itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invoice_items and returns the data saved in the database.
     * @param {invoice_itemsCreateManyAndReturnArgs} args - Arguments to create many Invoice_items.
     * @example
     * // Create many Invoice_items
     * const invoice_items = await prisma.invoice_items.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invoice_items and only return the `id`
     * const invoice_itemsWithIdOnly = await prisma.invoice_items.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends invoice_itemsCreateManyAndReturnArgs>(args?: SelectSubset<T, invoice_itemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoice_itemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invoice_items.
     * @param {invoice_itemsDeleteArgs} args - Arguments to delete one Invoice_items.
     * @example
     * // Delete one Invoice_items
     * const Invoice_items = await prisma.invoice_items.delete({
     *   where: {
     *     // ... filter to delete one Invoice_items
     *   }
     * })
     * 
     */
    delete<T extends invoice_itemsDeleteArgs>(args: SelectSubset<T, invoice_itemsDeleteArgs<ExtArgs>>): Prisma__invoice_itemsClient<$Result.GetResult<Prisma.$invoice_itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invoice_items.
     * @param {invoice_itemsUpdateArgs} args - Arguments to update one Invoice_items.
     * @example
     * // Update one Invoice_items
     * const invoice_items = await prisma.invoice_items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends invoice_itemsUpdateArgs>(args: SelectSubset<T, invoice_itemsUpdateArgs<ExtArgs>>): Prisma__invoice_itemsClient<$Result.GetResult<Prisma.$invoice_itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invoice_items.
     * @param {invoice_itemsDeleteManyArgs} args - Arguments to filter Invoice_items to delete.
     * @example
     * // Delete a few Invoice_items
     * const { count } = await prisma.invoice_items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends invoice_itemsDeleteManyArgs>(args?: SelectSubset<T, invoice_itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoice_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoice_itemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoice_items
     * const invoice_items = await prisma.invoice_items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends invoice_itemsUpdateManyArgs>(args: SelectSubset<T, invoice_itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoice_items and returns the data updated in the database.
     * @param {invoice_itemsUpdateManyAndReturnArgs} args - Arguments to update many Invoice_items.
     * @example
     * // Update many Invoice_items
     * const invoice_items = await prisma.invoice_items.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invoice_items and only return the `id`
     * const invoice_itemsWithIdOnly = await prisma.invoice_items.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends invoice_itemsUpdateManyAndReturnArgs>(args: SelectSubset<T, invoice_itemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoice_itemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invoice_items.
     * @param {invoice_itemsUpsertArgs} args - Arguments to update or create a Invoice_items.
     * @example
     * // Update or create a Invoice_items
     * const invoice_items = await prisma.invoice_items.upsert({
     *   create: {
     *     // ... data to create a Invoice_items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice_items we want to update
     *   }
     * })
     */
    upsert<T extends invoice_itemsUpsertArgs>(args: SelectSubset<T, invoice_itemsUpsertArgs<ExtArgs>>): Prisma__invoice_itemsClient<$Result.GetResult<Prisma.$invoice_itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invoice_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoice_itemsCountArgs} args - Arguments to filter Invoice_items to count.
     * @example
     * // Count the number of Invoice_items
     * const count = await prisma.invoice_items.count({
     *   where: {
     *     // ... the filter for the Invoice_items we want to count
     *   }
     * })
    **/
    count<T extends invoice_itemsCountArgs>(
      args?: Subset<T, invoice_itemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Invoice_itemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoice_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Invoice_itemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Invoice_itemsAggregateArgs>(args: Subset<T, Invoice_itemsAggregateArgs>): Prisma.PrismaPromise<GetInvoice_itemsAggregateType<T>>

    /**
     * Group by Invoice_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoice_itemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends invoice_itemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: invoice_itemsGroupByArgs['orderBy'] }
        : { orderBy?: invoice_itemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, invoice_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoice_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the invoice_items model
   */
  readonly fields: invoice_itemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for invoice_items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__invoice_itemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invoices<T extends invoicesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, invoicesDefaultArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    products_services<T extends products_servicesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, products_servicesDefaultArgs<ExtArgs>>): Prisma__products_servicesClient<$Result.GetResult<Prisma.$products_servicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the invoice_items model
   */
  interface invoice_itemsFieldRefs {
    readonly id: FieldRef<"invoice_items", 'Int'>
    readonly invoice_id: FieldRef<"invoice_items", 'Int'>
    readonly product_id: FieldRef<"invoice_items", 'Int'>
    readonly name_snapshot: FieldRef<"invoice_items", 'String'>
    readonly price_snapshot: FieldRef<"invoice_items", 'Int'>
    readonly quantity: FieldRef<"invoice_items", 'Int'>
    readonly total: FieldRef<"invoice_items", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * invoice_items findUnique
   */
  export type invoice_itemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_items
     */
    select?: invoice_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_items
     */
    omit?: invoice_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_itemsInclude<ExtArgs> | null
    /**
     * Filter, which invoice_items to fetch.
     */
    where: invoice_itemsWhereUniqueInput
  }

  /**
   * invoice_items findUniqueOrThrow
   */
  export type invoice_itemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_items
     */
    select?: invoice_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_items
     */
    omit?: invoice_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_itemsInclude<ExtArgs> | null
    /**
     * Filter, which invoice_items to fetch.
     */
    where: invoice_itemsWhereUniqueInput
  }

  /**
   * invoice_items findFirst
   */
  export type invoice_itemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_items
     */
    select?: invoice_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_items
     */
    omit?: invoice_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_itemsInclude<ExtArgs> | null
    /**
     * Filter, which invoice_items to fetch.
     */
    where?: invoice_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoice_items to fetch.
     */
    orderBy?: invoice_itemsOrderByWithRelationInput | invoice_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for invoice_items.
     */
    cursor?: invoice_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoice_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoice_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invoice_items.
     */
    distinct?: Invoice_itemsScalarFieldEnum | Invoice_itemsScalarFieldEnum[]
  }

  /**
   * invoice_items findFirstOrThrow
   */
  export type invoice_itemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_items
     */
    select?: invoice_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_items
     */
    omit?: invoice_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_itemsInclude<ExtArgs> | null
    /**
     * Filter, which invoice_items to fetch.
     */
    where?: invoice_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoice_items to fetch.
     */
    orderBy?: invoice_itemsOrderByWithRelationInput | invoice_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for invoice_items.
     */
    cursor?: invoice_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoice_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoice_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invoice_items.
     */
    distinct?: Invoice_itemsScalarFieldEnum | Invoice_itemsScalarFieldEnum[]
  }

  /**
   * invoice_items findMany
   */
  export type invoice_itemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_items
     */
    select?: invoice_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_items
     */
    omit?: invoice_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_itemsInclude<ExtArgs> | null
    /**
     * Filter, which invoice_items to fetch.
     */
    where?: invoice_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoice_items to fetch.
     */
    orderBy?: invoice_itemsOrderByWithRelationInput | invoice_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing invoice_items.
     */
    cursor?: invoice_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoice_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoice_items.
     */
    skip?: number
    distinct?: Invoice_itemsScalarFieldEnum | Invoice_itemsScalarFieldEnum[]
  }

  /**
   * invoice_items create
   */
  export type invoice_itemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_items
     */
    select?: invoice_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_items
     */
    omit?: invoice_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_itemsInclude<ExtArgs> | null
    /**
     * The data needed to create a invoice_items.
     */
    data: XOR<invoice_itemsCreateInput, invoice_itemsUncheckedCreateInput>
  }

  /**
   * invoice_items createMany
   */
  export type invoice_itemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many invoice_items.
     */
    data: invoice_itemsCreateManyInput | invoice_itemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * invoice_items createManyAndReturn
   */
  export type invoice_itemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_items
     */
    select?: invoice_itemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_items
     */
    omit?: invoice_itemsOmit<ExtArgs> | null
    /**
     * The data used to create many invoice_items.
     */
    data: invoice_itemsCreateManyInput | invoice_itemsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_itemsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * invoice_items update
   */
  export type invoice_itemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_items
     */
    select?: invoice_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_items
     */
    omit?: invoice_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_itemsInclude<ExtArgs> | null
    /**
     * The data needed to update a invoice_items.
     */
    data: XOR<invoice_itemsUpdateInput, invoice_itemsUncheckedUpdateInput>
    /**
     * Choose, which invoice_items to update.
     */
    where: invoice_itemsWhereUniqueInput
  }

  /**
   * invoice_items updateMany
   */
  export type invoice_itemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update invoice_items.
     */
    data: XOR<invoice_itemsUpdateManyMutationInput, invoice_itemsUncheckedUpdateManyInput>
    /**
     * Filter which invoice_items to update
     */
    where?: invoice_itemsWhereInput
    /**
     * Limit how many invoice_items to update.
     */
    limit?: number
  }

  /**
   * invoice_items updateManyAndReturn
   */
  export type invoice_itemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_items
     */
    select?: invoice_itemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_items
     */
    omit?: invoice_itemsOmit<ExtArgs> | null
    /**
     * The data used to update invoice_items.
     */
    data: XOR<invoice_itemsUpdateManyMutationInput, invoice_itemsUncheckedUpdateManyInput>
    /**
     * Filter which invoice_items to update
     */
    where?: invoice_itemsWhereInput
    /**
     * Limit how many invoice_items to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_itemsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * invoice_items upsert
   */
  export type invoice_itemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_items
     */
    select?: invoice_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_items
     */
    omit?: invoice_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_itemsInclude<ExtArgs> | null
    /**
     * The filter to search for the invoice_items to update in case it exists.
     */
    where: invoice_itemsWhereUniqueInput
    /**
     * In case the invoice_items found by the `where` argument doesn't exist, create a new invoice_items with this data.
     */
    create: XOR<invoice_itemsCreateInput, invoice_itemsUncheckedCreateInput>
    /**
     * In case the invoice_items was found with the provided `where` argument, update it with this data.
     */
    update: XOR<invoice_itemsUpdateInput, invoice_itemsUncheckedUpdateInput>
  }

  /**
   * invoice_items delete
   */
  export type invoice_itemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_items
     */
    select?: invoice_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_items
     */
    omit?: invoice_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_itemsInclude<ExtArgs> | null
    /**
     * Filter which invoice_items to delete.
     */
    where: invoice_itemsWhereUniqueInput
  }

  /**
   * invoice_items deleteMany
   */
  export type invoice_itemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invoice_items to delete
     */
    where?: invoice_itemsWhereInput
    /**
     * Limit how many invoice_items to delete.
     */
    limit?: number
  }

  /**
   * invoice_items without action
   */
  export type invoice_itemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_items
     */
    select?: invoice_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_items
     */
    omit?: invoice_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_itemsInclude<ExtArgs> | null
  }


  /**
   * Model invoices
   */

  export type AggregateInvoices = {
    _count: InvoicesCountAggregateOutputType | null
    _avg: InvoicesAvgAggregateOutputType | null
    _sum: InvoicesSumAggregateOutputType | null
    _min: InvoicesMinAggregateOutputType | null
    _max: InvoicesMaxAggregateOutputType | null
  }

  export type InvoicesAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    client_id: number | null
    total: number | null
  }

  export type InvoicesSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    client_id: number | null
    total: number | null
  }

  export type InvoicesMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    client_id: number | null
    invoice_number: string | null
    start_date: Date | null
    due_date: Date | null
    notes: string | null
    status: $Enums.Status | null
    total: number | null
    is_deleted: boolean | null
    payment_method: $Enums.PaymentMethod | null
  }

  export type InvoicesMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    client_id: number | null
    invoice_number: string | null
    start_date: Date | null
    due_date: Date | null
    notes: string | null
    status: $Enums.Status | null
    total: number | null
    is_deleted: boolean | null
    payment_method: $Enums.PaymentMethod | null
  }

  export type InvoicesCountAggregateOutputType = {
    id: number
    user_id: number
    client_id: number
    invoice_number: number
    start_date: number
    due_date: number
    notes: number
    status: number
    total: number
    is_deleted: number
    payment_method: number
    _all: number
  }


  export type InvoicesAvgAggregateInputType = {
    id?: true
    user_id?: true
    client_id?: true
    total?: true
  }

  export type InvoicesSumAggregateInputType = {
    id?: true
    user_id?: true
    client_id?: true
    total?: true
  }

  export type InvoicesMinAggregateInputType = {
    id?: true
    user_id?: true
    client_id?: true
    invoice_number?: true
    start_date?: true
    due_date?: true
    notes?: true
    status?: true
    total?: true
    is_deleted?: true
    payment_method?: true
  }

  export type InvoicesMaxAggregateInputType = {
    id?: true
    user_id?: true
    client_id?: true
    invoice_number?: true
    start_date?: true
    due_date?: true
    notes?: true
    status?: true
    total?: true
    is_deleted?: true
    payment_method?: true
  }

  export type InvoicesCountAggregateInputType = {
    id?: true
    user_id?: true
    client_id?: true
    invoice_number?: true
    start_date?: true
    due_date?: true
    notes?: true
    status?: true
    total?: true
    is_deleted?: true
    payment_method?: true
    _all?: true
  }

  export type InvoicesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invoices to aggregate.
     */
    where?: invoicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoicesOrderByWithRelationInput | invoicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: invoicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned invoices
    **/
    _count?: true | InvoicesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoicesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoicesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoicesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoicesMaxAggregateInputType
  }

  export type GetInvoicesAggregateType<T extends InvoicesAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoices[P]>
      : GetScalarType<T[P], AggregateInvoices[P]>
  }




  export type invoicesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invoicesWhereInput
    orderBy?: invoicesOrderByWithAggregationInput | invoicesOrderByWithAggregationInput[]
    by: InvoicesScalarFieldEnum[] | InvoicesScalarFieldEnum
    having?: invoicesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoicesCountAggregateInputType | true
    _avg?: InvoicesAvgAggregateInputType
    _sum?: InvoicesSumAggregateInputType
    _min?: InvoicesMinAggregateInputType
    _max?: InvoicesMaxAggregateInputType
  }

  export type InvoicesGroupByOutputType = {
    id: number
    user_id: number
    client_id: number
    invoice_number: string
    start_date: Date
    due_date: Date
    notes: string | null
    status: $Enums.Status
    total: number
    is_deleted: boolean
    payment_method: $Enums.PaymentMethod
    _count: InvoicesCountAggregateOutputType | null
    _avg: InvoicesAvgAggregateOutputType | null
    _sum: InvoicesSumAggregateOutputType | null
    _min: InvoicesMinAggregateOutputType | null
    _max: InvoicesMaxAggregateOutputType | null
  }

  type GetInvoicesGroupByPayload<T extends invoicesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoicesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoicesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoicesGroupByOutputType[P]>
            : GetScalarType<T[P], InvoicesGroupByOutputType[P]>
        }
      >
    >


  export type invoicesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    client_id?: boolean
    invoice_number?: boolean
    start_date?: boolean
    due_date?: boolean
    notes?: boolean
    status?: boolean
    total?: boolean
    is_deleted?: boolean
    payment_method?: boolean
    invoice_items?: boolean | invoices$invoice_itemsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    clients?: boolean | clientsDefaultArgs<ExtArgs>
    transaction?: boolean | invoices$transactionArgs<ExtArgs>
    _count?: boolean | InvoicesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoices"]>

  export type invoicesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    client_id?: boolean
    invoice_number?: boolean
    start_date?: boolean
    due_date?: boolean
    notes?: boolean
    status?: boolean
    total?: boolean
    is_deleted?: boolean
    payment_method?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    clients?: boolean | clientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoices"]>

  export type invoicesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    client_id?: boolean
    invoice_number?: boolean
    start_date?: boolean
    due_date?: boolean
    notes?: boolean
    status?: boolean
    total?: boolean
    is_deleted?: boolean
    payment_method?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    clients?: boolean | clientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoices"]>

  export type invoicesSelectScalar = {
    id?: boolean
    user_id?: boolean
    client_id?: boolean
    invoice_number?: boolean
    start_date?: boolean
    due_date?: boolean
    notes?: boolean
    status?: boolean
    total?: boolean
    is_deleted?: boolean
    payment_method?: boolean
  }

  export type invoicesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "client_id" | "invoice_number" | "start_date" | "due_date" | "notes" | "status" | "total" | "is_deleted" | "payment_method", ExtArgs["result"]["invoices"]>
  export type invoicesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice_items?: boolean | invoices$invoice_itemsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    clients?: boolean | clientsDefaultArgs<ExtArgs>
    transaction?: boolean | invoices$transactionArgs<ExtArgs>
    _count?: boolean | InvoicesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type invoicesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    clients?: boolean | clientsDefaultArgs<ExtArgs>
  }
  export type invoicesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    clients?: boolean | clientsDefaultArgs<ExtArgs>
  }

  export type $invoicesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "invoices"
    objects: {
      invoice_items: Prisma.$invoice_itemsPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>
      clients: Prisma.$clientsPayload<ExtArgs>
      transaction: Prisma.$transactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      client_id: number
      invoice_number: string
      start_date: Date
      due_date: Date
      notes: string | null
      status: $Enums.Status
      total: number
      is_deleted: boolean
      payment_method: $Enums.PaymentMethod
    }, ExtArgs["result"]["invoices"]>
    composites: {}
  }

  type invoicesGetPayload<S extends boolean | null | undefined | invoicesDefaultArgs> = $Result.GetResult<Prisma.$invoicesPayload, S>

  type invoicesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<invoicesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvoicesCountAggregateInputType | true
    }

  export interface invoicesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['invoices'], meta: { name: 'invoices' } }
    /**
     * Find zero or one Invoices that matches the filter.
     * @param {invoicesFindUniqueArgs} args - Arguments to find a Invoices
     * @example
     * // Get one Invoices
     * const invoices = await prisma.invoices.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends invoicesFindUniqueArgs>(args: SelectSubset<T, invoicesFindUniqueArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invoices that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {invoicesFindUniqueOrThrowArgs} args - Arguments to find a Invoices
     * @example
     * // Get one Invoices
     * const invoices = await prisma.invoices.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends invoicesFindUniqueOrThrowArgs>(args: SelectSubset<T, invoicesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicesFindFirstArgs} args - Arguments to find a Invoices
     * @example
     * // Get one Invoices
     * const invoices = await prisma.invoices.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends invoicesFindFirstArgs>(args?: SelectSubset<T, invoicesFindFirstArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoices that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicesFindFirstOrThrowArgs} args - Arguments to find a Invoices
     * @example
     * // Get one Invoices
     * const invoices = await prisma.invoices.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends invoicesFindFirstOrThrowArgs>(args?: SelectSubset<T, invoicesFindFirstOrThrowArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoices.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoices.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoicesWithIdOnly = await prisma.invoices.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends invoicesFindManyArgs>(args?: SelectSubset<T, invoicesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invoices.
     * @param {invoicesCreateArgs} args - Arguments to create a Invoices.
     * @example
     * // Create one Invoices
     * const Invoices = await prisma.invoices.create({
     *   data: {
     *     // ... data to create a Invoices
     *   }
     * })
     * 
     */
    create<T extends invoicesCreateArgs>(args: SelectSubset<T, invoicesCreateArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invoices.
     * @param {invoicesCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoices = await prisma.invoices.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends invoicesCreateManyArgs>(args?: SelectSubset<T, invoicesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invoices and returns the data saved in the database.
     * @param {invoicesCreateManyAndReturnArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoices = await prisma.invoices.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invoices and only return the `id`
     * const invoicesWithIdOnly = await prisma.invoices.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends invoicesCreateManyAndReturnArgs>(args?: SelectSubset<T, invoicesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invoices.
     * @param {invoicesDeleteArgs} args - Arguments to delete one Invoices.
     * @example
     * // Delete one Invoices
     * const Invoices = await prisma.invoices.delete({
     *   where: {
     *     // ... filter to delete one Invoices
     *   }
     * })
     * 
     */
    delete<T extends invoicesDeleteArgs>(args: SelectSubset<T, invoicesDeleteArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invoices.
     * @param {invoicesUpdateArgs} args - Arguments to update one Invoices.
     * @example
     * // Update one Invoices
     * const invoices = await prisma.invoices.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends invoicesUpdateArgs>(args: SelectSubset<T, invoicesUpdateArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invoices.
     * @param {invoicesDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoices.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends invoicesDeleteManyArgs>(args?: SelectSubset<T, invoicesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoices = await prisma.invoices.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends invoicesUpdateManyArgs>(args: SelectSubset<T, invoicesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices and returns the data updated in the database.
     * @param {invoicesUpdateManyAndReturnArgs} args - Arguments to update many Invoices.
     * @example
     * // Update many Invoices
     * const invoices = await prisma.invoices.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invoices and only return the `id`
     * const invoicesWithIdOnly = await prisma.invoices.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends invoicesUpdateManyAndReturnArgs>(args: SelectSubset<T, invoicesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invoices.
     * @param {invoicesUpsertArgs} args - Arguments to update or create a Invoices.
     * @example
     * // Update or create a Invoices
     * const invoices = await prisma.invoices.upsert({
     *   create: {
     *     // ... data to create a Invoices
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoices we want to update
     *   }
     * })
     */
    upsert<T extends invoicesUpsertArgs>(args: SelectSubset<T, invoicesUpsertArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicesCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoices.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends invoicesCountArgs>(
      args?: Subset<T, invoicesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoicesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoicesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvoicesAggregateArgs>(args: Subset<T, InvoicesAggregateArgs>): Prisma.PrismaPromise<GetInvoicesAggregateType<T>>

    /**
     * Group by Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends invoicesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: invoicesGroupByArgs['orderBy'] }
        : { orderBy?: invoicesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, invoicesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoicesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the invoices model
   */
  readonly fields: invoicesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for invoices.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__invoicesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invoice_items<T extends invoices$invoice_itemsArgs<ExtArgs> = {}>(args?: Subset<T, invoices$invoice_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoice_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    clients<T extends clientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, clientsDefaultArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transaction<T extends invoices$transactionArgs<ExtArgs> = {}>(args?: Subset<T, invoices$transactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the invoices model
   */
  interface invoicesFieldRefs {
    readonly id: FieldRef<"invoices", 'Int'>
    readonly user_id: FieldRef<"invoices", 'Int'>
    readonly client_id: FieldRef<"invoices", 'Int'>
    readonly invoice_number: FieldRef<"invoices", 'String'>
    readonly start_date: FieldRef<"invoices", 'DateTime'>
    readonly due_date: FieldRef<"invoices", 'DateTime'>
    readonly notes: FieldRef<"invoices", 'String'>
    readonly status: FieldRef<"invoices", 'Status'>
    readonly total: FieldRef<"invoices", 'Int'>
    readonly is_deleted: FieldRef<"invoices", 'Boolean'>
    readonly payment_method: FieldRef<"invoices", 'PaymentMethod'>
  }
    

  // Custom InputTypes
  /**
   * invoices findUnique
   */
  export type invoicesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * Filter, which invoices to fetch.
     */
    where: invoicesWhereUniqueInput
  }

  /**
   * invoices findUniqueOrThrow
   */
  export type invoicesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * Filter, which invoices to fetch.
     */
    where: invoicesWhereUniqueInput
  }

  /**
   * invoices findFirst
   */
  export type invoicesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * Filter, which invoices to fetch.
     */
    where?: invoicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoicesOrderByWithRelationInput | invoicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for invoices.
     */
    cursor?: invoicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invoices.
     */
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[]
  }

  /**
   * invoices findFirstOrThrow
   */
  export type invoicesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * Filter, which invoices to fetch.
     */
    where?: invoicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoicesOrderByWithRelationInput | invoicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for invoices.
     */
    cursor?: invoicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invoices.
     */
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[]
  }

  /**
   * invoices findMany
   */
  export type invoicesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * Filter, which invoices to fetch.
     */
    where?: invoicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoicesOrderByWithRelationInput | invoicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing invoices.
     */
    cursor?: invoicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoices.
     */
    skip?: number
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[]
  }

  /**
   * invoices create
   */
  export type invoicesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * The data needed to create a invoices.
     */
    data: XOR<invoicesCreateInput, invoicesUncheckedCreateInput>
  }

  /**
   * invoices createMany
   */
  export type invoicesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many invoices.
     */
    data: invoicesCreateManyInput | invoicesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * invoices createManyAndReturn
   */
  export type invoicesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * The data used to create many invoices.
     */
    data: invoicesCreateManyInput | invoicesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * invoices update
   */
  export type invoicesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * The data needed to update a invoices.
     */
    data: XOR<invoicesUpdateInput, invoicesUncheckedUpdateInput>
    /**
     * Choose, which invoices to update.
     */
    where: invoicesWhereUniqueInput
  }

  /**
   * invoices updateMany
   */
  export type invoicesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update invoices.
     */
    data: XOR<invoicesUpdateManyMutationInput, invoicesUncheckedUpdateManyInput>
    /**
     * Filter which invoices to update
     */
    where?: invoicesWhereInput
    /**
     * Limit how many invoices to update.
     */
    limit?: number
  }

  /**
   * invoices updateManyAndReturn
   */
  export type invoicesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * The data used to update invoices.
     */
    data: XOR<invoicesUpdateManyMutationInput, invoicesUncheckedUpdateManyInput>
    /**
     * Filter which invoices to update
     */
    where?: invoicesWhereInput
    /**
     * Limit how many invoices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * invoices upsert
   */
  export type invoicesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * The filter to search for the invoices to update in case it exists.
     */
    where: invoicesWhereUniqueInput
    /**
     * In case the invoices found by the `where` argument doesn't exist, create a new invoices with this data.
     */
    create: XOR<invoicesCreateInput, invoicesUncheckedCreateInput>
    /**
     * In case the invoices was found with the provided `where` argument, update it with this data.
     */
    update: XOR<invoicesUpdateInput, invoicesUncheckedUpdateInput>
  }

  /**
   * invoices delete
   */
  export type invoicesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * Filter which invoices to delete.
     */
    where: invoicesWhereUniqueInput
  }

  /**
   * invoices deleteMany
   */
  export type invoicesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invoices to delete
     */
    where?: invoicesWhereInput
    /**
     * Limit how many invoices to delete.
     */
    limit?: number
  }

  /**
   * invoices.invoice_items
   */
  export type invoices$invoice_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_items
     */
    select?: invoice_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_items
     */
    omit?: invoice_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_itemsInclude<ExtArgs> | null
    where?: invoice_itemsWhereInput
    orderBy?: invoice_itemsOrderByWithRelationInput | invoice_itemsOrderByWithRelationInput[]
    cursor?: invoice_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Invoice_itemsScalarFieldEnum | Invoice_itemsScalarFieldEnum[]
  }

  /**
   * invoices.transaction
   */
  export type invoices$transactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    where?: transactionWhereInput
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    cursor?: transactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * invoices without action
   */
  export type invoicesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
  }


  /**
   * Model products_services
   */

  export type AggregateProducts_services = {
    _count: Products_servicesCountAggregateOutputType | null
    _avg: Products_servicesAvgAggregateOutputType | null
    _sum: Products_servicesSumAggregateOutputType | null
    _min: Products_servicesMinAggregateOutputType | null
    _max: Products_servicesMaxAggregateOutputType | null
  }

  export type Products_servicesAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    price: number | null
  }

  export type Products_servicesSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    price: number | null
  }

  export type Products_servicesMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    name: string | null
    description: string | null
    price: number | null
    is_deleted: boolean | null
    type: $Enums.Type | null
    unit: $Enums.Unit | null
  }

  export type Products_servicesMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    name: string | null
    description: string | null
    price: number | null
    is_deleted: boolean | null
    type: $Enums.Type | null
    unit: $Enums.Unit | null
  }

  export type Products_servicesCountAggregateOutputType = {
    id: number
    user_id: number
    name: number
    description: number
    price: number
    is_deleted: number
    type: number
    unit: number
    _all: number
  }


  export type Products_servicesAvgAggregateInputType = {
    id?: true
    user_id?: true
    price?: true
  }

  export type Products_servicesSumAggregateInputType = {
    id?: true
    user_id?: true
    price?: true
  }

  export type Products_servicesMinAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    description?: true
    price?: true
    is_deleted?: true
    type?: true
    unit?: true
  }

  export type Products_servicesMaxAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    description?: true
    price?: true
    is_deleted?: true
    type?: true
    unit?: true
  }

  export type Products_servicesCountAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    description?: true
    price?: true
    is_deleted?: true
    type?: true
    unit?: true
    _all?: true
  }

  export type Products_servicesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products_services to aggregate.
     */
    where?: products_servicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products_services to fetch.
     */
    orderBy?: products_servicesOrderByWithRelationInput | products_servicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: products_servicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products_services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products_services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products_services
    **/
    _count?: true | Products_servicesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Products_servicesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Products_servicesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Products_servicesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Products_servicesMaxAggregateInputType
  }

  export type GetProducts_servicesAggregateType<T extends Products_servicesAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts_services]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts_services[P]>
      : GetScalarType<T[P], AggregateProducts_services[P]>
  }




  export type products_servicesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: products_servicesWhereInput
    orderBy?: products_servicesOrderByWithAggregationInput | products_servicesOrderByWithAggregationInput[]
    by: Products_servicesScalarFieldEnum[] | Products_servicesScalarFieldEnum
    having?: products_servicesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Products_servicesCountAggregateInputType | true
    _avg?: Products_servicesAvgAggregateInputType
    _sum?: Products_servicesSumAggregateInputType
    _min?: Products_servicesMinAggregateInputType
    _max?: Products_servicesMaxAggregateInputType
  }

  export type Products_servicesGroupByOutputType = {
    id: number
    user_id: number
    name: string
    description: string
    price: number
    is_deleted: boolean
    type: $Enums.Type
    unit: $Enums.Unit
    _count: Products_servicesCountAggregateOutputType | null
    _avg: Products_servicesAvgAggregateOutputType | null
    _sum: Products_servicesSumAggregateOutputType | null
    _min: Products_servicesMinAggregateOutputType | null
    _max: Products_servicesMaxAggregateOutputType | null
  }

  type GetProducts_servicesGroupByPayload<T extends products_servicesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Products_servicesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Products_servicesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Products_servicesGroupByOutputType[P]>
            : GetScalarType<T[P], Products_servicesGroupByOutputType[P]>
        }
      >
    >


  export type products_servicesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    is_deleted?: boolean
    type?: boolean
    unit?: boolean
    invoice_items?: boolean | products_services$invoice_itemsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    recurring_invoice_item?: boolean | products_services$recurring_invoice_itemArgs<ExtArgs>
    _count?: boolean | Products_servicesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products_services"]>

  export type products_servicesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    is_deleted?: boolean
    type?: boolean
    unit?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products_services"]>

  export type products_servicesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    is_deleted?: boolean
    type?: boolean
    unit?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products_services"]>

  export type products_servicesSelectScalar = {
    id?: boolean
    user_id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    is_deleted?: boolean
    type?: boolean
    unit?: boolean
  }

  export type products_servicesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "name" | "description" | "price" | "is_deleted" | "type" | "unit", ExtArgs["result"]["products_services"]>
  export type products_servicesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice_items?: boolean | products_services$invoice_itemsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    recurring_invoice_item?: boolean | products_services$recurring_invoice_itemArgs<ExtArgs>
    _count?: boolean | Products_servicesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type products_servicesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type products_servicesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $products_servicesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "products_services"
    objects: {
      invoice_items: Prisma.$invoice_itemsPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>
      recurring_invoice_item: Prisma.$recurring_invoice_itemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      name: string
      description: string
      price: number
      is_deleted: boolean
      type: $Enums.Type
      unit: $Enums.Unit
    }, ExtArgs["result"]["products_services"]>
    composites: {}
  }

  type products_servicesGetPayload<S extends boolean | null | undefined | products_servicesDefaultArgs> = $Result.GetResult<Prisma.$products_servicesPayload, S>

  type products_servicesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<products_servicesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Products_servicesCountAggregateInputType | true
    }

  export interface products_servicesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['products_services'], meta: { name: 'products_services' } }
    /**
     * Find zero or one Products_services that matches the filter.
     * @param {products_servicesFindUniqueArgs} args - Arguments to find a Products_services
     * @example
     * // Get one Products_services
     * const products_services = await prisma.products_services.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends products_servicesFindUniqueArgs>(args: SelectSubset<T, products_servicesFindUniqueArgs<ExtArgs>>): Prisma__products_servicesClient<$Result.GetResult<Prisma.$products_servicesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products_services that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {products_servicesFindUniqueOrThrowArgs} args - Arguments to find a Products_services
     * @example
     * // Get one Products_services
     * const products_services = await prisma.products_services.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends products_servicesFindUniqueOrThrowArgs>(args: SelectSubset<T, products_servicesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__products_servicesClient<$Result.GetResult<Prisma.$products_servicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products_services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {products_servicesFindFirstArgs} args - Arguments to find a Products_services
     * @example
     * // Get one Products_services
     * const products_services = await prisma.products_services.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends products_servicesFindFirstArgs>(args?: SelectSubset<T, products_servicesFindFirstArgs<ExtArgs>>): Prisma__products_servicesClient<$Result.GetResult<Prisma.$products_servicesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products_services that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {products_servicesFindFirstOrThrowArgs} args - Arguments to find a Products_services
     * @example
     * // Get one Products_services
     * const products_services = await prisma.products_services.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends products_servicesFindFirstOrThrowArgs>(args?: SelectSubset<T, products_servicesFindFirstOrThrowArgs<ExtArgs>>): Prisma__products_servicesClient<$Result.GetResult<Prisma.$products_servicesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products_services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {products_servicesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products_services
     * const products_services = await prisma.products_services.findMany()
     * 
     * // Get first 10 Products_services
     * const products_services = await prisma.products_services.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const products_servicesWithIdOnly = await prisma.products_services.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends products_servicesFindManyArgs>(args?: SelectSubset<T, products_servicesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$products_servicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products_services.
     * @param {products_servicesCreateArgs} args - Arguments to create a Products_services.
     * @example
     * // Create one Products_services
     * const Products_services = await prisma.products_services.create({
     *   data: {
     *     // ... data to create a Products_services
     *   }
     * })
     * 
     */
    create<T extends products_servicesCreateArgs>(args: SelectSubset<T, products_servicesCreateArgs<ExtArgs>>): Prisma__products_servicesClient<$Result.GetResult<Prisma.$products_servicesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products_services.
     * @param {products_servicesCreateManyArgs} args - Arguments to create many Products_services.
     * @example
     * // Create many Products_services
     * const products_services = await prisma.products_services.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends products_servicesCreateManyArgs>(args?: SelectSubset<T, products_servicesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products_services and returns the data saved in the database.
     * @param {products_servicesCreateManyAndReturnArgs} args - Arguments to create many Products_services.
     * @example
     * // Create many Products_services
     * const products_services = await prisma.products_services.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products_services and only return the `id`
     * const products_servicesWithIdOnly = await prisma.products_services.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends products_servicesCreateManyAndReturnArgs>(args?: SelectSubset<T, products_servicesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$products_servicesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Products_services.
     * @param {products_servicesDeleteArgs} args - Arguments to delete one Products_services.
     * @example
     * // Delete one Products_services
     * const Products_services = await prisma.products_services.delete({
     *   where: {
     *     // ... filter to delete one Products_services
     *   }
     * })
     * 
     */
    delete<T extends products_servicesDeleteArgs>(args: SelectSubset<T, products_servicesDeleteArgs<ExtArgs>>): Prisma__products_servicesClient<$Result.GetResult<Prisma.$products_servicesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products_services.
     * @param {products_servicesUpdateArgs} args - Arguments to update one Products_services.
     * @example
     * // Update one Products_services
     * const products_services = await prisma.products_services.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends products_servicesUpdateArgs>(args: SelectSubset<T, products_servicesUpdateArgs<ExtArgs>>): Prisma__products_servicesClient<$Result.GetResult<Prisma.$products_servicesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products_services.
     * @param {products_servicesDeleteManyArgs} args - Arguments to filter Products_services to delete.
     * @example
     * // Delete a few Products_services
     * const { count } = await prisma.products_services.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends products_servicesDeleteManyArgs>(args?: SelectSubset<T, products_servicesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products_services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {products_servicesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products_services
     * const products_services = await prisma.products_services.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends products_servicesUpdateManyArgs>(args: SelectSubset<T, products_servicesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products_services and returns the data updated in the database.
     * @param {products_servicesUpdateManyAndReturnArgs} args - Arguments to update many Products_services.
     * @example
     * // Update many Products_services
     * const products_services = await prisma.products_services.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products_services and only return the `id`
     * const products_servicesWithIdOnly = await prisma.products_services.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends products_servicesUpdateManyAndReturnArgs>(args: SelectSubset<T, products_servicesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$products_servicesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Products_services.
     * @param {products_servicesUpsertArgs} args - Arguments to update or create a Products_services.
     * @example
     * // Update or create a Products_services
     * const products_services = await prisma.products_services.upsert({
     *   create: {
     *     // ... data to create a Products_services
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products_services we want to update
     *   }
     * })
     */
    upsert<T extends products_servicesUpsertArgs>(args: SelectSubset<T, products_servicesUpsertArgs<ExtArgs>>): Prisma__products_servicesClient<$Result.GetResult<Prisma.$products_servicesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products_services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {products_servicesCountArgs} args - Arguments to filter Products_services to count.
     * @example
     * // Count the number of Products_services
     * const count = await prisma.products_services.count({
     *   where: {
     *     // ... the filter for the Products_services we want to count
     *   }
     * })
    **/
    count<T extends products_servicesCountArgs>(
      args?: Subset<T, products_servicesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Products_servicesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products_services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Products_servicesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Products_servicesAggregateArgs>(args: Subset<T, Products_servicesAggregateArgs>): Prisma.PrismaPromise<GetProducts_servicesAggregateType<T>>

    /**
     * Group by Products_services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {products_servicesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends products_servicesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: products_servicesGroupByArgs['orderBy'] }
        : { orderBy?: products_servicesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, products_servicesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProducts_servicesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the products_services model
   */
  readonly fields: products_servicesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for products_services.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__products_servicesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invoice_items<T extends products_services$invoice_itemsArgs<ExtArgs> = {}>(args?: Subset<T, products_services$invoice_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoice_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recurring_invoice_item<T extends products_services$recurring_invoice_itemArgs<ExtArgs> = {}>(args?: Subset<T, products_services$recurring_invoice_itemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recurring_invoice_itemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the products_services model
   */
  interface products_servicesFieldRefs {
    readonly id: FieldRef<"products_services", 'Int'>
    readonly user_id: FieldRef<"products_services", 'Int'>
    readonly name: FieldRef<"products_services", 'String'>
    readonly description: FieldRef<"products_services", 'String'>
    readonly price: FieldRef<"products_services", 'Int'>
    readonly is_deleted: FieldRef<"products_services", 'Boolean'>
    readonly type: FieldRef<"products_services", 'Type'>
    readonly unit: FieldRef<"products_services", 'Unit'>
  }
    

  // Custom InputTypes
  /**
   * products_services findUnique
   */
  export type products_servicesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products_services
     */
    select?: products_servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products_services
     */
    omit?: products_servicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: products_servicesInclude<ExtArgs> | null
    /**
     * Filter, which products_services to fetch.
     */
    where: products_servicesWhereUniqueInput
  }

  /**
   * products_services findUniqueOrThrow
   */
  export type products_servicesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products_services
     */
    select?: products_servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products_services
     */
    omit?: products_servicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: products_servicesInclude<ExtArgs> | null
    /**
     * Filter, which products_services to fetch.
     */
    where: products_servicesWhereUniqueInput
  }

  /**
   * products_services findFirst
   */
  export type products_servicesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products_services
     */
    select?: products_servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products_services
     */
    omit?: products_servicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: products_servicesInclude<ExtArgs> | null
    /**
     * Filter, which products_services to fetch.
     */
    where?: products_servicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products_services to fetch.
     */
    orderBy?: products_servicesOrderByWithRelationInput | products_servicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products_services.
     */
    cursor?: products_servicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products_services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products_services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products_services.
     */
    distinct?: Products_servicesScalarFieldEnum | Products_servicesScalarFieldEnum[]
  }

  /**
   * products_services findFirstOrThrow
   */
  export type products_servicesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products_services
     */
    select?: products_servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products_services
     */
    omit?: products_servicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: products_servicesInclude<ExtArgs> | null
    /**
     * Filter, which products_services to fetch.
     */
    where?: products_servicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products_services to fetch.
     */
    orderBy?: products_servicesOrderByWithRelationInput | products_servicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products_services.
     */
    cursor?: products_servicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products_services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products_services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products_services.
     */
    distinct?: Products_servicesScalarFieldEnum | Products_servicesScalarFieldEnum[]
  }

  /**
   * products_services findMany
   */
  export type products_servicesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products_services
     */
    select?: products_servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products_services
     */
    omit?: products_servicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: products_servicesInclude<ExtArgs> | null
    /**
     * Filter, which products_services to fetch.
     */
    where?: products_servicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products_services to fetch.
     */
    orderBy?: products_servicesOrderByWithRelationInput | products_servicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products_services.
     */
    cursor?: products_servicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products_services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products_services.
     */
    skip?: number
    distinct?: Products_servicesScalarFieldEnum | Products_servicesScalarFieldEnum[]
  }

  /**
   * products_services create
   */
  export type products_servicesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products_services
     */
    select?: products_servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products_services
     */
    omit?: products_servicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: products_servicesInclude<ExtArgs> | null
    /**
     * The data needed to create a products_services.
     */
    data: XOR<products_servicesCreateInput, products_servicesUncheckedCreateInput>
  }

  /**
   * products_services createMany
   */
  export type products_servicesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products_services.
     */
    data: products_servicesCreateManyInput | products_servicesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * products_services createManyAndReturn
   */
  export type products_servicesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products_services
     */
    select?: products_servicesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the products_services
     */
    omit?: products_servicesOmit<ExtArgs> | null
    /**
     * The data used to create many products_services.
     */
    data: products_servicesCreateManyInput | products_servicesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: products_servicesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * products_services update
   */
  export type products_servicesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products_services
     */
    select?: products_servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products_services
     */
    omit?: products_servicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: products_servicesInclude<ExtArgs> | null
    /**
     * The data needed to update a products_services.
     */
    data: XOR<products_servicesUpdateInput, products_servicesUncheckedUpdateInput>
    /**
     * Choose, which products_services to update.
     */
    where: products_servicesWhereUniqueInput
  }

  /**
   * products_services updateMany
   */
  export type products_servicesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products_services.
     */
    data: XOR<products_servicesUpdateManyMutationInput, products_servicesUncheckedUpdateManyInput>
    /**
     * Filter which products_services to update
     */
    where?: products_servicesWhereInput
    /**
     * Limit how many products_services to update.
     */
    limit?: number
  }

  /**
   * products_services updateManyAndReturn
   */
  export type products_servicesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products_services
     */
    select?: products_servicesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the products_services
     */
    omit?: products_servicesOmit<ExtArgs> | null
    /**
     * The data used to update products_services.
     */
    data: XOR<products_servicesUpdateManyMutationInput, products_servicesUncheckedUpdateManyInput>
    /**
     * Filter which products_services to update
     */
    where?: products_servicesWhereInput
    /**
     * Limit how many products_services to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: products_servicesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * products_services upsert
   */
  export type products_servicesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products_services
     */
    select?: products_servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products_services
     */
    omit?: products_servicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: products_servicesInclude<ExtArgs> | null
    /**
     * The filter to search for the products_services to update in case it exists.
     */
    where: products_servicesWhereUniqueInput
    /**
     * In case the products_services found by the `where` argument doesn't exist, create a new products_services with this data.
     */
    create: XOR<products_servicesCreateInput, products_servicesUncheckedCreateInput>
    /**
     * In case the products_services was found with the provided `where` argument, update it with this data.
     */
    update: XOR<products_servicesUpdateInput, products_servicesUncheckedUpdateInput>
  }

  /**
   * products_services delete
   */
  export type products_servicesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products_services
     */
    select?: products_servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products_services
     */
    omit?: products_servicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: products_servicesInclude<ExtArgs> | null
    /**
     * Filter which products_services to delete.
     */
    where: products_servicesWhereUniqueInput
  }

  /**
   * products_services deleteMany
   */
  export type products_servicesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products_services to delete
     */
    where?: products_servicesWhereInput
    /**
     * Limit how many products_services to delete.
     */
    limit?: number
  }

  /**
   * products_services.invoice_items
   */
  export type products_services$invoice_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_items
     */
    select?: invoice_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_items
     */
    omit?: invoice_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_itemsInclude<ExtArgs> | null
    where?: invoice_itemsWhereInput
    orderBy?: invoice_itemsOrderByWithRelationInput | invoice_itemsOrderByWithRelationInput[]
    cursor?: invoice_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Invoice_itemsScalarFieldEnum | Invoice_itemsScalarFieldEnum[]
  }

  /**
   * products_services.recurring_invoice_item
   */
  export type products_services$recurring_invoice_itemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurring_invoice_item
     */
    select?: recurring_invoice_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recurring_invoice_item
     */
    omit?: recurring_invoice_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recurring_invoice_itemInclude<ExtArgs> | null
    where?: recurring_invoice_itemWhereInput
    orderBy?: recurring_invoice_itemOrderByWithRelationInput | recurring_invoice_itemOrderByWithRelationInput[]
    cursor?: recurring_invoice_itemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Recurring_invoice_itemScalarFieldEnum | Recurring_invoice_itemScalarFieldEnum[]
  }

  /**
   * products_services without action
   */
  export type products_servicesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products_services
     */
    select?: products_servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products_services
     */
    omit?: products_servicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: products_servicesInclude<ExtArgs> | null
  }


  /**
   * Model user_profiles
   */

  export type AggregateUser_profiles = {
    _count: User_profilesCountAggregateOutputType | null
    _avg: User_profilesAvgAggregateOutputType | null
    _sum: User_profilesSumAggregateOutputType | null
    _min: User_profilesMinAggregateOutputType | null
    _max: User_profilesMaxAggregateOutputType | null
  }

  export type User_profilesAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type User_profilesSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type User_profilesMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    first_name: string | null
    last_name: string | null
    phone: string | null
    profile_img: string | null
  }

  export type User_profilesMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    first_name: string | null
    last_name: string | null
    phone: string | null
    profile_img: string | null
  }

  export type User_profilesCountAggregateOutputType = {
    id: number
    user_id: number
    first_name: number
    last_name: number
    phone: number
    profile_img: number
    _all: number
  }


  export type User_profilesAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type User_profilesSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type User_profilesMinAggregateInputType = {
    id?: true
    user_id?: true
    first_name?: true
    last_name?: true
    phone?: true
    profile_img?: true
  }

  export type User_profilesMaxAggregateInputType = {
    id?: true
    user_id?: true
    first_name?: true
    last_name?: true
    phone?: true
    profile_img?: true
  }

  export type User_profilesCountAggregateInputType = {
    id?: true
    user_id?: true
    first_name?: true
    last_name?: true
    phone?: true
    profile_img?: true
    _all?: true
  }

  export type User_profilesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_profiles to aggregate.
     */
    where?: user_profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_profiles to fetch.
     */
    orderBy?: user_profilesOrderByWithRelationInput | user_profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_profiles
    **/
    _count?: true | User_profilesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_profilesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_profilesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_profilesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_profilesMaxAggregateInputType
  }

  export type GetUser_profilesAggregateType<T extends User_profilesAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_profiles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_profiles[P]>
      : GetScalarType<T[P], AggregateUser_profiles[P]>
  }




  export type user_profilesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_profilesWhereInput
    orderBy?: user_profilesOrderByWithAggregationInput | user_profilesOrderByWithAggregationInput[]
    by: User_profilesScalarFieldEnum[] | User_profilesScalarFieldEnum
    having?: user_profilesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_profilesCountAggregateInputType | true
    _avg?: User_profilesAvgAggregateInputType
    _sum?: User_profilesSumAggregateInputType
    _min?: User_profilesMinAggregateInputType
    _max?: User_profilesMaxAggregateInputType
  }

  export type User_profilesGroupByOutputType = {
    id: number
    user_id: number
    first_name: string
    last_name: string
    phone: string | null
    profile_img: string | null
    _count: User_profilesCountAggregateOutputType | null
    _avg: User_profilesAvgAggregateOutputType | null
    _sum: User_profilesSumAggregateOutputType | null
    _min: User_profilesMinAggregateOutputType | null
    _max: User_profilesMaxAggregateOutputType | null
  }

  type GetUser_profilesGroupByPayload<T extends user_profilesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_profilesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_profilesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_profilesGroupByOutputType[P]>
            : GetScalarType<T[P], User_profilesGroupByOutputType[P]>
        }
      >
    >


  export type user_profilesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    first_name?: boolean
    last_name?: boolean
    phone?: boolean
    profile_img?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_profiles"]>

  export type user_profilesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    first_name?: boolean
    last_name?: boolean
    phone?: boolean
    profile_img?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_profiles"]>

  export type user_profilesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    first_name?: boolean
    last_name?: boolean
    phone?: boolean
    profile_img?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_profiles"]>

  export type user_profilesSelectScalar = {
    id?: boolean
    user_id?: boolean
    first_name?: boolean
    last_name?: boolean
    phone?: boolean
    profile_img?: boolean
  }

  export type user_profilesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "first_name" | "last_name" | "phone" | "profile_img", ExtArgs["result"]["user_profiles"]>
  export type user_profilesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type user_profilesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type user_profilesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $user_profilesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_profiles"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      first_name: string
      last_name: string
      phone: string | null
      profile_img: string | null
    }, ExtArgs["result"]["user_profiles"]>
    composites: {}
  }

  type user_profilesGetPayload<S extends boolean | null | undefined | user_profilesDefaultArgs> = $Result.GetResult<Prisma.$user_profilesPayload, S>

  type user_profilesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_profilesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_profilesCountAggregateInputType | true
    }

  export interface user_profilesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_profiles'], meta: { name: 'user_profiles' } }
    /**
     * Find zero or one User_profiles that matches the filter.
     * @param {user_profilesFindUniqueArgs} args - Arguments to find a User_profiles
     * @example
     * // Get one User_profiles
     * const user_profiles = await prisma.user_profiles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_profilesFindUniqueArgs>(args: SelectSubset<T, user_profilesFindUniqueArgs<ExtArgs>>): Prisma__user_profilesClient<$Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_profiles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_profilesFindUniqueOrThrowArgs} args - Arguments to find a User_profiles
     * @example
     * // Get one User_profiles
     * const user_profiles = await prisma.user_profiles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_profilesFindUniqueOrThrowArgs>(args: SelectSubset<T, user_profilesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_profilesClient<$Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_profilesFindFirstArgs} args - Arguments to find a User_profiles
     * @example
     * // Get one User_profiles
     * const user_profiles = await prisma.user_profiles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_profilesFindFirstArgs>(args?: SelectSubset<T, user_profilesFindFirstArgs<ExtArgs>>): Prisma__user_profilesClient<$Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_profiles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_profilesFindFirstOrThrowArgs} args - Arguments to find a User_profiles
     * @example
     * // Get one User_profiles
     * const user_profiles = await prisma.user_profiles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_profilesFindFirstOrThrowArgs>(args?: SelectSubset<T, user_profilesFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_profilesClient<$Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_profilesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_profiles
     * const user_profiles = await prisma.user_profiles.findMany()
     * 
     * // Get first 10 User_profiles
     * const user_profiles = await prisma.user_profiles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_profilesWithIdOnly = await prisma.user_profiles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends user_profilesFindManyArgs>(args?: SelectSubset<T, user_profilesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_profiles.
     * @param {user_profilesCreateArgs} args - Arguments to create a User_profiles.
     * @example
     * // Create one User_profiles
     * const User_profiles = await prisma.user_profiles.create({
     *   data: {
     *     // ... data to create a User_profiles
     *   }
     * })
     * 
     */
    create<T extends user_profilesCreateArgs>(args: SelectSubset<T, user_profilesCreateArgs<ExtArgs>>): Prisma__user_profilesClient<$Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_profiles.
     * @param {user_profilesCreateManyArgs} args - Arguments to create many User_profiles.
     * @example
     * // Create many User_profiles
     * const user_profiles = await prisma.user_profiles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_profilesCreateManyArgs>(args?: SelectSubset<T, user_profilesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_profiles and returns the data saved in the database.
     * @param {user_profilesCreateManyAndReturnArgs} args - Arguments to create many User_profiles.
     * @example
     * // Create many User_profiles
     * const user_profiles = await prisma.user_profiles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_profiles and only return the `id`
     * const user_profilesWithIdOnly = await prisma.user_profiles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_profilesCreateManyAndReturnArgs>(args?: SelectSubset<T, user_profilesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_profiles.
     * @param {user_profilesDeleteArgs} args - Arguments to delete one User_profiles.
     * @example
     * // Delete one User_profiles
     * const User_profiles = await prisma.user_profiles.delete({
     *   where: {
     *     // ... filter to delete one User_profiles
     *   }
     * })
     * 
     */
    delete<T extends user_profilesDeleteArgs>(args: SelectSubset<T, user_profilesDeleteArgs<ExtArgs>>): Prisma__user_profilesClient<$Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_profiles.
     * @param {user_profilesUpdateArgs} args - Arguments to update one User_profiles.
     * @example
     * // Update one User_profiles
     * const user_profiles = await prisma.user_profiles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_profilesUpdateArgs>(args: SelectSubset<T, user_profilesUpdateArgs<ExtArgs>>): Prisma__user_profilesClient<$Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_profiles.
     * @param {user_profilesDeleteManyArgs} args - Arguments to filter User_profiles to delete.
     * @example
     * // Delete a few User_profiles
     * const { count } = await prisma.user_profiles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_profilesDeleteManyArgs>(args?: SelectSubset<T, user_profilesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_profilesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_profiles
     * const user_profiles = await prisma.user_profiles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_profilesUpdateManyArgs>(args: SelectSubset<T, user_profilesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_profiles and returns the data updated in the database.
     * @param {user_profilesUpdateManyAndReturnArgs} args - Arguments to update many User_profiles.
     * @example
     * // Update many User_profiles
     * const user_profiles = await prisma.user_profiles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_profiles and only return the `id`
     * const user_profilesWithIdOnly = await prisma.user_profiles.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends user_profilesUpdateManyAndReturnArgs>(args: SelectSubset<T, user_profilesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_profiles.
     * @param {user_profilesUpsertArgs} args - Arguments to update or create a User_profiles.
     * @example
     * // Update or create a User_profiles
     * const user_profiles = await prisma.user_profiles.upsert({
     *   create: {
     *     // ... data to create a User_profiles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_profiles we want to update
     *   }
     * })
     */
    upsert<T extends user_profilesUpsertArgs>(args: SelectSubset<T, user_profilesUpsertArgs<ExtArgs>>): Prisma__user_profilesClient<$Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_profilesCountArgs} args - Arguments to filter User_profiles to count.
     * @example
     * // Count the number of User_profiles
     * const count = await prisma.user_profiles.count({
     *   where: {
     *     // ... the filter for the User_profiles we want to count
     *   }
     * })
    **/
    count<T extends user_profilesCountArgs>(
      args?: Subset<T, user_profilesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_profilesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_profilesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_profilesAggregateArgs>(args: Subset<T, User_profilesAggregateArgs>): Prisma.PrismaPromise<GetUser_profilesAggregateType<T>>

    /**
     * Group by User_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_profilesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends user_profilesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_profilesGroupByArgs['orderBy'] }
        : { orderBy?: user_profilesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, user_profilesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_profilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_profiles model
   */
  readonly fields: user_profilesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_profiles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_profilesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user_profiles model
   */
  interface user_profilesFieldRefs {
    readonly id: FieldRef<"user_profiles", 'Int'>
    readonly user_id: FieldRef<"user_profiles", 'Int'>
    readonly first_name: FieldRef<"user_profiles", 'String'>
    readonly last_name: FieldRef<"user_profiles", 'String'>
    readonly phone: FieldRef<"user_profiles", 'String'>
    readonly profile_img: FieldRef<"user_profiles", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user_profiles findUnique
   */
  export type user_profilesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profiles
     */
    select?: user_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_profiles
     */
    omit?: user_profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_profilesInclude<ExtArgs> | null
    /**
     * Filter, which user_profiles to fetch.
     */
    where: user_profilesWhereUniqueInput
  }

  /**
   * user_profiles findUniqueOrThrow
   */
  export type user_profilesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profiles
     */
    select?: user_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_profiles
     */
    omit?: user_profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_profilesInclude<ExtArgs> | null
    /**
     * Filter, which user_profiles to fetch.
     */
    where: user_profilesWhereUniqueInput
  }

  /**
   * user_profiles findFirst
   */
  export type user_profilesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profiles
     */
    select?: user_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_profiles
     */
    omit?: user_profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_profilesInclude<ExtArgs> | null
    /**
     * Filter, which user_profiles to fetch.
     */
    where?: user_profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_profiles to fetch.
     */
    orderBy?: user_profilesOrderByWithRelationInput | user_profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_profiles.
     */
    cursor?: user_profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_profiles.
     */
    distinct?: User_profilesScalarFieldEnum | User_profilesScalarFieldEnum[]
  }

  /**
   * user_profiles findFirstOrThrow
   */
  export type user_profilesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profiles
     */
    select?: user_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_profiles
     */
    omit?: user_profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_profilesInclude<ExtArgs> | null
    /**
     * Filter, which user_profiles to fetch.
     */
    where?: user_profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_profiles to fetch.
     */
    orderBy?: user_profilesOrderByWithRelationInput | user_profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_profiles.
     */
    cursor?: user_profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_profiles.
     */
    distinct?: User_profilesScalarFieldEnum | User_profilesScalarFieldEnum[]
  }

  /**
   * user_profiles findMany
   */
  export type user_profilesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profiles
     */
    select?: user_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_profiles
     */
    omit?: user_profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_profilesInclude<ExtArgs> | null
    /**
     * Filter, which user_profiles to fetch.
     */
    where?: user_profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_profiles to fetch.
     */
    orderBy?: user_profilesOrderByWithRelationInput | user_profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_profiles.
     */
    cursor?: user_profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_profiles.
     */
    skip?: number
    distinct?: User_profilesScalarFieldEnum | User_profilesScalarFieldEnum[]
  }

  /**
   * user_profiles create
   */
  export type user_profilesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profiles
     */
    select?: user_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_profiles
     */
    omit?: user_profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_profilesInclude<ExtArgs> | null
    /**
     * The data needed to create a user_profiles.
     */
    data: XOR<user_profilesCreateInput, user_profilesUncheckedCreateInput>
  }

  /**
   * user_profiles createMany
   */
  export type user_profilesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_profiles.
     */
    data: user_profilesCreateManyInput | user_profilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_profiles createManyAndReturn
   */
  export type user_profilesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profiles
     */
    select?: user_profilesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_profiles
     */
    omit?: user_profilesOmit<ExtArgs> | null
    /**
     * The data used to create many user_profiles.
     */
    data: user_profilesCreateManyInput | user_profilesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_profilesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_profiles update
   */
  export type user_profilesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profiles
     */
    select?: user_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_profiles
     */
    omit?: user_profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_profilesInclude<ExtArgs> | null
    /**
     * The data needed to update a user_profiles.
     */
    data: XOR<user_profilesUpdateInput, user_profilesUncheckedUpdateInput>
    /**
     * Choose, which user_profiles to update.
     */
    where: user_profilesWhereUniqueInput
  }

  /**
   * user_profiles updateMany
   */
  export type user_profilesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_profiles.
     */
    data: XOR<user_profilesUpdateManyMutationInput, user_profilesUncheckedUpdateManyInput>
    /**
     * Filter which user_profiles to update
     */
    where?: user_profilesWhereInput
    /**
     * Limit how many user_profiles to update.
     */
    limit?: number
  }

  /**
   * user_profiles updateManyAndReturn
   */
  export type user_profilesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profiles
     */
    select?: user_profilesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_profiles
     */
    omit?: user_profilesOmit<ExtArgs> | null
    /**
     * The data used to update user_profiles.
     */
    data: XOR<user_profilesUpdateManyMutationInput, user_profilesUncheckedUpdateManyInput>
    /**
     * Filter which user_profiles to update
     */
    where?: user_profilesWhereInput
    /**
     * Limit how many user_profiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_profilesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_profiles upsert
   */
  export type user_profilesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profiles
     */
    select?: user_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_profiles
     */
    omit?: user_profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_profilesInclude<ExtArgs> | null
    /**
     * The filter to search for the user_profiles to update in case it exists.
     */
    where: user_profilesWhereUniqueInput
    /**
     * In case the user_profiles found by the `where` argument doesn't exist, create a new user_profiles with this data.
     */
    create: XOR<user_profilesCreateInput, user_profilesUncheckedCreateInput>
    /**
     * In case the user_profiles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_profilesUpdateInput, user_profilesUncheckedUpdateInput>
  }

  /**
   * user_profiles delete
   */
  export type user_profilesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profiles
     */
    select?: user_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_profiles
     */
    omit?: user_profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_profilesInclude<ExtArgs> | null
    /**
     * Filter which user_profiles to delete.
     */
    where: user_profilesWhereUniqueInput
  }

  /**
   * user_profiles deleteMany
   */
  export type user_profilesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_profiles to delete
     */
    where?: user_profilesWhereInput
    /**
     * Limit how many user_profiles to delete.
     */
    limit?: number
  }

  /**
   * user_profiles without action
   */
  export type user_profilesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profiles
     */
    select?: user_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_profiles
     */
    omit?: user_profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_profilesInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    email: string | null
    password_hash: string | null
    is_verified: boolean | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password_hash: string | null
    is_verified: boolean | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    password_hash: number
    is_verified: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    is_verified?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    is_verified?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    is_verified?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    email: string
    password_hash: string
    is_verified: boolean
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    is_verified?: boolean
    clients?: boolean | users$clientsArgs<ExtArgs>
    invoices?: boolean | users$invoicesArgs<ExtArgs>
    products_services?: boolean | users$products_servicesArgs<ExtArgs>
    recurring_invoice?: boolean | users$recurring_invoiceArgs<ExtArgs>
    user_payment_method?: boolean | users$user_payment_methodArgs<ExtArgs>
    user_profiles?: boolean | users$user_profilesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    is_verified?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    is_verified?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    password_hash?: boolean
    is_verified?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password_hash" | "is_verified", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clients?: boolean | users$clientsArgs<ExtArgs>
    invoices?: boolean | users$invoicesArgs<ExtArgs>
    products_services?: boolean | users$products_servicesArgs<ExtArgs>
    recurring_invoice?: boolean | users$recurring_invoiceArgs<ExtArgs>
    user_payment_method?: boolean | users$user_payment_methodArgs<ExtArgs>
    user_profiles?: boolean | users$user_profilesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      clients: Prisma.$clientsPayload<ExtArgs>[]
      invoices: Prisma.$invoicesPayload<ExtArgs>[]
      products_services: Prisma.$products_servicesPayload<ExtArgs>[]
      recurring_invoice: Prisma.$recurring_invoicePayload<ExtArgs>[]
      user_payment_method: Prisma.$user_payment_methodPayload<ExtArgs>[]
      user_profiles: Prisma.$user_profilesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password_hash: string
      is_verified: boolean
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clients<T extends users$clientsArgs<ExtArgs> = {}>(args?: Subset<T, users$clientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invoices<T extends users$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, users$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    products_services<T extends users$products_servicesArgs<ExtArgs> = {}>(args?: Subset<T, users$products_servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$products_servicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recurring_invoice<T extends users$recurring_invoiceArgs<ExtArgs> = {}>(args?: Subset<T, users$recurring_invoiceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recurring_invoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_payment_method<T extends users$user_payment_methodArgs<ExtArgs> = {}>(args?: Subset<T, users$user_payment_methodArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_payment_methodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_profiles<T extends users$user_profilesArgs<ExtArgs> = {}>(args?: Subset<T, users$user_profilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly email: FieldRef<"users", 'String'>
    readonly password_hash: FieldRef<"users", 'String'>
    readonly is_verified: FieldRef<"users", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.clients
   */
  export type users$clientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientsInclude<ExtArgs> | null
    where?: clientsWhereInput
    orderBy?: clientsOrderByWithRelationInput | clientsOrderByWithRelationInput[]
    cursor?: clientsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientsScalarFieldEnum | ClientsScalarFieldEnum[]
  }

  /**
   * users.invoices
   */
  export type users$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    where?: invoicesWhereInput
    orderBy?: invoicesOrderByWithRelationInput | invoicesOrderByWithRelationInput[]
    cursor?: invoicesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[]
  }

  /**
   * users.products_services
   */
  export type users$products_servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products_services
     */
    select?: products_servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products_services
     */
    omit?: products_servicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: products_servicesInclude<ExtArgs> | null
    where?: products_servicesWhereInput
    orderBy?: products_servicesOrderByWithRelationInput | products_servicesOrderByWithRelationInput[]
    cursor?: products_servicesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Products_servicesScalarFieldEnum | Products_servicesScalarFieldEnum[]
  }

  /**
   * users.recurring_invoice
   */
  export type users$recurring_invoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurring_invoice
     */
    select?: recurring_invoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recurring_invoice
     */
    omit?: recurring_invoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recurring_invoiceInclude<ExtArgs> | null
    where?: recurring_invoiceWhereInput
    orderBy?: recurring_invoiceOrderByWithRelationInput | recurring_invoiceOrderByWithRelationInput[]
    cursor?: recurring_invoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Recurring_invoiceScalarFieldEnum | Recurring_invoiceScalarFieldEnum[]
  }

  /**
   * users.user_payment_method
   */
  export type users$user_payment_methodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_payment_method
     */
    select?: user_payment_methodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_payment_method
     */
    omit?: user_payment_methodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_payment_methodInclude<ExtArgs> | null
    where?: user_payment_methodWhereInput
    orderBy?: user_payment_methodOrderByWithRelationInput | user_payment_methodOrderByWithRelationInput[]
    cursor?: user_payment_methodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_payment_methodScalarFieldEnum | User_payment_methodScalarFieldEnum[]
  }

  /**
   * users.user_profiles
   */
  export type users$user_profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profiles
     */
    select?: user_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_profiles
     */
    omit?: user_profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_profilesInclude<ExtArgs> | null
    where?: user_profilesWhereInput
    orderBy?: user_profilesOrderByWithRelationInput | user_profilesOrderByWithRelationInput[]
    cursor?: user_profilesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_profilesScalarFieldEnum | User_profilesScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model recurring_invoice
   */

  export type AggregateRecurring_invoice = {
    _count: Recurring_invoiceCountAggregateOutputType | null
    _avg: Recurring_invoiceAvgAggregateOutputType | null
    _sum: Recurring_invoiceSumAggregateOutputType | null
    _min: Recurring_invoiceMinAggregateOutputType | null
    _max: Recurring_invoiceMaxAggregateOutputType | null
  }

  export type Recurring_invoiceAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    client_id: number | null
    total: number | null
  }

  export type Recurring_invoiceSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    client_id: number | null
    total: number | null
  }

  export type Recurring_invoiceMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    client_id: number | null
    invoice_number: string | null
    start_date: Date | null
    due_date: Date | null
    recurrence: string | null
    notes: string | null
    next_run: Date | null
    is_active: boolean | null
    is_deleted: boolean | null
    total: number | null
  }

  export type Recurring_invoiceMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    client_id: number | null
    invoice_number: string | null
    start_date: Date | null
    due_date: Date | null
    recurrence: string | null
    notes: string | null
    next_run: Date | null
    is_active: boolean | null
    is_deleted: boolean | null
    total: number | null
  }

  export type Recurring_invoiceCountAggregateOutputType = {
    id: number
    user_id: number
    client_id: number
    invoice_number: number
    start_date: number
    due_date: number
    recurrence: number
    notes: number
    next_run: number
    is_active: number
    is_deleted: number
    total: number
    _all: number
  }


  export type Recurring_invoiceAvgAggregateInputType = {
    id?: true
    user_id?: true
    client_id?: true
    total?: true
  }

  export type Recurring_invoiceSumAggregateInputType = {
    id?: true
    user_id?: true
    client_id?: true
    total?: true
  }

  export type Recurring_invoiceMinAggregateInputType = {
    id?: true
    user_id?: true
    client_id?: true
    invoice_number?: true
    start_date?: true
    due_date?: true
    recurrence?: true
    notes?: true
    next_run?: true
    is_active?: true
    is_deleted?: true
    total?: true
  }

  export type Recurring_invoiceMaxAggregateInputType = {
    id?: true
    user_id?: true
    client_id?: true
    invoice_number?: true
    start_date?: true
    due_date?: true
    recurrence?: true
    notes?: true
    next_run?: true
    is_active?: true
    is_deleted?: true
    total?: true
  }

  export type Recurring_invoiceCountAggregateInputType = {
    id?: true
    user_id?: true
    client_id?: true
    invoice_number?: true
    start_date?: true
    due_date?: true
    recurrence?: true
    notes?: true
    next_run?: true
    is_active?: true
    is_deleted?: true
    total?: true
    _all?: true
  }

  export type Recurring_invoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recurring_invoice to aggregate.
     */
    where?: recurring_invoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recurring_invoices to fetch.
     */
    orderBy?: recurring_invoiceOrderByWithRelationInput | recurring_invoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: recurring_invoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recurring_invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recurring_invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned recurring_invoices
    **/
    _count?: true | Recurring_invoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Recurring_invoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Recurring_invoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Recurring_invoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Recurring_invoiceMaxAggregateInputType
  }

  export type GetRecurring_invoiceAggregateType<T extends Recurring_invoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateRecurring_invoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecurring_invoice[P]>
      : GetScalarType<T[P], AggregateRecurring_invoice[P]>
  }




  export type recurring_invoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recurring_invoiceWhereInput
    orderBy?: recurring_invoiceOrderByWithAggregationInput | recurring_invoiceOrderByWithAggregationInput[]
    by: Recurring_invoiceScalarFieldEnum[] | Recurring_invoiceScalarFieldEnum
    having?: recurring_invoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Recurring_invoiceCountAggregateInputType | true
    _avg?: Recurring_invoiceAvgAggregateInputType
    _sum?: Recurring_invoiceSumAggregateInputType
    _min?: Recurring_invoiceMinAggregateInputType
    _max?: Recurring_invoiceMaxAggregateInputType
  }

  export type Recurring_invoiceGroupByOutputType = {
    id: number
    user_id: number
    client_id: number
    invoice_number: string
    start_date: Date
    due_date: Date | null
    recurrence: string
    notes: string | null
    next_run: Date
    is_active: boolean
    is_deleted: boolean
    total: number
    _count: Recurring_invoiceCountAggregateOutputType | null
    _avg: Recurring_invoiceAvgAggregateOutputType | null
    _sum: Recurring_invoiceSumAggregateOutputType | null
    _min: Recurring_invoiceMinAggregateOutputType | null
    _max: Recurring_invoiceMaxAggregateOutputType | null
  }

  type GetRecurring_invoiceGroupByPayload<T extends recurring_invoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Recurring_invoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Recurring_invoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Recurring_invoiceGroupByOutputType[P]>
            : GetScalarType<T[P], Recurring_invoiceGroupByOutputType[P]>
        }
      >
    >


  export type recurring_invoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    client_id?: boolean
    invoice_number?: boolean
    start_date?: boolean
    due_date?: boolean
    recurrence?: boolean
    notes?: boolean
    next_run?: boolean
    is_active?: boolean
    is_deleted?: boolean
    total?: boolean
    clients?: boolean | clientsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    recurring_invoice_item?: boolean | recurring_invoice$recurring_invoice_itemArgs<ExtArgs>
    _count?: boolean | Recurring_invoiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recurring_invoice"]>

  export type recurring_invoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    client_id?: boolean
    invoice_number?: boolean
    start_date?: boolean
    due_date?: boolean
    recurrence?: boolean
    notes?: boolean
    next_run?: boolean
    is_active?: boolean
    is_deleted?: boolean
    total?: boolean
    clients?: boolean | clientsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recurring_invoice"]>

  export type recurring_invoiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    client_id?: boolean
    invoice_number?: boolean
    start_date?: boolean
    due_date?: boolean
    recurrence?: boolean
    notes?: boolean
    next_run?: boolean
    is_active?: boolean
    is_deleted?: boolean
    total?: boolean
    clients?: boolean | clientsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recurring_invoice"]>

  export type recurring_invoiceSelectScalar = {
    id?: boolean
    user_id?: boolean
    client_id?: boolean
    invoice_number?: boolean
    start_date?: boolean
    due_date?: boolean
    recurrence?: boolean
    notes?: boolean
    next_run?: boolean
    is_active?: boolean
    is_deleted?: boolean
    total?: boolean
  }

  export type recurring_invoiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "client_id" | "invoice_number" | "start_date" | "due_date" | "recurrence" | "notes" | "next_run" | "is_active" | "is_deleted" | "total", ExtArgs["result"]["recurring_invoice"]>
  export type recurring_invoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clients?: boolean | clientsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    recurring_invoice_item?: boolean | recurring_invoice$recurring_invoice_itemArgs<ExtArgs>
    _count?: boolean | Recurring_invoiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type recurring_invoiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clients?: boolean | clientsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type recurring_invoiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clients?: boolean | clientsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $recurring_invoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "recurring_invoice"
    objects: {
      clients: Prisma.$clientsPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
      recurring_invoice_item: Prisma.$recurring_invoice_itemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      client_id: number
      invoice_number: string
      start_date: Date
      due_date: Date | null
      recurrence: string
      notes: string | null
      next_run: Date
      is_active: boolean
      is_deleted: boolean
      total: number
    }, ExtArgs["result"]["recurring_invoice"]>
    composites: {}
  }

  type recurring_invoiceGetPayload<S extends boolean | null | undefined | recurring_invoiceDefaultArgs> = $Result.GetResult<Prisma.$recurring_invoicePayload, S>

  type recurring_invoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<recurring_invoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Recurring_invoiceCountAggregateInputType | true
    }

  export interface recurring_invoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['recurring_invoice'], meta: { name: 'recurring_invoice' } }
    /**
     * Find zero or one Recurring_invoice that matches the filter.
     * @param {recurring_invoiceFindUniqueArgs} args - Arguments to find a Recurring_invoice
     * @example
     * // Get one Recurring_invoice
     * const recurring_invoice = await prisma.recurring_invoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends recurring_invoiceFindUniqueArgs>(args: SelectSubset<T, recurring_invoiceFindUniqueArgs<ExtArgs>>): Prisma__recurring_invoiceClient<$Result.GetResult<Prisma.$recurring_invoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recurring_invoice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {recurring_invoiceFindUniqueOrThrowArgs} args - Arguments to find a Recurring_invoice
     * @example
     * // Get one Recurring_invoice
     * const recurring_invoice = await prisma.recurring_invoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends recurring_invoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, recurring_invoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__recurring_invoiceClient<$Result.GetResult<Prisma.$recurring_invoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recurring_invoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recurring_invoiceFindFirstArgs} args - Arguments to find a Recurring_invoice
     * @example
     * // Get one Recurring_invoice
     * const recurring_invoice = await prisma.recurring_invoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends recurring_invoiceFindFirstArgs>(args?: SelectSubset<T, recurring_invoiceFindFirstArgs<ExtArgs>>): Prisma__recurring_invoiceClient<$Result.GetResult<Prisma.$recurring_invoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recurring_invoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recurring_invoiceFindFirstOrThrowArgs} args - Arguments to find a Recurring_invoice
     * @example
     * // Get one Recurring_invoice
     * const recurring_invoice = await prisma.recurring_invoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends recurring_invoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, recurring_invoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__recurring_invoiceClient<$Result.GetResult<Prisma.$recurring_invoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recurring_invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recurring_invoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recurring_invoices
     * const recurring_invoices = await prisma.recurring_invoice.findMany()
     * 
     * // Get first 10 Recurring_invoices
     * const recurring_invoices = await prisma.recurring_invoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recurring_invoiceWithIdOnly = await prisma.recurring_invoice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends recurring_invoiceFindManyArgs>(args?: SelectSubset<T, recurring_invoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recurring_invoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recurring_invoice.
     * @param {recurring_invoiceCreateArgs} args - Arguments to create a Recurring_invoice.
     * @example
     * // Create one Recurring_invoice
     * const Recurring_invoice = await prisma.recurring_invoice.create({
     *   data: {
     *     // ... data to create a Recurring_invoice
     *   }
     * })
     * 
     */
    create<T extends recurring_invoiceCreateArgs>(args: SelectSubset<T, recurring_invoiceCreateArgs<ExtArgs>>): Prisma__recurring_invoiceClient<$Result.GetResult<Prisma.$recurring_invoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recurring_invoices.
     * @param {recurring_invoiceCreateManyArgs} args - Arguments to create many Recurring_invoices.
     * @example
     * // Create many Recurring_invoices
     * const recurring_invoice = await prisma.recurring_invoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends recurring_invoiceCreateManyArgs>(args?: SelectSubset<T, recurring_invoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recurring_invoices and returns the data saved in the database.
     * @param {recurring_invoiceCreateManyAndReturnArgs} args - Arguments to create many Recurring_invoices.
     * @example
     * // Create many Recurring_invoices
     * const recurring_invoice = await prisma.recurring_invoice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recurring_invoices and only return the `id`
     * const recurring_invoiceWithIdOnly = await prisma.recurring_invoice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends recurring_invoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, recurring_invoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recurring_invoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Recurring_invoice.
     * @param {recurring_invoiceDeleteArgs} args - Arguments to delete one Recurring_invoice.
     * @example
     * // Delete one Recurring_invoice
     * const Recurring_invoice = await prisma.recurring_invoice.delete({
     *   where: {
     *     // ... filter to delete one Recurring_invoice
     *   }
     * })
     * 
     */
    delete<T extends recurring_invoiceDeleteArgs>(args: SelectSubset<T, recurring_invoiceDeleteArgs<ExtArgs>>): Prisma__recurring_invoiceClient<$Result.GetResult<Prisma.$recurring_invoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recurring_invoice.
     * @param {recurring_invoiceUpdateArgs} args - Arguments to update one Recurring_invoice.
     * @example
     * // Update one Recurring_invoice
     * const recurring_invoice = await prisma.recurring_invoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends recurring_invoiceUpdateArgs>(args: SelectSubset<T, recurring_invoiceUpdateArgs<ExtArgs>>): Prisma__recurring_invoiceClient<$Result.GetResult<Prisma.$recurring_invoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recurring_invoices.
     * @param {recurring_invoiceDeleteManyArgs} args - Arguments to filter Recurring_invoices to delete.
     * @example
     * // Delete a few Recurring_invoices
     * const { count } = await prisma.recurring_invoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends recurring_invoiceDeleteManyArgs>(args?: SelectSubset<T, recurring_invoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recurring_invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recurring_invoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recurring_invoices
     * const recurring_invoice = await prisma.recurring_invoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends recurring_invoiceUpdateManyArgs>(args: SelectSubset<T, recurring_invoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recurring_invoices and returns the data updated in the database.
     * @param {recurring_invoiceUpdateManyAndReturnArgs} args - Arguments to update many Recurring_invoices.
     * @example
     * // Update many Recurring_invoices
     * const recurring_invoice = await prisma.recurring_invoice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recurring_invoices and only return the `id`
     * const recurring_invoiceWithIdOnly = await prisma.recurring_invoice.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends recurring_invoiceUpdateManyAndReturnArgs>(args: SelectSubset<T, recurring_invoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recurring_invoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Recurring_invoice.
     * @param {recurring_invoiceUpsertArgs} args - Arguments to update or create a Recurring_invoice.
     * @example
     * // Update or create a Recurring_invoice
     * const recurring_invoice = await prisma.recurring_invoice.upsert({
     *   create: {
     *     // ... data to create a Recurring_invoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recurring_invoice we want to update
     *   }
     * })
     */
    upsert<T extends recurring_invoiceUpsertArgs>(args: SelectSubset<T, recurring_invoiceUpsertArgs<ExtArgs>>): Prisma__recurring_invoiceClient<$Result.GetResult<Prisma.$recurring_invoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recurring_invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recurring_invoiceCountArgs} args - Arguments to filter Recurring_invoices to count.
     * @example
     * // Count the number of Recurring_invoices
     * const count = await prisma.recurring_invoice.count({
     *   where: {
     *     // ... the filter for the Recurring_invoices we want to count
     *   }
     * })
    **/
    count<T extends recurring_invoiceCountArgs>(
      args?: Subset<T, recurring_invoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Recurring_invoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recurring_invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recurring_invoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Recurring_invoiceAggregateArgs>(args: Subset<T, Recurring_invoiceAggregateArgs>): Prisma.PrismaPromise<GetRecurring_invoiceAggregateType<T>>

    /**
     * Group by Recurring_invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recurring_invoiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends recurring_invoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: recurring_invoiceGroupByArgs['orderBy'] }
        : { orderBy?: recurring_invoiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, recurring_invoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecurring_invoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the recurring_invoice model
   */
  readonly fields: recurring_invoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for recurring_invoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__recurring_invoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clients<T extends clientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, clientsDefaultArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recurring_invoice_item<T extends recurring_invoice$recurring_invoice_itemArgs<ExtArgs> = {}>(args?: Subset<T, recurring_invoice$recurring_invoice_itemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recurring_invoice_itemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the recurring_invoice model
   */
  interface recurring_invoiceFieldRefs {
    readonly id: FieldRef<"recurring_invoice", 'Int'>
    readonly user_id: FieldRef<"recurring_invoice", 'Int'>
    readonly client_id: FieldRef<"recurring_invoice", 'Int'>
    readonly invoice_number: FieldRef<"recurring_invoice", 'String'>
    readonly start_date: FieldRef<"recurring_invoice", 'DateTime'>
    readonly due_date: FieldRef<"recurring_invoice", 'DateTime'>
    readonly recurrence: FieldRef<"recurring_invoice", 'String'>
    readonly notes: FieldRef<"recurring_invoice", 'String'>
    readonly next_run: FieldRef<"recurring_invoice", 'DateTime'>
    readonly is_active: FieldRef<"recurring_invoice", 'Boolean'>
    readonly is_deleted: FieldRef<"recurring_invoice", 'Boolean'>
    readonly total: FieldRef<"recurring_invoice", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * recurring_invoice findUnique
   */
  export type recurring_invoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurring_invoice
     */
    select?: recurring_invoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recurring_invoice
     */
    omit?: recurring_invoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recurring_invoiceInclude<ExtArgs> | null
    /**
     * Filter, which recurring_invoice to fetch.
     */
    where: recurring_invoiceWhereUniqueInput
  }

  /**
   * recurring_invoice findUniqueOrThrow
   */
  export type recurring_invoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurring_invoice
     */
    select?: recurring_invoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recurring_invoice
     */
    omit?: recurring_invoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recurring_invoiceInclude<ExtArgs> | null
    /**
     * Filter, which recurring_invoice to fetch.
     */
    where: recurring_invoiceWhereUniqueInput
  }

  /**
   * recurring_invoice findFirst
   */
  export type recurring_invoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurring_invoice
     */
    select?: recurring_invoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recurring_invoice
     */
    omit?: recurring_invoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recurring_invoiceInclude<ExtArgs> | null
    /**
     * Filter, which recurring_invoice to fetch.
     */
    where?: recurring_invoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recurring_invoices to fetch.
     */
    orderBy?: recurring_invoiceOrderByWithRelationInput | recurring_invoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for recurring_invoices.
     */
    cursor?: recurring_invoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recurring_invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recurring_invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recurring_invoices.
     */
    distinct?: Recurring_invoiceScalarFieldEnum | Recurring_invoiceScalarFieldEnum[]
  }

  /**
   * recurring_invoice findFirstOrThrow
   */
  export type recurring_invoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurring_invoice
     */
    select?: recurring_invoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recurring_invoice
     */
    omit?: recurring_invoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recurring_invoiceInclude<ExtArgs> | null
    /**
     * Filter, which recurring_invoice to fetch.
     */
    where?: recurring_invoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recurring_invoices to fetch.
     */
    orderBy?: recurring_invoiceOrderByWithRelationInput | recurring_invoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for recurring_invoices.
     */
    cursor?: recurring_invoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recurring_invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recurring_invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recurring_invoices.
     */
    distinct?: Recurring_invoiceScalarFieldEnum | Recurring_invoiceScalarFieldEnum[]
  }

  /**
   * recurring_invoice findMany
   */
  export type recurring_invoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurring_invoice
     */
    select?: recurring_invoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recurring_invoice
     */
    omit?: recurring_invoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recurring_invoiceInclude<ExtArgs> | null
    /**
     * Filter, which recurring_invoices to fetch.
     */
    where?: recurring_invoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recurring_invoices to fetch.
     */
    orderBy?: recurring_invoiceOrderByWithRelationInput | recurring_invoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing recurring_invoices.
     */
    cursor?: recurring_invoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recurring_invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recurring_invoices.
     */
    skip?: number
    distinct?: Recurring_invoiceScalarFieldEnum | Recurring_invoiceScalarFieldEnum[]
  }

  /**
   * recurring_invoice create
   */
  export type recurring_invoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurring_invoice
     */
    select?: recurring_invoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recurring_invoice
     */
    omit?: recurring_invoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recurring_invoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a recurring_invoice.
     */
    data: XOR<recurring_invoiceCreateInput, recurring_invoiceUncheckedCreateInput>
  }

  /**
   * recurring_invoice createMany
   */
  export type recurring_invoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many recurring_invoices.
     */
    data: recurring_invoiceCreateManyInput | recurring_invoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * recurring_invoice createManyAndReturn
   */
  export type recurring_invoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurring_invoice
     */
    select?: recurring_invoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the recurring_invoice
     */
    omit?: recurring_invoiceOmit<ExtArgs> | null
    /**
     * The data used to create many recurring_invoices.
     */
    data: recurring_invoiceCreateManyInput | recurring_invoiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recurring_invoiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * recurring_invoice update
   */
  export type recurring_invoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurring_invoice
     */
    select?: recurring_invoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recurring_invoice
     */
    omit?: recurring_invoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recurring_invoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a recurring_invoice.
     */
    data: XOR<recurring_invoiceUpdateInput, recurring_invoiceUncheckedUpdateInput>
    /**
     * Choose, which recurring_invoice to update.
     */
    where: recurring_invoiceWhereUniqueInput
  }

  /**
   * recurring_invoice updateMany
   */
  export type recurring_invoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update recurring_invoices.
     */
    data: XOR<recurring_invoiceUpdateManyMutationInput, recurring_invoiceUncheckedUpdateManyInput>
    /**
     * Filter which recurring_invoices to update
     */
    where?: recurring_invoiceWhereInput
    /**
     * Limit how many recurring_invoices to update.
     */
    limit?: number
  }

  /**
   * recurring_invoice updateManyAndReturn
   */
  export type recurring_invoiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurring_invoice
     */
    select?: recurring_invoiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the recurring_invoice
     */
    omit?: recurring_invoiceOmit<ExtArgs> | null
    /**
     * The data used to update recurring_invoices.
     */
    data: XOR<recurring_invoiceUpdateManyMutationInput, recurring_invoiceUncheckedUpdateManyInput>
    /**
     * Filter which recurring_invoices to update
     */
    where?: recurring_invoiceWhereInput
    /**
     * Limit how many recurring_invoices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recurring_invoiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * recurring_invoice upsert
   */
  export type recurring_invoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurring_invoice
     */
    select?: recurring_invoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recurring_invoice
     */
    omit?: recurring_invoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recurring_invoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the recurring_invoice to update in case it exists.
     */
    where: recurring_invoiceWhereUniqueInput
    /**
     * In case the recurring_invoice found by the `where` argument doesn't exist, create a new recurring_invoice with this data.
     */
    create: XOR<recurring_invoiceCreateInput, recurring_invoiceUncheckedCreateInput>
    /**
     * In case the recurring_invoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<recurring_invoiceUpdateInput, recurring_invoiceUncheckedUpdateInput>
  }

  /**
   * recurring_invoice delete
   */
  export type recurring_invoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurring_invoice
     */
    select?: recurring_invoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recurring_invoice
     */
    omit?: recurring_invoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recurring_invoiceInclude<ExtArgs> | null
    /**
     * Filter which recurring_invoice to delete.
     */
    where: recurring_invoiceWhereUniqueInput
  }

  /**
   * recurring_invoice deleteMany
   */
  export type recurring_invoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recurring_invoices to delete
     */
    where?: recurring_invoiceWhereInput
    /**
     * Limit how many recurring_invoices to delete.
     */
    limit?: number
  }

  /**
   * recurring_invoice.recurring_invoice_item
   */
  export type recurring_invoice$recurring_invoice_itemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurring_invoice_item
     */
    select?: recurring_invoice_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recurring_invoice_item
     */
    omit?: recurring_invoice_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recurring_invoice_itemInclude<ExtArgs> | null
    where?: recurring_invoice_itemWhereInput
    orderBy?: recurring_invoice_itemOrderByWithRelationInput | recurring_invoice_itemOrderByWithRelationInput[]
    cursor?: recurring_invoice_itemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Recurring_invoice_itemScalarFieldEnum | Recurring_invoice_itemScalarFieldEnum[]
  }

  /**
   * recurring_invoice without action
   */
  export type recurring_invoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurring_invoice
     */
    select?: recurring_invoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recurring_invoice
     */
    omit?: recurring_invoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recurring_invoiceInclude<ExtArgs> | null
  }


  /**
   * Model recurring_invoice_item
   */

  export type AggregateRecurring_invoice_item = {
    _count: Recurring_invoice_itemCountAggregateOutputType | null
    _avg: Recurring_invoice_itemAvgAggregateOutputType | null
    _sum: Recurring_invoice_itemSumAggregateOutputType | null
    _min: Recurring_invoice_itemMinAggregateOutputType | null
    _max: Recurring_invoice_itemMaxAggregateOutputType | null
  }

  export type Recurring_invoice_itemAvgAggregateOutputType = {
    id: number | null
    recurring_invoice_id: number | null
    product_id: number | null
    quantity: number | null
    total: number | null
  }

  export type Recurring_invoice_itemSumAggregateOutputType = {
    id: number | null
    recurring_invoice_id: number | null
    product_id: number | null
    quantity: number | null
    total: number | null
  }

  export type Recurring_invoice_itemMinAggregateOutputType = {
    id: number | null
    recurring_invoice_id: number | null
    product_id: number | null
    name_snapshot: string | null
    price_snapshot: string | null
    quantity: number | null
    total: number | null
  }

  export type Recurring_invoice_itemMaxAggregateOutputType = {
    id: number | null
    recurring_invoice_id: number | null
    product_id: number | null
    name_snapshot: string | null
    price_snapshot: string | null
    quantity: number | null
    total: number | null
  }

  export type Recurring_invoice_itemCountAggregateOutputType = {
    id: number
    recurring_invoice_id: number
    product_id: number
    name_snapshot: number
    price_snapshot: number
    quantity: number
    total: number
    _all: number
  }


  export type Recurring_invoice_itemAvgAggregateInputType = {
    id?: true
    recurring_invoice_id?: true
    product_id?: true
    quantity?: true
    total?: true
  }

  export type Recurring_invoice_itemSumAggregateInputType = {
    id?: true
    recurring_invoice_id?: true
    product_id?: true
    quantity?: true
    total?: true
  }

  export type Recurring_invoice_itemMinAggregateInputType = {
    id?: true
    recurring_invoice_id?: true
    product_id?: true
    name_snapshot?: true
    price_snapshot?: true
    quantity?: true
    total?: true
  }

  export type Recurring_invoice_itemMaxAggregateInputType = {
    id?: true
    recurring_invoice_id?: true
    product_id?: true
    name_snapshot?: true
    price_snapshot?: true
    quantity?: true
    total?: true
  }

  export type Recurring_invoice_itemCountAggregateInputType = {
    id?: true
    recurring_invoice_id?: true
    product_id?: true
    name_snapshot?: true
    price_snapshot?: true
    quantity?: true
    total?: true
    _all?: true
  }

  export type Recurring_invoice_itemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recurring_invoice_item to aggregate.
     */
    where?: recurring_invoice_itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recurring_invoice_items to fetch.
     */
    orderBy?: recurring_invoice_itemOrderByWithRelationInput | recurring_invoice_itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: recurring_invoice_itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recurring_invoice_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recurring_invoice_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned recurring_invoice_items
    **/
    _count?: true | Recurring_invoice_itemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Recurring_invoice_itemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Recurring_invoice_itemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Recurring_invoice_itemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Recurring_invoice_itemMaxAggregateInputType
  }

  export type GetRecurring_invoice_itemAggregateType<T extends Recurring_invoice_itemAggregateArgs> = {
        [P in keyof T & keyof AggregateRecurring_invoice_item]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecurring_invoice_item[P]>
      : GetScalarType<T[P], AggregateRecurring_invoice_item[P]>
  }




  export type recurring_invoice_itemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recurring_invoice_itemWhereInput
    orderBy?: recurring_invoice_itemOrderByWithAggregationInput | recurring_invoice_itemOrderByWithAggregationInput[]
    by: Recurring_invoice_itemScalarFieldEnum[] | Recurring_invoice_itemScalarFieldEnum
    having?: recurring_invoice_itemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Recurring_invoice_itemCountAggregateInputType | true
    _avg?: Recurring_invoice_itemAvgAggregateInputType
    _sum?: Recurring_invoice_itemSumAggregateInputType
    _min?: Recurring_invoice_itemMinAggregateInputType
    _max?: Recurring_invoice_itemMaxAggregateInputType
  }

  export type Recurring_invoice_itemGroupByOutputType = {
    id: number
    recurring_invoice_id: number
    product_id: number
    name_snapshot: string
    price_snapshot: string
    quantity: number
    total: number
    _count: Recurring_invoice_itemCountAggregateOutputType | null
    _avg: Recurring_invoice_itemAvgAggregateOutputType | null
    _sum: Recurring_invoice_itemSumAggregateOutputType | null
    _min: Recurring_invoice_itemMinAggregateOutputType | null
    _max: Recurring_invoice_itemMaxAggregateOutputType | null
  }

  type GetRecurring_invoice_itemGroupByPayload<T extends recurring_invoice_itemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Recurring_invoice_itemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Recurring_invoice_itemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Recurring_invoice_itemGroupByOutputType[P]>
            : GetScalarType<T[P], Recurring_invoice_itemGroupByOutputType[P]>
        }
      >
    >


  export type recurring_invoice_itemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recurring_invoice_id?: boolean
    product_id?: boolean
    name_snapshot?: boolean
    price_snapshot?: boolean
    quantity?: boolean
    total?: boolean
    products_services?: boolean | products_servicesDefaultArgs<ExtArgs>
    recurring_invoice?: boolean | recurring_invoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recurring_invoice_item"]>

  export type recurring_invoice_itemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recurring_invoice_id?: boolean
    product_id?: boolean
    name_snapshot?: boolean
    price_snapshot?: boolean
    quantity?: boolean
    total?: boolean
    products_services?: boolean | products_servicesDefaultArgs<ExtArgs>
    recurring_invoice?: boolean | recurring_invoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recurring_invoice_item"]>

  export type recurring_invoice_itemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recurring_invoice_id?: boolean
    product_id?: boolean
    name_snapshot?: boolean
    price_snapshot?: boolean
    quantity?: boolean
    total?: boolean
    products_services?: boolean | products_servicesDefaultArgs<ExtArgs>
    recurring_invoice?: boolean | recurring_invoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recurring_invoice_item"]>

  export type recurring_invoice_itemSelectScalar = {
    id?: boolean
    recurring_invoice_id?: boolean
    product_id?: boolean
    name_snapshot?: boolean
    price_snapshot?: boolean
    quantity?: boolean
    total?: boolean
  }

  export type recurring_invoice_itemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "recurring_invoice_id" | "product_id" | "name_snapshot" | "price_snapshot" | "quantity" | "total", ExtArgs["result"]["recurring_invoice_item"]>
  export type recurring_invoice_itemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products_services?: boolean | products_servicesDefaultArgs<ExtArgs>
    recurring_invoice?: boolean | recurring_invoiceDefaultArgs<ExtArgs>
  }
  export type recurring_invoice_itemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products_services?: boolean | products_servicesDefaultArgs<ExtArgs>
    recurring_invoice?: boolean | recurring_invoiceDefaultArgs<ExtArgs>
  }
  export type recurring_invoice_itemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products_services?: boolean | products_servicesDefaultArgs<ExtArgs>
    recurring_invoice?: boolean | recurring_invoiceDefaultArgs<ExtArgs>
  }

  export type $recurring_invoice_itemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "recurring_invoice_item"
    objects: {
      products_services: Prisma.$products_servicesPayload<ExtArgs>
      recurring_invoice: Prisma.$recurring_invoicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      recurring_invoice_id: number
      product_id: number
      name_snapshot: string
      price_snapshot: string
      quantity: number
      total: number
    }, ExtArgs["result"]["recurring_invoice_item"]>
    composites: {}
  }

  type recurring_invoice_itemGetPayload<S extends boolean | null | undefined | recurring_invoice_itemDefaultArgs> = $Result.GetResult<Prisma.$recurring_invoice_itemPayload, S>

  type recurring_invoice_itemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<recurring_invoice_itemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Recurring_invoice_itemCountAggregateInputType | true
    }

  export interface recurring_invoice_itemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['recurring_invoice_item'], meta: { name: 'recurring_invoice_item' } }
    /**
     * Find zero or one Recurring_invoice_item that matches the filter.
     * @param {recurring_invoice_itemFindUniqueArgs} args - Arguments to find a Recurring_invoice_item
     * @example
     * // Get one Recurring_invoice_item
     * const recurring_invoice_item = await prisma.recurring_invoice_item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends recurring_invoice_itemFindUniqueArgs>(args: SelectSubset<T, recurring_invoice_itemFindUniqueArgs<ExtArgs>>): Prisma__recurring_invoice_itemClient<$Result.GetResult<Prisma.$recurring_invoice_itemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recurring_invoice_item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {recurring_invoice_itemFindUniqueOrThrowArgs} args - Arguments to find a Recurring_invoice_item
     * @example
     * // Get one Recurring_invoice_item
     * const recurring_invoice_item = await prisma.recurring_invoice_item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends recurring_invoice_itemFindUniqueOrThrowArgs>(args: SelectSubset<T, recurring_invoice_itemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__recurring_invoice_itemClient<$Result.GetResult<Prisma.$recurring_invoice_itemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recurring_invoice_item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recurring_invoice_itemFindFirstArgs} args - Arguments to find a Recurring_invoice_item
     * @example
     * // Get one Recurring_invoice_item
     * const recurring_invoice_item = await prisma.recurring_invoice_item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends recurring_invoice_itemFindFirstArgs>(args?: SelectSubset<T, recurring_invoice_itemFindFirstArgs<ExtArgs>>): Prisma__recurring_invoice_itemClient<$Result.GetResult<Prisma.$recurring_invoice_itemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recurring_invoice_item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recurring_invoice_itemFindFirstOrThrowArgs} args - Arguments to find a Recurring_invoice_item
     * @example
     * // Get one Recurring_invoice_item
     * const recurring_invoice_item = await prisma.recurring_invoice_item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends recurring_invoice_itemFindFirstOrThrowArgs>(args?: SelectSubset<T, recurring_invoice_itemFindFirstOrThrowArgs<ExtArgs>>): Prisma__recurring_invoice_itemClient<$Result.GetResult<Prisma.$recurring_invoice_itemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recurring_invoice_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recurring_invoice_itemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recurring_invoice_items
     * const recurring_invoice_items = await prisma.recurring_invoice_item.findMany()
     * 
     * // Get first 10 Recurring_invoice_items
     * const recurring_invoice_items = await prisma.recurring_invoice_item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recurring_invoice_itemWithIdOnly = await prisma.recurring_invoice_item.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends recurring_invoice_itemFindManyArgs>(args?: SelectSubset<T, recurring_invoice_itemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recurring_invoice_itemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recurring_invoice_item.
     * @param {recurring_invoice_itemCreateArgs} args - Arguments to create a Recurring_invoice_item.
     * @example
     * // Create one Recurring_invoice_item
     * const Recurring_invoice_item = await prisma.recurring_invoice_item.create({
     *   data: {
     *     // ... data to create a Recurring_invoice_item
     *   }
     * })
     * 
     */
    create<T extends recurring_invoice_itemCreateArgs>(args: SelectSubset<T, recurring_invoice_itemCreateArgs<ExtArgs>>): Prisma__recurring_invoice_itemClient<$Result.GetResult<Prisma.$recurring_invoice_itemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recurring_invoice_items.
     * @param {recurring_invoice_itemCreateManyArgs} args - Arguments to create many Recurring_invoice_items.
     * @example
     * // Create many Recurring_invoice_items
     * const recurring_invoice_item = await prisma.recurring_invoice_item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends recurring_invoice_itemCreateManyArgs>(args?: SelectSubset<T, recurring_invoice_itemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recurring_invoice_items and returns the data saved in the database.
     * @param {recurring_invoice_itemCreateManyAndReturnArgs} args - Arguments to create many Recurring_invoice_items.
     * @example
     * // Create many Recurring_invoice_items
     * const recurring_invoice_item = await prisma.recurring_invoice_item.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recurring_invoice_items and only return the `id`
     * const recurring_invoice_itemWithIdOnly = await prisma.recurring_invoice_item.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends recurring_invoice_itemCreateManyAndReturnArgs>(args?: SelectSubset<T, recurring_invoice_itemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recurring_invoice_itemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Recurring_invoice_item.
     * @param {recurring_invoice_itemDeleteArgs} args - Arguments to delete one Recurring_invoice_item.
     * @example
     * // Delete one Recurring_invoice_item
     * const Recurring_invoice_item = await prisma.recurring_invoice_item.delete({
     *   where: {
     *     // ... filter to delete one Recurring_invoice_item
     *   }
     * })
     * 
     */
    delete<T extends recurring_invoice_itemDeleteArgs>(args: SelectSubset<T, recurring_invoice_itemDeleteArgs<ExtArgs>>): Prisma__recurring_invoice_itemClient<$Result.GetResult<Prisma.$recurring_invoice_itemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recurring_invoice_item.
     * @param {recurring_invoice_itemUpdateArgs} args - Arguments to update one Recurring_invoice_item.
     * @example
     * // Update one Recurring_invoice_item
     * const recurring_invoice_item = await prisma.recurring_invoice_item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends recurring_invoice_itemUpdateArgs>(args: SelectSubset<T, recurring_invoice_itemUpdateArgs<ExtArgs>>): Prisma__recurring_invoice_itemClient<$Result.GetResult<Prisma.$recurring_invoice_itemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recurring_invoice_items.
     * @param {recurring_invoice_itemDeleteManyArgs} args - Arguments to filter Recurring_invoice_items to delete.
     * @example
     * // Delete a few Recurring_invoice_items
     * const { count } = await prisma.recurring_invoice_item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends recurring_invoice_itemDeleteManyArgs>(args?: SelectSubset<T, recurring_invoice_itemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recurring_invoice_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recurring_invoice_itemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recurring_invoice_items
     * const recurring_invoice_item = await prisma.recurring_invoice_item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends recurring_invoice_itemUpdateManyArgs>(args: SelectSubset<T, recurring_invoice_itemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recurring_invoice_items and returns the data updated in the database.
     * @param {recurring_invoice_itemUpdateManyAndReturnArgs} args - Arguments to update many Recurring_invoice_items.
     * @example
     * // Update many Recurring_invoice_items
     * const recurring_invoice_item = await prisma.recurring_invoice_item.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recurring_invoice_items and only return the `id`
     * const recurring_invoice_itemWithIdOnly = await prisma.recurring_invoice_item.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends recurring_invoice_itemUpdateManyAndReturnArgs>(args: SelectSubset<T, recurring_invoice_itemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recurring_invoice_itemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Recurring_invoice_item.
     * @param {recurring_invoice_itemUpsertArgs} args - Arguments to update or create a Recurring_invoice_item.
     * @example
     * // Update or create a Recurring_invoice_item
     * const recurring_invoice_item = await prisma.recurring_invoice_item.upsert({
     *   create: {
     *     // ... data to create a Recurring_invoice_item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recurring_invoice_item we want to update
     *   }
     * })
     */
    upsert<T extends recurring_invoice_itemUpsertArgs>(args: SelectSubset<T, recurring_invoice_itemUpsertArgs<ExtArgs>>): Prisma__recurring_invoice_itemClient<$Result.GetResult<Prisma.$recurring_invoice_itemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recurring_invoice_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recurring_invoice_itemCountArgs} args - Arguments to filter Recurring_invoice_items to count.
     * @example
     * // Count the number of Recurring_invoice_items
     * const count = await prisma.recurring_invoice_item.count({
     *   where: {
     *     // ... the filter for the Recurring_invoice_items we want to count
     *   }
     * })
    **/
    count<T extends recurring_invoice_itemCountArgs>(
      args?: Subset<T, recurring_invoice_itemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Recurring_invoice_itemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recurring_invoice_item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recurring_invoice_itemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Recurring_invoice_itemAggregateArgs>(args: Subset<T, Recurring_invoice_itemAggregateArgs>): Prisma.PrismaPromise<GetRecurring_invoice_itemAggregateType<T>>

    /**
     * Group by Recurring_invoice_item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recurring_invoice_itemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends recurring_invoice_itemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: recurring_invoice_itemGroupByArgs['orderBy'] }
        : { orderBy?: recurring_invoice_itemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, recurring_invoice_itemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecurring_invoice_itemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the recurring_invoice_item model
   */
  readonly fields: recurring_invoice_itemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for recurring_invoice_item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__recurring_invoice_itemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products_services<T extends products_servicesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, products_servicesDefaultArgs<ExtArgs>>): Prisma__products_servicesClient<$Result.GetResult<Prisma.$products_servicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recurring_invoice<T extends recurring_invoiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, recurring_invoiceDefaultArgs<ExtArgs>>): Prisma__recurring_invoiceClient<$Result.GetResult<Prisma.$recurring_invoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the recurring_invoice_item model
   */
  interface recurring_invoice_itemFieldRefs {
    readonly id: FieldRef<"recurring_invoice_item", 'Int'>
    readonly recurring_invoice_id: FieldRef<"recurring_invoice_item", 'Int'>
    readonly product_id: FieldRef<"recurring_invoice_item", 'Int'>
    readonly name_snapshot: FieldRef<"recurring_invoice_item", 'String'>
    readonly price_snapshot: FieldRef<"recurring_invoice_item", 'String'>
    readonly quantity: FieldRef<"recurring_invoice_item", 'Int'>
    readonly total: FieldRef<"recurring_invoice_item", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * recurring_invoice_item findUnique
   */
  export type recurring_invoice_itemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurring_invoice_item
     */
    select?: recurring_invoice_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recurring_invoice_item
     */
    omit?: recurring_invoice_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recurring_invoice_itemInclude<ExtArgs> | null
    /**
     * Filter, which recurring_invoice_item to fetch.
     */
    where: recurring_invoice_itemWhereUniqueInput
  }

  /**
   * recurring_invoice_item findUniqueOrThrow
   */
  export type recurring_invoice_itemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurring_invoice_item
     */
    select?: recurring_invoice_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recurring_invoice_item
     */
    omit?: recurring_invoice_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recurring_invoice_itemInclude<ExtArgs> | null
    /**
     * Filter, which recurring_invoice_item to fetch.
     */
    where: recurring_invoice_itemWhereUniqueInput
  }

  /**
   * recurring_invoice_item findFirst
   */
  export type recurring_invoice_itemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurring_invoice_item
     */
    select?: recurring_invoice_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recurring_invoice_item
     */
    omit?: recurring_invoice_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recurring_invoice_itemInclude<ExtArgs> | null
    /**
     * Filter, which recurring_invoice_item to fetch.
     */
    where?: recurring_invoice_itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recurring_invoice_items to fetch.
     */
    orderBy?: recurring_invoice_itemOrderByWithRelationInput | recurring_invoice_itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for recurring_invoice_items.
     */
    cursor?: recurring_invoice_itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recurring_invoice_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recurring_invoice_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recurring_invoice_items.
     */
    distinct?: Recurring_invoice_itemScalarFieldEnum | Recurring_invoice_itemScalarFieldEnum[]
  }

  /**
   * recurring_invoice_item findFirstOrThrow
   */
  export type recurring_invoice_itemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurring_invoice_item
     */
    select?: recurring_invoice_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recurring_invoice_item
     */
    omit?: recurring_invoice_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recurring_invoice_itemInclude<ExtArgs> | null
    /**
     * Filter, which recurring_invoice_item to fetch.
     */
    where?: recurring_invoice_itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recurring_invoice_items to fetch.
     */
    orderBy?: recurring_invoice_itemOrderByWithRelationInput | recurring_invoice_itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for recurring_invoice_items.
     */
    cursor?: recurring_invoice_itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recurring_invoice_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recurring_invoice_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recurring_invoice_items.
     */
    distinct?: Recurring_invoice_itemScalarFieldEnum | Recurring_invoice_itemScalarFieldEnum[]
  }

  /**
   * recurring_invoice_item findMany
   */
  export type recurring_invoice_itemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurring_invoice_item
     */
    select?: recurring_invoice_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recurring_invoice_item
     */
    omit?: recurring_invoice_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recurring_invoice_itemInclude<ExtArgs> | null
    /**
     * Filter, which recurring_invoice_items to fetch.
     */
    where?: recurring_invoice_itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recurring_invoice_items to fetch.
     */
    orderBy?: recurring_invoice_itemOrderByWithRelationInput | recurring_invoice_itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing recurring_invoice_items.
     */
    cursor?: recurring_invoice_itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recurring_invoice_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recurring_invoice_items.
     */
    skip?: number
    distinct?: Recurring_invoice_itemScalarFieldEnum | Recurring_invoice_itemScalarFieldEnum[]
  }

  /**
   * recurring_invoice_item create
   */
  export type recurring_invoice_itemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurring_invoice_item
     */
    select?: recurring_invoice_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recurring_invoice_item
     */
    omit?: recurring_invoice_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recurring_invoice_itemInclude<ExtArgs> | null
    /**
     * The data needed to create a recurring_invoice_item.
     */
    data: XOR<recurring_invoice_itemCreateInput, recurring_invoice_itemUncheckedCreateInput>
  }

  /**
   * recurring_invoice_item createMany
   */
  export type recurring_invoice_itemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many recurring_invoice_items.
     */
    data: recurring_invoice_itemCreateManyInput | recurring_invoice_itemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * recurring_invoice_item createManyAndReturn
   */
  export type recurring_invoice_itemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurring_invoice_item
     */
    select?: recurring_invoice_itemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the recurring_invoice_item
     */
    omit?: recurring_invoice_itemOmit<ExtArgs> | null
    /**
     * The data used to create many recurring_invoice_items.
     */
    data: recurring_invoice_itemCreateManyInput | recurring_invoice_itemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recurring_invoice_itemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * recurring_invoice_item update
   */
  export type recurring_invoice_itemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurring_invoice_item
     */
    select?: recurring_invoice_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recurring_invoice_item
     */
    omit?: recurring_invoice_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recurring_invoice_itemInclude<ExtArgs> | null
    /**
     * The data needed to update a recurring_invoice_item.
     */
    data: XOR<recurring_invoice_itemUpdateInput, recurring_invoice_itemUncheckedUpdateInput>
    /**
     * Choose, which recurring_invoice_item to update.
     */
    where: recurring_invoice_itemWhereUniqueInput
  }

  /**
   * recurring_invoice_item updateMany
   */
  export type recurring_invoice_itemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update recurring_invoice_items.
     */
    data: XOR<recurring_invoice_itemUpdateManyMutationInput, recurring_invoice_itemUncheckedUpdateManyInput>
    /**
     * Filter which recurring_invoice_items to update
     */
    where?: recurring_invoice_itemWhereInput
    /**
     * Limit how many recurring_invoice_items to update.
     */
    limit?: number
  }

  /**
   * recurring_invoice_item updateManyAndReturn
   */
  export type recurring_invoice_itemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurring_invoice_item
     */
    select?: recurring_invoice_itemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the recurring_invoice_item
     */
    omit?: recurring_invoice_itemOmit<ExtArgs> | null
    /**
     * The data used to update recurring_invoice_items.
     */
    data: XOR<recurring_invoice_itemUpdateManyMutationInput, recurring_invoice_itemUncheckedUpdateManyInput>
    /**
     * Filter which recurring_invoice_items to update
     */
    where?: recurring_invoice_itemWhereInput
    /**
     * Limit how many recurring_invoice_items to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recurring_invoice_itemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * recurring_invoice_item upsert
   */
  export type recurring_invoice_itemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurring_invoice_item
     */
    select?: recurring_invoice_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recurring_invoice_item
     */
    omit?: recurring_invoice_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recurring_invoice_itemInclude<ExtArgs> | null
    /**
     * The filter to search for the recurring_invoice_item to update in case it exists.
     */
    where: recurring_invoice_itemWhereUniqueInput
    /**
     * In case the recurring_invoice_item found by the `where` argument doesn't exist, create a new recurring_invoice_item with this data.
     */
    create: XOR<recurring_invoice_itemCreateInput, recurring_invoice_itemUncheckedCreateInput>
    /**
     * In case the recurring_invoice_item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<recurring_invoice_itemUpdateInput, recurring_invoice_itemUncheckedUpdateInput>
  }

  /**
   * recurring_invoice_item delete
   */
  export type recurring_invoice_itemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurring_invoice_item
     */
    select?: recurring_invoice_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recurring_invoice_item
     */
    omit?: recurring_invoice_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recurring_invoice_itemInclude<ExtArgs> | null
    /**
     * Filter which recurring_invoice_item to delete.
     */
    where: recurring_invoice_itemWhereUniqueInput
  }

  /**
   * recurring_invoice_item deleteMany
   */
  export type recurring_invoice_itemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recurring_invoice_items to delete
     */
    where?: recurring_invoice_itemWhereInput
    /**
     * Limit how many recurring_invoice_items to delete.
     */
    limit?: number
  }

  /**
   * recurring_invoice_item without action
   */
  export type recurring_invoice_itemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurring_invoice_item
     */
    select?: recurring_invoice_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recurring_invoice_item
     */
    omit?: recurring_invoice_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recurring_invoice_itemInclude<ExtArgs> | null
  }


  /**
   * Model user_payment_method
   */

  export type AggregateUser_payment_method = {
    _count: User_payment_methodCountAggregateOutputType | null
    _avg: User_payment_methodAvgAggregateOutputType | null
    _sum: User_payment_methodSumAggregateOutputType | null
    _min: User_payment_methodMinAggregateOutputType | null
    _max: User_payment_methodMaxAggregateOutputType | null
  }

  export type User_payment_methodAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type User_payment_methodSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type User_payment_methodMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    payment_method: $Enums.PaymentMethod | null
    account_name: string | null
    account_number: string | null
    qris_image_url: string | null
    is_active: boolean | null
  }

  export type User_payment_methodMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    payment_method: $Enums.PaymentMethod | null
    account_name: string | null
    account_number: string | null
    qris_image_url: string | null
    is_active: boolean | null
  }

  export type User_payment_methodCountAggregateOutputType = {
    id: number
    user_id: number
    payment_method: number
    account_name: number
    account_number: number
    qris_image_url: number
    is_active: number
    _all: number
  }


  export type User_payment_methodAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type User_payment_methodSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type User_payment_methodMinAggregateInputType = {
    id?: true
    user_id?: true
    payment_method?: true
    account_name?: true
    account_number?: true
    qris_image_url?: true
    is_active?: true
  }

  export type User_payment_methodMaxAggregateInputType = {
    id?: true
    user_id?: true
    payment_method?: true
    account_name?: true
    account_number?: true
    qris_image_url?: true
    is_active?: true
  }

  export type User_payment_methodCountAggregateInputType = {
    id?: true
    user_id?: true
    payment_method?: true
    account_name?: true
    account_number?: true
    qris_image_url?: true
    is_active?: true
    _all?: true
  }

  export type User_payment_methodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_payment_method to aggregate.
     */
    where?: user_payment_methodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_payment_methods to fetch.
     */
    orderBy?: user_payment_methodOrderByWithRelationInput | user_payment_methodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_payment_methodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_payment_methods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_payment_methods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_payment_methods
    **/
    _count?: true | User_payment_methodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_payment_methodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_payment_methodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_payment_methodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_payment_methodMaxAggregateInputType
  }

  export type GetUser_payment_methodAggregateType<T extends User_payment_methodAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_payment_method]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_payment_method[P]>
      : GetScalarType<T[P], AggregateUser_payment_method[P]>
  }




  export type user_payment_methodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_payment_methodWhereInput
    orderBy?: user_payment_methodOrderByWithAggregationInput | user_payment_methodOrderByWithAggregationInput[]
    by: User_payment_methodScalarFieldEnum[] | User_payment_methodScalarFieldEnum
    having?: user_payment_methodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_payment_methodCountAggregateInputType | true
    _avg?: User_payment_methodAvgAggregateInputType
    _sum?: User_payment_methodSumAggregateInputType
    _min?: User_payment_methodMinAggregateInputType
    _max?: User_payment_methodMaxAggregateInputType
  }

  export type User_payment_methodGroupByOutputType = {
    id: number
    user_id: number
    payment_method: $Enums.PaymentMethod
    account_name: string
    account_number: string
    qris_image_url: string | null
    is_active: boolean
    _count: User_payment_methodCountAggregateOutputType | null
    _avg: User_payment_methodAvgAggregateOutputType | null
    _sum: User_payment_methodSumAggregateOutputType | null
    _min: User_payment_methodMinAggregateOutputType | null
    _max: User_payment_methodMaxAggregateOutputType | null
  }

  type GetUser_payment_methodGroupByPayload<T extends user_payment_methodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_payment_methodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_payment_methodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_payment_methodGroupByOutputType[P]>
            : GetScalarType<T[P], User_payment_methodGroupByOutputType[P]>
        }
      >
    >


  export type user_payment_methodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    payment_method?: boolean
    account_name?: boolean
    account_number?: boolean
    qris_image_url?: boolean
    is_active?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_payment_method"]>

  export type user_payment_methodSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    payment_method?: boolean
    account_name?: boolean
    account_number?: boolean
    qris_image_url?: boolean
    is_active?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_payment_method"]>

  export type user_payment_methodSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    payment_method?: boolean
    account_name?: boolean
    account_number?: boolean
    qris_image_url?: boolean
    is_active?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_payment_method"]>

  export type user_payment_methodSelectScalar = {
    id?: boolean
    user_id?: boolean
    payment_method?: boolean
    account_name?: boolean
    account_number?: boolean
    qris_image_url?: boolean
    is_active?: boolean
  }

  export type user_payment_methodOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "payment_method" | "account_name" | "account_number" | "qris_image_url" | "is_active", ExtArgs["result"]["user_payment_method"]>
  export type user_payment_methodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type user_payment_methodIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type user_payment_methodIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $user_payment_methodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_payment_method"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      payment_method: $Enums.PaymentMethod
      account_name: string
      account_number: string
      qris_image_url: string | null
      is_active: boolean
    }, ExtArgs["result"]["user_payment_method"]>
    composites: {}
  }

  type user_payment_methodGetPayload<S extends boolean | null | undefined | user_payment_methodDefaultArgs> = $Result.GetResult<Prisma.$user_payment_methodPayload, S>

  type user_payment_methodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_payment_methodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_payment_methodCountAggregateInputType | true
    }

  export interface user_payment_methodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_payment_method'], meta: { name: 'user_payment_method' } }
    /**
     * Find zero or one User_payment_method that matches the filter.
     * @param {user_payment_methodFindUniqueArgs} args - Arguments to find a User_payment_method
     * @example
     * // Get one User_payment_method
     * const user_payment_method = await prisma.user_payment_method.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_payment_methodFindUniqueArgs>(args: SelectSubset<T, user_payment_methodFindUniqueArgs<ExtArgs>>): Prisma__user_payment_methodClient<$Result.GetResult<Prisma.$user_payment_methodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_payment_method that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_payment_methodFindUniqueOrThrowArgs} args - Arguments to find a User_payment_method
     * @example
     * // Get one User_payment_method
     * const user_payment_method = await prisma.user_payment_method.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_payment_methodFindUniqueOrThrowArgs>(args: SelectSubset<T, user_payment_methodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_payment_methodClient<$Result.GetResult<Prisma.$user_payment_methodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_payment_method that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_payment_methodFindFirstArgs} args - Arguments to find a User_payment_method
     * @example
     * // Get one User_payment_method
     * const user_payment_method = await prisma.user_payment_method.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_payment_methodFindFirstArgs>(args?: SelectSubset<T, user_payment_methodFindFirstArgs<ExtArgs>>): Prisma__user_payment_methodClient<$Result.GetResult<Prisma.$user_payment_methodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_payment_method that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_payment_methodFindFirstOrThrowArgs} args - Arguments to find a User_payment_method
     * @example
     * // Get one User_payment_method
     * const user_payment_method = await prisma.user_payment_method.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_payment_methodFindFirstOrThrowArgs>(args?: SelectSubset<T, user_payment_methodFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_payment_methodClient<$Result.GetResult<Prisma.$user_payment_methodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_payment_methods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_payment_methodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_payment_methods
     * const user_payment_methods = await prisma.user_payment_method.findMany()
     * 
     * // Get first 10 User_payment_methods
     * const user_payment_methods = await prisma.user_payment_method.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_payment_methodWithIdOnly = await prisma.user_payment_method.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends user_payment_methodFindManyArgs>(args?: SelectSubset<T, user_payment_methodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_payment_methodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_payment_method.
     * @param {user_payment_methodCreateArgs} args - Arguments to create a User_payment_method.
     * @example
     * // Create one User_payment_method
     * const User_payment_method = await prisma.user_payment_method.create({
     *   data: {
     *     // ... data to create a User_payment_method
     *   }
     * })
     * 
     */
    create<T extends user_payment_methodCreateArgs>(args: SelectSubset<T, user_payment_methodCreateArgs<ExtArgs>>): Prisma__user_payment_methodClient<$Result.GetResult<Prisma.$user_payment_methodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_payment_methods.
     * @param {user_payment_methodCreateManyArgs} args - Arguments to create many User_payment_methods.
     * @example
     * // Create many User_payment_methods
     * const user_payment_method = await prisma.user_payment_method.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_payment_methodCreateManyArgs>(args?: SelectSubset<T, user_payment_methodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_payment_methods and returns the data saved in the database.
     * @param {user_payment_methodCreateManyAndReturnArgs} args - Arguments to create many User_payment_methods.
     * @example
     * // Create many User_payment_methods
     * const user_payment_method = await prisma.user_payment_method.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_payment_methods and only return the `id`
     * const user_payment_methodWithIdOnly = await prisma.user_payment_method.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_payment_methodCreateManyAndReturnArgs>(args?: SelectSubset<T, user_payment_methodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_payment_methodPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_payment_method.
     * @param {user_payment_methodDeleteArgs} args - Arguments to delete one User_payment_method.
     * @example
     * // Delete one User_payment_method
     * const User_payment_method = await prisma.user_payment_method.delete({
     *   where: {
     *     // ... filter to delete one User_payment_method
     *   }
     * })
     * 
     */
    delete<T extends user_payment_methodDeleteArgs>(args: SelectSubset<T, user_payment_methodDeleteArgs<ExtArgs>>): Prisma__user_payment_methodClient<$Result.GetResult<Prisma.$user_payment_methodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_payment_method.
     * @param {user_payment_methodUpdateArgs} args - Arguments to update one User_payment_method.
     * @example
     * // Update one User_payment_method
     * const user_payment_method = await prisma.user_payment_method.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_payment_methodUpdateArgs>(args: SelectSubset<T, user_payment_methodUpdateArgs<ExtArgs>>): Prisma__user_payment_methodClient<$Result.GetResult<Prisma.$user_payment_methodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_payment_methods.
     * @param {user_payment_methodDeleteManyArgs} args - Arguments to filter User_payment_methods to delete.
     * @example
     * // Delete a few User_payment_methods
     * const { count } = await prisma.user_payment_method.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_payment_methodDeleteManyArgs>(args?: SelectSubset<T, user_payment_methodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_payment_methods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_payment_methodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_payment_methods
     * const user_payment_method = await prisma.user_payment_method.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_payment_methodUpdateManyArgs>(args: SelectSubset<T, user_payment_methodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_payment_methods and returns the data updated in the database.
     * @param {user_payment_methodUpdateManyAndReturnArgs} args - Arguments to update many User_payment_methods.
     * @example
     * // Update many User_payment_methods
     * const user_payment_method = await prisma.user_payment_method.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_payment_methods and only return the `id`
     * const user_payment_methodWithIdOnly = await prisma.user_payment_method.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends user_payment_methodUpdateManyAndReturnArgs>(args: SelectSubset<T, user_payment_methodUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_payment_methodPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_payment_method.
     * @param {user_payment_methodUpsertArgs} args - Arguments to update or create a User_payment_method.
     * @example
     * // Update or create a User_payment_method
     * const user_payment_method = await prisma.user_payment_method.upsert({
     *   create: {
     *     // ... data to create a User_payment_method
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_payment_method we want to update
     *   }
     * })
     */
    upsert<T extends user_payment_methodUpsertArgs>(args: SelectSubset<T, user_payment_methodUpsertArgs<ExtArgs>>): Prisma__user_payment_methodClient<$Result.GetResult<Prisma.$user_payment_methodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_payment_methods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_payment_methodCountArgs} args - Arguments to filter User_payment_methods to count.
     * @example
     * // Count the number of User_payment_methods
     * const count = await prisma.user_payment_method.count({
     *   where: {
     *     // ... the filter for the User_payment_methods we want to count
     *   }
     * })
    **/
    count<T extends user_payment_methodCountArgs>(
      args?: Subset<T, user_payment_methodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_payment_methodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_payment_method.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_payment_methodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_payment_methodAggregateArgs>(args: Subset<T, User_payment_methodAggregateArgs>): Prisma.PrismaPromise<GetUser_payment_methodAggregateType<T>>

    /**
     * Group by User_payment_method.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_payment_methodGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends user_payment_methodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_payment_methodGroupByArgs['orderBy'] }
        : { orderBy?: user_payment_methodGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, user_payment_methodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_payment_methodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_payment_method model
   */
  readonly fields: user_payment_methodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_payment_method.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_payment_methodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user_payment_method model
   */
  interface user_payment_methodFieldRefs {
    readonly id: FieldRef<"user_payment_method", 'Int'>
    readonly user_id: FieldRef<"user_payment_method", 'Int'>
    readonly payment_method: FieldRef<"user_payment_method", 'PaymentMethod'>
    readonly account_name: FieldRef<"user_payment_method", 'String'>
    readonly account_number: FieldRef<"user_payment_method", 'String'>
    readonly qris_image_url: FieldRef<"user_payment_method", 'String'>
    readonly is_active: FieldRef<"user_payment_method", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * user_payment_method findUnique
   */
  export type user_payment_methodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_payment_method
     */
    select?: user_payment_methodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_payment_method
     */
    omit?: user_payment_methodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_payment_methodInclude<ExtArgs> | null
    /**
     * Filter, which user_payment_method to fetch.
     */
    where: user_payment_methodWhereUniqueInput
  }

  /**
   * user_payment_method findUniqueOrThrow
   */
  export type user_payment_methodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_payment_method
     */
    select?: user_payment_methodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_payment_method
     */
    omit?: user_payment_methodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_payment_methodInclude<ExtArgs> | null
    /**
     * Filter, which user_payment_method to fetch.
     */
    where: user_payment_methodWhereUniqueInput
  }

  /**
   * user_payment_method findFirst
   */
  export type user_payment_methodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_payment_method
     */
    select?: user_payment_methodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_payment_method
     */
    omit?: user_payment_methodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_payment_methodInclude<ExtArgs> | null
    /**
     * Filter, which user_payment_method to fetch.
     */
    where?: user_payment_methodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_payment_methods to fetch.
     */
    orderBy?: user_payment_methodOrderByWithRelationInput | user_payment_methodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_payment_methods.
     */
    cursor?: user_payment_methodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_payment_methods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_payment_methods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_payment_methods.
     */
    distinct?: User_payment_methodScalarFieldEnum | User_payment_methodScalarFieldEnum[]
  }

  /**
   * user_payment_method findFirstOrThrow
   */
  export type user_payment_methodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_payment_method
     */
    select?: user_payment_methodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_payment_method
     */
    omit?: user_payment_methodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_payment_methodInclude<ExtArgs> | null
    /**
     * Filter, which user_payment_method to fetch.
     */
    where?: user_payment_methodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_payment_methods to fetch.
     */
    orderBy?: user_payment_methodOrderByWithRelationInput | user_payment_methodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_payment_methods.
     */
    cursor?: user_payment_methodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_payment_methods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_payment_methods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_payment_methods.
     */
    distinct?: User_payment_methodScalarFieldEnum | User_payment_methodScalarFieldEnum[]
  }

  /**
   * user_payment_method findMany
   */
  export type user_payment_methodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_payment_method
     */
    select?: user_payment_methodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_payment_method
     */
    omit?: user_payment_methodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_payment_methodInclude<ExtArgs> | null
    /**
     * Filter, which user_payment_methods to fetch.
     */
    where?: user_payment_methodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_payment_methods to fetch.
     */
    orderBy?: user_payment_methodOrderByWithRelationInput | user_payment_methodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_payment_methods.
     */
    cursor?: user_payment_methodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_payment_methods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_payment_methods.
     */
    skip?: number
    distinct?: User_payment_methodScalarFieldEnum | User_payment_methodScalarFieldEnum[]
  }

  /**
   * user_payment_method create
   */
  export type user_payment_methodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_payment_method
     */
    select?: user_payment_methodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_payment_method
     */
    omit?: user_payment_methodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_payment_methodInclude<ExtArgs> | null
    /**
     * The data needed to create a user_payment_method.
     */
    data: XOR<user_payment_methodCreateInput, user_payment_methodUncheckedCreateInput>
  }

  /**
   * user_payment_method createMany
   */
  export type user_payment_methodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_payment_methods.
     */
    data: user_payment_methodCreateManyInput | user_payment_methodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_payment_method createManyAndReturn
   */
  export type user_payment_methodCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_payment_method
     */
    select?: user_payment_methodSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_payment_method
     */
    omit?: user_payment_methodOmit<ExtArgs> | null
    /**
     * The data used to create many user_payment_methods.
     */
    data: user_payment_methodCreateManyInput | user_payment_methodCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_payment_methodIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_payment_method update
   */
  export type user_payment_methodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_payment_method
     */
    select?: user_payment_methodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_payment_method
     */
    omit?: user_payment_methodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_payment_methodInclude<ExtArgs> | null
    /**
     * The data needed to update a user_payment_method.
     */
    data: XOR<user_payment_methodUpdateInput, user_payment_methodUncheckedUpdateInput>
    /**
     * Choose, which user_payment_method to update.
     */
    where: user_payment_methodWhereUniqueInput
  }

  /**
   * user_payment_method updateMany
   */
  export type user_payment_methodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_payment_methods.
     */
    data: XOR<user_payment_methodUpdateManyMutationInput, user_payment_methodUncheckedUpdateManyInput>
    /**
     * Filter which user_payment_methods to update
     */
    where?: user_payment_methodWhereInput
    /**
     * Limit how many user_payment_methods to update.
     */
    limit?: number
  }

  /**
   * user_payment_method updateManyAndReturn
   */
  export type user_payment_methodUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_payment_method
     */
    select?: user_payment_methodSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_payment_method
     */
    omit?: user_payment_methodOmit<ExtArgs> | null
    /**
     * The data used to update user_payment_methods.
     */
    data: XOR<user_payment_methodUpdateManyMutationInput, user_payment_methodUncheckedUpdateManyInput>
    /**
     * Filter which user_payment_methods to update
     */
    where?: user_payment_methodWhereInput
    /**
     * Limit how many user_payment_methods to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_payment_methodIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_payment_method upsert
   */
  export type user_payment_methodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_payment_method
     */
    select?: user_payment_methodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_payment_method
     */
    omit?: user_payment_methodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_payment_methodInclude<ExtArgs> | null
    /**
     * The filter to search for the user_payment_method to update in case it exists.
     */
    where: user_payment_methodWhereUniqueInput
    /**
     * In case the user_payment_method found by the `where` argument doesn't exist, create a new user_payment_method with this data.
     */
    create: XOR<user_payment_methodCreateInput, user_payment_methodUncheckedCreateInput>
    /**
     * In case the user_payment_method was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_payment_methodUpdateInput, user_payment_methodUncheckedUpdateInput>
  }

  /**
   * user_payment_method delete
   */
  export type user_payment_methodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_payment_method
     */
    select?: user_payment_methodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_payment_method
     */
    omit?: user_payment_methodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_payment_methodInclude<ExtArgs> | null
    /**
     * Filter which user_payment_method to delete.
     */
    where: user_payment_methodWhereUniqueInput
  }

  /**
   * user_payment_method deleteMany
   */
  export type user_payment_methodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_payment_methods to delete
     */
    where?: user_payment_methodWhereInput
    /**
     * Limit how many user_payment_methods to delete.
     */
    limit?: number
  }

  /**
   * user_payment_method without action
   */
  export type user_payment_methodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_payment_method
     */
    select?: user_payment_methodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_payment_method
     */
    omit?: user_payment_methodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_payment_methodInclude<ExtArgs> | null
  }


  /**
   * Model transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    id: number | null
    invoice_id: number | null
  }

  export type TransactionSumAggregateOutputType = {
    id: number | null
    invoice_id: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: number | null
    created_at: Date | null
    invoice_id: number | null
    payment_method: $Enums.PaymentMethod | null
    payment_proof: string | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: number | null
    created_at: Date | null
    invoice_id: number | null
    payment_method: $Enums.PaymentMethod | null
    payment_proof: string | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    created_at: number
    invoice_id: number
    payment_method: number
    payment_proof: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    id?: true
    invoice_id?: true
  }

  export type TransactionSumAggregateInputType = {
    id?: true
    invoice_id?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    created_at?: true
    invoice_id?: true
    payment_method?: true
    payment_proof?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    created_at?: true
    invoice_id?: true
    payment_method?: true
    payment_proof?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    created_at?: true
    invoice_id?: true
    payment_method?: true
    payment_proof?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaction to aggregate.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type transactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionWhereInput
    orderBy?: transactionOrderByWithAggregationInput | transactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: transactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: number
    created_at: Date
    invoice_id: number
    payment_method: $Enums.PaymentMethod
    payment_proof: string
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends transactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type transactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    invoice_id?: boolean
    payment_method?: boolean
    payment_proof?: boolean
    invoices?: boolean | invoicesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type transactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    invoice_id?: boolean
    payment_method?: boolean
    payment_proof?: boolean
    invoices?: boolean | invoicesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type transactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    invoice_id?: boolean
    payment_method?: boolean
    payment_proof?: boolean
    invoices?: boolean | invoicesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type transactionSelectScalar = {
    id?: boolean
    created_at?: boolean
    invoice_id?: boolean
    payment_method?: boolean
    payment_proof?: boolean
  }

  export type transactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "invoice_id" | "payment_method" | "payment_proof", ExtArgs["result"]["transaction"]>
  export type transactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoices?: boolean | invoicesDefaultArgs<ExtArgs>
  }
  export type transactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoices?: boolean | invoicesDefaultArgs<ExtArgs>
  }
  export type transactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoices?: boolean | invoicesDefaultArgs<ExtArgs>
  }

  export type $transactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transaction"
    objects: {
      invoices: Prisma.$invoicesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      created_at: Date
      invoice_id: number
      payment_method: $Enums.PaymentMethod
      payment_proof: string
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type transactionGetPayload<S extends boolean | null | undefined | transactionDefaultArgs> = $Result.GetResult<Prisma.$transactionPayload, S>

  type transactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<transactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface transactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transaction'], meta: { name: 'transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {transactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends transactionFindUniqueArgs>(args: SelectSubset<T, transactionFindUniqueArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {transactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends transactionFindUniqueOrThrowArgs>(args: SelectSubset<T, transactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends transactionFindFirstArgs>(args?: SelectSubset<T, transactionFindFirstArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends transactionFindFirstOrThrowArgs>(args?: SelectSubset<T, transactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends transactionFindManyArgs>(args?: SelectSubset<T, transactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {transactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends transactionCreateArgs>(args: SelectSubset<T, transactionCreateArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {transactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends transactionCreateManyArgs>(args?: SelectSubset<T, transactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {transactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends transactionCreateManyAndReturnArgs>(args?: SelectSubset<T, transactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {transactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends transactionDeleteArgs>(args: SelectSubset<T, transactionDeleteArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {transactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends transactionUpdateArgs>(args: SelectSubset<T, transactionUpdateArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {transactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends transactionDeleteManyArgs>(args?: SelectSubset<T, transactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends transactionUpdateManyArgs>(args: SelectSubset<T, transactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {transactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends transactionUpdateManyAndReturnArgs>(args: SelectSubset<T, transactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {transactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends transactionUpsertArgs>(args: SelectSubset<T, transactionUpsertArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends transactionCountArgs>(
      args?: Subset<T, transactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends transactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transactionGroupByArgs['orderBy'] }
        : { orderBy?: transactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, transactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transaction model
   */
  readonly fields: transactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invoices<T extends invoicesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, invoicesDefaultArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the transaction model
   */
  interface transactionFieldRefs {
    readonly id: FieldRef<"transaction", 'Int'>
    readonly created_at: FieldRef<"transaction", 'DateTime'>
    readonly invoice_id: FieldRef<"transaction", 'Int'>
    readonly payment_method: FieldRef<"transaction", 'PaymentMethod'>
    readonly payment_proof: FieldRef<"transaction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * transaction findUnique
   */
  export type transactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where: transactionWhereUniqueInput
  }

  /**
   * transaction findUniqueOrThrow
   */
  export type transactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where: transactionWhereUniqueInput
  }

  /**
   * transaction findFirst
   */
  export type transactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactions.
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * transaction findFirstOrThrow
   */
  export type transactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactions.
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * transaction findMany
   */
  export type transactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transactions.
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * transaction create
   */
  export type transactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * The data needed to create a transaction.
     */
    data: XOR<transactionCreateInput, transactionUncheckedCreateInput>
  }

  /**
   * transaction createMany
   */
  export type transactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transactions.
     */
    data: transactionCreateManyInput | transactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * transaction createManyAndReturn
   */
  export type transactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * The data used to create many transactions.
     */
    data: transactionCreateManyInput | transactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * transaction update
   */
  export type transactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * The data needed to update a transaction.
     */
    data: XOR<transactionUpdateInput, transactionUncheckedUpdateInput>
    /**
     * Choose, which transaction to update.
     */
    where: transactionWhereUniqueInput
  }

  /**
   * transaction updateMany
   */
  export type transactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transactions.
     */
    data: XOR<transactionUpdateManyMutationInput, transactionUncheckedUpdateManyInput>
    /**
     * Filter which transactions to update
     */
    where?: transactionWhereInput
    /**
     * Limit how many transactions to update.
     */
    limit?: number
  }

  /**
   * transaction updateManyAndReturn
   */
  export type transactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * The data used to update transactions.
     */
    data: XOR<transactionUpdateManyMutationInput, transactionUncheckedUpdateManyInput>
    /**
     * Filter which transactions to update
     */
    where?: transactionWhereInput
    /**
     * Limit how many transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * transaction upsert
   */
  export type transactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * The filter to search for the transaction to update in case it exists.
     */
    where: transactionWhereUniqueInput
    /**
     * In case the transaction found by the `where` argument doesn't exist, create a new transaction with this data.
     */
    create: XOR<transactionCreateInput, transactionUncheckedCreateInput>
    /**
     * In case the transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transactionUpdateInput, transactionUncheckedUpdateInput>
  }

  /**
   * transaction delete
   */
  export type transactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter which transaction to delete.
     */
    where: transactionWhereUniqueInput
  }

  /**
   * transaction deleteMany
   */
  export type transactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transactions to delete
     */
    where?: transactionWhereInput
    /**
     * Limit how many transactions to delete.
     */
    limit?: number
  }

  /**
   * transaction without action
   */
  export type transactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ClientsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    address: 'address',
    is_deleted: 'is_deleted',
    payment_ref: 'payment_ref'
  };

  export type ClientsScalarFieldEnum = (typeof ClientsScalarFieldEnum)[keyof typeof ClientsScalarFieldEnum]


  export const Invoice_itemsScalarFieldEnum: {
    id: 'id',
    invoice_id: 'invoice_id',
    product_id: 'product_id',
    name_snapshot: 'name_snapshot',
    price_snapshot: 'price_snapshot',
    quantity: 'quantity',
    total: 'total'
  };

  export type Invoice_itemsScalarFieldEnum = (typeof Invoice_itemsScalarFieldEnum)[keyof typeof Invoice_itemsScalarFieldEnum]


  export const InvoicesScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    client_id: 'client_id',
    invoice_number: 'invoice_number',
    start_date: 'start_date',
    due_date: 'due_date',
    notes: 'notes',
    status: 'status',
    total: 'total',
    is_deleted: 'is_deleted',
    payment_method: 'payment_method'
  };

  export type InvoicesScalarFieldEnum = (typeof InvoicesScalarFieldEnum)[keyof typeof InvoicesScalarFieldEnum]


  export const Products_servicesScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    name: 'name',
    description: 'description',
    price: 'price',
    is_deleted: 'is_deleted',
    type: 'type',
    unit: 'unit'
  };

  export type Products_servicesScalarFieldEnum = (typeof Products_servicesScalarFieldEnum)[keyof typeof Products_servicesScalarFieldEnum]


  export const User_profilesScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    first_name: 'first_name',
    last_name: 'last_name',
    phone: 'phone',
    profile_img: 'profile_img'
  };

  export type User_profilesScalarFieldEnum = (typeof User_profilesScalarFieldEnum)[keyof typeof User_profilesScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password_hash: 'password_hash',
    is_verified: 'is_verified'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const Recurring_invoiceScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    client_id: 'client_id',
    invoice_number: 'invoice_number',
    start_date: 'start_date',
    due_date: 'due_date',
    recurrence: 'recurrence',
    notes: 'notes',
    next_run: 'next_run',
    is_active: 'is_active',
    is_deleted: 'is_deleted',
    total: 'total'
  };

  export type Recurring_invoiceScalarFieldEnum = (typeof Recurring_invoiceScalarFieldEnum)[keyof typeof Recurring_invoiceScalarFieldEnum]


  export const Recurring_invoice_itemScalarFieldEnum: {
    id: 'id',
    recurring_invoice_id: 'recurring_invoice_id',
    product_id: 'product_id',
    name_snapshot: 'name_snapshot',
    price_snapshot: 'price_snapshot',
    quantity: 'quantity',
    total: 'total'
  };

  export type Recurring_invoice_itemScalarFieldEnum = (typeof Recurring_invoice_itemScalarFieldEnum)[keyof typeof Recurring_invoice_itemScalarFieldEnum]


  export const User_payment_methodScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    payment_method: 'payment_method',
    account_name: 'account_name',
    account_number: 'account_number',
    qris_image_url: 'qris_image_url',
    is_active: 'is_active'
  };

  export type User_payment_methodScalarFieldEnum = (typeof User_payment_methodScalarFieldEnum)[keyof typeof User_payment_methodScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    invoice_id: 'invoice_id',
    payment_method: 'payment_method',
    payment_proof: 'payment_proof'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    


  /**
   * Reference to a field of type 'PaymentMethod[]'
   */
  export type ListEnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'Type'
   */
  export type EnumTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Type'>
    


  /**
   * Reference to a field of type 'Type[]'
   */
  export type ListEnumTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Type[]'>
    


  /**
   * Reference to a field of type 'Unit'
   */
  export type EnumUnitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Unit'>
    


  /**
   * Reference to a field of type 'Unit[]'
   */
  export type ListEnumUnitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Unit[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type clientsWhereInput = {
    AND?: clientsWhereInput | clientsWhereInput[]
    OR?: clientsWhereInput[]
    NOT?: clientsWhereInput | clientsWhereInput[]
    id?: IntFilter<"clients"> | number
    user_id?: IntFilter<"clients"> | number
    name?: StringFilter<"clients"> | string
    email?: StringFilter<"clients"> | string
    phone?: StringFilter<"clients"> | string
    address?: StringFilter<"clients"> | string
    is_deleted?: BoolFilter<"clients"> | boolean
    payment_ref?: EnumPaymentMethodFilter<"clients"> | $Enums.PaymentMethod
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    invoices?: InvoicesListRelationFilter
    recurring_invoice?: Recurring_invoiceListRelationFilter
  }

  export type clientsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    is_deleted?: SortOrder
    payment_ref?: SortOrder
    users?: usersOrderByWithRelationInput
    invoices?: invoicesOrderByRelationAggregateInput
    recurring_invoice?: recurring_invoiceOrderByRelationAggregateInput
  }

  export type clientsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: clientsWhereInput | clientsWhereInput[]
    OR?: clientsWhereInput[]
    NOT?: clientsWhereInput | clientsWhereInput[]
    user_id?: IntFilter<"clients"> | number
    name?: StringFilter<"clients"> | string
    email?: StringFilter<"clients"> | string
    phone?: StringFilter<"clients"> | string
    address?: StringFilter<"clients"> | string
    is_deleted?: BoolFilter<"clients"> | boolean
    payment_ref?: EnumPaymentMethodFilter<"clients"> | $Enums.PaymentMethod
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    invoices?: InvoicesListRelationFilter
    recurring_invoice?: Recurring_invoiceListRelationFilter
  }, "id">

  export type clientsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    is_deleted?: SortOrder
    payment_ref?: SortOrder
    _count?: clientsCountOrderByAggregateInput
    _avg?: clientsAvgOrderByAggregateInput
    _max?: clientsMaxOrderByAggregateInput
    _min?: clientsMinOrderByAggregateInput
    _sum?: clientsSumOrderByAggregateInput
  }

  export type clientsScalarWhereWithAggregatesInput = {
    AND?: clientsScalarWhereWithAggregatesInput | clientsScalarWhereWithAggregatesInput[]
    OR?: clientsScalarWhereWithAggregatesInput[]
    NOT?: clientsScalarWhereWithAggregatesInput | clientsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"clients"> | number
    user_id?: IntWithAggregatesFilter<"clients"> | number
    name?: StringWithAggregatesFilter<"clients"> | string
    email?: StringWithAggregatesFilter<"clients"> | string
    phone?: StringWithAggregatesFilter<"clients"> | string
    address?: StringWithAggregatesFilter<"clients"> | string
    is_deleted?: BoolWithAggregatesFilter<"clients"> | boolean
    payment_ref?: EnumPaymentMethodWithAggregatesFilter<"clients"> | $Enums.PaymentMethod
  }

  export type invoice_itemsWhereInput = {
    AND?: invoice_itemsWhereInput | invoice_itemsWhereInput[]
    OR?: invoice_itemsWhereInput[]
    NOT?: invoice_itemsWhereInput | invoice_itemsWhereInput[]
    id?: IntFilter<"invoice_items"> | number
    invoice_id?: IntFilter<"invoice_items"> | number
    product_id?: IntFilter<"invoice_items"> | number
    name_snapshot?: StringFilter<"invoice_items"> | string
    price_snapshot?: IntFilter<"invoice_items"> | number
    quantity?: IntFilter<"invoice_items"> | number
    total?: IntFilter<"invoice_items"> | number
    invoices?: XOR<InvoicesScalarRelationFilter, invoicesWhereInput>
    products_services?: XOR<Products_servicesScalarRelationFilter, products_servicesWhereInput>
  }

  export type invoice_itemsOrderByWithRelationInput = {
    id?: SortOrder
    invoice_id?: SortOrder
    product_id?: SortOrder
    name_snapshot?: SortOrder
    price_snapshot?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
    invoices?: invoicesOrderByWithRelationInput
    products_services?: products_servicesOrderByWithRelationInput
  }

  export type invoice_itemsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: invoice_itemsWhereInput | invoice_itemsWhereInput[]
    OR?: invoice_itemsWhereInput[]
    NOT?: invoice_itemsWhereInput | invoice_itemsWhereInput[]
    invoice_id?: IntFilter<"invoice_items"> | number
    product_id?: IntFilter<"invoice_items"> | number
    name_snapshot?: StringFilter<"invoice_items"> | string
    price_snapshot?: IntFilter<"invoice_items"> | number
    quantity?: IntFilter<"invoice_items"> | number
    total?: IntFilter<"invoice_items"> | number
    invoices?: XOR<InvoicesScalarRelationFilter, invoicesWhereInput>
    products_services?: XOR<Products_servicesScalarRelationFilter, products_servicesWhereInput>
  }, "id">

  export type invoice_itemsOrderByWithAggregationInput = {
    id?: SortOrder
    invoice_id?: SortOrder
    product_id?: SortOrder
    name_snapshot?: SortOrder
    price_snapshot?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
    _count?: invoice_itemsCountOrderByAggregateInput
    _avg?: invoice_itemsAvgOrderByAggregateInput
    _max?: invoice_itemsMaxOrderByAggregateInput
    _min?: invoice_itemsMinOrderByAggregateInput
    _sum?: invoice_itemsSumOrderByAggregateInput
  }

  export type invoice_itemsScalarWhereWithAggregatesInput = {
    AND?: invoice_itemsScalarWhereWithAggregatesInput | invoice_itemsScalarWhereWithAggregatesInput[]
    OR?: invoice_itemsScalarWhereWithAggregatesInput[]
    NOT?: invoice_itemsScalarWhereWithAggregatesInput | invoice_itemsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"invoice_items"> | number
    invoice_id?: IntWithAggregatesFilter<"invoice_items"> | number
    product_id?: IntWithAggregatesFilter<"invoice_items"> | number
    name_snapshot?: StringWithAggregatesFilter<"invoice_items"> | string
    price_snapshot?: IntWithAggregatesFilter<"invoice_items"> | number
    quantity?: IntWithAggregatesFilter<"invoice_items"> | number
    total?: IntWithAggregatesFilter<"invoice_items"> | number
  }

  export type invoicesWhereInput = {
    AND?: invoicesWhereInput | invoicesWhereInput[]
    OR?: invoicesWhereInput[]
    NOT?: invoicesWhereInput | invoicesWhereInput[]
    id?: IntFilter<"invoices"> | number
    user_id?: IntFilter<"invoices"> | number
    client_id?: IntFilter<"invoices"> | number
    invoice_number?: StringFilter<"invoices"> | string
    start_date?: DateTimeFilter<"invoices"> | Date | string
    due_date?: DateTimeFilter<"invoices"> | Date | string
    notes?: StringNullableFilter<"invoices"> | string | null
    status?: EnumStatusFilter<"invoices"> | $Enums.Status
    total?: IntFilter<"invoices"> | number
    is_deleted?: BoolFilter<"invoices"> | boolean
    payment_method?: EnumPaymentMethodFilter<"invoices"> | $Enums.PaymentMethod
    invoice_items?: Invoice_itemsListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    clients?: XOR<ClientsScalarRelationFilter, clientsWhereInput>
    transaction?: TransactionListRelationFilter
  }

  export type invoicesOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    client_id?: SortOrder
    invoice_number?: SortOrder
    start_date?: SortOrder
    due_date?: SortOrder
    notes?: SortOrderInput | SortOrder
    status?: SortOrder
    total?: SortOrder
    is_deleted?: SortOrder
    payment_method?: SortOrder
    invoice_items?: invoice_itemsOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
    clients?: clientsOrderByWithRelationInput
    transaction?: transactionOrderByRelationAggregateInput
  }

  export type invoicesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    invoice_number?: string
    AND?: invoicesWhereInput | invoicesWhereInput[]
    OR?: invoicesWhereInput[]
    NOT?: invoicesWhereInput | invoicesWhereInput[]
    user_id?: IntFilter<"invoices"> | number
    client_id?: IntFilter<"invoices"> | number
    start_date?: DateTimeFilter<"invoices"> | Date | string
    due_date?: DateTimeFilter<"invoices"> | Date | string
    notes?: StringNullableFilter<"invoices"> | string | null
    status?: EnumStatusFilter<"invoices"> | $Enums.Status
    total?: IntFilter<"invoices"> | number
    is_deleted?: BoolFilter<"invoices"> | boolean
    payment_method?: EnumPaymentMethodFilter<"invoices"> | $Enums.PaymentMethod
    invoice_items?: Invoice_itemsListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    clients?: XOR<ClientsScalarRelationFilter, clientsWhereInput>
    transaction?: TransactionListRelationFilter
  }, "id" | "invoice_number">

  export type invoicesOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    client_id?: SortOrder
    invoice_number?: SortOrder
    start_date?: SortOrder
    due_date?: SortOrder
    notes?: SortOrderInput | SortOrder
    status?: SortOrder
    total?: SortOrder
    is_deleted?: SortOrder
    payment_method?: SortOrder
    _count?: invoicesCountOrderByAggregateInput
    _avg?: invoicesAvgOrderByAggregateInput
    _max?: invoicesMaxOrderByAggregateInput
    _min?: invoicesMinOrderByAggregateInput
    _sum?: invoicesSumOrderByAggregateInput
  }

  export type invoicesScalarWhereWithAggregatesInput = {
    AND?: invoicesScalarWhereWithAggregatesInput | invoicesScalarWhereWithAggregatesInput[]
    OR?: invoicesScalarWhereWithAggregatesInput[]
    NOT?: invoicesScalarWhereWithAggregatesInput | invoicesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"invoices"> | number
    user_id?: IntWithAggregatesFilter<"invoices"> | number
    client_id?: IntWithAggregatesFilter<"invoices"> | number
    invoice_number?: StringWithAggregatesFilter<"invoices"> | string
    start_date?: DateTimeWithAggregatesFilter<"invoices"> | Date | string
    due_date?: DateTimeWithAggregatesFilter<"invoices"> | Date | string
    notes?: StringNullableWithAggregatesFilter<"invoices"> | string | null
    status?: EnumStatusWithAggregatesFilter<"invoices"> | $Enums.Status
    total?: IntWithAggregatesFilter<"invoices"> | number
    is_deleted?: BoolWithAggregatesFilter<"invoices"> | boolean
    payment_method?: EnumPaymentMethodWithAggregatesFilter<"invoices"> | $Enums.PaymentMethod
  }

  export type products_servicesWhereInput = {
    AND?: products_servicesWhereInput | products_servicesWhereInput[]
    OR?: products_servicesWhereInput[]
    NOT?: products_servicesWhereInput | products_servicesWhereInput[]
    id?: IntFilter<"products_services"> | number
    user_id?: IntFilter<"products_services"> | number
    name?: StringFilter<"products_services"> | string
    description?: StringFilter<"products_services"> | string
    price?: IntFilter<"products_services"> | number
    is_deleted?: BoolFilter<"products_services"> | boolean
    type?: EnumTypeFilter<"products_services"> | $Enums.Type
    unit?: EnumUnitFilter<"products_services"> | $Enums.Unit
    invoice_items?: Invoice_itemsListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    recurring_invoice_item?: Recurring_invoice_itemListRelationFilter
  }

  export type products_servicesOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    is_deleted?: SortOrder
    type?: SortOrder
    unit?: SortOrder
    invoice_items?: invoice_itemsOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
    recurring_invoice_item?: recurring_invoice_itemOrderByRelationAggregateInput
  }

  export type products_servicesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: products_servicesWhereInput | products_servicesWhereInput[]
    OR?: products_servicesWhereInput[]
    NOT?: products_servicesWhereInput | products_servicesWhereInput[]
    user_id?: IntFilter<"products_services"> | number
    name?: StringFilter<"products_services"> | string
    description?: StringFilter<"products_services"> | string
    price?: IntFilter<"products_services"> | number
    is_deleted?: BoolFilter<"products_services"> | boolean
    type?: EnumTypeFilter<"products_services"> | $Enums.Type
    unit?: EnumUnitFilter<"products_services"> | $Enums.Unit
    invoice_items?: Invoice_itemsListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    recurring_invoice_item?: Recurring_invoice_itemListRelationFilter
  }, "id">

  export type products_servicesOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    is_deleted?: SortOrder
    type?: SortOrder
    unit?: SortOrder
    _count?: products_servicesCountOrderByAggregateInput
    _avg?: products_servicesAvgOrderByAggregateInput
    _max?: products_servicesMaxOrderByAggregateInput
    _min?: products_servicesMinOrderByAggregateInput
    _sum?: products_servicesSumOrderByAggregateInput
  }

  export type products_servicesScalarWhereWithAggregatesInput = {
    AND?: products_servicesScalarWhereWithAggregatesInput | products_servicesScalarWhereWithAggregatesInput[]
    OR?: products_servicesScalarWhereWithAggregatesInput[]
    NOT?: products_servicesScalarWhereWithAggregatesInput | products_servicesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"products_services"> | number
    user_id?: IntWithAggregatesFilter<"products_services"> | number
    name?: StringWithAggregatesFilter<"products_services"> | string
    description?: StringWithAggregatesFilter<"products_services"> | string
    price?: IntWithAggregatesFilter<"products_services"> | number
    is_deleted?: BoolWithAggregatesFilter<"products_services"> | boolean
    type?: EnumTypeWithAggregatesFilter<"products_services"> | $Enums.Type
    unit?: EnumUnitWithAggregatesFilter<"products_services"> | $Enums.Unit
  }

  export type user_profilesWhereInput = {
    AND?: user_profilesWhereInput | user_profilesWhereInput[]
    OR?: user_profilesWhereInput[]
    NOT?: user_profilesWhereInput | user_profilesWhereInput[]
    id?: IntFilter<"user_profiles"> | number
    user_id?: IntFilter<"user_profiles"> | number
    first_name?: StringFilter<"user_profiles"> | string
    last_name?: StringFilter<"user_profiles"> | string
    phone?: StringNullableFilter<"user_profiles"> | string | null
    profile_img?: StringNullableFilter<"user_profiles"> | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type user_profilesOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone?: SortOrderInput | SortOrder
    profile_img?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type user_profilesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: user_profilesWhereInput | user_profilesWhereInput[]
    OR?: user_profilesWhereInput[]
    NOT?: user_profilesWhereInput | user_profilesWhereInput[]
    user_id?: IntFilter<"user_profiles"> | number
    first_name?: StringFilter<"user_profiles"> | string
    last_name?: StringFilter<"user_profiles"> | string
    phone?: StringNullableFilter<"user_profiles"> | string | null
    profile_img?: StringNullableFilter<"user_profiles"> | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type user_profilesOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone?: SortOrderInput | SortOrder
    profile_img?: SortOrderInput | SortOrder
    _count?: user_profilesCountOrderByAggregateInput
    _avg?: user_profilesAvgOrderByAggregateInput
    _max?: user_profilesMaxOrderByAggregateInput
    _min?: user_profilesMinOrderByAggregateInput
    _sum?: user_profilesSumOrderByAggregateInput
  }

  export type user_profilesScalarWhereWithAggregatesInput = {
    AND?: user_profilesScalarWhereWithAggregatesInput | user_profilesScalarWhereWithAggregatesInput[]
    OR?: user_profilesScalarWhereWithAggregatesInput[]
    NOT?: user_profilesScalarWhereWithAggregatesInput | user_profilesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user_profiles"> | number
    user_id?: IntWithAggregatesFilter<"user_profiles"> | number
    first_name?: StringWithAggregatesFilter<"user_profiles"> | string
    last_name?: StringWithAggregatesFilter<"user_profiles"> | string
    phone?: StringNullableWithAggregatesFilter<"user_profiles"> | string | null
    profile_img?: StringNullableWithAggregatesFilter<"user_profiles"> | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    email?: StringFilter<"users"> | string
    password_hash?: StringFilter<"users"> | string
    is_verified?: BoolFilter<"users"> | boolean
    clients?: ClientsListRelationFilter
    invoices?: InvoicesListRelationFilter
    products_services?: Products_servicesListRelationFilter
    recurring_invoice?: Recurring_invoiceListRelationFilter
    user_payment_method?: User_payment_methodListRelationFilter
    user_profiles?: User_profilesListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    is_verified?: SortOrder
    clients?: clientsOrderByRelationAggregateInput
    invoices?: invoicesOrderByRelationAggregateInput
    products_services?: products_servicesOrderByRelationAggregateInput
    recurring_invoice?: recurring_invoiceOrderByRelationAggregateInput
    user_payment_method?: user_payment_methodOrderByRelationAggregateInput
    user_profiles?: user_profilesOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password_hash?: StringFilter<"users"> | string
    is_verified?: BoolFilter<"users"> | boolean
    clients?: ClientsListRelationFilter
    invoices?: InvoicesListRelationFilter
    products_services?: Products_servicesListRelationFilter
    recurring_invoice?: Recurring_invoiceListRelationFilter
    user_payment_method?: User_payment_methodListRelationFilter
    user_profiles?: User_profilesListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    is_verified?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    email?: StringWithAggregatesFilter<"users"> | string
    password_hash?: StringWithAggregatesFilter<"users"> | string
    is_verified?: BoolWithAggregatesFilter<"users"> | boolean
  }

  export type recurring_invoiceWhereInput = {
    AND?: recurring_invoiceWhereInput | recurring_invoiceWhereInput[]
    OR?: recurring_invoiceWhereInput[]
    NOT?: recurring_invoiceWhereInput | recurring_invoiceWhereInput[]
    id?: IntFilter<"recurring_invoice"> | number
    user_id?: IntFilter<"recurring_invoice"> | number
    client_id?: IntFilter<"recurring_invoice"> | number
    invoice_number?: StringFilter<"recurring_invoice"> | string
    start_date?: DateTimeFilter<"recurring_invoice"> | Date | string
    due_date?: DateTimeNullableFilter<"recurring_invoice"> | Date | string | null
    recurrence?: StringFilter<"recurring_invoice"> | string
    notes?: StringNullableFilter<"recurring_invoice"> | string | null
    next_run?: DateTimeFilter<"recurring_invoice"> | Date | string
    is_active?: BoolFilter<"recurring_invoice"> | boolean
    is_deleted?: BoolFilter<"recurring_invoice"> | boolean
    total?: IntFilter<"recurring_invoice"> | number
    clients?: XOR<ClientsScalarRelationFilter, clientsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    recurring_invoice_item?: Recurring_invoice_itemListRelationFilter
  }

  export type recurring_invoiceOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    client_id?: SortOrder
    invoice_number?: SortOrder
    start_date?: SortOrder
    due_date?: SortOrderInput | SortOrder
    recurrence?: SortOrder
    notes?: SortOrderInput | SortOrder
    next_run?: SortOrder
    is_active?: SortOrder
    is_deleted?: SortOrder
    total?: SortOrder
    clients?: clientsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
    recurring_invoice_item?: recurring_invoice_itemOrderByRelationAggregateInput
  }

  export type recurring_invoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    invoice_number?: string
    AND?: recurring_invoiceWhereInput | recurring_invoiceWhereInput[]
    OR?: recurring_invoiceWhereInput[]
    NOT?: recurring_invoiceWhereInput | recurring_invoiceWhereInput[]
    user_id?: IntFilter<"recurring_invoice"> | number
    client_id?: IntFilter<"recurring_invoice"> | number
    start_date?: DateTimeFilter<"recurring_invoice"> | Date | string
    due_date?: DateTimeNullableFilter<"recurring_invoice"> | Date | string | null
    recurrence?: StringFilter<"recurring_invoice"> | string
    notes?: StringNullableFilter<"recurring_invoice"> | string | null
    next_run?: DateTimeFilter<"recurring_invoice"> | Date | string
    is_active?: BoolFilter<"recurring_invoice"> | boolean
    is_deleted?: BoolFilter<"recurring_invoice"> | boolean
    total?: IntFilter<"recurring_invoice"> | number
    clients?: XOR<ClientsScalarRelationFilter, clientsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    recurring_invoice_item?: Recurring_invoice_itemListRelationFilter
  }, "id" | "invoice_number">

  export type recurring_invoiceOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    client_id?: SortOrder
    invoice_number?: SortOrder
    start_date?: SortOrder
    due_date?: SortOrderInput | SortOrder
    recurrence?: SortOrder
    notes?: SortOrderInput | SortOrder
    next_run?: SortOrder
    is_active?: SortOrder
    is_deleted?: SortOrder
    total?: SortOrder
    _count?: recurring_invoiceCountOrderByAggregateInput
    _avg?: recurring_invoiceAvgOrderByAggregateInput
    _max?: recurring_invoiceMaxOrderByAggregateInput
    _min?: recurring_invoiceMinOrderByAggregateInput
    _sum?: recurring_invoiceSumOrderByAggregateInput
  }

  export type recurring_invoiceScalarWhereWithAggregatesInput = {
    AND?: recurring_invoiceScalarWhereWithAggregatesInput | recurring_invoiceScalarWhereWithAggregatesInput[]
    OR?: recurring_invoiceScalarWhereWithAggregatesInput[]
    NOT?: recurring_invoiceScalarWhereWithAggregatesInput | recurring_invoiceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"recurring_invoice"> | number
    user_id?: IntWithAggregatesFilter<"recurring_invoice"> | number
    client_id?: IntWithAggregatesFilter<"recurring_invoice"> | number
    invoice_number?: StringWithAggregatesFilter<"recurring_invoice"> | string
    start_date?: DateTimeWithAggregatesFilter<"recurring_invoice"> | Date | string
    due_date?: DateTimeNullableWithAggregatesFilter<"recurring_invoice"> | Date | string | null
    recurrence?: StringWithAggregatesFilter<"recurring_invoice"> | string
    notes?: StringNullableWithAggregatesFilter<"recurring_invoice"> | string | null
    next_run?: DateTimeWithAggregatesFilter<"recurring_invoice"> | Date | string
    is_active?: BoolWithAggregatesFilter<"recurring_invoice"> | boolean
    is_deleted?: BoolWithAggregatesFilter<"recurring_invoice"> | boolean
    total?: IntWithAggregatesFilter<"recurring_invoice"> | number
  }

  export type recurring_invoice_itemWhereInput = {
    AND?: recurring_invoice_itemWhereInput | recurring_invoice_itemWhereInput[]
    OR?: recurring_invoice_itemWhereInput[]
    NOT?: recurring_invoice_itemWhereInput | recurring_invoice_itemWhereInput[]
    id?: IntFilter<"recurring_invoice_item"> | number
    recurring_invoice_id?: IntFilter<"recurring_invoice_item"> | number
    product_id?: IntFilter<"recurring_invoice_item"> | number
    name_snapshot?: StringFilter<"recurring_invoice_item"> | string
    price_snapshot?: StringFilter<"recurring_invoice_item"> | string
    quantity?: IntFilter<"recurring_invoice_item"> | number
    total?: IntFilter<"recurring_invoice_item"> | number
    products_services?: XOR<Products_servicesScalarRelationFilter, products_servicesWhereInput>
    recurring_invoice?: XOR<Recurring_invoiceScalarRelationFilter, recurring_invoiceWhereInput>
  }

  export type recurring_invoice_itemOrderByWithRelationInput = {
    id?: SortOrder
    recurring_invoice_id?: SortOrder
    product_id?: SortOrder
    name_snapshot?: SortOrder
    price_snapshot?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
    products_services?: products_servicesOrderByWithRelationInput
    recurring_invoice?: recurring_invoiceOrderByWithRelationInput
  }

  export type recurring_invoice_itemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: recurring_invoice_itemWhereInput | recurring_invoice_itemWhereInput[]
    OR?: recurring_invoice_itemWhereInput[]
    NOT?: recurring_invoice_itemWhereInput | recurring_invoice_itemWhereInput[]
    recurring_invoice_id?: IntFilter<"recurring_invoice_item"> | number
    product_id?: IntFilter<"recurring_invoice_item"> | number
    name_snapshot?: StringFilter<"recurring_invoice_item"> | string
    price_snapshot?: StringFilter<"recurring_invoice_item"> | string
    quantity?: IntFilter<"recurring_invoice_item"> | number
    total?: IntFilter<"recurring_invoice_item"> | number
    products_services?: XOR<Products_servicesScalarRelationFilter, products_servicesWhereInput>
    recurring_invoice?: XOR<Recurring_invoiceScalarRelationFilter, recurring_invoiceWhereInput>
  }, "id">

  export type recurring_invoice_itemOrderByWithAggregationInput = {
    id?: SortOrder
    recurring_invoice_id?: SortOrder
    product_id?: SortOrder
    name_snapshot?: SortOrder
    price_snapshot?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
    _count?: recurring_invoice_itemCountOrderByAggregateInput
    _avg?: recurring_invoice_itemAvgOrderByAggregateInput
    _max?: recurring_invoice_itemMaxOrderByAggregateInput
    _min?: recurring_invoice_itemMinOrderByAggregateInput
    _sum?: recurring_invoice_itemSumOrderByAggregateInput
  }

  export type recurring_invoice_itemScalarWhereWithAggregatesInput = {
    AND?: recurring_invoice_itemScalarWhereWithAggregatesInput | recurring_invoice_itemScalarWhereWithAggregatesInput[]
    OR?: recurring_invoice_itemScalarWhereWithAggregatesInput[]
    NOT?: recurring_invoice_itemScalarWhereWithAggregatesInput | recurring_invoice_itemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"recurring_invoice_item"> | number
    recurring_invoice_id?: IntWithAggregatesFilter<"recurring_invoice_item"> | number
    product_id?: IntWithAggregatesFilter<"recurring_invoice_item"> | number
    name_snapshot?: StringWithAggregatesFilter<"recurring_invoice_item"> | string
    price_snapshot?: StringWithAggregatesFilter<"recurring_invoice_item"> | string
    quantity?: IntWithAggregatesFilter<"recurring_invoice_item"> | number
    total?: IntWithAggregatesFilter<"recurring_invoice_item"> | number
  }

  export type user_payment_methodWhereInput = {
    AND?: user_payment_methodWhereInput | user_payment_methodWhereInput[]
    OR?: user_payment_methodWhereInput[]
    NOT?: user_payment_methodWhereInput | user_payment_methodWhereInput[]
    id?: IntFilter<"user_payment_method"> | number
    user_id?: IntFilter<"user_payment_method"> | number
    payment_method?: EnumPaymentMethodFilter<"user_payment_method"> | $Enums.PaymentMethod
    account_name?: StringFilter<"user_payment_method"> | string
    account_number?: StringFilter<"user_payment_method"> | string
    qris_image_url?: StringNullableFilter<"user_payment_method"> | string | null
    is_active?: BoolFilter<"user_payment_method"> | boolean
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type user_payment_methodOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    payment_method?: SortOrder
    account_name?: SortOrder
    account_number?: SortOrder
    qris_image_url?: SortOrderInput | SortOrder
    is_active?: SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type user_payment_methodWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: user_payment_methodWhereInput | user_payment_methodWhereInput[]
    OR?: user_payment_methodWhereInput[]
    NOT?: user_payment_methodWhereInput | user_payment_methodWhereInput[]
    user_id?: IntFilter<"user_payment_method"> | number
    payment_method?: EnumPaymentMethodFilter<"user_payment_method"> | $Enums.PaymentMethod
    account_name?: StringFilter<"user_payment_method"> | string
    account_number?: StringFilter<"user_payment_method"> | string
    qris_image_url?: StringNullableFilter<"user_payment_method"> | string | null
    is_active?: BoolFilter<"user_payment_method"> | boolean
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type user_payment_methodOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    payment_method?: SortOrder
    account_name?: SortOrder
    account_number?: SortOrder
    qris_image_url?: SortOrderInput | SortOrder
    is_active?: SortOrder
    _count?: user_payment_methodCountOrderByAggregateInput
    _avg?: user_payment_methodAvgOrderByAggregateInput
    _max?: user_payment_methodMaxOrderByAggregateInput
    _min?: user_payment_methodMinOrderByAggregateInput
    _sum?: user_payment_methodSumOrderByAggregateInput
  }

  export type user_payment_methodScalarWhereWithAggregatesInput = {
    AND?: user_payment_methodScalarWhereWithAggregatesInput | user_payment_methodScalarWhereWithAggregatesInput[]
    OR?: user_payment_methodScalarWhereWithAggregatesInput[]
    NOT?: user_payment_methodScalarWhereWithAggregatesInput | user_payment_methodScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user_payment_method"> | number
    user_id?: IntWithAggregatesFilter<"user_payment_method"> | number
    payment_method?: EnumPaymentMethodWithAggregatesFilter<"user_payment_method"> | $Enums.PaymentMethod
    account_name?: StringWithAggregatesFilter<"user_payment_method"> | string
    account_number?: StringWithAggregatesFilter<"user_payment_method"> | string
    qris_image_url?: StringNullableWithAggregatesFilter<"user_payment_method"> | string | null
    is_active?: BoolWithAggregatesFilter<"user_payment_method"> | boolean
  }

  export type transactionWhereInput = {
    AND?: transactionWhereInput | transactionWhereInput[]
    OR?: transactionWhereInput[]
    NOT?: transactionWhereInput | transactionWhereInput[]
    id?: IntFilter<"transaction"> | number
    created_at?: DateTimeFilter<"transaction"> | Date | string
    invoice_id?: IntFilter<"transaction"> | number
    payment_method?: EnumPaymentMethodFilter<"transaction"> | $Enums.PaymentMethod
    payment_proof?: StringFilter<"transaction"> | string
    invoices?: XOR<InvoicesScalarRelationFilter, invoicesWhereInput>
  }

  export type transactionOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    invoice_id?: SortOrder
    payment_method?: SortOrder
    payment_proof?: SortOrder
    invoices?: invoicesOrderByWithRelationInput
  }

  export type transactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: transactionWhereInput | transactionWhereInput[]
    OR?: transactionWhereInput[]
    NOT?: transactionWhereInput | transactionWhereInput[]
    created_at?: DateTimeFilter<"transaction"> | Date | string
    invoice_id?: IntFilter<"transaction"> | number
    payment_method?: EnumPaymentMethodFilter<"transaction"> | $Enums.PaymentMethod
    payment_proof?: StringFilter<"transaction"> | string
    invoices?: XOR<InvoicesScalarRelationFilter, invoicesWhereInput>
  }, "id">

  export type transactionOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    invoice_id?: SortOrder
    payment_method?: SortOrder
    payment_proof?: SortOrder
    _count?: transactionCountOrderByAggregateInput
    _avg?: transactionAvgOrderByAggregateInput
    _max?: transactionMaxOrderByAggregateInput
    _min?: transactionMinOrderByAggregateInput
    _sum?: transactionSumOrderByAggregateInput
  }

  export type transactionScalarWhereWithAggregatesInput = {
    AND?: transactionScalarWhereWithAggregatesInput | transactionScalarWhereWithAggregatesInput[]
    OR?: transactionScalarWhereWithAggregatesInput[]
    NOT?: transactionScalarWhereWithAggregatesInput | transactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"transaction"> | number
    created_at?: DateTimeWithAggregatesFilter<"transaction"> | Date | string
    invoice_id?: IntWithAggregatesFilter<"transaction"> | number
    payment_method?: EnumPaymentMethodWithAggregatesFilter<"transaction"> | $Enums.PaymentMethod
    payment_proof?: StringWithAggregatesFilter<"transaction"> | string
  }

  export type clientsCreateInput = {
    name: string
    email: string
    phone: string
    address: string
    is_deleted?: boolean
    payment_ref: $Enums.PaymentMethod
    users: usersCreateNestedOneWithoutClientsInput
    invoices?: invoicesCreateNestedManyWithoutClientsInput
    recurring_invoice?: recurring_invoiceCreateNestedManyWithoutClientsInput
  }

  export type clientsUncheckedCreateInput = {
    id?: number
    user_id: number
    name: string
    email: string
    phone: string
    address: string
    is_deleted?: boolean
    payment_ref: $Enums.PaymentMethod
    invoices?: invoicesUncheckedCreateNestedManyWithoutClientsInput
    recurring_invoice?: recurring_invoiceUncheckedCreateNestedManyWithoutClientsInput
  }

  export type clientsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    payment_ref?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    users?: usersUpdateOneRequiredWithoutClientsNestedInput
    invoices?: invoicesUpdateManyWithoutClientsNestedInput
    recurring_invoice?: recurring_invoiceUpdateManyWithoutClientsNestedInput
  }

  export type clientsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    payment_ref?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    invoices?: invoicesUncheckedUpdateManyWithoutClientsNestedInput
    recurring_invoice?: recurring_invoiceUncheckedUpdateManyWithoutClientsNestedInput
  }

  export type clientsCreateManyInput = {
    id?: number
    user_id: number
    name: string
    email: string
    phone: string
    address: string
    is_deleted?: boolean
    payment_ref: $Enums.PaymentMethod
  }

  export type clientsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    payment_ref?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
  }

  export type clientsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    payment_ref?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
  }

  export type invoice_itemsCreateInput = {
    name_snapshot: string
    price_snapshot: number
    quantity: number
    total: number
    invoices: invoicesCreateNestedOneWithoutInvoice_itemsInput
    products_services: products_servicesCreateNestedOneWithoutInvoice_itemsInput
  }

  export type invoice_itemsUncheckedCreateInput = {
    id?: number
    invoice_id: number
    product_id: number
    name_snapshot: string
    price_snapshot: number
    quantity: number
    total: number
  }

  export type invoice_itemsUpdateInput = {
    name_snapshot?: StringFieldUpdateOperationsInput | string
    price_snapshot?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    invoices?: invoicesUpdateOneRequiredWithoutInvoice_itemsNestedInput
    products_services?: products_servicesUpdateOneRequiredWithoutInvoice_itemsNestedInput
  }

  export type invoice_itemsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    invoice_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    name_snapshot?: StringFieldUpdateOperationsInput | string
    price_snapshot?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
  }

  export type invoice_itemsCreateManyInput = {
    id?: number
    invoice_id: number
    product_id: number
    name_snapshot: string
    price_snapshot: number
    quantity: number
    total: number
  }

  export type invoice_itemsUpdateManyMutationInput = {
    name_snapshot?: StringFieldUpdateOperationsInput | string
    price_snapshot?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
  }

  export type invoice_itemsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    invoice_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    name_snapshot?: StringFieldUpdateOperationsInput | string
    price_snapshot?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
  }

  export type invoicesCreateInput = {
    invoice_number: string
    start_date: Date | string
    due_date: Date | string
    notes?: string | null
    status?: $Enums.Status
    total: number
    is_deleted?: boolean
    payment_method: $Enums.PaymentMethod
    invoice_items?: invoice_itemsCreateNestedManyWithoutInvoicesInput
    users: usersCreateNestedOneWithoutInvoicesInput
    clients: clientsCreateNestedOneWithoutInvoicesInput
    transaction?: transactionCreateNestedManyWithoutInvoicesInput
  }

  export type invoicesUncheckedCreateInput = {
    id?: number
    user_id: number
    client_id: number
    invoice_number: string
    start_date: Date | string
    due_date: Date | string
    notes?: string | null
    status?: $Enums.Status
    total: number
    is_deleted?: boolean
    payment_method: $Enums.PaymentMethod
    invoice_items?: invoice_itemsUncheckedCreateNestedManyWithoutInvoicesInput
    transaction?: transactionUncheckedCreateNestedManyWithoutInvoicesInput
  }

  export type invoicesUpdateInput = {
    invoice_number?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    total?: IntFieldUpdateOperationsInput | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    invoice_items?: invoice_itemsUpdateManyWithoutInvoicesNestedInput
    users?: usersUpdateOneRequiredWithoutInvoicesNestedInput
    clients?: clientsUpdateOneRequiredWithoutInvoicesNestedInput
    transaction?: transactionUpdateManyWithoutInvoicesNestedInput
  }

  export type invoicesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    client_id?: IntFieldUpdateOperationsInput | number
    invoice_number?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    total?: IntFieldUpdateOperationsInput | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    invoice_items?: invoice_itemsUncheckedUpdateManyWithoutInvoicesNestedInput
    transaction?: transactionUncheckedUpdateManyWithoutInvoicesNestedInput
  }

  export type invoicesCreateManyInput = {
    id?: number
    user_id: number
    client_id: number
    invoice_number: string
    start_date: Date | string
    due_date: Date | string
    notes?: string | null
    status?: $Enums.Status
    total: number
    is_deleted?: boolean
    payment_method: $Enums.PaymentMethod
  }

  export type invoicesUpdateManyMutationInput = {
    invoice_number?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    total?: IntFieldUpdateOperationsInput | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
  }

  export type invoicesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    client_id?: IntFieldUpdateOperationsInput | number
    invoice_number?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    total?: IntFieldUpdateOperationsInput | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
  }

  export type products_servicesCreateInput = {
    name: string
    description: string
    price: number
    is_deleted?: boolean
    type: $Enums.Type
    unit: $Enums.Unit
    invoice_items?: invoice_itemsCreateNestedManyWithoutProducts_servicesInput
    users: usersCreateNestedOneWithoutProducts_servicesInput
    recurring_invoice_item?: recurring_invoice_itemCreateNestedManyWithoutProducts_servicesInput
  }

  export type products_servicesUncheckedCreateInput = {
    id?: number
    user_id: number
    name: string
    description: string
    price: number
    is_deleted?: boolean
    type: $Enums.Type
    unit: $Enums.Unit
    invoice_items?: invoice_itemsUncheckedCreateNestedManyWithoutProducts_servicesInput
    recurring_invoice_item?: recurring_invoice_itemUncheckedCreateNestedManyWithoutProducts_servicesInput
  }

  export type products_servicesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
    invoice_items?: invoice_itemsUpdateManyWithoutProducts_servicesNestedInput
    users?: usersUpdateOneRequiredWithoutProducts_servicesNestedInput
    recurring_invoice_item?: recurring_invoice_itemUpdateManyWithoutProducts_servicesNestedInput
  }

  export type products_servicesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
    invoice_items?: invoice_itemsUncheckedUpdateManyWithoutProducts_servicesNestedInput
    recurring_invoice_item?: recurring_invoice_itemUncheckedUpdateManyWithoutProducts_servicesNestedInput
  }

  export type products_servicesCreateManyInput = {
    id?: number
    user_id: number
    name: string
    description: string
    price: number
    is_deleted?: boolean
    type: $Enums.Type
    unit: $Enums.Unit
  }

  export type products_servicesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
  }

  export type products_servicesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
  }

  export type user_profilesCreateInput = {
    first_name: string
    last_name: string
    phone?: string | null
    profile_img?: string | null
    users: usersCreateNestedOneWithoutUser_profilesInput
  }

  export type user_profilesUncheckedCreateInput = {
    id?: number
    user_id: number
    first_name: string
    last_name: string
    phone?: string | null
    profile_img?: string | null
  }

  export type user_profilesUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_img?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneRequiredWithoutUser_profilesNestedInput
  }

  export type user_profilesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_img?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_profilesCreateManyInput = {
    id?: number
    user_id: number
    first_name: string
    last_name: string
    phone?: string | null
    profile_img?: string | null
  }

  export type user_profilesUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_img?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_profilesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_img?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersCreateInput = {
    email: string
    password_hash: string
    is_verified?: boolean
    clients?: clientsCreateNestedManyWithoutUsersInput
    invoices?: invoicesCreateNestedManyWithoutUsersInput
    products_services?: products_servicesCreateNestedManyWithoutUsersInput
    recurring_invoice?: recurring_invoiceCreateNestedManyWithoutUsersInput
    user_payment_method?: user_payment_methodCreateNestedManyWithoutUsersInput
    user_profiles?: user_profilesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    email: string
    password_hash: string
    is_verified?: boolean
    clients?: clientsUncheckedCreateNestedManyWithoutUsersInput
    invoices?: invoicesUncheckedCreateNestedManyWithoutUsersInput
    products_services?: products_servicesUncheckedCreateNestedManyWithoutUsersInput
    recurring_invoice?: recurring_invoiceUncheckedCreateNestedManyWithoutUsersInput
    user_payment_method?: user_payment_methodUncheckedCreateNestedManyWithoutUsersInput
    user_profiles?: user_profilesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    clients?: clientsUpdateManyWithoutUsersNestedInput
    invoices?: invoicesUpdateManyWithoutUsersNestedInput
    products_services?: products_servicesUpdateManyWithoutUsersNestedInput
    recurring_invoice?: recurring_invoiceUpdateManyWithoutUsersNestedInput
    user_payment_method?: user_payment_methodUpdateManyWithoutUsersNestedInput
    user_profiles?: user_profilesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    clients?: clientsUncheckedUpdateManyWithoutUsersNestedInput
    invoices?: invoicesUncheckedUpdateManyWithoutUsersNestedInput
    products_services?: products_servicesUncheckedUpdateManyWithoutUsersNestedInput
    recurring_invoice?: recurring_invoiceUncheckedUpdateManyWithoutUsersNestedInput
    user_payment_method?: user_payment_methodUncheckedUpdateManyWithoutUsersNestedInput
    user_profiles?: user_profilesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    email: string
    password_hash: string
    is_verified?: boolean
  }

  export type usersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type recurring_invoiceCreateInput = {
    invoice_number: string
    start_date: Date | string
    due_date?: Date | string | null
    recurrence?: string
    notes?: string | null
    next_run: Date | string
    is_active?: boolean
    is_deleted?: boolean
    total: number
    clients: clientsCreateNestedOneWithoutRecurring_invoiceInput
    users: usersCreateNestedOneWithoutRecurring_invoiceInput
    recurring_invoice_item?: recurring_invoice_itemCreateNestedManyWithoutRecurring_invoiceInput
  }

  export type recurring_invoiceUncheckedCreateInput = {
    id?: number
    user_id: number
    client_id: number
    invoice_number: string
    start_date: Date | string
    due_date?: Date | string | null
    recurrence?: string
    notes?: string | null
    next_run: Date | string
    is_active?: boolean
    is_deleted?: boolean
    total: number
    recurring_invoice_item?: recurring_invoice_itemUncheckedCreateNestedManyWithoutRecurring_invoiceInput
  }

  export type recurring_invoiceUpdateInput = {
    invoice_number?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recurrence?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    next_run?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    total?: IntFieldUpdateOperationsInput | number
    clients?: clientsUpdateOneRequiredWithoutRecurring_invoiceNestedInput
    users?: usersUpdateOneRequiredWithoutRecurring_invoiceNestedInput
    recurring_invoice_item?: recurring_invoice_itemUpdateManyWithoutRecurring_invoiceNestedInput
  }

  export type recurring_invoiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    client_id?: IntFieldUpdateOperationsInput | number
    invoice_number?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recurrence?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    next_run?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    total?: IntFieldUpdateOperationsInput | number
    recurring_invoice_item?: recurring_invoice_itemUncheckedUpdateManyWithoutRecurring_invoiceNestedInput
  }

  export type recurring_invoiceCreateManyInput = {
    id?: number
    user_id: number
    client_id: number
    invoice_number: string
    start_date: Date | string
    due_date?: Date | string | null
    recurrence?: string
    notes?: string | null
    next_run: Date | string
    is_active?: boolean
    is_deleted?: boolean
    total: number
  }

  export type recurring_invoiceUpdateManyMutationInput = {
    invoice_number?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recurrence?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    next_run?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    total?: IntFieldUpdateOperationsInput | number
  }

  export type recurring_invoiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    client_id?: IntFieldUpdateOperationsInput | number
    invoice_number?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recurrence?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    next_run?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    total?: IntFieldUpdateOperationsInput | number
  }

  export type recurring_invoice_itemCreateInput = {
    name_snapshot: string
    price_snapshot: string
    quantity: number
    total: number
    products_services: products_servicesCreateNestedOneWithoutRecurring_invoice_itemInput
    recurring_invoice: recurring_invoiceCreateNestedOneWithoutRecurring_invoice_itemInput
  }

  export type recurring_invoice_itemUncheckedCreateInput = {
    id?: number
    recurring_invoice_id: number
    product_id: number
    name_snapshot: string
    price_snapshot: string
    quantity: number
    total: number
  }

  export type recurring_invoice_itemUpdateInput = {
    name_snapshot?: StringFieldUpdateOperationsInput | string
    price_snapshot?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    products_services?: products_servicesUpdateOneRequiredWithoutRecurring_invoice_itemNestedInput
    recurring_invoice?: recurring_invoiceUpdateOneRequiredWithoutRecurring_invoice_itemNestedInput
  }

  export type recurring_invoice_itemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    recurring_invoice_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    name_snapshot?: StringFieldUpdateOperationsInput | string
    price_snapshot?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
  }

  export type recurring_invoice_itemCreateManyInput = {
    id?: number
    recurring_invoice_id: number
    product_id: number
    name_snapshot: string
    price_snapshot: string
    quantity: number
    total: number
  }

  export type recurring_invoice_itemUpdateManyMutationInput = {
    name_snapshot?: StringFieldUpdateOperationsInput | string
    price_snapshot?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
  }

  export type recurring_invoice_itemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    recurring_invoice_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    name_snapshot?: StringFieldUpdateOperationsInput | string
    price_snapshot?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
  }

  export type user_payment_methodCreateInput = {
    payment_method: $Enums.PaymentMethod
    account_name: string
    account_number: string
    qris_image_url?: string | null
    is_active?: boolean
    users: usersCreateNestedOneWithoutUser_payment_methodInput
  }

  export type user_payment_methodUncheckedCreateInput = {
    id?: number
    user_id: number
    payment_method: $Enums.PaymentMethod
    account_name: string
    account_number: string
    qris_image_url?: string | null
    is_active?: boolean
  }

  export type user_payment_methodUpdateInput = {
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    account_name?: StringFieldUpdateOperationsInput | string
    account_number?: StringFieldUpdateOperationsInput | string
    qris_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    users?: usersUpdateOneRequiredWithoutUser_payment_methodNestedInput
  }

  export type user_payment_methodUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    account_name?: StringFieldUpdateOperationsInput | string
    account_number?: StringFieldUpdateOperationsInput | string
    qris_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type user_payment_methodCreateManyInput = {
    id?: number
    user_id: number
    payment_method: $Enums.PaymentMethod
    account_name: string
    account_number: string
    qris_image_url?: string | null
    is_active?: boolean
  }

  export type user_payment_methodUpdateManyMutationInput = {
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    account_name?: StringFieldUpdateOperationsInput | string
    account_number?: StringFieldUpdateOperationsInput | string
    qris_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type user_payment_methodUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    account_name?: StringFieldUpdateOperationsInput | string
    account_number?: StringFieldUpdateOperationsInput | string
    qris_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type transactionCreateInput = {
    created_at?: Date | string
    payment_method: $Enums.PaymentMethod
    payment_proof: string
    invoices: invoicesCreateNestedOneWithoutTransactionInput
  }

  export type transactionUncheckedCreateInput = {
    id?: number
    created_at?: Date | string
    invoice_id: number
    payment_method: $Enums.PaymentMethod
    payment_proof: string
  }

  export type transactionUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    payment_proof?: StringFieldUpdateOperationsInput | string
    invoices?: invoicesUpdateOneRequiredWithoutTransactionNestedInput
  }

  export type transactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice_id?: IntFieldUpdateOperationsInput | number
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    payment_proof?: StringFieldUpdateOperationsInput | string
  }

  export type transactionCreateManyInput = {
    id?: number
    created_at?: Date | string
    invoice_id: number
    payment_method: $Enums.PaymentMethod
    payment_proof: string
  }

  export type transactionUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    payment_proof?: StringFieldUpdateOperationsInput | string
  }

  export type transactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice_id?: IntFieldUpdateOperationsInput | number
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    payment_proof?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type InvoicesListRelationFilter = {
    every?: invoicesWhereInput
    some?: invoicesWhereInput
    none?: invoicesWhereInput
  }

  export type Recurring_invoiceListRelationFilter = {
    every?: recurring_invoiceWhereInput
    some?: recurring_invoiceWhereInput
    none?: recurring_invoiceWhereInput
  }

  export type invoicesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type recurring_invoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type clientsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    is_deleted?: SortOrder
    payment_ref?: SortOrder
  }

  export type clientsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type clientsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    is_deleted?: SortOrder
    payment_ref?: SortOrder
  }

  export type clientsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    is_deleted?: SortOrder
    payment_ref?: SortOrder
  }

  export type clientsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type InvoicesScalarRelationFilter = {
    is?: invoicesWhereInput
    isNot?: invoicesWhereInput
  }

  export type Products_servicesScalarRelationFilter = {
    is?: products_servicesWhereInput
    isNot?: products_servicesWhereInput
  }

  export type invoice_itemsCountOrderByAggregateInput = {
    id?: SortOrder
    invoice_id?: SortOrder
    product_id?: SortOrder
    name_snapshot?: SortOrder
    price_snapshot?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
  }

  export type invoice_itemsAvgOrderByAggregateInput = {
    id?: SortOrder
    invoice_id?: SortOrder
    product_id?: SortOrder
    price_snapshot?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
  }

  export type invoice_itemsMaxOrderByAggregateInput = {
    id?: SortOrder
    invoice_id?: SortOrder
    product_id?: SortOrder
    name_snapshot?: SortOrder
    price_snapshot?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
  }

  export type invoice_itemsMinOrderByAggregateInput = {
    id?: SortOrder
    invoice_id?: SortOrder
    product_id?: SortOrder
    name_snapshot?: SortOrder
    price_snapshot?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
  }

  export type invoice_itemsSumOrderByAggregateInput = {
    id?: SortOrder
    invoice_id?: SortOrder
    product_id?: SortOrder
    price_snapshot?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type Invoice_itemsListRelationFilter = {
    every?: invoice_itemsWhereInput
    some?: invoice_itemsWhereInput
    none?: invoice_itemsWhereInput
  }

  export type ClientsScalarRelationFilter = {
    is?: clientsWhereInput
    isNot?: clientsWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: transactionWhereInput
    some?: transactionWhereInput
    none?: transactionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type invoice_itemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type transactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type invoicesCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    client_id?: SortOrder
    invoice_number?: SortOrder
    start_date?: SortOrder
    due_date?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    total?: SortOrder
    is_deleted?: SortOrder
    payment_method?: SortOrder
  }

  export type invoicesAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    client_id?: SortOrder
    total?: SortOrder
  }

  export type invoicesMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    client_id?: SortOrder
    invoice_number?: SortOrder
    start_date?: SortOrder
    due_date?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    total?: SortOrder
    is_deleted?: SortOrder
    payment_method?: SortOrder
  }

  export type invoicesMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    client_id?: SortOrder
    invoice_number?: SortOrder
    start_date?: SortOrder
    due_date?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    total?: SortOrder
    is_deleted?: SortOrder
    payment_method?: SortOrder
  }

  export type invoicesSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    client_id?: SortOrder
    total?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type EnumTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeFilter<$PrismaModel> | $Enums.Type
  }

  export type EnumUnitFilter<$PrismaModel = never> = {
    equals?: $Enums.Unit | EnumUnitFieldRefInput<$PrismaModel>
    in?: $Enums.Unit[] | ListEnumUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.Unit[] | ListEnumUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumUnitFilter<$PrismaModel> | $Enums.Unit
  }

  export type Recurring_invoice_itemListRelationFilter = {
    every?: recurring_invoice_itemWhereInput
    some?: recurring_invoice_itemWhereInput
    none?: recurring_invoice_itemWhereInput
  }

  export type recurring_invoice_itemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type products_servicesCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    is_deleted?: SortOrder
    type?: SortOrder
    unit?: SortOrder
  }

  export type products_servicesAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    price?: SortOrder
  }

  export type products_servicesMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    is_deleted?: SortOrder
    type?: SortOrder
    unit?: SortOrder
  }

  export type products_servicesMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    is_deleted?: SortOrder
    type?: SortOrder
    unit?: SortOrder
  }

  export type products_servicesSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    price?: SortOrder
  }

  export type EnumTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeWithAggregatesFilter<$PrismaModel> | $Enums.Type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeFilter<$PrismaModel>
    _max?: NestedEnumTypeFilter<$PrismaModel>
  }

  export type EnumUnitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Unit | EnumUnitFieldRefInput<$PrismaModel>
    in?: $Enums.Unit[] | ListEnumUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.Unit[] | ListEnumUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumUnitWithAggregatesFilter<$PrismaModel> | $Enums.Unit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUnitFilter<$PrismaModel>
    _max?: NestedEnumUnitFilter<$PrismaModel>
  }

  export type user_profilesCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone?: SortOrder
    profile_img?: SortOrder
  }

  export type user_profilesAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type user_profilesMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone?: SortOrder
    profile_img?: SortOrder
  }

  export type user_profilesMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone?: SortOrder
    profile_img?: SortOrder
  }

  export type user_profilesSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type ClientsListRelationFilter = {
    every?: clientsWhereInput
    some?: clientsWhereInput
    none?: clientsWhereInput
  }

  export type Products_servicesListRelationFilter = {
    every?: products_servicesWhereInput
    some?: products_servicesWhereInput
    none?: products_servicesWhereInput
  }

  export type User_payment_methodListRelationFilter = {
    every?: user_payment_methodWhereInput
    some?: user_payment_methodWhereInput
    none?: user_payment_methodWhereInput
  }

  export type User_profilesListRelationFilter = {
    every?: user_profilesWhereInput
    some?: user_profilesWhereInput
    none?: user_profilesWhereInput
  }

  export type clientsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type products_servicesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_payment_methodOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_profilesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    is_verified?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    is_verified?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    is_verified?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type recurring_invoiceCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    client_id?: SortOrder
    invoice_number?: SortOrder
    start_date?: SortOrder
    due_date?: SortOrder
    recurrence?: SortOrder
    notes?: SortOrder
    next_run?: SortOrder
    is_active?: SortOrder
    is_deleted?: SortOrder
    total?: SortOrder
  }

  export type recurring_invoiceAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    client_id?: SortOrder
    total?: SortOrder
  }

  export type recurring_invoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    client_id?: SortOrder
    invoice_number?: SortOrder
    start_date?: SortOrder
    due_date?: SortOrder
    recurrence?: SortOrder
    notes?: SortOrder
    next_run?: SortOrder
    is_active?: SortOrder
    is_deleted?: SortOrder
    total?: SortOrder
  }

  export type recurring_invoiceMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    client_id?: SortOrder
    invoice_number?: SortOrder
    start_date?: SortOrder
    due_date?: SortOrder
    recurrence?: SortOrder
    notes?: SortOrder
    next_run?: SortOrder
    is_active?: SortOrder
    is_deleted?: SortOrder
    total?: SortOrder
  }

  export type recurring_invoiceSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    client_id?: SortOrder
    total?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type Recurring_invoiceScalarRelationFilter = {
    is?: recurring_invoiceWhereInput
    isNot?: recurring_invoiceWhereInput
  }

  export type recurring_invoice_itemCountOrderByAggregateInput = {
    id?: SortOrder
    recurring_invoice_id?: SortOrder
    product_id?: SortOrder
    name_snapshot?: SortOrder
    price_snapshot?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
  }

  export type recurring_invoice_itemAvgOrderByAggregateInput = {
    id?: SortOrder
    recurring_invoice_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
  }

  export type recurring_invoice_itemMaxOrderByAggregateInput = {
    id?: SortOrder
    recurring_invoice_id?: SortOrder
    product_id?: SortOrder
    name_snapshot?: SortOrder
    price_snapshot?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
  }

  export type recurring_invoice_itemMinOrderByAggregateInput = {
    id?: SortOrder
    recurring_invoice_id?: SortOrder
    product_id?: SortOrder
    name_snapshot?: SortOrder
    price_snapshot?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
  }

  export type recurring_invoice_itemSumOrderByAggregateInput = {
    id?: SortOrder
    recurring_invoice_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
  }

  export type user_payment_methodCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    payment_method?: SortOrder
    account_name?: SortOrder
    account_number?: SortOrder
    qris_image_url?: SortOrder
    is_active?: SortOrder
  }

  export type user_payment_methodAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type user_payment_methodMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    payment_method?: SortOrder
    account_name?: SortOrder
    account_number?: SortOrder
    qris_image_url?: SortOrder
    is_active?: SortOrder
  }

  export type user_payment_methodMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    payment_method?: SortOrder
    account_name?: SortOrder
    account_number?: SortOrder
    qris_image_url?: SortOrder
    is_active?: SortOrder
  }

  export type user_payment_methodSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type transactionCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    invoice_id?: SortOrder
    payment_method?: SortOrder
    payment_proof?: SortOrder
  }

  export type transactionAvgOrderByAggregateInput = {
    id?: SortOrder
    invoice_id?: SortOrder
  }

  export type transactionMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    invoice_id?: SortOrder
    payment_method?: SortOrder
    payment_proof?: SortOrder
  }

  export type transactionMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    invoice_id?: SortOrder
    payment_method?: SortOrder
    payment_proof?: SortOrder
  }

  export type transactionSumOrderByAggregateInput = {
    id?: SortOrder
    invoice_id?: SortOrder
  }

  export type usersCreateNestedOneWithoutClientsInput = {
    create?: XOR<usersCreateWithoutClientsInput, usersUncheckedCreateWithoutClientsInput>
    connectOrCreate?: usersCreateOrConnectWithoutClientsInput
    connect?: usersWhereUniqueInput
  }

  export type invoicesCreateNestedManyWithoutClientsInput = {
    create?: XOR<invoicesCreateWithoutClientsInput, invoicesUncheckedCreateWithoutClientsInput> | invoicesCreateWithoutClientsInput[] | invoicesUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: invoicesCreateOrConnectWithoutClientsInput | invoicesCreateOrConnectWithoutClientsInput[]
    createMany?: invoicesCreateManyClientsInputEnvelope
    connect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
  }

  export type recurring_invoiceCreateNestedManyWithoutClientsInput = {
    create?: XOR<recurring_invoiceCreateWithoutClientsInput, recurring_invoiceUncheckedCreateWithoutClientsInput> | recurring_invoiceCreateWithoutClientsInput[] | recurring_invoiceUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: recurring_invoiceCreateOrConnectWithoutClientsInput | recurring_invoiceCreateOrConnectWithoutClientsInput[]
    createMany?: recurring_invoiceCreateManyClientsInputEnvelope
    connect?: recurring_invoiceWhereUniqueInput | recurring_invoiceWhereUniqueInput[]
  }

  export type invoicesUncheckedCreateNestedManyWithoutClientsInput = {
    create?: XOR<invoicesCreateWithoutClientsInput, invoicesUncheckedCreateWithoutClientsInput> | invoicesCreateWithoutClientsInput[] | invoicesUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: invoicesCreateOrConnectWithoutClientsInput | invoicesCreateOrConnectWithoutClientsInput[]
    createMany?: invoicesCreateManyClientsInputEnvelope
    connect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
  }

  export type recurring_invoiceUncheckedCreateNestedManyWithoutClientsInput = {
    create?: XOR<recurring_invoiceCreateWithoutClientsInput, recurring_invoiceUncheckedCreateWithoutClientsInput> | recurring_invoiceCreateWithoutClientsInput[] | recurring_invoiceUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: recurring_invoiceCreateOrConnectWithoutClientsInput | recurring_invoiceCreateOrConnectWithoutClientsInput[]
    createMany?: recurring_invoiceCreateManyClientsInputEnvelope
    connect?: recurring_invoiceWhereUniqueInput | recurring_invoiceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod
  }

  export type usersUpdateOneRequiredWithoutClientsNestedInput = {
    create?: XOR<usersCreateWithoutClientsInput, usersUncheckedCreateWithoutClientsInput>
    connectOrCreate?: usersCreateOrConnectWithoutClientsInput
    upsert?: usersUpsertWithoutClientsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutClientsInput, usersUpdateWithoutClientsInput>, usersUncheckedUpdateWithoutClientsInput>
  }

  export type invoicesUpdateManyWithoutClientsNestedInput = {
    create?: XOR<invoicesCreateWithoutClientsInput, invoicesUncheckedCreateWithoutClientsInput> | invoicesCreateWithoutClientsInput[] | invoicesUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: invoicesCreateOrConnectWithoutClientsInput | invoicesCreateOrConnectWithoutClientsInput[]
    upsert?: invoicesUpsertWithWhereUniqueWithoutClientsInput | invoicesUpsertWithWhereUniqueWithoutClientsInput[]
    createMany?: invoicesCreateManyClientsInputEnvelope
    set?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    disconnect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    delete?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    connect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    update?: invoicesUpdateWithWhereUniqueWithoutClientsInput | invoicesUpdateWithWhereUniqueWithoutClientsInput[]
    updateMany?: invoicesUpdateManyWithWhereWithoutClientsInput | invoicesUpdateManyWithWhereWithoutClientsInput[]
    deleteMany?: invoicesScalarWhereInput | invoicesScalarWhereInput[]
  }

  export type recurring_invoiceUpdateManyWithoutClientsNestedInput = {
    create?: XOR<recurring_invoiceCreateWithoutClientsInput, recurring_invoiceUncheckedCreateWithoutClientsInput> | recurring_invoiceCreateWithoutClientsInput[] | recurring_invoiceUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: recurring_invoiceCreateOrConnectWithoutClientsInput | recurring_invoiceCreateOrConnectWithoutClientsInput[]
    upsert?: recurring_invoiceUpsertWithWhereUniqueWithoutClientsInput | recurring_invoiceUpsertWithWhereUniqueWithoutClientsInput[]
    createMany?: recurring_invoiceCreateManyClientsInputEnvelope
    set?: recurring_invoiceWhereUniqueInput | recurring_invoiceWhereUniqueInput[]
    disconnect?: recurring_invoiceWhereUniqueInput | recurring_invoiceWhereUniqueInput[]
    delete?: recurring_invoiceWhereUniqueInput | recurring_invoiceWhereUniqueInput[]
    connect?: recurring_invoiceWhereUniqueInput | recurring_invoiceWhereUniqueInput[]
    update?: recurring_invoiceUpdateWithWhereUniqueWithoutClientsInput | recurring_invoiceUpdateWithWhereUniqueWithoutClientsInput[]
    updateMany?: recurring_invoiceUpdateManyWithWhereWithoutClientsInput | recurring_invoiceUpdateManyWithWhereWithoutClientsInput[]
    deleteMany?: recurring_invoiceScalarWhereInput | recurring_invoiceScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type invoicesUncheckedUpdateManyWithoutClientsNestedInput = {
    create?: XOR<invoicesCreateWithoutClientsInput, invoicesUncheckedCreateWithoutClientsInput> | invoicesCreateWithoutClientsInput[] | invoicesUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: invoicesCreateOrConnectWithoutClientsInput | invoicesCreateOrConnectWithoutClientsInput[]
    upsert?: invoicesUpsertWithWhereUniqueWithoutClientsInput | invoicesUpsertWithWhereUniqueWithoutClientsInput[]
    createMany?: invoicesCreateManyClientsInputEnvelope
    set?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    disconnect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    delete?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    connect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    update?: invoicesUpdateWithWhereUniqueWithoutClientsInput | invoicesUpdateWithWhereUniqueWithoutClientsInput[]
    updateMany?: invoicesUpdateManyWithWhereWithoutClientsInput | invoicesUpdateManyWithWhereWithoutClientsInput[]
    deleteMany?: invoicesScalarWhereInput | invoicesScalarWhereInput[]
  }

  export type recurring_invoiceUncheckedUpdateManyWithoutClientsNestedInput = {
    create?: XOR<recurring_invoiceCreateWithoutClientsInput, recurring_invoiceUncheckedCreateWithoutClientsInput> | recurring_invoiceCreateWithoutClientsInput[] | recurring_invoiceUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: recurring_invoiceCreateOrConnectWithoutClientsInput | recurring_invoiceCreateOrConnectWithoutClientsInput[]
    upsert?: recurring_invoiceUpsertWithWhereUniqueWithoutClientsInput | recurring_invoiceUpsertWithWhereUniqueWithoutClientsInput[]
    createMany?: recurring_invoiceCreateManyClientsInputEnvelope
    set?: recurring_invoiceWhereUniqueInput | recurring_invoiceWhereUniqueInput[]
    disconnect?: recurring_invoiceWhereUniqueInput | recurring_invoiceWhereUniqueInput[]
    delete?: recurring_invoiceWhereUniqueInput | recurring_invoiceWhereUniqueInput[]
    connect?: recurring_invoiceWhereUniqueInput | recurring_invoiceWhereUniqueInput[]
    update?: recurring_invoiceUpdateWithWhereUniqueWithoutClientsInput | recurring_invoiceUpdateWithWhereUniqueWithoutClientsInput[]
    updateMany?: recurring_invoiceUpdateManyWithWhereWithoutClientsInput | recurring_invoiceUpdateManyWithWhereWithoutClientsInput[]
    deleteMany?: recurring_invoiceScalarWhereInput | recurring_invoiceScalarWhereInput[]
  }

  export type invoicesCreateNestedOneWithoutInvoice_itemsInput = {
    create?: XOR<invoicesCreateWithoutInvoice_itemsInput, invoicesUncheckedCreateWithoutInvoice_itemsInput>
    connectOrCreate?: invoicesCreateOrConnectWithoutInvoice_itemsInput
    connect?: invoicesWhereUniqueInput
  }

  export type products_servicesCreateNestedOneWithoutInvoice_itemsInput = {
    create?: XOR<products_servicesCreateWithoutInvoice_itemsInput, products_servicesUncheckedCreateWithoutInvoice_itemsInput>
    connectOrCreate?: products_servicesCreateOrConnectWithoutInvoice_itemsInput
    connect?: products_servicesWhereUniqueInput
  }

  export type invoicesUpdateOneRequiredWithoutInvoice_itemsNestedInput = {
    create?: XOR<invoicesCreateWithoutInvoice_itemsInput, invoicesUncheckedCreateWithoutInvoice_itemsInput>
    connectOrCreate?: invoicesCreateOrConnectWithoutInvoice_itemsInput
    upsert?: invoicesUpsertWithoutInvoice_itemsInput
    connect?: invoicesWhereUniqueInput
    update?: XOR<XOR<invoicesUpdateToOneWithWhereWithoutInvoice_itemsInput, invoicesUpdateWithoutInvoice_itemsInput>, invoicesUncheckedUpdateWithoutInvoice_itemsInput>
  }

  export type products_servicesUpdateOneRequiredWithoutInvoice_itemsNestedInput = {
    create?: XOR<products_servicesCreateWithoutInvoice_itemsInput, products_servicesUncheckedCreateWithoutInvoice_itemsInput>
    connectOrCreate?: products_servicesCreateOrConnectWithoutInvoice_itemsInput
    upsert?: products_servicesUpsertWithoutInvoice_itemsInput
    connect?: products_servicesWhereUniqueInput
    update?: XOR<XOR<products_servicesUpdateToOneWithWhereWithoutInvoice_itemsInput, products_servicesUpdateWithoutInvoice_itemsInput>, products_servicesUncheckedUpdateWithoutInvoice_itemsInput>
  }

  export type invoice_itemsCreateNestedManyWithoutInvoicesInput = {
    create?: XOR<invoice_itemsCreateWithoutInvoicesInput, invoice_itemsUncheckedCreateWithoutInvoicesInput> | invoice_itemsCreateWithoutInvoicesInput[] | invoice_itemsUncheckedCreateWithoutInvoicesInput[]
    connectOrCreate?: invoice_itemsCreateOrConnectWithoutInvoicesInput | invoice_itemsCreateOrConnectWithoutInvoicesInput[]
    createMany?: invoice_itemsCreateManyInvoicesInputEnvelope
    connect?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<usersCreateWithoutInvoicesInput, usersUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: usersCreateOrConnectWithoutInvoicesInput
    connect?: usersWhereUniqueInput
  }

  export type clientsCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<clientsCreateWithoutInvoicesInput, clientsUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: clientsCreateOrConnectWithoutInvoicesInput
    connect?: clientsWhereUniqueInput
  }

  export type transactionCreateNestedManyWithoutInvoicesInput = {
    create?: XOR<transactionCreateWithoutInvoicesInput, transactionUncheckedCreateWithoutInvoicesInput> | transactionCreateWithoutInvoicesInput[] | transactionUncheckedCreateWithoutInvoicesInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutInvoicesInput | transactionCreateOrConnectWithoutInvoicesInput[]
    createMany?: transactionCreateManyInvoicesInputEnvelope
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
  }

  export type invoice_itemsUncheckedCreateNestedManyWithoutInvoicesInput = {
    create?: XOR<invoice_itemsCreateWithoutInvoicesInput, invoice_itemsUncheckedCreateWithoutInvoicesInput> | invoice_itemsCreateWithoutInvoicesInput[] | invoice_itemsUncheckedCreateWithoutInvoicesInput[]
    connectOrCreate?: invoice_itemsCreateOrConnectWithoutInvoicesInput | invoice_itemsCreateOrConnectWithoutInvoicesInput[]
    createMany?: invoice_itemsCreateManyInvoicesInputEnvelope
    connect?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
  }

  export type transactionUncheckedCreateNestedManyWithoutInvoicesInput = {
    create?: XOR<transactionCreateWithoutInvoicesInput, transactionUncheckedCreateWithoutInvoicesInput> | transactionCreateWithoutInvoicesInput[] | transactionUncheckedCreateWithoutInvoicesInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutInvoicesInput | transactionCreateOrConnectWithoutInvoicesInput[]
    createMany?: transactionCreateManyInvoicesInputEnvelope
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type invoice_itemsUpdateManyWithoutInvoicesNestedInput = {
    create?: XOR<invoice_itemsCreateWithoutInvoicesInput, invoice_itemsUncheckedCreateWithoutInvoicesInput> | invoice_itemsCreateWithoutInvoicesInput[] | invoice_itemsUncheckedCreateWithoutInvoicesInput[]
    connectOrCreate?: invoice_itemsCreateOrConnectWithoutInvoicesInput | invoice_itemsCreateOrConnectWithoutInvoicesInput[]
    upsert?: invoice_itemsUpsertWithWhereUniqueWithoutInvoicesInput | invoice_itemsUpsertWithWhereUniqueWithoutInvoicesInput[]
    createMany?: invoice_itemsCreateManyInvoicesInputEnvelope
    set?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    disconnect?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    delete?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    connect?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    update?: invoice_itemsUpdateWithWhereUniqueWithoutInvoicesInput | invoice_itemsUpdateWithWhereUniqueWithoutInvoicesInput[]
    updateMany?: invoice_itemsUpdateManyWithWhereWithoutInvoicesInput | invoice_itemsUpdateManyWithWhereWithoutInvoicesInput[]
    deleteMany?: invoice_itemsScalarWhereInput | invoice_itemsScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: XOR<usersCreateWithoutInvoicesInput, usersUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: usersCreateOrConnectWithoutInvoicesInput
    upsert?: usersUpsertWithoutInvoicesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutInvoicesInput, usersUpdateWithoutInvoicesInput>, usersUncheckedUpdateWithoutInvoicesInput>
  }

  export type clientsUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: XOR<clientsCreateWithoutInvoicesInput, clientsUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: clientsCreateOrConnectWithoutInvoicesInput
    upsert?: clientsUpsertWithoutInvoicesInput
    connect?: clientsWhereUniqueInput
    update?: XOR<XOR<clientsUpdateToOneWithWhereWithoutInvoicesInput, clientsUpdateWithoutInvoicesInput>, clientsUncheckedUpdateWithoutInvoicesInput>
  }

  export type transactionUpdateManyWithoutInvoicesNestedInput = {
    create?: XOR<transactionCreateWithoutInvoicesInput, transactionUncheckedCreateWithoutInvoicesInput> | transactionCreateWithoutInvoicesInput[] | transactionUncheckedCreateWithoutInvoicesInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutInvoicesInput | transactionCreateOrConnectWithoutInvoicesInput[]
    upsert?: transactionUpsertWithWhereUniqueWithoutInvoicesInput | transactionUpsertWithWhereUniqueWithoutInvoicesInput[]
    createMany?: transactionCreateManyInvoicesInputEnvelope
    set?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    disconnect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    delete?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    update?: transactionUpdateWithWhereUniqueWithoutInvoicesInput | transactionUpdateWithWhereUniqueWithoutInvoicesInput[]
    updateMany?: transactionUpdateManyWithWhereWithoutInvoicesInput | transactionUpdateManyWithWhereWithoutInvoicesInput[]
    deleteMany?: transactionScalarWhereInput | transactionScalarWhereInput[]
  }

  export type invoice_itemsUncheckedUpdateManyWithoutInvoicesNestedInput = {
    create?: XOR<invoice_itemsCreateWithoutInvoicesInput, invoice_itemsUncheckedCreateWithoutInvoicesInput> | invoice_itemsCreateWithoutInvoicesInput[] | invoice_itemsUncheckedCreateWithoutInvoicesInput[]
    connectOrCreate?: invoice_itemsCreateOrConnectWithoutInvoicesInput | invoice_itemsCreateOrConnectWithoutInvoicesInput[]
    upsert?: invoice_itemsUpsertWithWhereUniqueWithoutInvoicesInput | invoice_itemsUpsertWithWhereUniqueWithoutInvoicesInput[]
    createMany?: invoice_itemsCreateManyInvoicesInputEnvelope
    set?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    disconnect?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    delete?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    connect?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    update?: invoice_itemsUpdateWithWhereUniqueWithoutInvoicesInput | invoice_itemsUpdateWithWhereUniqueWithoutInvoicesInput[]
    updateMany?: invoice_itemsUpdateManyWithWhereWithoutInvoicesInput | invoice_itemsUpdateManyWithWhereWithoutInvoicesInput[]
    deleteMany?: invoice_itemsScalarWhereInput | invoice_itemsScalarWhereInput[]
  }

  export type transactionUncheckedUpdateManyWithoutInvoicesNestedInput = {
    create?: XOR<transactionCreateWithoutInvoicesInput, transactionUncheckedCreateWithoutInvoicesInput> | transactionCreateWithoutInvoicesInput[] | transactionUncheckedCreateWithoutInvoicesInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutInvoicesInput | transactionCreateOrConnectWithoutInvoicesInput[]
    upsert?: transactionUpsertWithWhereUniqueWithoutInvoicesInput | transactionUpsertWithWhereUniqueWithoutInvoicesInput[]
    createMany?: transactionCreateManyInvoicesInputEnvelope
    set?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    disconnect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    delete?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    update?: transactionUpdateWithWhereUniqueWithoutInvoicesInput | transactionUpdateWithWhereUniqueWithoutInvoicesInput[]
    updateMany?: transactionUpdateManyWithWhereWithoutInvoicesInput | transactionUpdateManyWithWhereWithoutInvoicesInput[]
    deleteMany?: transactionScalarWhereInput | transactionScalarWhereInput[]
  }

  export type invoice_itemsCreateNestedManyWithoutProducts_servicesInput = {
    create?: XOR<invoice_itemsCreateWithoutProducts_servicesInput, invoice_itemsUncheckedCreateWithoutProducts_servicesInput> | invoice_itemsCreateWithoutProducts_servicesInput[] | invoice_itemsUncheckedCreateWithoutProducts_servicesInput[]
    connectOrCreate?: invoice_itemsCreateOrConnectWithoutProducts_servicesInput | invoice_itemsCreateOrConnectWithoutProducts_servicesInput[]
    createMany?: invoice_itemsCreateManyProducts_servicesInputEnvelope
    connect?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutProducts_servicesInput = {
    create?: XOR<usersCreateWithoutProducts_servicesInput, usersUncheckedCreateWithoutProducts_servicesInput>
    connectOrCreate?: usersCreateOrConnectWithoutProducts_servicesInput
    connect?: usersWhereUniqueInput
  }

  export type recurring_invoice_itemCreateNestedManyWithoutProducts_servicesInput = {
    create?: XOR<recurring_invoice_itemCreateWithoutProducts_servicesInput, recurring_invoice_itemUncheckedCreateWithoutProducts_servicesInput> | recurring_invoice_itemCreateWithoutProducts_servicesInput[] | recurring_invoice_itemUncheckedCreateWithoutProducts_servicesInput[]
    connectOrCreate?: recurring_invoice_itemCreateOrConnectWithoutProducts_servicesInput | recurring_invoice_itemCreateOrConnectWithoutProducts_servicesInput[]
    createMany?: recurring_invoice_itemCreateManyProducts_servicesInputEnvelope
    connect?: recurring_invoice_itemWhereUniqueInput | recurring_invoice_itemWhereUniqueInput[]
  }

  export type invoice_itemsUncheckedCreateNestedManyWithoutProducts_servicesInput = {
    create?: XOR<invoice_itemsCreateWithoutProducts_servicesInput, invoice_itemsUncheckedCreateWithoutProducts_servicesInput> | invoice_itemsCreateWithoutProducts_servicesInput[] | invoice_itemsUncheckedCreateWithoutProducts_servicesInput[]
    connectOrCreate?: invoice_itemsCreateOrConnectWithoutProducts_servicesInput | invoice_itemsCreateOrConnectWithoutProducts_servicesInput[]
    createMany?: invoice_itemsCreateManyProducts_servicesInputEnvelope
    connect?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
  }

  export type recurring_invoice_itemUncheckedCreateNestedManyWithoutProducts_servicesInput = {
    create?: XOR<recurring_invoice_itemCreateWithoutProducts_servicesInput, recurring_invoice_itemUncheckedCreateWithoutProducts_servicesInput> | recurring_invoice_itemCreateWithoutProducts_servicesInput[] | recurring_invoice_itemUncheckedCreateWithoutProducts_servicesInput[]
    connectOrCreate?: recurring_invoice_itemCreateOrConnectWithoutProducts_servicesInput | recurring_invoice_itemCreateOrConnectWithoutProducts_servicesInput[]
    createMany?: recurring_invoice_itemCreateManyProducts_servicesInputEnvelope
    connect?: recurring_invoice_itemWhereUniqueInput | recurring_invoice_itemWhereUniqueInput[]
  }

  export type EnumTypeFieldUpdateOperationsInput = {
    set?: $Enums.Type
  }

  export type EnumUnitFieldUpdateOperationsInput = {
    set?: $Enums.Unit
  }

  export type invoice_itemsUpdateManyWithoutProducts_servicesNestedInput = {
    create?: XOR<invoice_itemsCreateWithoutProducts_servicesInput, invoice_itemsUncheckedCreateWithoutProducts_servicesInput> | invoice_itemsCreateWithoutProducts_servicesInput[] | invoice_itemsUncheckedCreateWithoutProducts_servicesInput[]
    connectOrCreate?: invoice_itemsCreateOrConnectWithoutProducts_servicesInput | invoice_itemsCreateOrConnectWithoutProducts_servicesInput[]
    upsert?: invoice_itemsUpsertWithWhereUniqueWithoutProducts_servicesInput | invoice_itemsUpsertWithWhereUniqueWithoutProducts_servicesInput[]
    createMany?: invoice_itemsCreateManyProducts_servicesInputEnvelope
    set?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    disconnect?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    delete?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    connect?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    update?: invoice_itemsUpdateWithWhereUniqueWithoutProducts_servicesInput | invoice_itemsUpdateWithWhereUniqueWithoutProducts_servicesInput[]
    updateMany?: invoice_itemsUpdateManyWithWhereWithoutProducts_servicesInput | invoice_itemsUpdateManyWithWhereWithoutProducts_servicesInput[]
    deleteMany?: invoice_itemsScalarWhereInput | invoice_itemsScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutProducts_servicesNestedInput = {
    create?: XOR<usersCreateWithoutProducts_servicesInput, usersUncheckedCreateWithoutProducts_servicesInput>
    connectOrCreate?: usersCreateOrConnectWithoutProducts_servicesInput
    upsert?: usersUpsertWithoutProducts_servicesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutProducts_servicesInput, usersUpdateWithoutProducts_servicesInput>, usersUncheckedUpdateWithoutProducts_servicesInput>
  }

  export type recurring_invoice_itemUpdateManyWithoutProducts_servicesNestedInput = {
    create?: XOR<recurring_invoice_itemCreateWithoutProducts_servicesInput, recurring_invoice_itemUncheckedCreateWithoutProducts_servicesInput> | recurring_invoice_itemCreateWithoutProducts_servicesInput[] | recurring_invoice_itemUncheckedCreateWithoutProducts_servicesInput[]
    connectOrCreate?: recurring_invoice_itemCreateOrConnectWithoutProducts_servicesInput | recurring_invoice_itemCreateOrConnectWithoutProducts_servicesInput[]
    upsert?: recurring_invoice_itemUpsertWithWhereUniqueWithoutProducts_servicesInput | recurring_invoice_itemUpsertWithWhereUniqueWithoutProducts_servicesInput[]
    createMany?: recurring_invoice_itemCreateManyProducts_servicesInputEnvelope
    set?: recurring_invoice_itemWhereUniqueInput | recurring_invoice_itemWhereUniqueInput[]
    disconnect?: recurring_invoice_itemWhereUniqueInput | recurring_invoice_itemWhereUniqueInput[]
    delete?: recurring_invoice_itemWhereUniqueInput | recurring_invoice_itemWhereUniqueInput[]
    connect?: recurring_invoice_itemWhereUniqueInput | recurring_invoice_itemWhereUniqueInput[]
    update?: recurring_invoice_itemUpdateWithWhereUniqueWithoutProducts_servicesInput | recurring_invoice_itemUpdateWithWhereUniqueWithoutProducts_servicesInput[]
    updateMany?: recurring_invoice_itemUpdateManyWithWhereWithoutProducts_servicesInput | recurring_invoice_itemUpdateManyWithWhereWithoutProducts_servicesInput[]
    deleteMany?: recurring_invoice_itemScalarWhereInput | recurring_invoice_itemScalarWhereInput[]
  }

  export type invoice_itemsUncheckedUpdateManyWithoutProducts_servicesNestedInput = {
    create?: XOR<invoice_itemsCreateWithoutProducts_servicesInput, invoice_itemsUncheckedCreateWithoutProducts_servicesInput> | invoice_itemsCreateWithoutProducts_servicesInput[] | invoice_itemsUncheckedCreateWithoutProducts_servicesInput[]
    connectOrCreate?: invoice_itemsCreateOrConnectWithoutProducts_servicesInput | invoice_itemsCreateOrConnectWithoutProducts_servicesInput[]
    upsert?: invoice_itemsUpsertWithWhereUniqueWithoutProducts_servicesInput | invoice_itemsUpsertWithWhereUniqueWithoutProducts_servicesInput[]
    createMany?: invoice_itemsCreateManyProducts_servicesInputEnvelope
    set?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    disconnect?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    delete?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    connect?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    update?: invoice_itemsUpdateWithWhereUniqueWithoutProducts_servicesInput | invoice_itemsUpdateWithWhereUniqueWithoutProducts_servicesInput[]
    updateMany?: invoice_itemsUpdateManyWithWhereWithoutProducts_servicesInput | invoice_itemsUpdateManyWithWhereWithoutProducts_servicesInput[]
    deleteMany?: invoice_itemsScalarWhereInput | invoice_itemsScalarWhereInput[]
  }

  export type recurring_invoice_itemUncheckedUpdateManyWithoutProducts_servicesNestedInput = {
    create?: XOR<recurring_invoice_itemCreateWithoutProducts_servicesInput, recurring_invoice_itemUncheckedCreateWithoutProducts_servicesInput> | recurring_invoice_itemCreateWithoutProducts_servicesInput[] | recurring_invoice_itemUncheckedCreateWithoutProducts_servicesInput[]
    connectOrCreate?: recurring_invoice_itemCreateOrConnectWithoutProducts_servicesInput | recurring_invoice_itemCreateOrConnectWithoutProducts_servicesInput[]
    upsert?: recurring_invoice_itemUpsertWithWhereUniqueWithoutProducts_servicesInput | recurring_invoice_itemUpsertWithWhereUniqueWithoutProducts_servicesInput[]
    createMany?: recurring_invoice_itemCreateManyProducts_servicesInputEnvelope
    set?: recurring_invoice_itemWhereUniqueInput | recurring_invoice_itemWhereUniqueInput[]
    disconnect?: recurring_invoice_itemWhereUniqueInput | recurring_invoice_itemWhereUniqueInput[]
    delete?: recurring_invoice_itemWhereUniqueInput | recurring_invoice_itemWhereUniqueInput[]
    connect?: recurring_invoice_itemWhereUniqueInput | recurring_invoice_itemWhereUniqueInput[]
    update?: recurring_invoice_itemUpdateWithWhereUniqueWithoutProducts_servicesInput | recurring_invoice_itemUpdateWithWhereUniqueWithoutProducts_servicesInput[]
    updateMany?: recurring_invoice_itemUpdateManyWithWhereWithoutProducts_servicesInput | recurring_invoice_itemUpdateManyWithWhereWithoutProducts_servicesInput[]
    deleteMany?: recurring_invoice_itemScalarWhereInput | recurring_invoice_itemScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutUser_profilesInput = {
    create?: XOR<usersCreateWithoutUser_profilesInput, usersUncheckedCreateWithoutUser_profilesInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_profilesInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutUser_profilesNestedInput = {
    create?: XOR<usersCreateWithoutUser_profilesInput, usersUncheckedCreateWithoutUser_profilesInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_profilesInput
    upsert?: usersUpsertWithoutUser_profilesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUser_profilesInput, usersUpdateWithoutUser_profilesInput>, usersUncheckedUpdateWithoutUser_profilesInput>
  }

  export type clientsCreateNestedManyWithoutUsersInput = {
    create?: XOR<clientsCreateWithoutUsersInput, clientsUncheckedCreateWithoutUsersInput> | clientsCreateWithoutUsersInput[] | clientsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: clientsCreateOrConnectWithoutUsersInput | clientsCreateOrConnectWithoutUsersInput[]
    createMany?: clientsCreateManyUsersInputEnvelope
    connect?: clientsWhereUniqueInput | clientsWhereUniqueInput[]
  }

  export type invoicesCreateNestedManyWithoutUsersInput = {
    create?: XOR<invoicesCreateWithoutUsersInput, invoicesUncheckedCreateWithoutUsersInput> | invoicesCreateWithoutUsersInput[] | invoicesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: invoicesCreateOrConnectWithoutUsersInput | invoicesCreateOrConnectWithoutUsersInput[]
    createMany?: invoicesCreateManyUsersInputEnvelope
    connect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
  }

  export type products_servicesCreateNestedManyWithoutUsersInput = {
    create?: XOR<products_servicesCreateWithoutUsersInput, products_servicesUncheckedCreateWithoutUsersInput> | products_servicesCreateWithoutUsersInput[] | products_servicesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: products_servicesCreateOrConnectWithoutUsersInput | products_servicesCreateOrConnectWithoutUsersInput[]
    createMany?: products_servicesCreateManyUsersInputEnvelope
    connect?: products_servicesWhereUniqueInput | products_servicesWhereUniqueInput[]
  }

  export type recurring_invoiceCreateNestedManyWithoutUsersInput = {
    create?: XOR<recurring_invoiceCreateWithoutUsersInput, recurring_invoiceUncheckedCreateWithoutUsersInput> | recurring_invoiceCreateWithoutUsersInput[] | recurring_invoiceUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: recurring_invoiceCreateOrConnectWithoutUsersInput | recurring_invoiceCreateOrConnectWithoutUsersInput[]
    createMany?: recurring_invoiceCreateManyUsersInputEnvelope
    connect?: recurring_invoiceWhereUniqueInput | recurring_invoiceWhereUniqueInput[]
  }

  export type user_payment_methodCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_payment_methodCreateWithoutUsersInput, user_payment_methodUncheckedCreateWithoutUsersInput> | user_payment_methodCreateWithoutUsersInput[] | user_payment_methodUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_payment_methodCreateOrConnectWithoutUsersInput | user_payment_methodCreateOrConnectWithoutUsersInput[]
    createMany?: user_payment_methodCreateManyUsersInputEnvelope
    connect?: user_payment_methodWhereUniqueInput | user_payment_methodWhereUniqueInput[]
  }

  export type user_profilesCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_profilesCreateWithoutUsersInput, user_profilesUncheckedCreateWithoutUsersInput> | user_profilesCreateWithoutUsersInput[] | user_profilesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_profilesCreateOrConnectWithoutUsersInput | user_profilesCreateOrConnectWithoutUsersInput[]
    createMany?: user_profilesCreateManyUsersInputEnvelope
    connect?: user_profilesWhereUniqueInput | user_profilesWhereUniqueInput[]
  }

  export type clientsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<clientsCreateWithoutUsersInput, clientsUncheckedCreateWithoutUsersInput> | clientsCreateWithoutUsersInput[] | clientsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: clientsCreateOrConnectWithoutUsersInput | clientsCreateOrConnectWithoutUsersInput[]
    createMany?: clientsCreateManyUsersInputEnvelope
    connect?: clientsWhereUniqueInput | clientsWhereUniqueInput[]
  }

  export type invoicesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<invoicesCreateWithoutUsersInput, invoicesUncheckedCreateWithoutUsersInput> | invoicesCreateWithoutUsersInput[] | invoicesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: invoicesCreateOrConnectWithoutUsersInput | invoicesCreateOrConnectWithoutUsersInput[]
    createMany?: invoicesCreateManyUsersInputEnvelope
    connect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
  }

  export type products_servicesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<products_servicesCreateWithoutUsersInput, products_servicesUncheckedCreateWithoutUsersInput> | products_servicesCreateWithoutUsersInput[] | products_servicesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: products_servicesCreateOrConnectWithoutUsersInput | products_servicesCreateOrConnectWithoutUsersInput[]
    createMany?: products_servicesCreateManyUsersInputEnvelope
    connect?: products_servicesWhereUniqueInput | products_servicesWhereUniqueInput[]
  }

  export type recurring_invoiceUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<recurring_invoiceCreateWithoutUsersInput, recurring_invoiceUncheckedCreateWithoutUsersInput> | recurring_invoiceCreateWithoutUsersInput[] | recurring_invoiceUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: recurring_invoiceCreateOrConnectWithoutUsersInput | recurring_invoiceCreateOrConnectWithoutUsersInput[]
    createMany?: recurring_invoiceCreateManyUsersInputEnvelope
    connect?: recurring_invoiceWhereUniqueInput | recurring_invoiceWhereUniqueInput[]
  }

  export type user_payment_methodUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_payment_methodCreateWithoutUsersInput, user_payment_methodUncheckedCreateWithoutUsersInput> | user_payment_methodCreateWithoutUsersInput[] | user_payment_methodUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_payment_methodCreateOrConnectWithoutUsersInput | user_payment_methodCreateOrConnectWithoutUsersInput[]
    createMany?: user_payment_methodCreateManyUsersInputEnvelope
    connect?: user_payment_methodWhereUniqueInput | user_payment_methodWhereUniqueInput[]
  }

  export type user_profilesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_profilesCreateWithoutUsersInput, user_profilesUncheckedCreateWithoutUsersInput> | user_profilesCreateWithoutUsersInput[] | user_profilesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_profilesCreateOrConnectWithoutUsersInput | user_profilesCreateOrConnectWithoutUsersInput[]
    createMany?: user_profilesCreateManyUsersInputEnvelope
    connect?: user_profilesWhereUniqueInput | user_profilesWhereUniqueInput[]
  }

  export type clientsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<clientsCreateWithoutUsersInput, clientsUncheckedCreateWithoutUsersInput> | clientsCreateWithoutUsersInput[] | clientsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: clientsCreateOrConnectWithoutUsersInput | clientsCreateOrConnectWithoutUsersInput[]
    upsert?: clientsUpsertWithWhereUniqueWithoutUsersInput | clientsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: clientsCreateManyUsersInputEnvelope
    set?: clientsWhereUniqueInput | clientsWhereUniqueInput[]
    disconnect?: clientsWhereUniqueInput | clientsWhereUniqueInput[]
    delete?: clientsWhereUniqueInput | clientsWhereUniqueInput[]
    connect?: clientsWhereUniqueInput | clientsWhereUniqueInput[]
    update?: clientsUpdateWithWhereUniqueWithoutUsersInput | clientsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: clientsUpdateManyWithWhereWithoutUsersInput | clientsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: clientsScalarWhereInput | clientsScalarWhereInput[]
  }

  export type invoicesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<invoicesCreateWithoutUsersInput, invoicesUncheckedCreateWithoutUsersInput> | invoicesCreateWithoutUsersInput[] | invoicesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: invoicesCreateOrConnectWithoutUsersInput | invoicesCreateOrConnectWithoutUsersInput[]
    upsert?: invoicesUpsertWithWhereUniqueWithoutUsersInput | invoicesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: invoicesCreateManyUsersInputEnvelope
    set?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    disconnect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    delete?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    connect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    update?: invoicesUpdateWithWhereUniqueWithoutUsersInput | invoicesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: invoicesUpdateManyWithWhereWithoutUsersInput | invoicesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: invoicesScalarWhereInput | invoicesScalarWhereInput[]
  }

  export type products_servicesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<products_servicesCreateWithoutUsersInput, products_servicesUncheckedCreateWithoutUsersInput> | products_servicesCreateWithoutUsersInput[] | products_servicesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: products_servicesCreateOrConnectWithoutUsersInput | products_servicesCreateOrConnectWithoutUsersInput[]
    upsert?: products_servicesUpsertWithWhereUniqueWithoutUsersInput | products_servicesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: products_servicesCreateManyUsersInputEnvelope
    set?: products_servicesWhereUniqueInput | products_servicesWhereUniqueInput[]
    disconnect?: products_servicesWhereUniqueInput | products_servicesWhereUniqueInput[]
    delete?: products_servicesWhereUniqueInput | products_servicesWhereUniqueInput[]
    connect?: products_servicesWhereUniqueInput | products_servicesWhereUniqueInput[]
    update?: products_servicesUpdateWithWhereUniqueWithoutUsersInput | products_servicesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: products_servicesUpdateManyWithWhereWithoutUsersInput | products_servicesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: products_servicesScalarWhereInput | products_servicesScalarWhereInput[]
  }

  export type recurring_invoiceUpdateManyWithoutUsersNestedInput = {
    create?: XOR<recurring_invoiceCreateWithoutUsersInput, recurring_invoiceUncheckedCreateWithoutUsersInput> | recurring_invoiceCreateWithoutUsersInput[] | recurring_invoiceUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: recurring_invoiceCreateOrConnectWithoutUsersInput | recurring_invoiceCreateOrConnectWithoutUsersInput[]
    upsert?: recurring_invoiceUpsertWithWhereUniqueWithoutUsersInput | recurring_invoiceUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: recurring_invoiceCreateManyUsersInputEnvelope
    set?: recurring_invoiceWhereUniqueInput | recurring_invoiceWhereUniqueInput[]
    disconnect?: recurring_invoiceWhereUniqueInput | recurring_invoiceWhereUniqueInput[]
    delete?: recurring_invoiceWhereUniqueInput | recurring_invoiceWhereUniqueInput[]
    connect?: recurring_invoiceWhereUniqueInput | recurring_invoiceWhereUniqueInput[]
    update?: recurring_invoiceUpdateWithWhereUniqueWithoutUsersInput | recurring_invoiceUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: recurring_invoiceUpdateManyWithWhereWithoutUsersInput | recurring_invoiceUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: recurring_invoiceScalarWhereInput | recurring_invoiceScalarWhereInput[]
  }

  export type user_payment_methodUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_payment_methodCreateWithoutUsersInput, user_payment_methodUncheckedCreateWithoutUsersInput> | user_payment_methodCreateWithoutUsersInput[] | user_payment_methodUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_payment_methodCreateOrConnectWithoutUsersInput | user_payment_methodCreateOrConnectWithoutUsersInput[]
    upsert?: user_payment_methodUpsertWithWhereUniqueWithoutUsersInput | user_payment_methodUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_payment_methodCreateManyUsersInputEnvelope
    set?: user_payment_methodWhereUniqueInput | user_payment_methodWhereUniqueInput[]
    disconnect?: user_payment_methodWhereUniqueInput | user_payment_methodWhereUniqueInput[]
    delete?: user_payment_methodWhereUniqueInput | user_payment_methodWhereUniqueInput[]
    connect?: user_payment_methodWhereUniqueInput | user_payment_methodWhereUniqueInput[]
    update?: user_payment_methodUpdateWithWhereUniqueWithoutUsersInput | user_payment_methodUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_payment_methodUpdateManyWithWhereWithoutUsersInput | user_payment_methodUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_payment_methodScalarWhereInput | user_payment_methodScalarWhereInput[]
  }

  export type user_profilesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_profilesCreateWithoutUsersInput, user_profilesUncheckedCreateWithoutUsersInput> | user_profilesCreateWithoutUsersInput[] | user_profilesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_profilesCreateOrConnectWithoutUsersInput | user_profilesCreateOrConnectWithoutUsersInput[]
    upsert?: user_profilesUpsertWithWhereUniqueWithoutUsersInput | user_profilesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_profilesCreateManyUsersInputEnvelope
    set?: user_profilesWhereUniqueInput | user_profilesWhereUniqueInput[]
    disconnect?: user_profilesWhereUniqueInput | user_profilesWhereUniqueInput[]
    delete?: user_profilesWhereUniqueInput | user_profilesWhereUniqueInput[]
    connect?: user_profilesWhereUniqueInput | user_profilesWhereUniqueInput[]
    update?: user_profilesUpdateWithWhereUniqueWithoutUsersInput | user_profilesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_profilesUpdateManyWithWhereWithoutUsersInput | user_profilesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_profilesScalarWhereInput | user_profilesScalarWhereInput[]
  }

  export type clientsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<clientsCreateWithoutUsersInput, clientsUncheckedCreateWithoutUsersInput> | clientsCreateWithoutUsersInput[] | clientsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: clientsCreateOrConnectWithoutUsersInput | clientsCreateOrConnectWithoutUsersInput[]
    upsert?: clientsUpsertWithWhereUniqueWithoutUsersInput | clientsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: clientsCreateManyUsersInputEnvelope
    set?: clientsWhereUniqueInput | clientsWhereUniqueInput[]
    disconnect?: clientsWhereUniqueInput | clientsWhereUniqueInput[]
    delete?: clientsWhereUniqueInput | clientsWhereUniqueInput[]
    connect?: clientsWhereUniqueInput | clientsWhereUniqueInput[]
    update?: clientsUpdateWithWhereUniqueWithoutUsersInput | clientsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: clientsUpdateManyWithWhereWithoutUsersInput | clientsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: clientsScalarWhereInput | clientsScalarWhereInput[]
  }

  export type invoicesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<invoicesCreateWithoutUsersInput, invoicesUncheckedCreateWithoutUsersInput> | invoicesCreateWithoutUsersInput[] | invoicesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: invoicesCreateOrConnectWithoutUsersInput | invoicesCreateOrConnectWithoutUsersInput[]
    upsert?: invoicesUpsertWithWhereUniqueWithoutUsersInput | invoicesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: invoicesCreateManyUsersInputEnvelope
    set?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    disconnect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    delete?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    connect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    update?: invoicesUpdateWithWhereUniqueWithoutUsersInput | invoicesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: invoicesUpdateManyWithWhereWithoutUsersInput | invoicesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: invoicesScalarWhereInput | invoicesScalarWhereInput[]
  }

  export type products_servicesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<products_servicesCreateWithoutUsersInput, products_servicesUncheckedCreateWithoutUsersInput> | products_servicesCreateWithoutUsersInput[] | products_servicesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: products_servicesCreateOrConnectWithoutUsersInput | products_servicesCreateOrConnectWithoutUsersInput[]
    upsert?: products_servicesUpsertWithWhereUniqueWithoutUsersInput | products_servicesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: products_servicesCreateManyUsersInputEnvelope
    set?: products_servicesWhereUniqueInput | products_servicesWhereUniqueInput[]
    disconnect?: products_servicesWhereUniqueInput | products_servicesWhereUniqueInput[]
    delete?: products_servicesWhereUniqueInput | products_servicesWhereUniqueInput[]
    connect?: products_servicesWhereUniqueInput | products_servicesWhereUniqueInput[]
    update?: products_servicesUpdateWithWhereUniqueWithoutUsersInput | products_servicesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: products_servicesUpdateManyWithWhereWithoutUsersInput | products_servicesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: products_servicesScalarWhereInput | products_servicesScalarWhereInput[]
  }

  export type recurring_invoiceUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<recurring_invoiceCreateWithoutUsersInput, recurring_invoiceUncheckedCreateWithoutUsersInput> | recurring_invoiceCreateWithoutUsersInput[] | recurring_invoiceUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: recurring_invoiceCreateOrConnectWithoutUsersInput | recurring_invoiceCreateOrConnectWithoutUsersInput[]
    upsert?: recurring_invoiceUpsertWithWhereUniqueWithoutUsersInput | recurring_invoiceUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: recurring_invoiceCreateManyUsersInputEnvelope
    set?: recurring_invoiceWhereUniqueInput | recurring_invoiceWhereUniqueInput[]
    disconnect?: recurring_invoiceWhereUniqueInput | recurring_invoiceWhereUniqueInput[]
    delete?: recurring_invoiceWhereUniqueInput | recurring_invoiceWhereUniqueInput[]
    connect?: recurring_invoiceWhereUniqueInput | recurring_invoiceWhereUniqueInput[]
    update?: recurring_invoiceUpdateWithWhereUniqueWithoutUsersInput | recurring_invoiceUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: recurring_invoiceUpdateManyWithWhereWithoutUsersInput | recurring_invoiceUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: recurring_invoiceScalarWhereInput | recurring_invoiceScalarWhereInput[]
  }

  export type user_payment_methodUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_payment_methodCreateWithoutUsersInput, user_payment_methodUncheckedCreateWithoutUsersInput> | user_payment_methodCreateWithoutUsersInput[] | user_payment_methodUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_payment_methodCreateOrConnectWithoutUsersInput | user_payment_methodCreateOrConnectWithoutUsersInput[]
    upsert?: user_payment_methodUpsertWithWhereUniqueWithoutUsersInput | user_payment_methodUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_payment_methodCreateManyUsersInputEnvelope
    set?: user_payment_methodWhereUniqueInput | user_payment_methodWhereUniqueInput[]
    disconnect?: user_payment_methodWhereUniqueInput | user_payment_methodWhereUniqueInput[]
    delete?: user_payment_methodWhereUniqueInput | user_payment_methodWhereUniqueInput[]
    connect?: user_payment_methodWhereUniqueInput | user_payment_methodWhereUniqueInput[]
    update?: user_payment_methodUpdateWithWhereUniqueWithoutUsersInput | user_payment_methodUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_payment_methodUpdateManyWithWhereWithoutUsersInput | user_payment_methodUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_payment_methodScalarWhereInput | user_payment_methodScalarWhereInput[]
  }

  export type user_profilesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_profilesCreateWithoutUsersInput, user_profilesUncheckedCreateWithoutUsersInput> | user_profilesCreateWithoutUsersInput[] | user_profilesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_profilesCreateOrConnectWithoutUsersInput | user_profilesCreateOrConnectWithoutUsersInput[]
    upsert?: user_profilesUpsertWithWhereUniqueWithoutUsersInput | user_profilesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_profilesCreateManyUsersInputEnvelope
    set?: user_profilesWhereUniqueInput | user_profilesWhereUniqueInput[]
    disconnect?: user_profilesWhereUniqueInput | user_profilesWhereUniqueInput[]
    delete?: user_profilesWhereUniqueInput | user_profilesWhereUniqueInput[]
    connect?: user_profilesWhereUniqueInput | user_profilesWhereUniqueInput[]
    update?: user_profilesUpdateWithWhereUniqueWithoutUsersInput | user_profilesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_profilesUpdateManyWithWhereWithoutUsersInput | user_profilesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_profilesScalarWhereInput | user_profilesScalarWhereInput[]
  }

  export type clientsCreateNestedOneWithoutRecurring_invoiceInput = {
    create?: XOR<clientsCreateWithoutRecurring_invoiceInput, clientsUncheckedCreateWithoutRecurring_invoiceInput>
    connectOrCreate?: clientsCreateOrConnectWithoutRecurring_invoiceInput
    connect?: clientsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutRecurring_invoiceInput = {
    create?: XOR<usersCreateWithoutRecurring_invoiceInput, usersUncheckedCreateWithoutRecurring_invoiceInput>
    connectOrCreate?: usersCreateOrConnectWithoutRecurring_invoiceInput
    connect?: usersWhereUniqueInput
  }

  export type recurring_invoice_itemCreateNestedManyWithoutRecurring_invoiceInput = {
    create?: XOR<recurring_invoice_itemCreateWithoutRecurring_invoiceInput, recurring_invoice_itemUncheckedCreateWithoutRecurring_invoiceInput> | recurring_invoice_itemCreateWithoutRecurring_invoiceInput[] | recurring_invoice_itemUncheckedCreateWithoutRecurring_invoiceInput[]
    connectOrCreate?: recurring_invoice_itemCreateOrConnectWithoutRecurring_invoiceInput | recurring_invoice_itemCreateOrConnectWithoutRecurring_invoiceInput[]
    createMany?: recurring_invoice_itemCreateManyRecurring_invoiceInputEnvelope
    connect?: recurring_invoice_itemWhereUniqueInput | recurring_invoice_itemWhereUniqueInput[]
  }

  export type recurring_invoice_itemUncheckedCreateNestedManyWithoutRecurring_invoiceInput = {
    create?: XOR<recurring_invoice_itemCreateWithoutRecurring_invoiceInput, recurring_invoice_itemUncheckedCreateWithoutRecurring_invoiceInput> | recurring_invoice_itemCreateWithoutRecurring_invoiceInput[] | recurring_invoice_itemUncheckedCreateWithoutRecurring_invoiceInput[]
    connectOrCreate?: recurring_invoice_itemCreateOrConnectWithoutRecurring_invoiceInput | recurring_invoice_itemCreateOrConnectWithoutRecurring_invoiceInput[]
    createMany?: recurring_invoice_itemCreateManyRecurring_invoiceInputEnvelope
    connect?: recurring_invoice_itemWhereUniqueInput | recurring_invoice_itemWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type clientsUpdateOneRequiredWithoutRecurring_invoiceNestedInput = {
    create?: XOR<clientsCreateWithoutRecurring_invoiceInput, clientsUncheckedCreateWithoutRecurring_invoiceInput>
    connectOrCreate?: clientsCreateOrConnectWithoutRecurring_invoiceInput
    upsert?: clientsUpsertWithoutRecurring_invoiceInput
    connect?: clientsWhereUniqueInput
    update?: XOR<XOR<clientsUpdateToOneWithWhereWithoutRecurring_invoiceInput, clientsUpdateWithoutRecurring_invoiceInput>, clientsUncheckedUpdateWithoutRecurring_invoiceInput>
  }

  export type usersUpdateOneRequiredWithoutRecurring_invoiceNestedInput = {
    create?: XOR<usersCreateWithoutRecurring_invoiceInput, usersUncheckedCreateWithoutRecurring_invoiceInput>
    connectOrCreate?: usersCreateOrConnectWithoutRecurring_invoiceInput
    upsert?: usersUpsertWithoutRecurring_invoiceInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutRecurring_invoiceInput, usersUpdateWithoutRecurring_invoiceInput>, usersUncheckedUpdateWithoutRecurring_invoiceInput>
  }

  export type recurring_invoice_itemUpdateManyWithoutRecurring_invoiceNestedInput = {
    create?: XOR<recurring_invoice_itemCreateWithoutRecurring_invoiceInput, recurring_invoice_itemUncheckedCreateWithoutRecurring_invoiceInput> | recurring_invoice_itemCreateWithoutRecurring_invoiceInput[] | recurring_invoice_itemUncheckedCreateWithoutRecurring_invoiceInput[]
    connectOrCreate?: recurring_invoice_itemCreateOrConnectWithoutRecurring_invoiceInput | recurring_invoice_itemCreateOrConnectWithoutRecurring_invoiceInput[]
    upsert?: recurring_invoice_itemUpsertWithWhereUniqueWithoutRecurring_invoiceInput | recurring_invoice_itemUpsertWithWhereUniqueWithoutRecurring_invoiceInput[]
    createMany?: recurring_invoice_itemCreateManyRecurring_invoiceInputEnvelope
    set?: recurring_invoice_itemWhereUniqueInput | recurring_invoice_itemWhereUniqueInput[]
    disconnect?: recurring_invoice_itemWhereUniqueInput | recurring_invoice_itemWhereUniqueInput[]
    delete?: recurring_invoice_itemWhereUniqueInput | recurring_invoice_itemWhereUniqueInput[]
    connect?: recurring_invoice_itemWhereUniqueInput | recurring_invoice_itemWhereUniqueInput[]
    update?: recurring_invoice_itemUpdateWithWhereUniqueWithoutRecurring_invoiceInput | recurring_invoice_itemUpdateWithWhereUniqueWithoutRecurring_invoiceInput[]
    updateMany?: recurring_invoice_itemUpdateManyWithWhereWithoutRecurring_invoiceInput | recurring_invoice_itemUpdateManyWithWhereWithoutRecurring_invoiceInput[]
    deleteMany?: recurring_invoice_itemScalarWhereInput | recurring_invoice_itemScalarWhereInput[]
  }

  export type recurring_invoice_itemUncheckedUpdateManyWithoutRecurring_invoiceNestedInput = {
    create?: XOR<recurring_invoice_itemCreateWithoutRecurring_invoiceInput, recurring_invoice_itemUncheckedCreateWithoutRecurring_invoiceInput> | recurring_invoice_itemCreateWithoutRecurring_invoiceInput[] | recurring_invoice_itemUncheckedCreateWithoutRecurring_invoiceInput[]
    connectOrCreate?: recurring_invoice_itemCreateOrConnectWithoutRecurring_invoiceInput | recurring_invoice_itemCreateOrConnectWithoutRecurring_invoiceInput[]
    upsert?: recurring_invoice_itemUpsertWithWhereUniqueWithoutRecurring_invoiceInput | recurring_invoice_itemUpsertWithWhereUniqueWithoutRecurring_invoiceInput[]
    createMany?: recurring_invoice_itemCreateManyRecurring_invoiceInputEnvelope
    set?: recurring_invoice_itemWhereUniqueInput | recurring_invoice_itemWhereUniqueInput[]
    disconnect?: recurring_invoice_itemWhereUniqueInput | recurring_invoice_itemWhereUniqueInput[]
    delete?: recurring_invoice_itemWhereUniqueInput | recurring_invoice_itemWhereUniqueInput[]
    connect?: recurring_invoice_itemWhereUniqueInput | recurring_invoice_itemWhereUniqueInput[]
    update?: recurring_invoice_itemUpdateWithWhereUniqueWithoutRecurring_invoiceInput | recurring_invoice_itemUpdateWithWhereUniqueWithoutRecurring_invoiceInput[]
    updateMany?: recurring_invoice_itemUpdateManyWithWhereWithoutRecurring_invoiceInput | recurring_invoice_itemUpdateManyWithWhereWithoutRecurring_invoiceInput[]
    deleteMany?: recurring_invoice_itemScalarWhereInput | recurring_invoice_itemScalarWhereInput[]
  }

  export type products_servicesCreateNestedOneWithoutRecurring_invoice_itemInput = {
    create?: XOR<products_servicesCreateWithoutRecurring_invoice_itemInput, products_servicesUncheckedCreateWithoutRecurring_invoice_itemInput>
    connectOrCreate?: products_servicesCreateOrConnectWithoutRecurring_invoice_itemInput
    connect?: products_servicesWhereUniqueInput
  }

  export type recurring_invoiceCreateNestedOneWithoutRecurring_invoice_itemInput = {
    create?: XOR<recurring_invoiceCreateWithoutRecurring_invoice_itemInput, recurring_invoiceUncheckedCreateWithoutRecurring_invoice_itemInput>
    connectOrCreate?: recurring_invoiceCreateOrConnectWithoutRecurring_invoice_itemInput
    connect?: recurring_invoiceWhereUniqueInput
  }

  export type products_servicesUpdateOneRequiredWithoutRecurring_invoice_itemNestedInput = {
    create?: XOR<products_servicesCreateWithoutRecurring_invoice_itemInput, products_servicesUncheckedCreateWithoutRecurring_invoice_itemInput>
    connectOrCreate?: products_servicesCreateOrConnectWithoutRecurring_invoice_itemInput
    upsert?: products_servicesUpsertWithoutRecurring_invoice_itemInput
    connect?: products_servicesWhereUniqueInput
    update?: XOR<XOR<products_servicesUpdateToOneWithWhereWithoutRecurring_invoice_itemInput, products_servicesUpdateWithoutRecurring_invoice_itemInput>, products_servicesUncheckedUpdateWithoutRecurring_invoice_itemInput>
  }

  export type recurring_invoiceUpdateOneRequiredWithoutRecurring_invoice_itemNestedInput = {
    create?: XOR<recurring_invoiceCreateWithoutRecurring_invoice_itemInput, recurring_invoiceUncheckedCreateWithoutRecurring_invoice_itemInput>
    connectOrCreate?: recurring_invoiceCreateOrConnectWithoutRecurring_invoice_itemInput
    upsert?: recurring_invoiceUpsertWithoutRecurring_invoice_itemInput
    connect?: recurring_invoiceWhereUniqueInput
    update?: XOR<XOR<recurring_invoiceUpdateToOneWithWhereWithoutRecurring_invoice_itemInput, recurring_invoiceUpdateWithoutRecurring_invoice_itemInput>, recurring_invoiceUncheckedUpdateWithoutRecurring_invoice_itemInput>
  }

  export type usersCreateNestedOneWithoutUser_payment_methodInput = {
    create?: XOR<usersCreateWithoutUser_payment_methodInput, usersUncheckedCreateWithoutUser_payment_methodInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_payment_methodInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutUser_payment_methodNestedInput = {
    create?: XOR<usersCreateWithoutUser_payment_methodInput, usersUncheckedCreateWithoutUser_payment_methodInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_payment_methodInput
    upsert?: usersUpsertWithoutUser_payment_methodInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUser_payment_methodInput, usersUpdateWithoutUser_payment_methodInput>, usersUncheckedUpdateWithoutUser_payment_methodInput>
  }

  export type invoicesCreateNestedOneWithoutTransactionInput = {
    create?: XOR<invoicesCreateWithoutTransactionInput, invoicesUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: invoicesCreateOrConnectWithoutTransactionInput
    connect?: invoicesWhereUniqueInput
  }

  export type invoicesUpdateOneRequiredWithoutTransactionNestedInput = {
    create?: XOR<invoicesCreateWithoutTransactionInput, invoicesUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: invoicesCreateOrConnectWithoutTransactionInput
    upsert?: invoicesUpsertWithoutTransactionInput
    connect?: invoicesWhereUniqueInput
    update?: XOR<XOR<invoicesUpdateToOneWithWhereWithoutTransactionInput, invoicesUpdateWithoutTransactionInput>, invoicesUncheckedUpdateWithoutTransactionInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedEnumTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeFilter<$PrismaModel> | $Enums.Type
  }

  export type NestedEnumUnitFilter<$PrismaModel = never> = {
    equals?: $Enums.Unit | EnumUnitFieldRefInput<$PrismaModel>
    in?: $Enums.Unit[] | ListEnumUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.Unit[] | ListEnumUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumUnitFilter<$PrismaModel> | $Enums.Unit
  }

  export type NestedEnumTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeWithAggregatesFilter<$PrismaModel> | $Enums.Type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeFilter<$PrismaModel>
    _max?: NestedEnumTypeFilter<$PrismaModel>
  }

  export type NestedEnumUnitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Unit | EnumUnitFieldRefInput<$PrismaModel>
    in?: $Enums.Unit[] | ListEnumUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.Unit[] | ListEnumUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumUnitWithAggregatesFilter<$PrismaModel> | $Enums.Unit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUnitFilter<$PrismaModel>
    _max?: NestedEnumUnitFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type usersCreateWithoutClientsInput = {
    email: string
    password_hash: string
    is_verified?: boolean
    invoices?: invoicesCreateNestedManyWithoutUsersInput
    products_services?: products_servicesCreateNestedManyWithoutUsersInput
    recurring_invoice?: recurring_invoiceCreateNestedManyWithoutUsersInput
    user_payment_method?: user_payment_methodCreateNestedManyWithoutUsersInput
    user_profiles?: user_profilesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutClientsInput = {
    id?: number
    email: string
    password_hash: string
    is_verified?: boolean
    invoices?: invoicesUncheckedCreateNestedManyWithoutUsersInput
    products_services?: products_servicesUncheckedCreateNestedManyWithoutUsersInput
    recurring_invoice?: recurring_invoiceUncheckedCreateNestedManyWithoutUsersInput
    user_payment_method?: user_payment_methodUncheckedCreateNestedManyWithoutUsersInput
    user_profiles?: user_profilesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutClientsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutClientsInput, usersUncheckedCreateWithoutClientsInput>
  }

  export type invoicesCreateWithoutClientsInput = {
    invoice_number: string
    start_date: Date | string
    due_date: Date | string
    notes?: string | null
    status?: $Enums.Status
    total: number
    is_deleted?: boolean
    payment_method: $Enums.PaymentMethod
    invoice_items?: invoice_itemsCreateNestedManyWithoutInvoicesInput
    users: usersCreateNestedOneWithoutInvoicesInput
    transaction?: transactionCreateNestedManyWithoutInvoicesInput
  }

  export type invoicesUncheckedCreateWithoutClientsInput = {
    id?: number
    user_id: number
    invoice_number: string
    start_date: Date | string
    due_date: Date | string
    notes?: string | null
    status?: $Enums.Status
    total: number
    is_deleted?: boolean
    payment_method: $Enums.PaymentMethod
    invoice_items?: invoice_itemsUncheckedCreateNestedManyWithoutInvoicesInput
    transaction?: transactionUncheckedCreateNestedManyWithoutInvoicesInput
  }

  export type invoicesCreateOrConnectWithoutClientsInput = {
    where: invoicesWhereUniqueInput
    create: XOR<invoicesCreateWithoutClientsInput, invoicesUncheckedCreateWithoutClientsInput>
  }

  export type invoicesCreateManyClientsInputEnvelope = {
    data: invoicesCreateManyClientsInput | invoicesCreateManyClientsInput[]
    skipDuplicates?: boolean
  }

  export type recurring_invoiceCreateWithoutClientsInput = {
    invoice_number: string
    start_date: Date | string
    due_date?: Date | string | null
    recurrence?: string
    notes?: string | null
    next_run: Date | string
    is_active?: boolean
    is_deleted?: boolean
    total: number
    users: usersCreateNestedOneWithoutRecurring_invoiceInput
    recurring_invoice_item?: recurring_invoice_itemCreateNestedManyWithoutRecurring_invoiceInput
  }

  export type recurring_invoiceUncheckedCreateWithoutClientsInput = {
    id?: number
    user_id: number
    invoice_number: string
    start_date: Date | string
    due_date?: Date | string | null
    recurrence?: string
    notes?: string | null
    next_run: Date | string
    is_active?: boolean
    is_deleted?: boolean
    total: number
    recurring_invoice_item?: recurring_invoice_itemUncheckedCreateNestedManyWithoutRecurring_invoiceInput
  }

  export type recurring_invoiceCreateOrConnectWithoutClientsInput = {
    where: recurring_invoiceWhereUniqueInput
    create: XOR<recurring_invoiceCreateWithoutClientsInput, recurring_invoiceUncheckedCreateWithoutClientsInput>
  }

  export type recurring_invoiceCreateManyClientsInputEnvelope = {
    data: recurring_invoiceCreateManyClientsInput | recurring_invoiceCreateManyClientsInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutClientsInput = {
    update: XOR<usersUpdateWithoutClientsInput, usersUncheckedUpdateWithoutClientsInput>
    create: XOR<usersCreateWithoutClientsInput, usersUncheckedCreateWithoutClientsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutClientsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutClientsInput, usersUncheckedUpdateWithoutClientsInput>
  }

  export type usersUpdateWithoutClientsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    invoices?: invoicesUpdateManyWithoutUsersNestedInput
    products_services?: products_servicesUpdateManyWithoutUsersNestedInput
    recurring_invoice?: recurring_invoiceUpdateManyWithoutUsersNestedInput
    user_payment_method?: user_payment_methodUpdateManyWithoutUsersNestedInput
    user_profiles?: user_profilesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutClientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    invoices?: invoicesUncheckedUpdateManyWithoutUsersNestedInput
    products_services?: products_servicesUncheckedUpdateManyWithoutUsersNestedInput
    recurring_invoice?: recurring_invoiceUncheckedUpdateManyWithoutUsersNestedInput
    user_payment_method?: user_payment_methodUncheckedUpdateManyWithoutUsersNestedInput
    user_profiles?: user_profilesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type invoicesUpsertWithWhereUniqueWithoutClientsInput = {
    where: invoicesWhereUniqueInput
    update: XOR<invoicesUpdateWithoutClientsInput, invoicesUncheckedUpdateWithoutClientsInput>
    create: XOR<invoicesCreateWithoutClientsInput, invoicesUncheckedCreateWithoutClientsInput>
  }

  export type invoicesUpdateWithWhereUniqueWithoutClientsInput = {
    where: invoicesWhereUniqueInput
    data: XOR<invoicesUpdateWithoutClientsInput, invoicesUncheckedUpdateWithoutClientsInput>
  }

  export type invoicesUpdateManyWithWhereWithoutClientsInput = {
    where: invoicesScalarWhereInput
    data: XOR<invoicesUpdateManyMutationInput, invoicesUncheckedUpdateManyWithoutClientsInput>
  }

  export type invoicesScalarWhereInput = {
    AND?: invoicesScalarWhereInput | invoicesScalarWhereInput[]
    OR?: invoicesScalarWhereInput[]
    NOT?: invoicesScalarWhereInput | invoicesScalarWhereInput[]
    id?: IntFilter<"invoices"> | number
    user_id?: IntFilter<"invoices"> | number
    client_id?: IntFilter<"invoices"> | number
    invoice_number?: StringFilter<"invoices"> | string
    start_date?: DateTimeFilter<"invoices"> | Date | string
    due_date?: DateTimeFilter<"invoices"> | Date | string
    notes?: StringNullableFilter<"invoices"> | string | null
    status?: EnumStatusFilter<"invoices"> | $Enums.Status
    total?: IntFilter<"invoices"> | number
    is_deleted?: BoolFilter<"invoices"> | boolean
    payment_method?: EnumPaymentMethodFilter<"invoices"> | $Enums.PaymentMethod
  }

  export type recurring_invoiceUpsertWithWhereUniqueWithoutClientsInput = {
    where: recurring_invoiceWhereUniqueInput
    update: XOR<recurring_invoiceUpdateWithoutClientsInput, recurring_invoiceUncheckedUpdateWithoutClientsInput>
    create: XOR<recurring_invoiceCreateWithoutClientsInput, recurring_invoiceUncheckedCreateWithoutClientsInput>
  }

  export type recurring_invoiceUpdateWithWhereUniqueWithoutClientsInput = {
    where: recurring_invoiceWhereUniqueInput
    data: XOR<recurring_invoiceUpdateWithoutClientsInput, recurring_invoiceUncheckedUpdateWithoutClientsInput>
  }

  export type recurring_invoiceUpdateManyWithWhereWithoutClientsInput = {
    where: recurring_invoiceScalarWhereInput
    data: XOR<recurring_invoiceUpdateManyMutationInput, recurring_invoiceUncheckedUpdateManyWithoutClientsInput>
  }

  export type recurring_invoiceScalarWhereInput = {
    AND?: recurring_invoiceScalarWhereInput | recurring_invoiceScalarWhereInput[]
    OR?: recurring_invoiceScalarWhereInput[]
    NOT?: recurring_invoiceScalarWhereInput | recurring_invoiceScalarWhereInput[]
    id?: IntFilter<"recurring_invoice"> | number
    user_id?: IntFilter<"recurring_invoice"> | number
    client_id?: IntFilter<"recurring_invoice"> | number
    invoice_number?: StringFilter<"recurring_invoice"> | string
    start_date?: DateTimeFilter<"recurring_invoice"> | Date | string
    due_date?: DateTimeNullableFilter<"recurring_invoice"> | Date | string | null
    recurrence?: StringFilter<"recurring_invoice"> | string
    notes?: StringNullableFilter<"recurring_invoice"> | string | null
    next_run?: DateTimeFilter<"recurring_invoice"> | Date | string
    is_active?: BoolFilter<"recurring_invoice"> | boolean
    is_deleted?: BoolFilter<"recurring_invoice"> | boolean
    total?: IntFilter<"recurring_invoice"> | number
  }

  export type invoicesCreateWithoutInvoice_itemsInput = {
    invoice_number: string
    start_date: Date | string
    due_date: Date | string
    notes?: string | null
    status?: $Enums.Status
    total: number
    is_deleted?: boolean
    payment_method: $Enums.PaymentMethod
    users: usersCreateNestedOneWithoutInvoicesInput
    clients: clientsCreateNestedOneWithoutInvoicesInput
    transaction?: transactionCreateNestedManyWithoutInvoicesInput
  }

  export type invoicesUncheckedCreateWithoutInvoice_itemsInput = {
    id?: number
    user_id: number
    client_id: number
    invoice_number: string
    start_date: Date | string
    due_date: Date | string
    notes?: string | null
    status?: $Enums.Status
    total: number
    is_deleted?: boolean
    payment_method: $Enums.PaymentMethod
    transaction?: transactionUncheckedCreateNestedManyWithoutInvoicesInput
  }

  export type invoicesCreateOrConnectWithoutInvoice_itemsInput = {
    where: invoicesWhereUniqueInput
    create: XOR<invoicesCreateWithoutInvoice_itemsInput, invoicesUncheckedCreateWithoutInvoice_itemsInput>
  }

  export type products_servicesCreateWithoutInvoice_itemsInput = {
    name: string
    description: string
    price: number
    is_deleted?: boolean
    type: $Enums.Type
    unit: $Enums.Unit
    users: usersCreateNestedOneWithoutProducts_servicesInput
    recurring_invoice_item?: recurring_invoice_itemCreateNestedManyWithoutProducts_servicesInput
  }

  export type products_servicesUncheckedCreateWithoutInvoice_itemsInput = {
    id?: number
    user_id: number
    name: string
    description: string
    price: number
    is_deleted?: boolean
    type: $Enums.Type
    unit: $Enums.Unit
    recurring_invoice_item?: recurring_invoice_itemUncheckedCreateNestedManyWithoutProducts_servicesInput
  }

  export type products_servicesCreateOrConnectWithoutInvoice_itemsInput = {
    where: products_servicesWhereUniqueInput
    create: XOR<products_servicesCreateWithoutInvoice_itemsInput, products_servicesUncheckedCreateWithoutInvoice_itemsInput>
  }

  export type invoicesUpsertWithoutInvoice_itemsInput = {
    update: XOR<invoicesUpdateWithoutInvoice_itemsInput, invoicesUncheckedUpdateWithoutInvoice_itemsInput>
    create: XOR<invoicesCreateWithoutInvoice_itemsInput, invoicesUncheckedCreateWithoutInvoice_itemsInput>
    where?: invoicesWhereInput
  }

  export type invoicesUpdateToOneWithWhereWithoutInvoice_itemsInput = {
    where?: invoicesWhereInput
    data: XOR<invoicesUpdateWithoutInvoice_itemsInput, invoicesUncheckedUpdateWithoutInvoice_itemsInput>
  }

  export type invoicesUpdateWithoutInvoice_itemsInput = {
    invoice_number?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    total?: IntFieldUpdateOperationsInput | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    users?: usersUpdateOneRequiredWithoutInvoicesNestedInput
    clients?: clientsUpdateOneRequiredWithoutInvoicesNestedInput
    transaction?: transactionUpdateManyWithoutInvoicesNestedInput
  }

  export type invoicesUncheckedUpdateWithoutInvoice_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    client_id?: IntFieldUpdateOperationsInput | number
    invoice_number?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    total?: IntFieldUpdateOperationsInput | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    transaction?: transactionUncheckedUpdateManyWithoutInvoicesNestedInput
  }

  export type products_servicesUpsertWithoutInvoice_itemsInput = {
    update: XOR<products_servicesUpdateWithoutInvoice_itemsInput, products_servicesUncheckedUpdateWithoutInvoice_itemsInput>
    create: XOR<products_servicesCreateWithoutInvoice_itemsInput, products_servicesUncheckedCreateWithoutInvoice_itemsInput>
    where?: products_servicesWhereInput
  }

  export type products_servicesUpdateToOneWithWhereWithoutInvoice_itemsInput = {
    where?: products_servicesWhereInput
    data: XOR<products_servicesUpdateWithoutInvoice_itemsInput, products_servicesUncheckedUpdateWithoutInvoice_itemsInput>
  }

  export type products_servicesUpdateWithoutInvoice_itemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
    users?: usersUpdateOneRequiredWithoutProducts_servicesNestedInput
    recurring_invoice_item?: recurring_invoice_itemUpdateManyWithoutProducts_servicesNestedInput
  }

  export type products_servicesUncheckedUpdateWithoutInvoice_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
    recurring_invoice_item?: recurring_invoice_itemUncheckedUpdateManyWithoutProducts_servicesNestedInput
  }

  export type invoice_itemsCreateWithoutInvoicesInput = {
    name_snapshot: string
    price_snapshot: number
    quantity: number
    total: number
    products_services: products_servicesCreateNestedOneWithoutInvoice_itemsInput
  }

  export type invoice_itemsUncheckedCreateWithoutInvoicesInput = {
    id?: number
    product_id: number
    name_snapshot: string
    price_snapshot: number
    quantity: number
    total: number
  }

  export type invoice_itemsCreateOrConnectWithoutInvoicesInput = {
    where: invoice_itemsWhereUniqueInput
    create: XOR<invoice_itemsCreateWithoutInvoicesInput, invoice_itemsUncheckedCreateWithoutInvoicesInput>
  }

  export type invoice_itemsCreateManyInvoicesInputEnvelope = {
    data: invoice_itemsCreateManyInvoicesInput | invoice_itemsCreateManyInvoicesInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutInvoicesInput = {
    email: string
    password_hash: string
    is_verified?: boolean
    clients?: clientsCreateNestedManyWithoutUsersInput
    products_services?: products_servicesCreateNestedManyWithoutUsersInput
    recurring_invoice?: recurring_invoiceCreateNestedManyWithoutUsersInput
    user_payment_method?: user_payment_methodCreateNestedManyWithoutUsersInput
    user_profiles?: user_profilesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutInvoicesInput = {
    id?: number
    email: string
    password_hash: string
    is_verified?: boolean
    clients?: clientsUncheckedCreateNestedManyWithoutUsersInput
    products_services?: products_servicesUncheckedCreateNestedManyWithoutUsersInput
    recurring_invoice?: recurring_invoiceUncheckedCreateNestedManyWithoutUsersInput
    user_payment_method?: user_payment_methodUncheckedCreateNestedManyWithoutUsersInput
    user_profiles?: user_profilesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutInvoicesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutInvoicesInput, usersUncheckedCreateWithoutInvoicesInput>
  }

  export type clientsCreateWithoutInvoicesInput = {
    name: string
    email: string
    phone: string
    address: string
    is_deleted?: boolean
    payment_ref: $Enums.PaymentMethod
    users: usersCreateNestedOneWithoutClientsInput
    recurring_invoice?: recurring_invoiceCreateNestedManyWithoutClientsInput
  }

  export type clientsUncheckedCreateWithoutInvoicesInput = {
    id?: number
    user_id: number
    name: string
    email: string
    phone: string
    address: string
    is_deleted?: boolean
    payment_ref: $Enums.PaymentMethod
    recurring_invoice?: recurring_invoiceUncheckedCreateNestedManyWithoutClientsInput
  }

  export type clientsCreateOrConnectWithoutInvoicesInput = {
    where: clientsWhereUniqueInput
    create: XOR<clientsCreateWithoutInvoicesInput, clientsUncheckedCreateWithoutInvoicesInput>
  }

  export type transactionCreateWithoutInvoicesInput = {
    created_at?: Date | string
    payment_method: $Enums.PaymentMethod
    payment_proof: string
  }

  export type transactionUncheckedCreateWithoutInvoicesInput = {
    id?: number
    created_at?: Date | string
    payment_method: $Enums.PaymentMethod
    payment_proof: string
  }

  export type transactionCreateOrConnectWithoutInvoicesInput = {
    where: transactionWhereUniqueInput
    create: XOR<transactionCreateWithoutInvoicesInput, transactionUncheckedCreateWithoutInvoicesInput>
  }

  export type transactionCreateManyInvoicesInputEnvelope = {
    data: transactionCreateManyInvoicesInput | transactionCreateManyInvoicesInput[]
    skipDuplicates?: boolean
  }

  export type invoice_itemsUpsertWithWhereUniqueWithoutInvoicesInput = {
    where: invoice_itemsWhereUniqueInput
    update: XOR<invoice_itemsUpdateWithoutInvoicesInput, invoice_itemsUncheckedUpdateWithoutInvoicesInput>
    create: XOR<invoice_itemsCreateWithoutInvoicesInput, invoice_itemsUncheckedCreateWithoutInvoicesInput>
  }

  export type invoice_itemsUpdateWithWhereUniqueWithoutInvoicesInput = {
    where: invoice_itemsWhereUniqueInput
    data: XOR<invoice_itemsUpdateWithoutInvoicesInput, invoice_itemsUncheckedUpdateWithoutInvoicesInput>
  }

  export type invoice_itemsUpdateManyWithWhereWithoutInvoicesInput = {
    where: invoice_itemsScalarWhereInput
    data: XOR<invoice_itemsUpdateManyMutationInput, invoice_itemsUncheckedUpdateManyWithoutInvoicesInput>
  }

  export type invoice_itemsScalarWhereInput = {
    AND?: invoice_itemsScalarWhereInput | invoice_itemsScalarWhereInput[]
    OR?: invoice_itemsScalarWhereInput[]
    NOT?: invoice_itemsScalarWhereInput | invoice_itemsScalarWhereInput[]
    id?: IntFilter<"invoice_items"> | number
    invoice_id?: IntFilter<"invoice_items"> | number
    product_id?: IntFilter<"invoice_items"> | number
    name_snapshot?: StringFilter<"invoice_items"> | string
    price_snapshot?: IntFilter<"invoice_items"> | number
    quantity?: IntFilter<"invoice_items"> | number
    total?: IntFilter<"invoice_items"> | number
  }

  export type usersUpsertWithoutInvoicesInput = {
    update: XOR<usersUpdateWithoutInvoicesInput, usersUncheckedUpdateWithoutInvoicesInput>
    create: XOR<usersCreateWithoutInvoicesInput, usersUncheckedCreateWithoutInvoicesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutInvoicesInput, usersUncheckedUpdateWithoutInvoicesInput>
  }

  export type usersUpdateWithoutInvoicesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    clients?: clientsUpdateManyWithoutUsersNestedInput
    products_services?: products_servicesUpdateManyWithoutUsersNestedInput
    recurring_invoice?: recurring_invoiceUpdateManyWithoutUsersNestedInput
    user_payment_method?: user_payment_methodUpdateManyWithoutUsersNestedInput
    user_profiles?: user_profilesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutInvoicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    clients?: clientsUncheckedUpdateManyWithoutUsersNestedInput
    products_services?: products_servicesUncheckedUpdateManyWithoutUsersNestedInput
    recurring_invoice?: recurring_invoiceUncheckedUpdateManyWithoutUsersNestedInput
    user_payment_method?: user_payment_methodUncheckedUpdateManyWithoutUsersNestedInput
    user_profiles?: user_profilesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type clientsUpsertWithoutInvoicesInput = {
    update: XOR<clientsUpdateWithoutInvoicesInput, clientsUncheckedUpdateWithoutInvoicesInput>
    create: XOR<clientsCreateWithoutInvoicesInput, clientsUncheckedCreateWithoutInvoicesInput>
    where?: clientsWhereInput
  }

  export type clientsUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: clientsWhereInput
    data: XOR<clientsUpdateWithoutInvoicesInput, clientsUncheckedUpdateWithoutInvoicesInput>
  }

  export type clientsUpdateWithoutInvoicesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    payment_ref?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    users?: usersUpdateOneRequiredWithoutClientsNestedInput
    recurring_invoice?: recurring_invoiceUpdateManyWithoutClientsNestedInput
  }

  export type clientsUncheckedUpdateWithoutInvoicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    payment_ref?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    recurring_invoice?: recurring_invoiceUncheckedUpdateManyWithoutClientsNestedInput
  }

  export type transactionUpsertWithWhereUniqueWithoutInvoicesInput = {
    where: transactionWhereUniqueInput
    update: XOR<transactionUpdateWithoutInvoicesInput, transactionUncheckedUpdateWithoutInvoicesInput>
    create: XOR<transactionCreateWithoutInvoicesInput, transactionUncheckedCreateWithoutInvoicesInput>
  }

  export type transactionUpdateWithWhereUniqueWithoutInvoicesInput = {
    where: transactionWhereUniqueInput
    data: XOR<transactionUpdateWithoutInvoicesInput, transactionUncheckedUpdateWithoutInvoicesInput>
  }

  export type transactionUpdateManyWithWhereWithoutInvoicesInput = {
    where: transactionScalarWhereInput
    data: XOR<transactionUpdateManyMutationInput, transactionUncheckedUpdateManyWithoutInvoicesInput>
  }

  export type transactionScalarWhereInput = {
    AND?: transactionScalarWhereInput | transactionScalarWhereInput[]
    OR?: transactionScalarWhereInput[]
    NOT?: transactionScalarWhereInput | transactionScalarWhereInput[]
    id?: IntFilter<"transaction"> | number
    created_at?: DateTimeFilter<"transaction"> | Date | string
    invoice_id?: IntFilter<"transaction"> | number
    payment_method?: EnumPaymentMethodFilter<"transaction"> | $Enums.PaymentMethod
    payment_proof?: StringFilter<"transaction"> | string
  }

  export type invoice_itemsCreateWithoutProducts_servicesInput = {
    name_snapshot: string
    price_snapshot: number
    quantity: number
    total: number
    invoices: invoicesCreateNestedOneWithoutInvoice_itemsInput
  }

  export type invoice_itemsUncheckedCreateWithoutProducts_servicesInput = {
    id?: number
    invoice_id: number
    name_snapshot: string
    price_snapshot: number
    quantity: number
    total: number
  }

  export type invoice_itemsCreateOrConnectWithoutProducts_servicesInput = {
    where: invoice_itemsWhereUniqueInput
    create: XOR<invoice_itemsCreateWithoutProducts_servicesInput, invoice_itemsUncheckedCreateWithoutProducts_servicesInput>
  }

  export type invoice_itemsCreateManyProducts_servicesInputEnvelope = {
    data: invoice_itemsCreateManyProducts_servicesInput | invoice_itemsCreateManyProducts_servicesInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutProducts_servicesInput = {
    email: string
    password_hash: string
    is_verified?: boolean
    clients?: clientsCreateNestedManyWithoutUsersInput
    invoices?: invoicesCreateNestedManyWithoutUsersInput
    recurring_invoice?: recurring_invoiceCreateNestedManyWithoutUsersInput
    user_payment_method?: user_payment_methodCreateNestedManyWithoutUsersInput
    user_profiles?: user_profilesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutProducts_servicesInput = {
    id?: number
    email: string
    password_hash: string
    is_verified?: boolean
    clients?: clientsUncheckedCreateNestedManyWithoutUsersInput
    invoices?: invoicesUncheckedCreateNestedManyWithoutUsersInput
    recurring_invoice?: recurring_invoiceUncheckedCreateNestedManyWithoutUsersInput
    user_payment_method?: user_payment_methodUncheckedCreateNestedManyWithoutUsersInput
    user_profiles?: user_profilesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutProducts_servicesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutProducts_servicesInput, usersUncheckedCreateWithoutProducts_servicesInput>
  }

  export type recurring_invoice_itemCreateWithoutProducts_servicesInput = {
    name_snapshot: string
    price_snapshot: string
    quantity: number
    total: number
    recurring_invoice: recurring_invoiceCreateNestedOneWithoutRecurring_invoice_itemInput
  }

  export type recurring_invoice_itemUncheckedCreateWithoutProducts_servicesInput = {
    id?: number
    recurring_invoice_id: number
    name_snapshot: string
    price_snapshot: string
    quantity: number
    total: number
  }

  export type recurring_invoice_itemCreateOrConnectWithoutProducts_servicesInput = {
    where: recurring_invoice_itemWhereUniqueInput
    create: XOR<recurring_invoice_itemCreateWithoutProducts_servicesInput, recurring_invoice_itemUncheckedCreateWithoutProducts_servicesInput>
  }

  export type recurring_invoice_itemCreateManyProducts_servicesInputEnvelope = {
    data: recurring_invoice_itemCreateManyProducts_servicesInput | recurring_invoice_itemCreateManyProducts_servicesInput[]
    skipDuplicates?: boolean
  }

  export type invoice_itemsUpsertWithWhereUniqueWithoutProducts_servicesInput = {
    where: invoice_itemsWhereUniqueInput
    update: XOR<invoice_itemsUpdateWithoutProducts_servicesInput, invoice_itemsUncheckedUpdateWithoutProducts_servicesInput>
    create: XOR<invoice_itemsCreateWithoutProducts_servicesInput, invoice_itemsUncheckedCreateWithoutProducts_servicesInput>
  }

  export type invoice_itemsUpdateWithWhereUniqueWithoutProducts_servicesInput = {
    where: invoice_itemsWhereUniqueInput
    data: XOR<invoice_itemsUpdateWithoutProducts_servicesInput, invoice_itemsUncheckedUpdateWithoutProducts_servicesInput>
  }

  export type invoice_itemsUpdateManyWithWhereWithoutProducts_servicesInput = {
    where: invoice_itemsScalarWhereInput
    data: XOR<invoice_itemsUpdateManyMutationInput, invoice_itemsUncheckedUpdateManyWithoutProducts_servicesInput>
  }

  export type usersUpsertWithoutProducts_servicesInput = {
    update: XOR<usersUpdateWithoutProducts_servicesInput, usersUncheckedUpdateWithoutProducts_servicesInput>
    create: XOR<usersCreateWithoutProducts_servicesInput, usersUncheckedCreateWithoutProducts_servicesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutProducts_servicesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutProducts_servicesInput, usersUncheckedUpdateWithoutProducts_servicesInput>
  }

  export type usersUpdateWithoutProducts_servicesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    clients?: clientsUpdateManyWithoutUsersNestedInput
    invoices?: invoicesUpdateManyWithoutUsersNestedInput
    recurring_invoice?: recurring_invoiceUpdateManyWithoutUsersNestedInput
    user_payment_method?: user_payment_methodUpdateManyWithoutUsersNestedInput
    user_profiles?: user_profilesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutProducts_servicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    clients?: clientsUncheckedUpdateManyWithoutUsersNestedInput
    invoices?: invoicesUncheckedUpdateManyWithoutUsersNestedInput
    recurring_invoice?: recurring_invoiceUncheckedUpdateManyWithoutUsersNestedInput
    user_payment_method?: user_payment_methodUncheckedUpdateManyWithoutUsersNestedInput
    user_profiles?: user_profilesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type recurring_invoice_itemUpsertWithWhereUniqueWithoutProducts_servicesInput = {
    where: recurring_invoice_itemWhereUniqueInput
    update: XOR<recurring_invoice_itemUpdateWithoutProducts_servicesInput, recurring_invoice_itemUncheckedUpdateWithoutProducts_servicesInput>
    create: XOR<recurring_invoice_itemCreateWithoutProducts_servicesInput, recurring_invoice_itemUncheckedCreateWithoutProducts_servicesInput>
  }

  export type recurring_invoice_itemUpdateWithWhereUniqueWithoutProducts_servicesInput = {
    where: recurring_invoice_itemWhereUniqueInput
    data: XOR<recurring_invoice_itemUpdateWithoutProducts_servicesInput, recurring_invoice_itemUncheckedUpdateWithoutProducts_servicesInput>
  }

  export type recurring_invoice_itemUpdateManyWithWhereWithoutProducts_servicesInput = {
    where: recurring_invoice_itemScalarWhereInput
    data: XOR<recurring_invoice_itemUpdateManyMutationInput, recurring_invoice_itemUncheckedUpdateManyWithoutProducts_servicesInput>
  }

  export type recurring_invoice_itemScalarWhereInput = {
    AND?: recurring_invoice_itemScalarWhereInput | recurring_invoice_itemScalarWhereInput[]
    OR?: recurring_invoice_itemScalarWhereInput[]
    NOT?: recurring_invoice_itemScalarWhereInput | recurring_invoice_itemScalarWhereInput[]
    id?: IntFilter<"recurring_invoice_item"> | number
    recurring_invoice_id?: IntFilter<"recurring_invoice_item"> | number
    product_id?: IntFilter<"recurring_invoice_item"> | number
    name_snapshot?: StringFilter<"recurring_invoice_item"> | string
    price_snapshot?: StringFilter<"recurring_invoice_item"> | string
    quantity?: IntFilter<"recurring_invoice_item"> | number
    total?: IntFilter<"recurring_invoice_item"> | number
  }

  export type usersCreateWithoutUser_profilesInput = {
    email: string
    password_hash: string
    is_verified?: boolean
    clients?: clientsCreateNestedManyWithoutUsersInput
    invoices?: invoicesCreateNestedManyWithoutUsersInput
    products_services?: products_servicesCreateNestedManyWithoutUsersInput
    recurring_invoice?: recurring_invoiceCreateNestedManyWithoutUsersInput
    user_payment_method?: user_payment_methodCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutUser_profilesInput = {
    id?: number
    email: string
    password_hash: string
    is_verified?: boolean
    clients?: clientsUncheckedCreateNestedManyWithoutUsersInput
    invoices?: invoicesUncheckedCreateNestedManyWithoutUsersInput
    products_services?: products_servicesUncheckedCreateNestedManyWithoutUsersInput
    recurring_invoice?: recurring_invoiceUncheckedCreateNestedManyWithoutUsersInput
    user_payment_method?: user_payment_methodUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutUser_profilesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_profilesInput, usersUncheckedCreateWithoutUser_profilesInput>
  }

  export type usersUpsertWithoutUser_profilesInput = {
    update: XOR<usersUpdateWithoutUser_profilesInput, usersUncheckedUpdateWithoutUser_profilesInput>
    create: XOR<usersCreateWithoutUser_profilesInput, usersUncheckedCreateWithoutUser_profilesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUser_profilesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUser_profilesInput, usersUncheckedUpdateWithoutUser_profilesInput>
  }

  export type usersUpdateWithoutUser_profilesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    clients?: clientsUpdateManyWithoutUsersNestedInput
    invoices?: invoicesUpdateManyWithoutUsersNestedInput
    products_services?: products_servicesUpdateManyWithoutUsersNestedInput
    recurring_invoice?: recurring_invoiceUpdateManyWithoutUsersNestedInput
    user_payment_method?: user_payment_methodUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutUser_profilesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    clients?: clientsUncheckedUpdateManyWithoutUsersNestedInput
    invoices?: invoicesUncheckedUpdateManyWithoutUsersNestedInput
    products_services?: products_servicesUncheckedUpdateManyWithoutUsersNestedInput
    recurring_invoice?: recurring_invoiceUncheckedUpdateManyWithoutUsersNestedInput
    user_payment_method?: user_payment_methodUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type clientsCreateWithoutUsersInput = {
    name: string
    email: string
    phone: string
    address: string
    is_deleted?: boolean
    payment_ref: $Enums.PaymentMethod
    invoices?: invoicesCreateNestedManyWithoutClientsInput
    recurring_invoice?: recurring_invoiceCreateNestedManyWithoutClientsInput
  }

  export type clientsUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    email: string
    phone: string
    address: string
    is_deleted?: boolean
    payment_ref: $Enums.PaymentMethod
    invoices?: invoicesUncheckedCreateNestedManyWithoutClientsInput
    recurring_invoice?: recurring_invoiceUncheckedCreateNestedManyWithoutClientsInput
  }

  export type clientsCreateOrConnectWithoutUsersInput = {
    where: clientsWhereUniqueInput
    create: XOR<clientsCreateWithoutUsersInput, clientsUncheckedCreateWithoutUsersInput>
  }

  export type clientsCreateManyUsersInputEnvelope = {
    data: clientsCreateManyUsersInput | clientsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type invoicesCreateWithoutUsersInput = {
    invoice_number: string
    start_date: Date | string
    due_date: Date | string
    notes?: string | null
    status?: $Enums.Status
    total: number
    is_deleted?: boolean
    payment_method: $Enums.PaymentMethod
    invoice_items?: invoice_itemsCreateNestedManyWithoutInvoicesInput
    clients: clientsCreateNestedOneWithoutInvoicesInput
    transaction?: transactionCreateNestedManyWithoutInvoicesInput
  }

  export type invoicesUncheckedCreateWithoutUsersInput = {
    id?: number
    client_id: number
    invoice_number: string
    start_date: Date | string
    due_date: Date | string
    notes?: string | null
    status?: $Enums.Status
    total: number
    is_deleted?: boolean
    payment_method: $Enums.PaymentMethod
    invoice_items?: invoice_itemsUncheckedCreateNestedManyWithoutInvoicesInput
    transaction?: transactionUncheckedCreateNestedManyWithoutInvoicesInput
  }

  export type invoicesCreateOrConnectWithoutUsersInput = {
    where: invoicesWhereUniqueInput
    create: XOR<invoicesCreateWithoutUsersInput, invoicesUncheckedCreateWithoutUsersInput>
  }

  export type invoicesCreateManyUsersInputEnvelope = {
    data: invoicesCreateManyUsersInput | invoicesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type products_servicesCreateWithoutUsersInput = {
    name: string
    description: string
    price: number
    is_deleted?: boolean
    type: $Enums.Type
    unit: $Enums.Unit
    invoice_items?: invoice_itemsCreateNestedManyWithoutProducts_servicesInput
    recurring_invoice_item?: recurring_invoice_itemCreateNestedManyWithoutProducts_servicesInput
  }

  export type products_servicesUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    description: string
    price: number
    is_deleted?: boolean
    type: $Enums.Type
    unit: $Enums.Unit
    invoice_items?: invoice_itemsUncheckedCreateNestedManyWithoutProducts_servicesInput
    recurring_invoice_item?: recurring_invoice_itemUncheckedCreateNestedManyWithoutProducts_servicesInput
  }

  export type products_servicesCreateOrConnectWithoutUsersInput = {
    where: products_servicesWhereUniqueInput
    create: XOR<products_servicesCreateWithoutUsersInput, products_servicesUncheckedCreateWithoutUsersInput>
  }

  export type products_servicesCreateManyUsersInputEnvelope = {
    data: products_servicesCreateManyUsersInput | products_servicesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type recurring_invoiceCreateWithoutUsersInput = {
    invoice_number: string
    start_date: Date | string
    due_date?: Date | string | null
    recurrence?: string
    notes?: string | null
    next_run: Date | string
    is_active?: boolean
    is_deleted?: boolean
    total: number
    clients: clientsCreateNestedOneWithoutRecurring_invoiceInput
    recurring_invoice_item?: recurring_invoice_itemCreateNestedManyWithoutRecurring_invoiceInput
  }

  export type recurring_invoiceUncheckedCreateWithoutUsersInput = {
    id?: number
    client_id: number
    invoice_number: string
    start_date: Date | string
    due_date?: Date | string | null
    recurrence?: string
    notes?: string | null
    next_run: Date | string
    is_active?: boolean
    is_deleted?: boolean
    total: number
    recurring_invoice_item?: recurring_invoice_itemUncheckedCreateNestedManyWithoutRecurring_invoiceInput
  }

  export type recurring_invoiceCreateOrConnectWithoutUsersInput = {
    where: recurring_invoiceWhereUniqueInput
    create: XOR<recurring_invoiceCreateWithoutUsersInput, recurring_invoiceUncheckedCreateWithoutUsersInput>
  }

  export type recurring_invoiceCreateManyUsersInputEnvelope = {
    data: recurring_invoiceCreateManyUsersInput | recurring_invoiceCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type user_payment_methodCreateWithoutUsersInput = {
    payment_method: $Enums.PaymentMethod
    account_name: string
    account_number: string
    qris_image_url?: string | null
    is_active?: boolean
  }

  export type user_payment_methodUncheckedCreateWithoutUsersInput = {
    id?: number
    payment_method: $Enums.PaymentMethod
    account_name: string
    account_number: string
    qris_image_url?: string | null
    is_active?: boolean
  }

  export type user_payment_methodCreateOrConnectWithoutUsersInput = {
    where: user_payment_methodWhereUniqueInput
    create: XOR<user_payment_methodCreateWithoutUsersInput, user_payment_methodUncheckedCreateWithoutUsersInput>
  }

  export type user_payment_methodCreateManyUsersInputEnvelope = {
    data: user_payment_methodCreateManyUsersInput | user_payment_methodCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type user_profilesCreateWithoutUsersInput = {
    first_name: string
    last_name: string
    phone?: string | null
    profile_img?: string | null
  }

  export type user_profilesUncheckedCreateWithoutUsersInput = {
    id?: number
    first_name: string
    last_name: string
    phone?: string | null
    profile_img?: string | null
  }

  export type user_profilesCreateOrConnectWithoutUsersInput = {
    where: user_profilesWhereUniqueInput
    create: XOR<user_profilesCreateWithoutUsersInput, user_profilesUncheckedCreateWithoutUsersInput>
  }

  export type user_profilesCreateManyUsersInputEnvelope = {
    data: user_profilesCreateManyUsersInput | user_profilesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type clientsUpsertWithWhereUniqueWithoutUsersInput = {
    where: clientsWhereUniqueInput
    update: XOR<clientsUpdateWithoutUsersInput, clientsUncheckedUpdateWithoutUsersInput>
    create: XOR<clientsCreateWithoutUsersInput, clientsUncheckedCreateWithoutUsersInput>
  }

  export type clientsUpdateWithWhereUniqueWithoutUsersInput = {
    where: clientsWhereUniqueInput
    data: XOR<clientsUpdateWithoutUsersInput, clientsUncheckedUpdateWithoutUsersInput>
  }

  export type clientsUpdateManyWithWhereWithoutUsersInput = {
    where: clientsScalarWhereInput
    data: XOR<clientsUpdateManyMutationInput, clientsUncheckedUpdateManyWithoutUsersInput>
  }

  export type clientsScalarWhereInput = {
    AND?: clientsScalarWhereInput | clientsScalarWhereInput[]
    OR?: clientsScalarWhereInput[]
    NOT?: clientsScalarWhereInput | clientsScalarWhereInput[]
    id?: IntFilter<"clients"> | number
    user_id?: IntFilter<"clients"> | number
    name?: StringFilter<"clients"> | string
    email?: StringFilter<"clients"> | string
    phone?: StringFilter<"clients"> | string
    address?: StringFilter<"clients"> | string
    is_deleted?: BoolFilter<"clients"> | boolean
    payment_ref?: EnumPaymentMethodFilter<"clients"> | $Enums.PaymentMethod
  }

  export type invoicesUpsertWithWhereUniqueWithoutUsersInput = {
    where: invoicesWhereUniqueInput
    update: XOR<invoicesUpdateWithoutUsersInput, invoicesUncheckedUpdateWithoutUsersInput>
    create: XOR<invoicesCreateWithoutUsersInput, invoicesUncheckedCreateWithoutUsersInput>
  }

  export type invoicesUpdateWithWhereUniqueWithoutUsersInput = {
    where: invoicesWhereUniqueInput
    data: XOR<invoicesUpdateWithoutUsersInput, invoicesUncheckedUpdateWithoutUsersInput>
  }

  export type invoicesUpdateManyWithWhereWithoutUsersInput = {
    where: invoicesScalarWhereInput
    data: XOR<invoicesUpdateManyMutationInput, invoicesUncheckedUpdateManyWithoutUsersInput>
  }

  export type products_servicesUpsertWithWhereUniqueWithoutUsersInput = {
    where: products_servicesWhereUniqueInput
    update: XOR<products_servicesUpdateWithoutUsersInput, products_servicesUncheckedUpdateWithoutUsersInput>
    create: XOR<products_servicesCreateWithoutUsersInput, products_servicesUncheckedCreateWithoutUsersInput>
  }

  export type products_servicesUpdateWithWhereUniqueWithoutUsersInput = {
    where: products_servicesWhereUniqueInput
    data: XOR<products_servicesUpdateWithoutUsersInput, products_servicesUncheckedUpdateWithoutUsersInput>
  }

  export type products_servicesUpdateManyWithWhereWithoutUsersInput = {
    where: products_servicesScalarWhereInput
    data: XOR<products_servicesUpdateManyMutationInput, products_servicesUncheckedUpdateManyWithoutUsersInput>
  }

  export type products_servicesScalarWhereInput = {
    AND?: products_servicesScalarWhereInput | products_servicesScalarWhereInput[]
    OR?: products_servicesScalarWhereInput[]
    NOT?: products_servicesScalarWhereInput | products_servicesScalarWhereInput[]
    id?: IntFilter<"products_services"> | number
    user_id?: IntFilter<"products_services"> | number
    name?: StringFilter<"products_services"> | string
    description?: StringFilter<"products_services"> | string
    price?: IntFilter<"products_services"> | number
    is_deleted?: BoolFilter<"products_services"> | boolean
    type?: EnumTypeFilter<"products_services"> | $Enums.Type
    unit?: EnumUnitFilter<"products_services"> | $Enums.Unit
  }

  export type recurring_invoiceUpsertWithWhereUniqueWithoutUsersInput = {
    where: recurring_invoiceWhereUniqueInput
    update: XOR<recurring_invoiceUpdateWithoutUsersInput, recurring_invoiceUncheckedUpdateWithoutUsersInput>
    create: XOR<recurring_invoiceCreateWithoutUsersInput, recurring_invoiceUncheckedCreateWithoutUsersInput>
  }

  export type recurring_invoiceUpdateWithWhereUniqueWithoutUsersInput = {
    where: recurring_invoiceWhereUniqueInput
    data: XOR<recurring_invoiceUpdateWithoutUsersInput, recurring_invoiceUncheckedUpdateWithoutUsersInput>
  }

  export type recurring_invoiceUpdateManyWithWhereWithoutUsersInput = {
    where: recurring_invoiceScalarWhereInput
    data: XOR<recurring_invoiceUpdateManyMutationInput, recurring_invoiceUncheckedUpdateManyWithoutUsersInput>
  }

  export type user_payment_methodUpsertWithWhereUniqueWithoutUsersInput = {
    where: user_payment_methodWhereUniqueInput
    update: XOR<user_payment_methodUpdateWithoutUsersInput, user_payment_methodUncheckedUpdateWithoutUsersInput>
    create: XOR<user_payment_methodCreateWithoutUsersInput, user_payment_methodUncheckedCreateWithoutUsersInput>
  }

  export type user_payment_methodUpdateWithWhereUniqueWithoutUsersInput = {
    where: user_payment_methodWhereUniqueInput
    data: XOR<user_payment_methodUpdateWithoutUsersInput, user_payment_methodUncheckedUpdateWithoutUsersInput>
  }

  export type user_payment_methodUpdateManyWithWhereWithoutUsersInput = {
    where: user_payment_methodScalarWhereInput
    data: XOR<user_payment_methodUpdateManyMutationInput, user_payment_methodUncheckedUpdateManyWithoutUsersInput>
  }

  export type user_payment_methodScalarWhereInput = {
    AND?: user_payment_methodScalarWhereInput | user_payment_methodScalarWhereInput[]
    OR?: user_payment_methodScalarWhereInput[]
    NOT?: user_payment_methodScalarWhereInput | user_payment_methodScalarWhereInput[]
    id?: IntFilter<"user_payment_method"> | number
    user_id?: IntFilter<"user_payment_method"> | number
    payment_method?: EnumPaymentMethodFilter<"user_payment_method"> | $Enums.PaymentMethod
    account_name?: StringFilter<"user_payment_method"> | string
    account_number?: StringFilter<"user_payment_method"> | string
    qris_image_url?: StringNullableFilter<"user_payment_method"> | string | null
    is_active?: BoolFilter<"user_payment_method"> | boolean
  }

  export type user_profilesUpsertWithWhereUniqueWithoutUsersInput = {
    where: user_profilesWhereUniqueInput
    update: XOR<user_profilesUpdateWithoutUsersInput, user_profilesUncheckedUpdateWithoutUsersInput>
    create: XOR<user_profilesCreateWithoutUsersInput, user_profilesUncheckedCreateWithoutUsersInput>
  }

  export type user_profilesUpdateWithWhereUniqueWithoutUsersInput = {
    where: user_profilesWhereUniqueInput
    data: XOR<user_profilesUpdateWithoutUsersInput, user_profilesUncheckedUpdateWithoutUsersInput>
  }

  export type user_profilesUpdateManyWithWhereWithoutUsersInput = {
    where: user_profilesScalarWhereInput
    data: XOR<user_profilesUpdateManyMutationInput, user_profilesUncheckedUpdateManyWithoutUsersInput>
  }

  export type user_profilesScalarWhereInput = {
    AND?: user_profilesScalarWhereInput | user_profilesScalarWhereInput[]
    OR?: user_profilesScalarWhereInput[]
    NOT?: user_profilesScalarWhereInput | user_profilesScalarWhereInput[]
    id?: IntFilter<"user_profiles"> | number
    user_id?: IntFilter<"user_profiles"> | number
    first_name?: StringFilter<"user_profiles"> | string
    last_name?: StringFilter<"user_profiles"> | string
    phone?: StringNullableFilter<"user_profiles"> | string | null
    profile_img?: StringNullableFilter<"user_profiles"> | string | null
  }

  export type clientsCreateWithoutRecurring_invoiceInput = {
    name: string
    email: string
    phone: string
    address: string
    is_deleted?: boolean
    payment_ref: $Enums.PaymentMethod
    users: usersCreateNestedOneWithoutClientsInput
    invoices?: invoicesCreateNestedManyWithoutClientsInput
  }

  export type clientsUncheckedCreateWithoutRecurring_invoiceInput = {
    id?: number
    user_id: number
    name: string
    email: string
    phone: string
    address: string
    is_deleted?: boolean
    payment_ref: $Enums.PaymentMethod
    invoices?: invoicesUncheckedCreateNestedManyWithoutClientsInput
  }

  export type clientsCreateOrConnectWithoutRecurring_invoiceInput = {
    where: clientsWhereUniqueInput
    create: XOR<clientsCreateWithoutRecurring_invoiceInput, clientsUncheckedCreateWithoutRecurring_invoiceInput>
  }

  export type usersCreateWithoutRecurring_invoiceInput = {
    email: string
    password_hash: string
    is_verified?: boolean
    clients?: clientsCreateNestedManyWithoutUsersInput
    invoices?: invoicesCreateNestedManyWithoutUsersInput
    products_services?: products_servicesCreateNestedManyWithoutUsersInput
    user_payment_method?: user_payment_methodCreateNestedManyWithoutUsersInput
    user_profiles?: user_profilesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutRecurring_invoiceInput = {
    id?: number
    email: string
    password_hash: string
    is_verified?: boolean
    clients?: clientsUncheckedCreateNestedManyWithoutUsersInput
    invoices?: invoicesUncheckedCreateNestedManyWithoutUsersInput
    products_services?: products_servicesUncheckedCreateNestedManyWithoutUsersInput
    user_payment_method?: user_payment_methodUncheckedCreateNestedManyWithoutUsersInput
    user_profiles?: user_profilesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutRecurring_invoiceInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutRecurring_invoiceInput, usersUncheckedCreateWithoutRecurring_invoiceInput>
  }

  export type recurring_invoice_itemCreateWithoutRecurring_invoiceInput = {
    name_snapshot: string
    price_snapshot: string
    quantity: number
    total: number
    products_services: products_servicesCreateNestedOneWithoutRecurring_invoice_itemInput
  }

  export type recurring_invoice_itemUncheckedCreateWithoutRecurring_invoiceInput = {
    id?: number
    product_id: number
    name_snapshot: string
    price_snapshot: string
    quantity: number
    total: number
  }

  export type recurring_invoice_itemCreateOrConnectWithoutRecurring_invoiceInput = {
    where: recurring_invoice_itemWhereUniqueInput
    create: XOR<recurring_invoice_itemCreateWithoutRecurring_invoiceInput, recurring_invoice_itemUncheckedCreateWithoutRecurring_invoiceInput>
  }

  export type recurring_invoice_itemCreateManyRecurring_invoiceInputEnvelope = {
    data: recurring_invoice_itemCreateManyRecurring_invoiceInput | recurring_invoice_itemCreateManyRecurring_invoiceInput[]
    skipDuplicates?: boolean
  }

  export type clientsUpsertWithoutRecurring_invoiceInput = {
    update: XOR<clientsUpdateWithoutRecurring_invoiceInput, clientsUncheckedUpdateWithoutRecurring_invoiceInput>
    create: XOR<clientsCreateWithoutRecurring_invoiceInput, clientsUncheckedCreateWithoutRecurring_invoiceInput>
    where?: clientsWhereInput
  }

  export type clientsUpdateToOneWithWhereWithoutRecurring_invoiceInput = {
    where?: clientsWhereInput
    data: XOR<clientsUpdateWithoutRecurring_invoiceInput, clientsUncheckedUpdateWithoutRecurring_invoiceInput>
  }

  export type clientsUpdateWithoutRecurring_invoiceInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    payment_ref?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    users?: usersUpdateOneRequiredWithoutClientsNestedInput
    invoices?: invoicesUpdateManyWithoutClientsNestedInput
  }

  export type clientsUncheckedUpdateWithoutRecurring_invoiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    payment_ref?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    invoices?: invoicesUncheckedUpdateManyWithoutClientsNestedInput
  }

  export type usersUpsertWithoutRecurring_invoiceInput = {
    update: XOR<usersUpdateWithoutRecurring_invoiceInput, usersUncheckedUpdateWithoutRecurring_invoiceInput>
    create: XOR<usersCreateWithoutRecurring_invoiceInput, usersUncheckedCreateWithoutRecurring_invoiceInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutRecurring_invoiceInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutRecurring_invoiceInput, usersUncheckedUpdateWithoutRecurring_invoiceInput>
  }

  export type usersUpdateWithoutRecurring_invoiceInput = {
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    clients?: clientsUpdateManyWithoutUsersNestedInput
    invoices?: invoicesUpdateManyWithoutUsersNestedInput
    products_services?: products_servicesUpdateManyWithoutUsersNestedInput
    user_payment_method?: user_payment_methodUpdateManyWithoutUsersNestedInput
    user_profiles?: user_profilesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutRecurring_invoiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    clients?: clientsUncheckedUpdateManyWithoutUsersNestedInput
    invoices?: invoicesUncheckedUpdateManyWithoutUsersNestedInput
    products_services?: products_servicesUncheckedUpdateManyWithoutUsersNestedInput
    user_payment_method?: user_payment_methodUncheckedUpdateManyWithoutUsersNestedInput
    user_profiles?: user_profilesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type recurring_invoice_itemUpsertWithWhereUniqueWithoutRecurring_invoiceInput = {
    where: recurring_invoice_itemWhereUniqueInput
    update: XOR<recurring_invoice_itemUpdateWithoutRecurring_invoiceInput, recurring_invoice_itemUncheckedUpdateWithoutRecurring_invoiceInput>
    create: XOR<recurring_invoice_itemCreateWithoutRecurring_invoiceInput, recurring_invoice_itemUncheckedCreateWithoutRecurring_invoiceInput>
  }

  export type recurring_invoice_itemUpdateWithWhereUniqueWithoutRecurring_invoiceInput = {
    where: recurring_invoice_itemWhereUniqueInput
    data: XOR<recurring_invoice_itemUpdateWithoutRecurring_invoiceInput, recurring_invoice_itemUncheckedUpdateWithoutRecurring_invoiceInput>
  }

  export type recurring_invoice_itemUpdateManyWithWhereWithoutRecurring_invoiceInput = {
    where: recurring_invoice_itemScalarWhereInput
    data: XOR<recurring_invoice_itemUpdateManyMutationInput, recurring_invoice_itemUncheckedUpdateManyWithoutRecurring_invoiceInput>
  }

  export type products_servicesCreateWithoutRecurring_invoice_itemInput = {
    name: string
    description: string
    price: number
    is_deleted?: boolean
    type: $Enums.Type
    unit: $Enums.Unit
    invoice_items?: invoice_itemsCreateNestedManyWithoutProducts_servicesInput
    users: usersCreateNestedOneWithoutProducts_servicesInput
  }

  export type products_servicesUncheckedCreateWithoutRecurring_invoice_itemInput = {
    id?: number
    user_id: number
    name: string
    description: string
    price: number
    is_deleted?: boolean
    type: $Enums.Type
    unit: $Enums.Unit
    invoice_items?: invoice_itemsUncheckedCreateNestedManyWithoutProducts_servicesInput
  }

  export type products_servicesCreateOrConnectWithoutRecurring_invoice_itemInput = {
    where: products_servicesWhereUniqueInput
    create: XOR<products_servicesCreateWithoutRecurring_invoice_itemInput, products_servicesUncheckedCreateWithoutRecurring_invoice_itemInput>
  }

  export type recurring_invoiceCreateWithoutRecurring_invoice_itemInput = {
    invoice_number: string
    start_date: Date | string
    due_date?: Date | string | null
    recurrence?: string
    notes?: string | null
    next_run: Date | string
    is_active?: boolean
    is_deleted?: boolean
    total: number
    clients: clientsCreateNestedOneWithoutRecurring_invoiceInput
    users: usersCreateNestedOneWithoutRecurring_invoiceInput
  }

  export type recurring_invoiceUncheckedCreateWithoutRecurring_invoice_itemInput = {
    id?: number
    user_id: number
    client_id: number
    invoice_number: string
    start_date: Date | string
    due_date?: Date | string | null
    recurrence?: string
    notes?: string | null
    next_run: Date | string
    is_active?: boolean
    is_deleted?: boolean
    total: number
  }

  export type recurring_invoiceCreateOrConnectWithoutRecurring_invoice_itemInput = {
    where: recurring_invoiceWhereUniqueInput
    create: XOR<recurring_invoiceCreateWithoutRecurring_invoice_itemInput, recurring_invoiceUncheckedCreateWithoutRecurring_invoice_itemInput>
  }

  export type products_servicesUpsertWithoutRecurring_invoice_itemInput = {
    update: XOR<products_servicesUpdateWithoutRecurring_invoice_itemInput, products_servicesUncheckedUpdateWithoutRecurring_invoice_itemInput>
    create: XOR<products_servicesCreateWithoutRecurring_invoice_itemInput, products_servicesUncheckedCreateWithoutRecurring_invoice_itemInput>
    where?: products_servicesWhereInput
  }

  export type products_servicesUpdateToOneWithWhereWithoutRecurring_invoice_itemInput = {
    where?: products_servicesWhereInput
    data: XOR<products_servicesUpdateWithoutRecurring_invoice_itemInput, products_servicesUncheckedUpdateWithoutRecurring_invoice_itemInput>
  }

  export type products_servicesUpdateWithoutRecurring_invoice_itemInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
    invoice_items?: invoice_itemsUpdateManyWithoutProducts_servicesNestedInput
    users?: usersUpdateOneRequiredWithoutProducts_servicesNestedInput
  }

  export type products_servicesUncheckedUpdateWithoutRecurring_invoice_itemInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
    invoice_items?: invoice_itemsUncheckedUpdateManyWithoutProducts_servicesNestedInput
  }

  export type recurring_invoiceUpsertWithoutRecurring_invoice_itemInput = {
    update: XOR<recurring_invoiceUpdateWithoutRecurring_invoice_itemInput, recurring_invoiceUncheckedUpdateWithoutRecurring_invoice_itemInput>
    create: XOR<recurring_invoiceCreateWithoutRecurring_invoice_itemInput, recurring_invoiceUncheckedCreateWithoutRecurring_invoice_itemInput>
    where?: recurring_invoiceWhereInput
  }

  export type recurring_invoiceUpdateToOneWithWhereWithoutRecurring_invoice_itemInput = {
    where?: recurring_invoiceWhereInput
    data: XOR<recurring_invoiceUpdateWithoutRecurring_invoice_itemInput, recurring_invoiceUncheckedUpdateWithoutRecurring_invoice_itemInput>
  }

  export type recurring_invoiceUpdateWithoutRecurring_invoice_itemInput = {
    invoice_number?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recurrence?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    next_run?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    total?: IntFieldUpdateOperationsInput | number
    clients?: clientsUpdateOneRequiredWithoutRecurring_invoiceNestedInput
    users?: usersUpdateOneRequiredWithoutRecurring_invoiceNestedInput
  }

  export type recurring_invoiceUncheckedUpdateWithoutRecurring_invoice_itemInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    client_id?: IntFieldUpdateOperationsInput | number
    invoice_number?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recurrence?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    next_run?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    total?: IntFieldUpdateOperationsInput | number
  }

  export type usersCreateWithoutUser_payment_methodInput = {
    email: string
    password_hash: string
    is_verified?: boolean
    clients?: clientsCreateNestedManyWithoutUsersInput
    invoices?: invoicesCreateNestedManyWithoutUsersInput
    products_services?: products_servicesCreateNestedManyWithoutUsersInput
    recurring_invoice?: recurring_invoiceCreateNestedManyWithoutUsersInput
    user_profiles?: user_profilesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutUser_payment_methodInput = {
    id?: number
    email: string
    password_hash: string
    is_verified?: boolean
    clients?: clientsUncheckedCreateNestedManyWithoutUsersInput
    invoices?: invoicesUncheckedCreateNestedManyWithoutUsersInput
    products_services?: products_servicesUncheckedCreateNestedManyWithoutUsersInput
    recurring_invoice?: recurring_invoiceUncheckedCreateNestedManyWithoutUsersInput
    user_profiles?: user_profilesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutUser_payment_methodInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_payment_methodInput, usersUncheckedCreateWithoutUser_payment_methodInput>
  }

  export type usersUpsertWithoutUser_payment_methodInput = {
    update: XOR<usersUpdateWithoutUser_payment_methodInput, usersUncheckedUpdateWithoutUser_payment_methodInput>
    create: XOR<usersCreateWithoutUser_payment_methodInput, usersUncheckedCreateWithoutUser_payment_methodInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUser_payment_methodInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUser_payment_methodInput, usersUncheckedUpdateWithoutUser_payment_methodInput>
  }

  export type usersUpdateWithoutUser_payment_methodInput = {
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    clients?: clientsUpdateManyWithoutUsersNestedInput
    invoices?: invoicesUpdateManyWithoutUsersNestedInput
    products_services?: products_servicesUpdateManyWithoutUsersNestedInput
    recurring_invoice?: recurring_invoiceUpdateManyWithoutUsersNestedInput
    user_profiles?: user_profilesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutUser_payment_methodInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    clients?: clientsUncheckedUpdateManyWithoutUsersNestedInput
    invoices?: invoicesUncheckedUpdateManyWithoutUsersNestedInput
    products_services?: products_servicesUncheckedUpdateManyWithoutUsersNestedInput
    recurring_invoice?: recurring_invoiceUncheckedUpdateManyWithoutUsersNestedInput
    user_profiles?: user_profilesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type invoicesCreateWithoutTransactionInput = {
    invoice_number: string
    start_date: Date | string
    due_date: Date | string
    notes?: string | null
    status?: $Enums.Status
    total: number
    is_deleted?: boolean
    payment_method: $Enums.PaymentMethod
    invoice_items?: invoice_itemsCreateNestedManyWithoutInvoicesInput
    users: usersCreateNestedOneWithoutInvoicesInput
    clients: clientsCreateNestedOneWithoutInvoicesInput
  }

  export type invoicesUncheckedCreateWithoutTransactionInput = {
    id?: number
    user_id: number
    client_id: number
    invoice_number: string
    start_date: Date | string
    due_date: Date | string
    notes?: string | null
    status?: $Enums.Status
    total: number
    is_deleted?: boolean
    payment_method: $Enums.PaymentMethod
    invoice_items?: invoice_itemsUncheckedCreateNestedManyWithoutInvoicesInput
  }

  export type invoicesCreateOrConnectWithoutTransactionInput = {
    where: invoicesWhereUniqueInput
    create: XOR<invoicesCreateWithoutTransactionInput, invoicesUncheckedCreateWithoutTransactionInput>
  }

  export type invoicesUpsertWithoutTransactionInput = {
    update: XOR<invoicesUpdateWithoutTransactionInput, invoicesUncheckedUpdateWithoutTransactionInput>
    create: XOR<invoicesCreateWithoutTransactionInput, invoicesUncheckedCreateWithoutTransactionInput>
    where?: invoicesWhereInput
  }

  export type invoicesUpdateToOneWithWhereWithoutTransactionInput = {
    where?: invoicesWhereInput
    data: XOR<invoicesUpdateWithoutTransactionInput, invoicesUncheckedUpdateWithoutTransactionInput>
  }

  export type invoicesUpdateWithoutTransactionInput = {
    invoice_number?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    total?: IntFieldUpdateOperationsInput | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    invoice_items?: invoice_itemsUpdateManyWithoutInvoicesNestedInput
    users?: usersUpdateOneRequiredWithoutInvoicesNestedInput
    clients?: clientsUpdateOneRequiredWithoutInvoicesNestedInput
  }

  export type invoicesUncheckedUpdateWithoutTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    client_id?: IntFieldUpdateOperationsInput | number
    invoice_number?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    total?: IntFieldUpdateOperationsInput | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    invoice_items?: invoice_itemsUncheckedUpdateManyWithoutInvoicesNestedInput
  }

  export type invoicesCreateManyClientsInput = {
    id?: number
    user_id: number
    invoice_number: string
    start_date: Date | string
    due_date: Date | string
    notes?: string | null
    status?: $Enums.Status
    total: number
    is_deleted?: boolean
    payment_method: $Enums.PaymentMethod
  }

  export type recurring_invoiceCreateManyClientsInput = {
    id?: number
    user_id: number
    invoice_number: string
    start_date: Date | string
    due_date?: Date | string | null
    recurrence?: string
    notes?: string | null
    next_run: Date | string
    is_active?: boolean
    is_deleted?: boolean
    total: number
  }

  export type invoicesUpdateWithoutClientsInput = {
    invoice_number?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    total?: IntFieldUpdateOperationsInput | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    invoice_items?: invoice_itemsUpdateManyWithoutInvoicesNestedInput
    users?: usersUpdateOneRequiredWithoutInvoicesNestedInput
    transaction?: transactionUpdateManyWithoutInvoicesNestedInput
  }

  export type invoicesUncheckedUpdateWithoutClientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    invoice_number?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    total?: IntFieldUpdateOperationsInput | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    invoice_items?: invoice_itemsUncheckedUpdateManyWithoutInvoicesNestedInput
    transaction?: transactionUncheckedUpdateManyWithoutInvoicesNestedInput
  }

  export type invoicesUncheckedUpdateManyWithoutClientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    invoice_number?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    total?: IntFieldUpdateOperationsInput | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
  }

  export type recurring_invoiceUpdateWithoutClientsInput = {
    invoice_number?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recurrence?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    next_run?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    total?: IntFieldUpdateOperationsInput | number
    users?: usersUpdateOneRequiredWithoutRecurring_invoiceNestedInput
    recurring_invoice_item?: recurring_invoice_itemUpdateManyWithoutRecurring_invoiceNestedInput
  }

  export type recurring_invoiceUncheckedUpdateWithoutClientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    invoice_number?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recurrence?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    next_run?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    total?: IntFieldUpdateOperationsInput | number
    recurring_invoice_item?: recurring_invoice_itemUncheckedUpdateManyWithoutRecurring_invoiceNestedInput
  }

  export type recurring_invoiceUncheckedUpdateManyWithoutClientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    invoice_number?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recurrence?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    next_run?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    total?: IntFieldUpdateOperationsInput | number
  }

  export type invoice_itemsCreateManyInvoicesInput = {
    id?: number
    product_id: number
    name_snapshot: string
    price_snapshot: number
    quantity: number
    total: number
  }

  export type transactionCreateManyInvoicesInput = {
    id?: number
    created_at?: Date | string
    payment_method: $Enums.PaymentMethod
    payment_proof: string
  }

  export type invoice_itemsUpdateWithoutInvoicesInput = {
    name_snapshot?: StringFieldUpdateOperationsInput | string
    price_snapshot?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    products_services?: products_servicesUpdateOneRequiredWithoutInvoice_itemsNestedInput
  }

  export type invoice_itemsUncheckedUpdateWithoutInvoicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    name_snapshot?: StringFieldUpdateOperationsInput | string
    price_snapshot?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
  }

  export type invoice_itemsUncheckedUpdateManyWithoutInvoicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    name_snapshot?: StringFieldUpdateOperationsInput | string
    price_snapshot?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
  }

  export type transactionUpdateWithoutInvoicesInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    payment_proof?: StringFieldUpdateOperationsInput | string
  }

  export type transactionUncheckedUpdateWithoutInvoicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    payment_proof?: StringFieldUpdateOperationsInput | string
  }

  export type transactionUncheckedUpdateManyWithoutInvoicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    payment_proof?: StringFieldUpdateOperationsInput | string
  }

  export type invoice_itemsCreateManyProducts_servicesInput = {
    id?: number
    invoice_id: number
    name_snapshot: string
    price_snapshot: number
    quantity: number
    total: number
  }

  export type recurring_invoice_itemCreateManyProducts_servicesInput = {
    id?: number
    recurring_invoice_id: number
    name_snapshot: string
    price_snapshot: string
    quantity: number
    total: number
  }

  export type invoice_itemsUpdateWithoutProducts_servicesInput = {
    name_snapshot?: StringFieldUpdateOperationsInput | string
    price_snapshot?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    invoices?: invoicesUpdateOneRequiredWithoutInvoice_itemsNestedInput
  }

  export type invoice_itemsUncheckedUpdateWithoutProducts_servicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    invoice_id?: IntFieldUpdateOperationsInput | number
    name_snapshot?: StringFieldUpdateOperationsInput | string
    price_snapshot?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
  }

  export type invoice_itemsUncheckedUpdateManyWithoutProducts_servicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    invoice_id?: IntFieldUpdateOperationsInput | number
    name_snapshot?: StringFieldUpdateOperationsInput | string
    price_snapshot?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
  }

  export type recurring_invoice_itemUpdateWithoutProducts_servicesInput = {
    name_snapshot?: StringFieldUpdateOperationsInput | string
    price_snapshot?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    recurring_invoice?: recurring_invoiceUpdateOneRequiredWithoutRecurring_invoice_itemNestedInput
  }

  export type recurring_invoice_itemUncheckedUpdateWithoutProducts_servicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    recurring_invoice_id?: IntFieldUpdateOperationsInput | number
    name_snapshot?: StringFieldUpdateOperationsInput | string
    price_snapshot?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
  }

  export type recurring_invoice_itemUncheckedUpdateManyWithoutProducts_servicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    recurring_invoice_id?: IntFieldUpdateOperationsInput | number
    name_snapshot?: StringFieldUpdateOperationsInput | string
    price_snapshot?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
  }

  export type clientsCreateManyUsersInput = {
    id?: number
    name: string
    email: string
    phone: string
    address: string
    is_deleted?: boolean
    payment_ref: $Enums.PaymentMethod
  }

  export type invoicesCreateManyUsersInput = {
    id?: number
    client_id: number
    invoice_number: string
    start_date: Date | string
    due_date: Date | string
    notes?: string | null
    status?: $Enums.Status
    total: number
    is_deleted?: boolean
    payment_method: $Enums.PaymentMethod
  }

  export type products_servicesCreateManyUsersInput = {
    id?: number
    name: string
    description: string
    price: number
    is_deleted?: boolean
    type: $Enums.Type
    unit: $Enums.Unit
  }

  export type recurring_invoiceCreateManyUsersInput = {
    id?: number
    client_id: number
    invoice_number: string
    start_date: Date | string
    due_date?: Date | string | null
    recurrence?: string
    notes?: string | null
    next_run: Date | string
    is_active?: boolean
    is_deleted?: boolean
    total: number
  }

  export type user_payment_methodCreateManyUsersInput = {
    id?: number
    payment_method: $Enums.PaymentMethod
    account_name: string
    account_number: string
    qris_image_url?: string | null
    is_active?: boolean
  }

  export type user_profilesCreateManyUsersInput = {
    id?: number
    first_name: string
    last_name: string
    phone?: string | null
    profile_img?: string | null
  }

  export type clientsUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    payment_ref?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    invoices?: invoicesUpdateManyWithoutClientsNestedInput
    recurring_invoice?: recurring_invoiceUpdateManyWithoutClientsNestedInput
  }

  export type clientsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    payment_ref?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    invoices?: invoicesUncheckedUpdateManyWithoutClientsNestedInput
    recurring_invoice?: recurring_invoiceUncheckedUpdateManyWithoutClientsNestedInput
  }

  export type clientsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    payment_ref?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
  }

  export type invoicesUpdateWithoutUsersInput = {
    invoice_number?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    total?: IntFieldUpdateOperationsInput | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    invoice_items?: invoice_itemsUpdateManyWithoutInvoicesNestedInput
    clients?: clientsUpdateOneRequiredWithoutInvoicesNestedInput
    transaction?: transactionUpdateManyWithoutInvoicesNestedInput
  }

  export type invoicesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_id?: IntFieldUpdateOperationsInput | number
    invoice_number?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    total?: IntFieldUpdateOperationsInput | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    invoice_items?: invoice_itemsUncheckedUpdateManyWithoutInvoicesNestedInput
    transaction?: transactionUncheckedUpdateManyWithoutInvoicesNestedInput
  }

  export type invoicesUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_id?: IntFieldUpdateOperationsInput | number
    invoice_number?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    total?: IntFieldUpdateOperationsInput | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
  }

  export type products_servicesUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
    invoice_items?: invoice_itemsUpdateManyWithoutProducts_servicesNestedInput
    recurring_invoice_item?: recurring_invoice_itemUpdateManyWithoutProducts_servicesNestedInput
  }

  export type products_servicesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
    invoice_items?: invoice_itemsUncheckedUpdateManyWithoutProducts_servicesNestedInput
    recurring_invoice_item?: recurring_invoice_itemUncheckedUpdateManyWithoutProducts_servicesNestedInput
  }

  export type products_servicesUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
  }

  export type recurring_invoiceUpdateWithoutUsersInput = {
    invoice_number?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recurrence?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    next_run?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    total?: IntFieldUpdateOperationsInput | number
    clients?: clientsUpdateOneRequiredWithoutRecurring_invoiceNestedInput
    recurring_invoice_item?: recurring_invoice_itemUpdateManyWithoutRecurring_invoiceNestedInput
  }

  export type recurring_invoiceUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_id?: IntFieldUpdateOperationsInput | number
    invoice_number?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recurrence?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    next_run?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    total?: IntFieldUpdateOperationsInput | number
    recurring_invoice_item?: recurring_invoice_itemUncheckedUpdateManyWithoutRecurring_invoiceNestedInput
  }

  export type recurring_invoiceUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_id?: IntFieldUpdateOperationsInput | number
    invoice_number?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recurrence?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    next_run?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    total?: IntFieldUpdateOperationsInput | number
  }

  export type user_payment_methodUpdateWithoutUsersInput = {
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    account_name?: StringFieldUpdateOperationsInput | string
    account_number?: StringFieldUpdateOperationsInput | string
    qris_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type user_payment_methodUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    account_name?: StringFieldUpdateOperationsInput | string
    account_number?: StringFieldUpdateOperationsInput | string
    qris_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type user_payment_methodUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    account_name?: StringFieldUpdateOperationsInput | string
    account_number?: StringFieldUpdateOperationsInput | string
    qris_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type user_profilesUpdateWithoutUsersInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_img?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_profilesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_img?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_profilesUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_img?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type recurring_invoice_itemCreateManyRecurring_invoiceInput = {
    id?: number
    product_id: number
    name_snapshot: string
    price_snapshot: string
    quantity: number
    total: number
  }

  export type recurring_invoice_itemUpdateWithoutRecurring_invoiceInput = {
    name_snapshot?: StringFieldUpdateOperationsInput | string
    price_snapshot?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    products_services?: products_servicesUpdateOneRequiredWithoutRecurring_invoice_itemNestedInput
  }

  export type recurring_invoice_itemUncheckedUpdateWithoutRecurring_invoiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    name_snapshot?: StringFieldUpdateOperationsInput | string
    price_snapshot?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
  }

  export type recurring_invoice_itemUncheckedUpdateManyWithoutRecurring_invoiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    name_snapshot?: StringFieldUpdateOperationsInput | string
    price_snapshot?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}