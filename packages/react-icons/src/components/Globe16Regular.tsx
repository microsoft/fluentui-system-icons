import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Globe16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 14A6 6 0 108 2a6 6 0 000 12zM8 3c.37 0 .88.36 1.31 1.32.1.2.18.43.26.68H6.43c.08-.25.16-.47.26-.68C7.12 3.36 7.63 3 8 3zm-2.22.9c-.15.34-.29.7-.4 1.1H4a5.02 5.02 0 012.04-1.6c-.1.16-.18.33-.26.5zM5.16 6a12.06 12.06 0 000 4H3.42a4.98 4.98 0 010-4h1.74zm.22 5a7.53 7.53 0 00.66 1.6A5.02 5.02 0 014 11h1.38zm1.05 0h3.14a6.2 6.2 0 01-.26.68C8.88 12.64 8.37 13 8 13c-.37 0-.88-.36-1.31-1.32a6.2 6.2 0 01-.26-.68zm3.4-1H6.17a10.94 10.94 0 010-4h3.64a10.94 10.94 0 010 4zm.79 1H12a5.02 5.02 0 01-2.04 1.6c.1-.16.18-.33.26-.5.15-.34.29-.7.4-1.1zm1.96-1h-1.74a12.05 12.05 0 000-4h1.74a4.98 4.98 0 010 4zM9.96 3.4c.81.35 1.52.9 2.04 1.6h-1.38a7.53 7.53 0 00-.66-1.6z" fill={primaryFill} /></svg>;
};

export default Globe16Regular;