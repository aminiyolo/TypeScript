{
  type Check<T> = T extends string ? boolean : number;
  type Type = Check<string>; // It is a boolean type

  type TypeName<T> = T extends string
    ? "string"
    : T extends number
    ? "number"
    : T extends boolean
    ? "boolean"
    : T extends undefined
    ? "undefined"
    : T extends Function
    ? "function"
    : "object";

  type Type0 = TypeName<string>; // 'string' type
  type Type1 = TypeName<boolean>; // 'boolean' type
  type Type2 = TypeName<() => void>; // 'function' type
}
