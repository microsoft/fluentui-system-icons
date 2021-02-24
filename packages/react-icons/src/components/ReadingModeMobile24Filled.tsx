import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ReadingModeMobile24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.75 2c1.2 0 2.17.93 2.24 2.1l.01.15v15.5c0 1.19-.93 2.16-2.1 2.24H6.25c-1.2 0-2.17-.92-2.24-2.09L4 19.75V4.25c0-1.19.93-2.16 2.1-2.24h11.65zm-5.5 11h-4.6a.75.75 0 000 1.5H12.35a.75.75 0 000-1.5h-.1zm4-3h-8.6a.75.75 0 000 1.5h8.7a.75.75 0 000-1.5h-.1zm0-3h-8.6a.75.75 0 000 1.5h8.7a.75.75 0 000-1.5h-.1z" fill={primaryFill} /></svg>;
};

export default ReadingModeMobile24Filled;