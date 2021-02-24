import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CompassNorthwest20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.42 6.1A1 1 0 006.1 7.42l1.48 3.26a3.5 3.5 0 001.74 1.74l3.26 1.48a1 1 0 001.32-1.32l-1.48-3.26a3.5 3.5 0 00-1.74-1.74L7.42 6.1zm-.41.9l3.26 1.49c.55.25.99.7 1.24 1.24L12.99 13l-3.26-1.48c-.55-.25-.99-.7-1.24-1.24L7.01 7z" fill={primaryFill} /><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 1v1.5a.5.5 0 001 0V3.07A7 7 0 0116.93 9H15.5a.5.5 0 000 1H17a7 7 0 01-6 6.93V15.5a.5.5 0 00-1 0V17a7 7 0 01-7-7h1.5a.5.5 0 000-1H3.07A7 7 0 0110 3z" fill={primaryFill} /></svg>;
};

export default CompassNorthwest20Regular;