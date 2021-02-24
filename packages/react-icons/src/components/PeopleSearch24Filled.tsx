import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PeopleSearch24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.9 14h7.85C21 14 22 15 22 16.25v.9c0 1.1-.47 2.14-1.3 2.85-1.57 1.34-3.81 2-6.7 2h-.18c.3-.6.23-1.36-.22-1.9l-.11-.12-2.23-2.22A5.48 5.48 0 0011.9 14zm-5.4-3.5a4.5 4.5 0 013.46 7.38l2.82 2.81a.75.75 0 01-.97 1.13l-.09-.07-2.9-2.9A4.5 4.5 0 116.5 10.5zm0 1.5a3 3 0 100 6 3 3 0 000-6zM14 2a5 5 0 110 10 5 5 0 010-10z" fill={primaryFill} /></svg>;
};

export default PeopleSearch24Filled;