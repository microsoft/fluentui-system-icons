import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const LockShield24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2a4 4 0 014 4v2h2.5c.83 0 1.5.67 1.5 1.5V11c-.32 0-.64.11-.9.33l-.1.1a3.51 3.51 0 01-2.6 1.24c-.78 0-1.4.64-1.4 1.41v2.5c0 2.38.92 4.22 2.68 5.42H3.5A1.5 1.5 0 012 20.5v-11C2 8.67 2.67 8 3.5 8H6V6a4 4 0 014-4zm8.28 10.12c1 1.04 2.1 1.55 3.32 1.55.2 0 .35.14.4.33v2.58c0 2.69-1.31 4.51-3.87 5.4a.39.39 0 01-.26 0c-2.47-.86-3.78-2.6-3.87-5.13v-2.77a.4.4 0 01.4-.41 4.5 4.5 0 003.32-1.55.39.39 0 01.56 0zM10 13.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM10 4a2 2 0 00-2 2v2h4V6a2 2 0 00-2-2z" fill={primaryFill} /></svg>;
};

export default LockShield24Filled;