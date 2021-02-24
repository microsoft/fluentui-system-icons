import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FolderLink20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 3A2.5 2.5 0 002 5.5v9A2.5 2.5 0 004.5 17h2.26c-.2-.3-.38-.64-.5-1H4.5A1.5 1.5 0 013 14.5v-7h4.07c.41 0 .8-.17 1.09-.47L9.62 5.5h5.88c.83 0 1.5.67 1.5 1.5v3.26c.36.12.7.3 1 .5V7a2.5 2.5 0 00-2.5-2.5H9.67l-1.6-1.2a1.5 1.5 0 00-.9-.3H4.5zM3 5.5C3 4.67 3.67 4 4.5 4h2.67c.1 0 .21.04.3.1l1.22.92-1.26 1.32a.5.5 0 01-.36.16H3v-1z" fill={primaryFill} /><path d="M8 14.5a2.5 2.5 0 012.5-2.5h1a.5.5 0 000-1h-1a3.5 3.5 0 100 7h1a.5.5 0 000-1h-1A2.5 2.5 0 018 14.5z" fill={primaryFill} /><path d="M18 14.5a2.5 2.5 0 00-2.5-2.5h-1a.5.5 0 010-1h1a3.5 3.5 0 110 7h-1a.5.5 0 010-1h1a2.5 2.5 0 002.5-2.5z" fill={primaryFill} /><path d="M10 14.5c0-.28.22-.5.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
};

export default FolderLink20Regular;