import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextDirectionHorizontalLtr20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 3c.3 0 .58.19.7.47l3 7.5a.75.75 0 01-1.4.56L8 9.5H5l-.8 2.03a.75.75 0 01-1.4-.56l3-7.5A.75.75 0 016.5 3zm0 2.77L5.6 8h1.8l-.9-2.23z" fill={primaryFill} /><path d="M14.78 4.22a.75.75 0 10-1.06 1.06l.72.72h-3.69a.75.75 0 000 1.5h3.69l-.72.72a.75.75 0 001.06 1.06l2-2c.3-.3.3-.77 0-1.06l-2-2z" fill={primaryFill} /><path d="M14.78 11.72a.75.75 0 10-1.06 1.06l.72.72H3.75a.75.75 0 000 1.5h10.69l-.72.72a.75.75 0 101.06 1.06l2-2c.3-.3.3-.77 0-1.06l-2-2z" fill={primaryFill} /></svg>;
};

export default TextDirectionHorizontalLtr20Filled;