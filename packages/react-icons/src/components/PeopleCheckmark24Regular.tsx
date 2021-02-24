import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PeopleCheckmark24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.8 13H4a2 2 0 00-2 2v1.73C2.17 20.04 5.79 21 8.5 21c1.03 0 2.19-.14 3.24-.49a6.37 6.37 0 01-.54-1.4 8.8 8.8 0 01-2.38.39h-.64a7.63 7.63 0 01-3.26-.76c-.97-.52-1.42-1.23-1.42-2.24V15l.01-.1a.5.5 0 01.14-.26.5.5 0 01.25-.13l.1-.01h7.73c.29-.55.65-1.06 1.08-1.5zm.2-6.5a4.5 4.5 0 10-9 0 4.5 4.5 0 009 0zm-7.5 0a3 3 0 116 0 3 3 0 01-6 0zm15.5 1a3.5 3.5 0 10-7 0 3.5 3.5 0 007 0zm-5.5 0a2 2 0 114 0 2 2 0 01-4 0zm7.5 10a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-2.15-2.35a.5.5 0 00-.7 0l-3.65 3.64-1.65-1.64a.5.5 0 00-.7.7l2 2c.2.2.5.2.7 0l4-4a.5.5 0 000-.7z" fill={primaryFill} /></svg>;
};

export default PeopleCheckmark24Regular;