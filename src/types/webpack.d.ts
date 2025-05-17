declare const require: {
    context: (
      directory: string,
      useSubdirectories: boolean,
      regExp: RegExp
    ) => {
      keys: () => string[];
      (key: string): string;
    };
};

declare interface NodeRequire {
  context(
    path: string,
    deep?: boolean,
    filter?: RegExp
  ): {
    keys: () => string[];
    <T>(id: string): T;
  };
}