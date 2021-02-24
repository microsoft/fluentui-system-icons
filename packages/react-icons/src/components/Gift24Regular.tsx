import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Gift24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.5 2a3.25 3.25 0 012.74 5h2.51c.69 0 1.25.56 1.25 1.25v3.5c0 .6-.43 1.1-1 1.22v5.78a3.25 3.25 0 01-3.07 3.24l-.18.01h-9.5a3.25 3.25 0 01-3.24-3.07L4 18.75v-5.78c-.57-.11-1-.62-1-1.22v-3.5C3 7.56 3.56 7 4.25 7h2.51A3.25 3.25 0 0112 3.17C12.6 2.46 13.5 2 14.5 2zm-3.25 11H5.5v5.75c0 .92.7 1.67 1.6 1.74l.15.01h4V13zm7.25 0h-5.75v7.5h4c.92 0 1.67-.7 1.74-1.6l.01-.15V13zm-7.25-4.5H4.5v3h6.75v-3zm8.25 3v-3h-6.75v3h6.75zm-5-8c-.97 0-1.75.78-1.75 1.75V7H14.64a1.75 1.75 0 00-.14-3.5zm-5 0A1.75 1.75 0 009.36 7H11.25V5.1c-.08-.9-.83-1.61-1.75-1.61z" fill={primaryFill} /></svg>;
};

export default Gift24Regular;