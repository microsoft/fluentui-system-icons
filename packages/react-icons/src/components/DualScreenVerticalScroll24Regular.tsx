import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DualScreenVerticalScroll24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.75 4h7.5C21.2 4 22 4.8 22 5.75v12.5c0 .96-.79 1.75-1.75 1.75H3.75C2.78 20 2 19.2 2 18.25V5.75C2 4.78 2.78 4 3.75 4h9zm7.5 1.5h-7.5v13h7.5c.13 0 .25-.11.25-.25V5.75a.25.25 0 00-.25-.25zm-9 0h-7.5a.25.25 0 00-.25.25v12.5c0 .13.11.25.25.25h7.5v-13zm3.45 7.9l.09.07 1.71 1.75 1.72-1.75a.75.75 0 011.14.97l-.07.08-2.25 2.3c-.27.27-.7.3-.99.08l-.08-.08-2.26-2.3a.75.75 0 011-1.12zm2.34-6.18l2.25 2.3a.75.75 0 01-1.07 1.05L16.5 8.82l-1.71 1.75a.75.75 0 01-1.08-1.05l2.26-2.3c.3-.3.77-.3 1.07 0z" fill={primaryFill} /></svg>;
};

export default DualScreenVerticalScroll24Regular;