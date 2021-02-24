import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Timer324Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.5 13.5a8.5 8.5 0 10-5.67 8.02c-.22-.71.03-1.51.67-1.96a7 7 0 113.48-5.5c.53.08 1.02.25 1.45.5.05-.35.07-.7.07-1.06zm-7.76-4.85a.75.75 0 00-1.49.1v4.6a.75.75 0 001.5-.1v-4.6zm6.49-3.48l-.08-.06a.75.75 0 00-.88 1.22l1.16.96.08.06a.75.75 0 00.88-1.21l-1.16-.97zM15 3.25a.75.75 0 00-.75-.75h-4.6a.75.75 0 00.1 1.5h4.6a.75.75 0 00.65-.75zm4.37 14.48c-.13.13-.4.27-.87.27a.75.75 0 000 1.5c.47 0 .74.14.87.27.14.12.2.28.19.44-.02.26-.29.79-1.31.79-.46 0-.76-.14-.93-.25a1.05 1.05 0 01-.2-.18.75.75 0 00-1.04-.2c-.58.38-.2 1.05-.2 1.05v.01l.02.02a1.43 1.43 0 00.15.18c.1.1.25.24.44.37.4.26.97.5 1.76.5 1.62 0 2.73-.97 2.8-2.2a2.04 2.04 0 00-.57-1.55c.41-.43.6-.99.57-1.54-.07-1.24-1.18-2.21-2.8-2.21-.79 0-1.37.24-1.76.5a2.54 2.54 0 00-.6.55v.02h-.01v.01a.75.75 0 001.23.85l.03-.03c.04-.04.1-.1.18-.15.17-.11.47-.25.93-.25 1.02 0 1.29.53 1.3.8.01.15-.04.3-.18.43zm-2.25 2.85zm0-3.66z" fill={primaryFill} /></svg>;
};

export default Timer324Regular;