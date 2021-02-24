import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ShareCloseTray24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.25 20C3.01 20 2 19 2 17.75V6.25C2 5.01 3 4 4.25 4h15.5C20.99 4 22 5 22 6.25v11.5c0 1.24-1 2.25-2.25 2.25H4.25zm8.28-3.47l3.25-3.25a.75.75 0 10-1.06-1.06l-1.97 1.97V7.75a.75.75 0 00-1.5 0v6.44l-1.97-1.97a.75.75 0 10-1.06 1.06l3.25 3.25a.75.75 0 001.06 0z" fill={primaryFill} /></svg>;
};

export default ShareCloseTray24Filled;