import { ReactElement, ReactFragment, Ref } from "react";

export interface HeaderPropType {
  title: any;
  classes?: Array<string>;
  animationStartAt?: number;
  animationDirection?: string;
}

export interface NavPropType {}

export interface ToolbarPropType {
  HomeRef: any;
  setScrollMod: Function;
  scrollToThreeBeefProgress: number;
}

export interface ScrollDownPropType {
  scrollMod?: boolean;
}

export interface FrontPropType {}

export interface ThreeBeefPropType {
  scrollToThreeBeefProgress: number;
  scrollMod: boolean;
  setScrollMod: Function;
}

export interface ThreePropType {
  setMouseOver: Function;
  scrollToThreeBeefProgress: number;
  scrollMod: boolean;
}

export interface BeefModelPropType {
  refProp: any;
  position?: [number, number, number];
  rotation?: [number, number, number];
  setMouseOver: Function;
  setBeefActive: Function;
  beefActive: boolean;
}

export interface PlaceReviewPropType {
  animationStartAt: number;
}

export interface MetaBeefPropType {
  animationStartAt: number;
}
