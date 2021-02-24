import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PeopleError20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 2a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm0 1a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" fill={primaryFill} /><path d="M14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM13 6.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" fill={primaryFill} /><path d="M11.3 10.02L11 10H4a2 2 0 00-2 2v1.5C2 15.55 4.09 17 7.5 17c.73 0 1.4-.07 2-.2-.13-.3-.25-.61-.33-.94-.5.1-1.05.14-1.67.14C4.58 16 3 14.9 3 13.5V12a1 1 0 011-1h6.26c.3-.37.65-.7 1.04-.98z" fill={primaryFill} /><path d="M19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM14.5 12a.5.5 0 00-.5.5v2a.5.5 0 001 0v-2a.5.5 0 00-.5-.5zm0 5.13a.62.62 0 100-1.25.62.62 0 000 1.24z" fill={primaryFill} /></svg>;
};

export default PeopleError20Regular;