import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Next24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21 3.75a.75.75 0 00-1.5 0v16.5a.75.75 0 001.5 0V3.75z" fill={primaryFill} /><path d="M5.77 3.53A1.75 1.75 0 003 4.95v14.22a1.75 1.75 0 002.7 1.47l10.46-6.71a1.75 1.75 0 00.08-2.9L5.77 3.53zM4.5 4.95c0-.2.23-.32.4-.2l10.47 7.5c.14.1.13.32-.02.41L4.88 19.38a.25.25 0 01-.38-.21V4.95z" fill={primaryFill} /></svg>;
};

export default Next24Regular;