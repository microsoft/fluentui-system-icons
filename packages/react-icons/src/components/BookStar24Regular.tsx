import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BookStar24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.54 8.6l1.1-2.22c.25-.5.97-.5 1.22 0l1.1 2.23 2.46.36c.56.08.78.76.37 1.15l-1.78 1.74.42 2.45c.1.55-.48.97-.98.71l-2.2-1.15-2.2 1.15a.68.68 0 01-.98-.71l.42-2.45-1.78-1.74a.68.68 0 01.37-1.15l2.46-.36zm1.06.93c-.1.2-.29.34-.51.37l-1.45.21 1.05 1.02c.16.16.23.39.2.6l-.26 1.45 1.3-.68c.2-.1.44-.1.64 0l1.3.68-.25-1.44a.68.68 0 01.2-.6l1.04-1.03-1.45-.21a.68.68 0 01-.51-.37l-.65-1.32-.65 1.32z" fill={primaryFill} /><path d="M6.5 2A2.5 2.5 0 004 4.5v15A2.5 2.5 0 006.5 22h13.25a.75.75 0 000-1.5H6.5a1 1 0 01-1-1h14.25c.41 0 .75-.34.75-.75V4.5A2.5 2.5 0 0018 2H6.5zM19 18H5.5V4.5a1 1 0 011-1H18a1 1 0 011 1V18z" fill={primaryFill} /></svg>;
};

export default BookStar24Regular;