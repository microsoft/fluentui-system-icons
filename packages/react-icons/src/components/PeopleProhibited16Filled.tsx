import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PeopleProhibited16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 5c0 .53.2 1 .53 1.36a5.49 5.49 0 013.13-.24A2 2 0 109 5zm-2.94 8h.15a5.5 5.5 0 011.05-5H3.5C2.67 8 2 8.67 2 9.5v.77C2 12.1 3.45 13 6.06 13zM6 2a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm5.5 13c-.79 0-1.51-.26-2.1-.7l4.9-4.9a3.5 3.5 0 01-2.8 5.6zm2.1-6.3l-4.9 4.9a3.5 3.5 0 014.9-4.9zM11.5 16a4.5 4.5 0 100-9 4.5 4.5 0 000 9z" fill={primaryFill} /></svg>;
};

export default PeopleProhibited16Filled;