import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PositionToBack24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 16.75A2.75 2.75 0 0116.75 14h3.5A2.75 2.75 0 0123 16.75v3.5A2.75 2.75 0 0120.25 23h-3.5A2.75 2.75 0 0114 20.25v-3.5zm2.75-1.25c-.69 0-1.25.56-1.25 1.25v3.5c0 .69.56 1.25 1.25 1.25h3.5c.69 0 1.25-.56 1.25-1.25v-3.5c0-.69-.56-1.25-1.25-1.25h-3.5z" fill={primaryFill} /><path d="M6 11v3.75C6 16.55 7.46 18 9.25 18H13v-1.25-.25h-.32l.37-.37a3.75 3.75 0 013.08-3.08l.37-.37v.33l.25-.01H18V9.25C18 7.45 16.54 6 14.75 6H11v1.5h.56l-.68.68a3.76 3.76 0 01-2.7 2.7l-.68.68V11l-.25.01H6zm7.68-3.5h1.07c.24 0 .47.05.68.14l-7.8 7.79c-.08-.21-.13-.44-.13-.68v-1.07l6.18-6.18zm-4.43 9c-.17 0-.34-.02-.5-.07l7.68-7.68c.05.16.07.33.07.5v1.31l-5.94 5.94H9.25z" fill={primaryFill} /><path d="M1 3.75A2.75 2.75 0 013.75 1h3.5A2.75 2.75 0 0110 3.75v3.5A2.75 2.75 0 017.25 10h-3.5A2.75 2.75 0 011 7.25v-3.5zM3.75 2.5c-.69 0-1.25.56-1.25 1.25v3.5c0 .69.56 1.25 1.25 1.25h3.5c.69 0 1.25-.56 1.25-1.25v-3.5c0-.69-.56-1.25-1.25-1.25h-3.5z" fill={primaryFill} /></svg>;
};

export default PositionToBack24Regular;