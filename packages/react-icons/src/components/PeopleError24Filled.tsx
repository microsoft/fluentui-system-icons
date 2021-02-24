import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PeopleError24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 6.5a4.5 4.5 0 10-9 0 4.5 4.5 0 009 0z" fill={primaryFill} /><path d="M12.8 13H4a2 2 0 00-2 2v1.73C2.17 20.04 5.79 21 8.5 21c1.03 0 2.19-.14 3.24-.49A6.47 6.47 0 0112.8 13z" fill={primaryFill} /><path d="M17.5 4a3.5 3.5 0 110 7 3.5 3.5 0 010-7z" fill={primaryFill} /><path d="M23 17.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zM17.5 14a.5.5 0 00-.5.5v4a.5.5 0 001 0v-4a.5.5 0 00-.5-.5zm0 7.13a.62.62 0 100-1.25.62.62 0 000 1.25z" fill={primaryFill} /></svg>;
};

export default PeopleError24Filled;