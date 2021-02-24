import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ShieldProhibited24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.75 5a.75.75 0 00-.75.75V11c0 5 2.96 8.68 8.73 10.95.17.07.37.07.54 0l.43-.17a6.54 6.54 0 01-1.67-1.76C6.64 17.96 4.5 14.97 4.5 11V6.48a14.36 14.36 0 007.5-2.8 14.36 14.36 0 007.5 2.8v4.25c.54.28 1.04.64 1.48 1.06L21 11V5.75a.75.75 0 00-.75-.75c-2.66 0-5.26-.94-7.8-2.85a.75.75 0 00-.9 0C9.01 4.05 6.41 5 3.75 5z" fill={primaryFill} /><path d="M16.5 22a5.5 5.5 0 100-11 5.5 5.5 0 000 11zm-3.3-3.25a4 4 0 015.56-5.56l-5.57 5.56zm1.05 1.06l5.56-5.56a4 4 0 01-5.56 5.56z" fill={primaryFill} /></svg>;
};

export default ShieldProhibited24Regular;