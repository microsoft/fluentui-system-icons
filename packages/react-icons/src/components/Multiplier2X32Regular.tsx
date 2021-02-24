import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Multiplier2X32Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.39 12.7v-.04l.07-.2c.06-.17.17-.4.34-.63.31-.42.89-.9 2.07-.9 1.07 0 1.73.35 2.09.81.37.48.58 1.24.39 2.36-.1.62-.42.99-.92 1.31-.42.27-.88.46-1.45.7l-.76.3a6.7 6.7 0 00-2.6 1.78 5.8 5.8 0 00-1.22 3.88 1 1 0 001 1h6.93a1 1 0 100-2H9.48a3.2 3.2 0 01.68-1.6 4.76 4.76 0 011.86-1.22l.55-.23c.63-.25 1.35-.55 1.94-.92a3.8 3.8 0 001.81-2.66 4.89 4.89 0 00-.8-3.93 4.48 4.48 0 00-3.65-1.58 4.37 4.37 0 00-4.44 3.37l-.01.04v.02s-.09.5 0 0a1 1 0 001.97.35v-.01zm10.32 3.6a1 1 0 00-1.42 1.4l1.8 1.8-1.8 1.8a1 1 0 101.42 1.4l1.79-1.79 1.8 1.8a1 1 0 001.4-1.42l-1.79-1.79 1.8-1.8a1 1 0 00-1.42-1.4l-1.79 1.79-1.8-1.8z" fill={primaryFill} /></svg>;
};

export default Multiplier2X32Regular;