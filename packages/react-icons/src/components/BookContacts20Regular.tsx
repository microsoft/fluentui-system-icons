import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BookContacts20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.5 7.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM7 10.75V11c0 1.1.9 2 2 2h2a2 2 0 002-2v-.25a.75.75 0 00-.75-.75h-4.5a.75.75 0 00-.75.75zM4 4v12c0 1.1.9 2 2 2h9.5a.5.5 0 000-1H6a1 1 0 01-1-1h10a1 1 0 001-1V4a2 2 0 00-2-2H6a2 2 0 00-2 2zm10-1a1 1 0 011 1v11H5V4a1 1 0 011-1h8z" fill={primaryFill} /></svg>;
};

export default BookContacts20Regular;