import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowReply48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.02 22.5l7.06 7.06a1.25 1.25 0 01-1.67 1.86l-.1-.1-9.2-9.18a1.25 1.25 0 01-.09-1.67l.1-.1 9.19-9.2a1.25 1.25 0 011.86 1.67l-.1.1L13.03 20H22c3.25 0 6.28.72 8.9 2.1l.41.22a16.51 16.51 0 016.37 6.36A18.92 18.92 0 0140 38a1.25 1.25 0 01-2.5 0c0-3-.7-5.76-2-8.1a14.01 14.01 0 00-5.4-5.4 16.28 16.28 0 00-7.6-2h-9.48l7.06 7.06-7.06-7.06z" fill={primaryFill} /></svg>;
};

export default ArrowReply48Regular;