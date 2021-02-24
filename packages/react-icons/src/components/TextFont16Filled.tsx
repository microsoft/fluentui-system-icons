import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextFont16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.88 2.02c.3 0 .59.19.7.48l1.56 4.04-.8 2.07a.76.76 0 01-.04-.07L6 7.75H3.76l-.3.79A.75.75 0 112.05 8l2.12-5.5a.75.75 0 01.7-.48zm-.54 4.23h1.08l-.54-1.4-.54 1.4z" fill={primaryFill} /><path d="M10.2 4.49a.75.75 0 00-1.4 0L5.73 12.5a.75.75 0 00.02 1.5h1.5a.75.75 0 00.09-1.5l.38-1h3.56l.38 1a.75.75 0 00.1 1.5h1.5a.75.75 0 000-1.5l-.74-1.96a.75.75 0 00-.05-.12L10.2 4.5zm.5 5.51H8.3l1.2-3.15L10.7 10z" fill={primaryFill} /></svg>;
};

export default TextFont16Filled;