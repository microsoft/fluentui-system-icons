import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Blur24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 12a9 9 0 0113.98-7.5H12v1h6.23c.47.45.89.95 1.25 1.5H12v1h8.06c.24.48.44.98.59 1.5H12v1h8.88c.08.49.12.99.12 1.5h-9v1h8.95a8.96 8.96 0 01-.3 1.5H12v1h8.3c-.23.53-.5 1.03-.82 1.5H12v1h6.7A9 9 0 013 12z" fill={primaryFill} /></svg>;
};

export default Blur24Filled;