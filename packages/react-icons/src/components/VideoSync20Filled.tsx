import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const VideoSync20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 4A2.5 2.5 0 0113 6.5v7a2.5 2.5 0 01-2.2 2.48A5.5 5.5 0 002 10.26V6.5A2.5 2.5 0 014.5 4h6z" fill={primaryFill} /><path d="M14 12.08V7.93l2.77-2.31a.75.75 0 011.23.57v7.67c0 .64-.75.99-1.24.57L14 12.08z" fill={primaryFill} /><path d="M10 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-6.5-3a.5.5 0 00-.5.5v1.5c0 .28.22.5.5.5H5a.5.5 0 000-1h-.47a1.99 1.99 0 012.38.34.5.5 0 00.71-.71A3 3 0 004 12.15V12a.5.5 0 00-.5-.5zm.88 5.53A3 3 0 007 16.85V17a.5.5 0 001 0v-1.5a.5.5 0 00-.5-.5H6a.5.5 0 000 1h.47a1.99 1.99 0 01-2.38-.34.5.5 0 00-.71.71 3 3 0 001 .66z" fill={primaryFill} /></svg>;
};

export default VideoSync20Filled;