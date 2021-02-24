import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SkipForward1024Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21 2.25a1 1 0 011 1V9a1 1 0 01-1 1h-5.25a1 1 0 010-2h3.39a7.87 7.87 0 00-3.69-2.57A9.44 9.44 0 004.63 9.48a1 1 0 01-1.76-.96 11.44 11.44 0 0113.17-5A9.52 9.52 0 0120 5.98V3.25a1 1 0 011-1zM9.1 11.06a1 1 0 01.65.94v8a1 1 0 01-2 0v-5.5c-.35.28-.75.57-1.24.86a1 1 0 11-1.02-1.72 8.02 8.02 0 002.28-2.02l.22-.27a1 1 0 011.1-.29zm4.14 1.6A3.33 3.33 0 0116.25 11c1.39 0 2.4.64 3 1.66.57.95.75 2.16.75 3.34 0 1.18-.18 2.39-.74 3.34A3.33 3.33 0 0116.25 21c-1.39 0-2.4-.64-3-1.66A6.61 6.61 0 0112.5 16c0-1.18.18-2.39.74-3.34zm1.72 1.02A4.7 4.7 0 0014.5 16c0 1.03.17 1.82.46 2.32.25.42.61.68 1.29.68s1.04-.26 1.29-.68c.3-.5.46-1.29.46-2.32a4.7 4.7 0 00-.46-2.32c-.25-.42-.61-.68-1.29-.68s-1.04.26-1.29.68z" fill={primaryFill} /></svg>;
};

export default SkipForward1024Filled;