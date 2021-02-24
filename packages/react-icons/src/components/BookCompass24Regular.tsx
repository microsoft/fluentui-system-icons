import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BookCompass24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 5.75a.75.75 0 00-1.5 0v1.6A2.75 2.75 0 0010.35 12l-1.3 3.23a.75.75 0 001.4.56l1.23-3.09a2.76 2.76 0 001.14 0l1.23 3.09a.75.75 0 001.4-.56L14.15 12A2.74 2.74 0 0013 7.35v-1.6zM11 10a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0z" fill={primaryFill} /><path d="M6.5 2A2.5 2.5 0 004 4.5v15A2.5 2.5 0 006.5 22h13.25a.75.75 0 000-1.5H6.5a1 1 0 01-1-1h14.25c.41 0 .75-.34.75-.75V4.5A2.5 2.5 0 0018 2H6.5zM19 18H5.5V4.5a1 1 0 011-1H18a1 1 0 011 1V18z" fill={primaryFill} /></svg>;
};

export default BookCompass24Regular;