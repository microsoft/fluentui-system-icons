import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MailAll24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21 7.51c.9.58 1.5 1.59 1.5 2.74v6c0 2.9-2.35 5.25-5.25 5.25h-9c-1.15 0-2.16-.6-2.74-1.5h11.74A3.75 3.75 0 0021 16.25V7.51zm-1 .6v7.64a3.25 3.25 0 01-3.07 3.24l-.18.01H5.25a3.25 3.25 0 01-3.24-3.07L2 15.75V8.11l8.65 4.55c.22.12.48.12.7 0L20 8.11zM5.25 4h11.5c1.52 0 2.8 1.05 3.15 2.47L11 11.15 2.1 6.47A3.25 3.25 0 015.06 4L5.25 4z" fill={primaryFill} /></svg>;
};

export default MailAll24Filled;