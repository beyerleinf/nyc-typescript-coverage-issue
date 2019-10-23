export interface MyTestedInterface {
  property: string;
}

/* tslint:disable-next-line no-any */
export function isMyTestedInterface(arg: any): arg is MyTestedInterface {
  return arg !== null && arg !== undefined && typeof arg.property === 'string';
}
