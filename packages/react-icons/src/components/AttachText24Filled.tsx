import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const AttachText24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 3a5 5 0 015 4.78V19a3 3 0 01-6 .18V9a1 1 0 012-.12V19a1 1 0 002 .12V8a3 3 0 00-6-.18V17a1 1 0 01-2 .12V8a5 5 0 015-5zm8 14h2a1 1 0 01.12 2H15a1 1 0 01-.12-2H17h-2zm0-4h5.5a1 1 0 01.12 2H15a1 1 0 01-.12-2h5.62H15zm0-4h5.5a1 1 0 01.12 2H15a1 1 0 01-.12-2h5.62H15zm0-4h5.5a1 1 0 01.12 2H15a1 1 0 01-.12-2h5.62H15z" fill={primaryFill} /></svg>;
};

export default AttachText24Filled;