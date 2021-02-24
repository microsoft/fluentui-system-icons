import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Notepad32Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 4a1 1 0 10-2 0v1H9a3 3 0 00-3 3v18a3 3 0 003 3h8.5v-5.5A2.5 2.5 0 0120 21h6V8a3 3 0 00-3-3h-1V4a1 1 0 10-2 0v1h-3V4a1 1 0 10-2 0v1h-3V4zm0 7h8a1 1 0 110 2h-8a1 1 0 110-2zm-1 6a1 1 0 011-1h8a1 1 0 110 2h-8a1 1 0 01-1-1zm1 4h3a1 1 0 110 2h-3a1 1 0 110-2zm8.25 7.21a3 3 0 01-.75.5V23.5c0-.28.22-.5.5-.5h5.66a3 3 0 01-.63.83l-4.78 4.38z" fill={primaryFill} /></svg>;
};

export default Notepad32Filled;