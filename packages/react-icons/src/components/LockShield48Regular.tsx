import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const LockShield48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 12.5V16H8.75A4.75 4.75 0 004 20.75v18.5A4.75 4.75 0 008.75 44h22.5c.19 0 .38-.01.56-.03a17.04 17.04 0 01-2.68-2.47H8.75c-1.24 0-2.25-1-2.25-2.25v-18.5c0-1.24 1-2.25 2.25-2.25h22.5c1.24 0 2.25 1 2.25 2.25v2.53a18.9 18.9 0 00.5-.46l.05-.04A2.74 2.74 0 0136 22v-1.25A4.75 4.75 0 0031.25 16H28v-3.5a8 8 0 10-16 0zM20 7a5.5 5.5 0 015.5 5.5V16h-11v-3.5A5.5 5.5 0 0120 7z" fill={primaryFill} /><path d="M23 30a3 3 0 11-6 0 3 3 0 016 0z" fill={primaryFill} /><path d="M28 27.76v5.74c0 6.48 6.31 9.8 7.72 10.46.18.08.38.08.55 0C37.68 43.3 44 40 44 33.7v-5.95a.78.78 0 00-.76-.77c-.96-.03-2.63-.16-3.74-.59a10.46 10.46 0 01-2.93-2.14.83.83 0 00-1.14 0 10.5 10.5 0 01-2.93 2.14c-1.11.44-2.78.56-3.74.59a.78.78 0 00-.76.77z" fill={primaryFill} /></svg>;
};

export default LockShield48Regular;