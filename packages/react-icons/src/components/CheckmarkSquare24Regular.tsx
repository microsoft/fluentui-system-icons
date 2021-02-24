import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CheckmarkSquare24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.28 8.72c.3.3.3.77 0 1.06l-5 5c-.3.3-.77.3-1.06 0l-2-2a.75.75 0 111.06-1.06l1.47 1.47 4.47-4.47c.3-.3.77-.3 1.06 0z" fill={primaryFill} /><path d="M3 5.25C3 4.01 4.02 3 5.27 3h13.5C20 3 21 4 21 5.25v13.5C21 19.99 20 21 18.76 21H5.26C4 21 3 20 3 18.75V5.25zm2.26-.75a.75.75 0 00-.75.75v13.5c0 .41.33.75.75.75h13.5c.41 0 .75-.34.75-.75V5.25a.75.75 0 00-.75-.75H5.26z" fill={primaryFill} /></svg>;
};

export default CheckmarkSquare24Regular;