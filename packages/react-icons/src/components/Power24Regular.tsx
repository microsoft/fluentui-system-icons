import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Power24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.2 4.82a.75.75 0 01.64 1.36 7.51 7.51 0 106.34 0 .75.75 0 11.63-1.35 9 9 0 11-7.6-.01zM12 2.5c.38 0 .7.28.74.64v7.6a.75.75 0 01-1.48.1l-.01-.1v-7.5c0-.4.33-.74.75-.74z" fill={primaryFill} /></svg>;
};

export default Power24Regular;