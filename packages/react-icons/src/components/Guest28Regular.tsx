import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Guest28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 12.5a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0zm3.5-2a2 2 0 100 4 2 2 0 000-4z" fill={primaryFill} /><path d="M10.7 17c-.86 0-1.8.6-1.82 1.67-.02.75.12 1.85.9 2.78.79.94 2.13 1.55 4.22 1.55s3.43-.6 4.23-1.55c.77-.93.9-2.03.9-2.78C19.1 17.6 18.15 17 17.3 17h-6.6zm-.32 1.7c0-.04.02-.08.06-.12a.4.4 0 01.26-.08h6.6c.12 0 .2.04.26.08.04.04.06.08.06.13.01.57-.1 1.24-.54 1.77-.43.5-1.28 1.02-3.08 1.02s-2.65-.51-3.08-1.02a2.63 2.63 0 01-.54-1.77z" fill={primaryFill} /><path d="M18.9 4h1.35A2.75 2.75 0 0123 6.75v16.5A2.75 2.75 0 0120.25 26H7.75A2.75 2.75 0 015 23.25V6.75A2.75 2.75 0 017.75 4H9.1c.33-1.15 1.4-2 2.65-2h4.5c1.26 0 2.32.85 2.65 2zM9.1 5.5H7.75c-.69 0-1.25.56-1.25 1.25v16.5c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25V6.75c0-.69-.56-1.25-1.25-1.25H18.9a2.75 2.75 0 01-2.65 2h-4.5a2.75 2.75 0 01-2.65-2zm1.4-.75c0 .69.56 1.25 1.25 1.25h4.5a1.25 1.25 0 100-2.5h-4.5c-.69 0-1.25.56-1.25 1.25z" fill={primaryFill} /></svg>;
};

export default Guest28Regular;