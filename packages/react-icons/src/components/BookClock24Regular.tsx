import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BookClock24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 9.13v1.62h.75a.62.62 0 110 1.25h-1.37a.62.62 0 01-.63-.63V9.13a.62.62 0 111.25 0z" fill={primaryFill} /><path d="M12.38 6a4.75 4.75 0 100 9.5 4.75 4.75 0 000-9.5zm-3.5 4.75a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z" fill={primaryFill} /><path d="M6.5 2A2.5 2.5 0 004 4.5v15A2.5 2.5 0 006.5 22h13.25a.75.75 0 000-1.5H6.5a1 1 0 01-1-1h14.25c.41 0 .75-.34.75-.75V4.5A2.5 2.5 0 0018 2H6.5zM19 18H5.5V4.5a1 1 0 011-1H18a1 1 0 011 1V18z" fill={primaryFill} /></svg>;
};

export default BookClock24Regular;