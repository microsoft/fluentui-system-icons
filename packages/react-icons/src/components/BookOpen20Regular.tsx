import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BookOpen20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 16c-.46.6-1.18 1-2 1H3.5A1.5 1.5 0 012 15.5v-11C2 3.67 2.67 3 3.5 3H8c.82 0 1.54.4 2 1 .46-.6 1.18-1 2-1h4.5c.83 0 1.5.67 1.5 1.5v11c0 .83-.67 1.5-1.5 1.5H12a2.5 2.5 0 01-2-1zM3 4.5v11c0 .28.22.5.5.5H8c.83 0 1.5-.67 1.5-1.5v-9C9.5 4.67 8.83 4 8 4H3.5a.5.5 0 00-.5.5zm7.5 10c0 .83.67 1.5 1.5 1.5h4.5a.5.5 0 00.5-.5v-11a.5.5 0 00-.5-.5H12c-.83 0-1.5.67-1.5 1.5v9z" fill={primaryFill} /></svg>;
};

export default BookOpen20Regular;