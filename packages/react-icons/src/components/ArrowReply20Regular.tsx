import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowReply20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.7 9l3.4 3.39a.5.5 0 01-.64.76l-.07-.05-4.24-4.25a.5.5 0 01-.06-.63l.06-.07L6.39 3.9a.5.5 0 01.76.64l-.05.07L3.7 8H10a7.5 7.5 0 017.5 7.26v.24a.5.5 0 01-1 0A6.5 6.5 0 0010.23 9H3.7l3.4 3.39L3.7 9z" fill={primaryFill} /></svg>;
};

export default ArrowReply20Regular;