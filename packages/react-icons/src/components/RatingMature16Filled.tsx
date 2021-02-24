import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const RatingMature16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4.5A2.5 2.5 0 014.5 2h7A2.5 2.5 0 0114 4.5v7a2.5 2.5 0 01-2.5 2.5h-7A2.5 2.5 0 012 11.5v-7zm3.92.74A.5.5 0 005 5.5v5a.5.5 0 101 0V7.24l1.58 2.53a.5.5 0 00.84 0L10 7.24v3.26a.5.5 0 101 0v-5a.5.5 0 00-.92-.26L8 8.56 5.92 5.24z" fill={primaryFill} /></svg>;
};

export default RatingMature16Filled;