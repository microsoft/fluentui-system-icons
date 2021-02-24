import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Doctor28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.75 4.5a.25.25 0 00-.25.25v5c0 .41-.34.75-.75.75h-5a.25.25 0 00-.25.25v6.5c0 .14.11.25.25.25h5c.41 0 .75.34.75.75v5c0 .14.11.25.25.25h6.5c.14 0 .25-.11.25-.25v-5c0-.41.34-.75.75-.75h5c.14 0 .25-.11.25-.25v-6.5a.25.25 0 00-.25-.25h-5a.75.75 0 01-.75-.75v-5a.25.25 0 00-.25-.25h-6.5zM9 4.75C9 3.78 9.78 3 10.75 3h6.5c.97 0 1.75.78 1.75 1.75V9h4.25c.97 0 1.75.78 1.75 1.75v6.5c0 .97-.78 1.75-1.75 1.75H19v4.25c0 .97-.78 1.75-1.75 1.75h-6.5C9.78 25 9 24.22 9 23.25V19H4.75C3.78 19 3 18.22 3 17.25v-6.5C3 9.78 3.78 9 4.75 9H9V4.75z" fill={primaryFill} /></svg>;
};

export default Doctor28Regular;