import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const LeafThree24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.5 2a5.5 5.5 0 00-4.9 3 7 7 0 015.49 3.13c.45-.08.93-.13 1.41-.13h3.48l.02-.5V3.44c0-.8-.65-1.44-1.44-1.44H13.5z" fill={primaryFill} /><path d="M8.43 18h-.18a6 6 0 01-6-6V7.51c0-.83.68-1.51 1.51-1.51h4.49a6 6 0 014.8 2.4 7.52 7.52 0 00-3.93 3.16L7.53 9.97a.75.75 0 00-1.06 1.06l1.96 1.96a7.49 7.49 0 000 5z" fill={primaryFill} /><path d="M9 15.5A6.5 6.5 0 0115.5 9h4.91c.88 0 1.59.71 1.59 1.59v4.91a6.5 6.5 0 01-10.54 5.1l-1.18 1.18a.75.75 0 11-1.06-1.06l1.18-1.18A6.47 6.47 0 019 15.5zm3.18 4.38l4.6-4.6a.75.75 0 10-1.06-1.06l-4.6 4.6c.3.4.66.76 1.06 1.06z" fill={primaryFill} /></svg>;
};

export default LeafThree24Filled;