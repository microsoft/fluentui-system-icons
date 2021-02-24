import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BookStar24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.6 9.53c-.1.2-.29.34-.51.37l-1.45.21 1.05 1.02c.16.16.23.39.2.6l-.26 1.45 1.3-.68c.2-.1.44-.1.64 0l1.3.68-.25-1.44a.68.68 0 01.2-.6l1.04-1.03-1.45-.21a.68.68 0 01-.51-.37l-.65-1.32-.65 1.32z" fill={primaryFill} /><path d="M4 4.5A2.5 2.5 0 016.5 2H18a2.5 2.5 0 012.5 2.5v14.25c0 .41-.34.75-.75.75H5.5a1 1 0 001 1h13.25a.75.75 0 010 1.5H6.5A2.5 2.5 0 014 19.5v-15zm6.54 4.1l-2.46.37a.68.68 0 00-.37 1.15l1.78 1.74-.42 2.45c-.1.55.48.97.98.71l2.2-1.15 2.2 1.15a.68.68 0 00.98-.71l-.42-2.45 1.78-1.74a.68.68 0 00-.37-1.15l-2.46-.36-1.1-2.23a.68.68 0 00-1.22 0l-1.1 2.23z" fill={primaryFill} /></svg>;
};

export default BookStar24Filled;