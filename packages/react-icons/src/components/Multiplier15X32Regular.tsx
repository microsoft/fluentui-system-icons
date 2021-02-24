import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Multiplier15X32Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.25 9a1 1 0 00-1 .9l-.5 5.26a1 1 0 001.13 1.08l3.28-.43a2.73 2.73 0 11.36 5.44h-.53c-.9 0-1.77-.38-2.39-1.04l-.37-.4a1 1 0 00-1.46 1.37l.37.4a5.26 5.26 0 003.85 1.67h.53a4.73 4.73 0 10-.62-9.42l-2.04.27.3-3.1h5.34a1 1 0 100-2h-6.25zm10.46 7.3a1 1 0 00-1.42 1.4l1.8 1.8-1.8 1.8a1 1 0 001.42 1.4l1.79-1.79 1.8 1.8a1 1 0 101.4-1.42l-1.79-1.79 1.8-1.8a1 1 0 00-1.42-1.4l-1.79 1.79-1.8-1.8zM11 22a1 1 0 11-2 0 1 1 0 012 0zM7.33 9.05A1 1 0 018 10v12a1 1 0 11-2 0v-9.58c-.55.47-1.22.98-1.99 1.44A1 1 0 113 12.14 13.27 13.27 0 006.2 9.4a1 1 0 011.12-.34z" fill={primaryFill} /></svg>;
};

export default Multiplier15X32Regular;