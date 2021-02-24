import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const KeyboardShiftUppercase24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 20a1 1 0 01.12 2H8a1 1 0 01-.12-2H16zM11 2.37c.7-.48 1.64-.4 2.24.2l.1.12 7.87 9.44a1.75 1.75 0 01-1.2 2.86H17v2.26c0 .87-.63 1.59-1.46 1.73l-.15.01-.14.01h-6.5c-.92 0-1.67-.7-1.74-1.6L7 17.24V15H4.14c-.3 0-.58-.07-.84-.21l-.15-.1-.14-.1c-.7-.58-.82-1.6-.32-2.33l.1-.13 7.87-9.44.1-.12.12-.1.13-.1z" fill={primaryFill} /></svg>;
};

export default KeyboardShiftUppercase24Filled;