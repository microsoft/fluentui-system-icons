import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SkipBackward1024Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 2.25a1 1 0 00-1 1V9a1 1 0 001 1h5.25a1 1 0 000-2H4.86a7.87 7.87 0 013.69-2.57 9.44 9.44 0 0110.82 4.05 1 1 0 101.76-.96 11.44 11.44 0 00-13.17-5A9.52 9.52 0 004 5.98V3.25a1 1 0 00-1-1zM9.75 12a1 1 0 00-1.76-.65l-.22.27a8.02 8.02 0 01-2.28 2.02 1 1 0 101.02 1.72c.49-.3.9-.58 1.24-.87V20a1 1 0 002 0v-8zm6.5-1c-1.39 0-2.4.64-3 1.66A6.61 6.61 0 0012.5 16c0 1.18.18 2.39.74 3.34A3.33 3.33 0 0016.25 21c1.39 0 2.4-.64 3-1.66.57-.95.75-2.16.75-3.34 0-1.18-.18-2.39-.74-3.34A3.33 3.33 0 0016.25 11zm-1.75 5c0-1.03.17-1.82.46-2.32.25-.42.61-.68 1.29-.68s1.04.26 1.29.68c.3.5.46 1.29.46 2.32a4.7 4.7 0 01-.46 2.32c-.25.42-.61.68-1.29.68s-1.04-.26-1.29-.68A4.7 4.7 0 0114.5 16z" fill={primaryFill} /></svg>;
};

export default SkipBackward1024Filled;