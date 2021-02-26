import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const AlignCenterHorizontal16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 7.5a.5.5 0 01-.5.5H14v1.25c0 .97-.78 1.75-1.75 1.75h-1.5C9.78 11 9 10.22 9 9.25V8H7v2.25C7 11.22 6.22 12 5.25 12h-1.5C2.78 12 2 11.22 2 10.25V8h-.5a.5.5 0 010-1H2V4.75C2 3.78 2.78 3 3.75 3h1.5C6.22 3 7 3.78 7 4.75V7h2V5.75C9 4.78 9.78 4 10.75 4h1.5c.97 0 1.75.78 1.75 1.75V7h.5c.28 0 .5.22.5.5zM3 10.25c0 .41.34.75.75.75h1.5c.41 0 .75-.34.75-.75v-5.5A.75.75 0 005.25 4h-1.5a.75.75 0 00-.75.75v5.5zm7-1c0 .41.34.75.75.75h1.5c.41 0 .75-.34.75-.75v-3.5a.75.75 0 00-.75-.75h-1.5a.75.75 0 00-.75.75v3.5z" fill={primaryFill} /></svg>;
};

export default AlignCenterHorizontal16Regular;