import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PeopleEdit20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 5.5a3.5 3.5 0 10-7 0 3.5 3.5 0 007 0z" fill={primaryFill} /><path d="M14.5 9a2.51 2.51 0 001.93-.91A2.5 2.5 0 1014.5 9z" fill={primaryFill} /><path d="M10.98 14.38l4.83-4.83a1.87 1.87 0 112.64 2.64l-4.83 4.83a2.2 2.2 0 01-1.02.58l-1.5.37a.89.89 0 01-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02z" fill={primaryFill} /><path d="M11 10a2 2 0 011.8 1.14l-2.53 2.53c-.4.41-.7.92-.84 1.49l-.37 1.5-.05.24c-.47.06-.97.1-1.51.1C4.09 17 2 15.55 2 13.5V12c0-1.1.9-2 2-2h7z" fill={primaryFill} /></svg>;
};

export default PeopleEdit20Filled;