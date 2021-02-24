import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowReplyDown24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.28 7.78a.75.75 0 10-1.06-1.06l-5 5c-.3.3-.3.77 0 1.06l5 5a.75.75 0 001.06-1.06L5.56 13h7.84c1.6 0 2.81-.24 3.89-.76l.24-.13a6.2 6.2 0 002.58-2.58A8.4 8.4 0 0021 5.4a.75.75 0 00-1.5 0c0 1.48-.23 2.52-.71 3.43a4.7 4.7 0 01-1.96 1.96c-.84.45-1.79.67-3.1.7l-.33.01H5.56l3.72-3.72z" fill={primaryFill} /></svg>;
};

export default ArrowReplyDown24Regular;