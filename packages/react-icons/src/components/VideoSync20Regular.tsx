import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const VideoSync20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 4A2.5 2.5 0 002 6.5v3.76c.3-.26.64-.48 1-.66V6.5C3 5.67 3.67 5 4.5 5h7c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-.52c-.03.34-.1.68-.19 1h.71a2.5 2.5 0 002.5-2.5v-1l2.4 1.8a1 1 0 001.6-.8v-7a1 1 0 00-1.6-.8L14 7.5v-1A2.5 2.5 0 0011.5 4h-7zM14 8.75l3-2.25v7l-3-2.25v-2.5z" fill={primaryFill} /><path d="M10 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-6.5-3a.5.5 0 00-.5.5v1.5c0 .28.22.5.5.5H5a.5.5 0 000-1h-.47a1.99 1.99 0 012.38.34.5.5 0 00.71-.71A3 3 0 004 12.15V12a.5.5 0 00-.5-.5zm.88 5.53A3 3 0 007 16.85V17a.5.5 0 001 0v-1.5a.5.5 0 00-.5-.5H6a.5.5 0 000 1h.47a1.99 1.99 0 01-2.38-.34.5.5 0 00-.71.71 3 3 0 001 .66z" fill={primaryFill} /></svg>;
};

export default VideoSync20Regular;