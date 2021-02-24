import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Symbols20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.72 8.4c.29.3.76.3 1.06 0l2.55-2.55a2.25 2.25 0 00-3.08-3.28 2.25 2.25 0 00-3.09 3.28l2.56 2.55zm-1.5-3.61a.75.75 0 111.06-1.07l.97.97.67-.68.29-.29c.3-.3.78-.3 1.07 0 .3.3.29.77 0 1.06L14.25 6.8l-2.03-2.02zM2 5.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM5.75 3.5c-.35 0-.68.08-.97.22l3 3A2.25 2.25 0 005.75 3.5zM3.5 5.75a2.25 2.25 0 003.22 2.03l-3-3c-.14.3-.22.63-.22.97zm8.8 7.38a2.25 2.25 0 013.37-.63h-.42a.75.75 0 100 1.5h2c.41 0 .75-.33.75-.75v-2a.75.75 0 00-1.5 0 3.73 3.73 0 00-5.5 1.12.75.75 0 101.3.76zm-.3 4.12a.75.75 0 01-1.5 0v-2c0-.41.34-.75.75-.75h2a.75.75 0 110 1.5h-.41a2.24 2.24 0 003.36-.63.75.75 0 011.3.75 3.75 3.75 0 01-5.5 1.13zM5.75 10.5c.41 0 .75.34.75.75v2.25h2.25a.75.75 0 110 1.5H6.5v2.25a.75.75 0 01-1.5 0V15H2.75a.75.75 0 110-1.5H5v-2.25c0-.41.34-.75.75-.75z" fill={primaryFill} /></svg>;
};

export default Symbols20Filled;