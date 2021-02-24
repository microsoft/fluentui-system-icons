import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Battery820Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.83 7a.84.84 0 00-.83.84v4.32c0 .47.37.84.83.84h6.33c.47 0 .84-.37.84-.84V7.84a.84.84 0 00-.84-.84H4.83zM2 7.55a2.5 2.5 0 012.5-2.5h9a2.5 2.5 0 012.5 2.5v.84h1.17a.83.83 0 01.83.83v1.67a.83.83 0 01-.83.83H16v.83a2.5 2.5 0 01-2.5 2.5h-9a2.5 2.5 0 01-2.5-2.5v-5z" fill={primaryFill} /></svg>;
};

export default Battery820Filled;