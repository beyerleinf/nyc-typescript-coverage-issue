export interface MyUntestedInterface {
  property: string;
}

/* tslint:disable-next-line no-any */
export function isMyUntestedInterface(arg: any): arg is MyUntestedInterface {
  return arg !== null && arg !== undefined && typeof arg.property === 'string';
}
