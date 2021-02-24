import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Blur28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 14a11 11 0 0116.55-9.5H14v1h6.98c.55.45 1.05.95 1.5 1.5H14v1h9.22c.31.48.59.98.82 1.5H14v1h10.43c.16.49.3.99.39 1.5H14v1h10.96a11.17 11.17 0 01.03 1.5H14v1h10.9c-.07.51-.18 1.01-.31 1.5H14v1h10.25c-.2.52-.44 1.02-.72 1.5H14v1h8.88c-.4.54-.84 1.04-1.33 1.5H14v1h6.33A11 11 0 013 14z" fill={primaryFill} /></svg>;
};

export default Blur28Filled;