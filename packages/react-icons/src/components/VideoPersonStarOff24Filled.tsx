import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const VideoPersonStarOff24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l.98.98A2.25 2.25 0 002 6.25v11.5C2 19 3 20 4.25 20h7.25a6.48 6.48 0 01.52-6H8.61c-.9.08-1.61.83-1.61 1.75v2.75H4.25a.75.75 0 01-.75-.75V6.25c0-.41.34-.75.75-.75h.19L9 10.06A3 3 0 0011.94 13l1.18 1.18a5.5 5.5 0 007.72 7.7.75.75 0 00.94-1.16L3.28 2.22zM19.74 20.8a.56.56 0 01-.78.08l-1.46-1.1-1.46 1.1c-.46.35-1.07-.12-.9-.68l.56-1.79-1.46-1.1c-.46-.35-.22-1.1.35-1.1h.56l4.59 4.59zM10.55 7.37l4.08 4.08a3 3 0 00-4.08-4.08zm5 4.99l1.7 1.7c.29-.15.68-.03.8.36l.21.66 1.13 1.13h1.02c.57 0 .8.75.35 1.1l-.15.11 2.03 2.04A5.49 5.49 0 0017.5 12c-.69 0-1.35.13-1.96.36zM7.17 4l1.5 1.5h11.07c.41 0 .75.34.75.75v5.48c.55.29 1.05.65 1.5 1.08V6.25C22 5.01 20.99 4 19.75 4H7.18z" fill={primaryFill} /></svg>;
};

export default VideoPersonStarOff24Filled;