import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DrawText24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.96 3c.31 0 .59.2.7.5l3.58 9.76-1.17 1.18-.47-1.27H8l-1.3 3.35a.75.75 0 01-1.4-.54l1.48-3.83v-.01l3.47-8.67c.12-.29.4-.47.71-.47zm-.04 2.85l-2.33 5.82h4.46l-2.13-5.82z" fill={primaryFill} /><path d="M20.3 12.56l-.12-.1v-.01a2.26 2.26 0 00-2.96.21l-3.8 3.87c-.24.24-.4.53-.5.85l-.59 1.95c-.57.08-1.07.08-1.6 0a.04.04 0 01-.03-.06l.04-.08c.06-.14.18-.38.21-.63a1.1 1.1 0 00-.05-.54 1 1 0 00-.42-.51c-.32-.2-.72-.22-1.07-.2a5.84 5.84 0 00-2.37.65c-.58.27-1.15.54-1.77.54a2 2 0 01-.64-.1c-.12-.05-.26.05-.23.18.06.23.16.54.4.78a1.08 1.08 0 001.1.28c1.45-.43 2.42-.66 3.05-.76.13-.03.23.1.19.23-.06.2-.15.58.03.96.2.42.6.6.95.66a6.86 6.86 0 003.49-.15l.12-.03a13.99 13.99 0 00.6-.2l1.4-.45c.33-.1.64-.3.88-.54l3.8-3.86a2 2 0 00.01-2.83l-.11-.11zm-5.87 5.23a.55.55 0 01.14-.23l3.8-3.87a.63.63 0 01.86-.03c.22.2.25.5.09.74l-.06.07-3.8 3.85a.6.6 0 01-.24.15l-1.1.36.31-1.04z" fill={primaryFill} /></svg>;
};

export default DrawText24Regular;