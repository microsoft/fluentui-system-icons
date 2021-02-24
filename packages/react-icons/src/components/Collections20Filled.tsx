import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Collections20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.5 7A2.5 2.5 0 0118 9.34v6.16a2.5 2.5 0 01-2.34 2.5H9.5A2.5 2.5 0 017 15.66V9.5A2.5 2.5 0 019.34 7h6.16zm-3 2a.5.5 0 00-.5.41V12H9.4a.5.5 0 000 1H12v2.59a.5.5 0 001 0V13h2.59a.5.5 0 000-1H13V9.41a.5.5 0 00-.5-.41zm.16-5.3l.05.15.57 2.15H9a3 3 0 00-3 2.82V14.35a2.5 2.5 0 01-2.31-1.68l-.05-.18L2.08 6.7A2.5 2.5 0 013.7 3.69l.15-.05 5.8-1.56a2.5 2.5 0 012.96 1.46l.05.16z" fill={primaryFill} /></svg>;
};

export default Collections20Filled;