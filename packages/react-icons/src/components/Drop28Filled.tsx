import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Drop28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.47 2.22c.3-.3.77-.3 1.06 0 .52.52 2.5 2.61 4.34 5.32 1.82 2.66 3.63 6.08 3.63 9.21 0 3.04-.92 5.37-2.49 6.95A8.32 8.32 0 0114 26c-2.3 0-4.44-.73-6.01-2.3-1.57-1.58-2.49-3.9-2.49-6.95 0-3.13 1.8-6.55 3.63-9.21 1.85-2.7 3.82-4.8 4.34-5.32z" fill={primaryFill} /></svg>;
};

export default Drop28Filled;