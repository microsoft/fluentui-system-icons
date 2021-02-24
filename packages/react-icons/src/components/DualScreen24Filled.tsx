import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DualScreen24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.25 4C21.22 4 22 4.8 22 5.75v12.5c0 .96-.78 1.75-1.75 1.75H13c-.08 0-.17 0-.25-.02V4.02L13 4h7.25zM11 4c.09 0 .17 0 .25.02v15.96L11 20H3.76C2.79 20 2 19.2 2 18.25V5.75C2 4.78 2.79 4 3.76 4H11zM9.25 15.5h-1.6a.75.75 0 000 1.5H9.35a.75.75 0 000-1.5h-.1zm7 0h-1.6a.75.75 0 000 1.5H16.34a.75.75 0 000-1.5h-.1z" fill={primaryFill} /></svg>;
};

export default DualScreen24Filled;