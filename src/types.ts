// Props

export interface TutorialPropType {
  setTutorialActive: Function;
}

export interface HeaderPropType {
  title: any;
  subTitle?: any;
  classes?: Array<string>;
}

export interface ButtonPropType {
  text?: string;
  onClick?: any;
  classes?: Array<string>;
  icon?: string;
  href?: string;
}

export interface NavPropType {
  setTutorialActive: Function;
}

export interface ToolbarPropType {}

export interface ScrollDownPropType {}

export interface SkillPropType {
  skill: string;
}

export interface HomePropType {}

export interface FrontPropType {}

export interface ThreeBeefPropType {}

export interface ThreePropType {
  setMouseOver: Function;
}

export interface BeefModelPropType {
  refProp: any;
  position?: [number, number, number];
  rotation?: [number, number, number];
  setMouseOver: Function;
  setBeefActive: Function;
  beefActive: boolean;
}

export interface PlaceReviewPropType {}

export interface MetaBeefPropType {}

export interface CubePropType {}

export interface GuestBookPropType {
  data: GuestBookType;
}

// redux
export interface ReduxStateType {
  data: Array<GuestBookType>;
  error: any;
  loading: boolean;
}

// etc
export interface GuestBookType {
  id: string;
  name: string;
  pw: string;
  content: string;
  createdAt: number;
}
