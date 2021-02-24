import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DualScreenLock24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22 9.97v10.28c0 .97-.79 1.75-1.75 1.75H13c-.09 0-.17 0-.26-.02V11.8A6.47 6.47 0 0022 9.97zM10.02 6a6.63 6.63 0 001.22 4.32v11.66L11 22H3.75C2.78 22 2 21.2 2 20.25V7.75C2 6.78 2.78 6 3.75 6h6.27zm-.78 11.5h-1.6a.75.75 0 000 1.5H9.34a.75.75 0 000-1.5h-.1zm7 0h-1.6a.75.75 0 000 1.5H16.34a.75.75 0 000-1.5h-.1zM16.5 1a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 2c-.86 0-1.58.63-1.72 1.46l-.02.14v.93l-.12.04a1 1 0 00-.6.7l-.03.11v2.73a1 1 0 00.77.86l.1.02h3.24a1 1 0 00.86-.76L19 9.1V6.37a1 1 0 00-.53-.76l-.1-.05-.11-.03v-.78l-.01-.15c-.07-.9-.83-1.6-1.75-1.6zm0 1c.35 0 .64.23.73.55l.02.1v.85h-1.5v-.75l.01-.1A.75.75 0 0116.5 4z" fill={primaryFill} /></svg>;
};

export default DualScreenLock24Filled;