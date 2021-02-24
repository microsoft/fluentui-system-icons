import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BookContacts32Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21 16.5c0-.83-.67-1.5-1.5-1.5h-7c-.83 0-1.5.67-1.5 1.5v.5c0 1.97 1.86 4 5 4 3.14 0 5-2.03 5-4v-.5zm-2.25-5.25a2.75 2.75 0 10-5.5 0 2.75 2.75 0 005.5 0zM25 26H7.09c.2.58.76 1 1.41 1H26a1 1 0 110 2H8.5A3.5 3.5 0 015 25.5v-19A3.5 3.5 0 018.5 3h15A3.5 3.5 0 0127 6.5V24a2 2 0 01-2 2zM7 6.5V24h18V6.5c0-.83-.67-1.5-1.5-1.5h-15C7.67 5 7 5.67 7 6.5z" fill={primaryFill} /></svg>;
};

export default BookContacts32Regular;