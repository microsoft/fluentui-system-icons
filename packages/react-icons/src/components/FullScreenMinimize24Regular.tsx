import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FullScreenMinimize24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 3.75a.75.75 0 00-1.5 0v2.5c0 .41-.34.75-.75.75h-2.5a.75.75 0 000 1.5h2.5c1.24 0 2.25-1 2.25-2.25v-2.5z" fill={primaryFill} /><path d="M8.5 20.25a.75.75 0 01-1.5 0v-2.5a.75.75 0 00-.75-.75h-2.5a.75.75 0 010-1.5h2.5c1.24 0 2.25 1 2.25 2.25v2.5z" fill={primaryFill} /><path d="M16.25 3a.75.75 0 00-.75.75v2.5c0 1.24 1 2.25 2.25 2.25h2.5a.75.75 0 000-1.5h-2.5a.75.75 0 01-.75-.75v-2.5a.75.75 0 00-.75-.75z" fill={primaryFill} /><path d="M15.5 20.25a.75.75 0 001.5 0v-2.5c0-.41.34-.75.75-.75h2.5a.75.75 0 000-1.5h-2.5c-1.24 0-2.25 1-2.25 2.25v2.5z" fill={primaryFill} /></svg>;
};

export default FullScreenMinimize24Regular;