import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Edit24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.94 5L19 10.06 9.06 20c-.27.28-.62.48-1 .58l-5.11 1.4a.75.75 0 01-.92-.93l1.4-5.11c.1-.38.3-.72.57-1L13.94 5zm7.09-2.03a3.58 3.58 0 010 5.06l-.97.97L15 3.94l.97-.97a3.58 3.58 0 015.06 0z" fill={primaryFill} /></svg>;
};

export default Edit24Filled;