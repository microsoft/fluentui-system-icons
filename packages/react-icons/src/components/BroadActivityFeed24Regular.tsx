import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BroadActivityFeed24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.25 14c.97 0 1.76.79 1.76 1.75v3.5c0 .97-.79 1.75-1.76 1.75h-5.5C2.78 21 2 20.22 2 19.25v-3.5C2 14.8 2.78 14 3.75 14h5.5zm11 0c.97 0 1.75.79 1.75 1.75v3.5c0 .97-.78 1.75-1.75 1.75h-5.5c-.97 0-1.76-.78-1.76-1.75v-3.5c0-.96.79-1.75 1.75-1.75h5.51zm-11 1.5h-5.5a.25.25 0 00-.25.25v3.5c0 .14.11.25.25.25h5.5c.14 0 .25-.1.25-.25v-3.5a.25.25 0 00-.25-.25zm11 0h-5.5a.25.25 0 00-.26.25v3.5c0 .14.12.25.25.25h5.51c.14 0 .25-.1.25-.25v-3.5a.25.25 0 00-.25-.25zm0-12.5c.97 0 1.75.78 1.75 1.75v5.5c0 .97-.78 1.75-1.75 1.75H3.75C2.78 12 2 11.22 2 10.25v-5.5c0-.92.7-1.67 1.6-1.74L3.76 3h16.5zm0 1.5H3.69a.25.25 0 00-.19.25v5.5c0 .14.11.25.25.25h16.5c.14 0 .25-.11.25-.25v-5.5a.25.25 0 00-.25-.25z" fill={primaryFill} /></svg>;
};

export default BroadActivityFeed24Regular;