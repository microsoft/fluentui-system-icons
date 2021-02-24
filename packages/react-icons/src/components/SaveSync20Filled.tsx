import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SaveSync20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 3a2 2 0 00-2 2v10c0 1.1.9 2 2 2v-5.5c0-.83.67-1.5 1.5-1.5h2.76A5.49 5.49 0 0117 9.26V6.62a2 2 0 00-.59-1.41L14.8 3.59A2 2 0 0013.38 3H13v3.5c0 .83-.67 1.5-1.5 1.5h-4A1.5 1.5 0 016 6.5V3H5z" fill={primaryFill} /><path d="M6.5 11h2.1a5.48 5.48 0 00.66 6H6v-5.5c0-.28.22-.5.5-.5z" fill={primaryFill} /><path d="M7 3h5v3.5a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5V3z" fill={primaryFill} /><path d="M18 13.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-6.5-3a.5.5 0 00-.5.5v1.5c0 .28.22.5.5.5H13a.5.5 0 000-1h-.47a1.97 1.97 0 01.94-.25 2 2 0 011.44.59.5.5 0 00.71-.71 3 3 0 00-3.62-.48V11a.5.5 0 00-.5-.5zm.88 5.53a3 3 0 002.62-.18V16a.5.5 0 001 0v-1.5a.5.5 0 00-.5-.5H14a.5.5 0 000 1h.47a1.97 1.97 0 01-.94.25 2 2 0 01-1.44-.59.5.5 0 00-.71.71 3 3 0 001 .66z" fill={primaryFill} /></svg>;
};

export default SaveSync20Filled;