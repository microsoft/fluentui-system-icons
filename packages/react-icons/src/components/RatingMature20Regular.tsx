import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const RatingMature20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.92 7.24A.5.5 0 007 7.5v5a.5.5 0 101 0V9.24l1.58 2.53a.5.5 0 00.84 0L12 9.24v3.26a.5.5 0 101 0v-5a.5.5 0 00-.92-.26L10 10.56 7.92 7.24z" fill={primaryFill} /><path d="M6 3a3 3 0 00-3 3v8a3 3 0 003 3h8a3 3 0 003-3V6a3 3 0 00-3-3H6zM4 6c0-1.1.9-2 2-2h8a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" fill={primaryFill} /></svg>;
};

export default RatingMature20Regular;