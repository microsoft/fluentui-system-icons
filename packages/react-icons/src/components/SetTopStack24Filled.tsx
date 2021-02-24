import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SetTopStack24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 4a2 2 0 00-2 2v7c0 1.1.9 2 2 2h11a2 2 0 002-2V6a2 2 0 00-2-2H4zm5.5 2.1c.19 0 .36.1.45.28l.88 1.76 1.73.21a.5.5 0 01.26.88l-1.27 1.06.44 1.95a.5.5 0 01-.76.53L9.5 11.7l-1.74 1.08a.5.5 0 01-.75-.53l.44-1.95-1.27-1.06a.5.5 0 01.26-.88l1.73-.21.88-1.76a.5.5 0 01.45-.28z" fill={primaryFill} /><path d="M6.5 17.5A2 2 0 014.56 16H15.5a2.5 2.5 0 002.5-2.5V6.56a2 2 0 011.5 1.94v5a4 4 0 01-4 4h-9z" fill={primaryFill} /><path d="M9 20a2 2 0 01-1.94-1.5h9.19c2.35 0 4.25-1.9 4.25-4.25V9.06A2 2 0 0122 11v3.25A5.75 5.75 0 0116.25 20H9z" fill={primaryFill} /></svg>;
};

export default SetTopStack24Filled;