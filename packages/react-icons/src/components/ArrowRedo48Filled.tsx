import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowRedo48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M41 5.5a1.5 1.5 0 00-3 0v11.48l-7.9-8.06c-5.57-6.3-14.95-6.16-19.93-.67-5 5.52-3.38 13.31-.03 17.23h.01l2.26 2.55 2.54 2.54 4.24 4.16 8.25 8.33.5.5a1.5 1.5 0 102.12-2.12l-.5-.5-8.25-8.34-4.25-4.17-2.47-2.46-2.18-2.46c-2.63-3.09-3.74-9.14-.02-13.24 3.74-4.12 11.05-4.37 15.49.67l.02.03L35.78 19H24.5a1.5 1.5 0 000 3h15c.83 0 1.5-.67 1.5-1.5v-15z" fill={primaryFill} /></svg>;
};

export default ArrowRedo48Filled;