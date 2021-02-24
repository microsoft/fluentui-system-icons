import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const VideoOff24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l1.57 1.57A3.25 3.25 0 002 7.75v8.5c0 1.8 1.46 3.25 3.25 3.25h8.5c1.27 0 2.37-.73 2.9-1.79l4.07 4.07a.75.75 0 001.06-1.06L3.28 2.22zm12.2 14.32A1.75 1.75 0 0113.75 18h-8.5c-.97 0-1.75-.78-1.75-1.75v-8.5c0-.87.63-1.59 1.46-1.73l10.52 10.52z" fill={primaryFill} /><path d="M15.5 12.32V7.75c0-.97-.78-1.75-1.75-1.75H9.18l-1.5-1.5h6.07c1.8 0 3.25 1.46 3.25 3.25v.17l3.86-2.31a.75.75 0 011.14.64v11.5c0 .3-.17.54-.4.67l-1.1-1.1V7.57L17 9.67v4.15l-1.5-1.5z" fill={primaryFill} /></svg>;
};

export default VideoOff24Regular;