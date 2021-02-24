import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const KeyboardShiftUppercase24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.25 20.5a.75.75 0 01.1 1.5h-8.6a.75.75 0 01-.1-1.5h8.6zM11.01 2.37c.69-.48 1.63-.4 2.23.2l.1.12 7.87 9.44a1.75 1.75 0 01-1.2 2.86H17v2.26c0 .87-.63 1.59-1.46 1.73l-.15.01-.14.01h-6.5c-.92 0-1.67-.7-1.74-1.6L7 17.24V15H4.14c-.3 0-.58-.07-.84-.21l-.15-.1-.14-.1c-.7-.58-.82-1.6-.32-2.33l.1-.13 7.87-9.44.1-.12.12-.1.13-.1zm1.18 1.28a.25.25 0 00-.3-.07l-.05.04-.03.03-7.87 9.44a.25.25 0 00.14.4h3.67c.38 0 .7.3.74.66l.01.1v3c0 .12.08.22.2.24l.05.01h6.5c.12 0 .22-.08.24-.2l.01-.05v-3c0-.38.28-.7.65-.74l.1-.01h3.61a.25.25 0 00.23-.36l-.03-.05-7.87-9.44z" fill={primaryFill} /></svg>;
};

export default KeyboardShiftUppercase24Regular;