import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PeopleAdd20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 10c.1 0 .2 0 .3.02-.39.28-.74.61-1.04.98H4a1 1 0 00-1 1v1.5C3 14.9 4.58 16 7.5 16c.62 0 1.17-.05 1.67-.14.08.33.2.65.34.95-.6.12-1.28.19-2.01.19C4.09 17 2 15.55 2 13.5V12c0-1.1.9-2 2-2h7z" fill={primaryFill} /><path d="M17 6.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM14.5 5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill={primaryFill} /><path d="M7.5 2a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm0 1a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" fill={primaryFill} /><path d="M19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V14h-1.5a.5.5 0 000 1H14v1.5a.5.5 0 001 0V15h1.5a.5.5 0 000-1H15v-1.5z" fill={primaryFill} /></svg>;
};

export default PeopleAdd20Regular;