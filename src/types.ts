export interface HeaderPropType {
  title: any;
  classes?: Array<string>;
}

export interface ScrollDownPropType {
  draggable?: boolean;
}

export interface BeefPropType {}

export interface ThreePropType {
  setMouseOver: Function;
  scrollProgress: number;
  draggable: boolean;
}

export interface ThreeBeefPropType {
  scrollProgress: number;
}

export interface BeefModelPropType {
  refProp: any;
  position?: [number, number, number];
  rotation?: [number, number, number];
  setMouseOver: Function;
  setBeefActive: Function;
  beefActive: boolean;
}
