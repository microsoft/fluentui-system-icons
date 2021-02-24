import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ScaleFit16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.35 6.15c.2.2.2.51 0 .7l-.64.65h1.54a.5.5 0 010 1H5.7l.65.65a.5.5 0 11-.7.7l-1.5-1.5a.5.5 0 010-.7l1.5-1.5c.19-.2.5-.2.7 0z" fill={primaryFill} /><path d="M10.3 8.5l-.65.65a.5.5 0 10.7.7l1.5-1.5a.5.5 0 000-.7l-1.5-1.5a.5.5 0 00-.7.7l.64.65H8.75a.5.5 0 100 1h1.55z" fill={primaryFill} /><path d="M2 5c0-1.1.9-2 2-2h8a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm2-1a1 1 0 00-1 1v6a1 1 0 001 1h8a1 1 0 001-1V5a1 1 0 00-1-1H4z" fill={primaryFill} /></svg>;
};

export default ScaleFit16Regular;