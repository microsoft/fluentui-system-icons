import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Tent48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M25 6.02a1.25 1.25 0 00-1.92 0c-2.99 3.59-8.9 7.85-12.29 9.75-.34.19-.57.53-.63.92L7.43 36.5H5.25a1.25 1.25 0 100 2.5h37.5a1.25 1.25 0 100-2.5h-2.1l-2.73-19.81a1.25 1.25 0 00-.63-.92C33.9 13.87 28 9.6 25 6.02zm8.23 30.46c-3.4-4.8-5.8-9.47-8.02-18a1.25 1.25 0 00-2.43 0c-2.45 9.6-5.37 14.37-8.05 18H9.96l2.6-18.84c3.25-1.9 8.26-5.52 11.48-8.94 3.22 3.42 8.23 7.03 11.49 8.94l2.6 18.84h-4.9zm-3.03 0H17.8c2.1-3.05 4.25-6.96 6.2-13.13a48.79 48.79 0 006.2 13.13z" fill={primaryFill} /></svg>;
};

export default Tent48Regular;