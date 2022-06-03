//
// Props
//
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

export interface ProfilePropType {}

export interface ContactPropType {}

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
  data: guestBookType;
}

//
// redux
//
export interface ReduxStateType {
  getGuestBook: getGusetBookStateType;
  setAnimation: setAnimationStateType;
}

export interface getGusetBookStateType {
  data: Array<guestBookType>;
  error: any;
  loading: boolean;
}

export interface setAnimationStateType {
  animationStart: boolean;
  animationEnd: boolean;
}

export interface getGuestBookStartType {
  type: string;
}

export interface getGuestBookSuccessType {
  type: string;
  data: guestBookType;
}

export interface getGuestBookFailType {
  type: string;
  error: any;
}

export interface setStartType {
  type: string;
}

//
// etc
//
export interface guestBookType {
  id: string;
  name: string;
  pw: string;
  content: string;
  createdAt: number;
}
