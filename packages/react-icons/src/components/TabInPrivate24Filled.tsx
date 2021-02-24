import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TabInPrivate24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 3a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3H6zM5 6a1 1 0 011-1h1.22L5 7.65V6zm0 3.2L8.53 5h2.69L5 12.4V9.2zM12.52 5h2.69L5 17.16v-3.2L12.52 5zm4 0H18a1 1 0 01.83.44L7.45 19H6a1 1 0 01-.84-.46L16.5 5zM19 6.8V10l-7.56 9H8.76L19 6.8zm0 4.75v3.2L15.43 19h-2.68L19 11.55zm0 4.76V18a1 1 0 01-1 1h-1.26L19 16.3z" fill={primaryFill} /></svg>;
};

export default TabInPrivate24Filled;