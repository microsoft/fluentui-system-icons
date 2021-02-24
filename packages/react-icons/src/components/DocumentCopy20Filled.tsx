import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DocumentCopy20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 6.5V2H7.5C6.67 2 6 2.67 6 3.5v11c0 .83.67 1.5 1.5 1.5h8c.83 0 1.5-.67 1.5-1.5V8h-4.5A1.5 1.5 0 0111 6.5z" fill={primaryFill} /><path d="M12 6.5V2.25L16.75 7H12.5a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M4 5a1 1 0 011-1v10.5A2.5 2.5 0 007.5 17H15a1 1 0 01-1 1H7.55A3.55 3.55 0 014 14.45V5z" fill={primaryFill} /></svg>;
};

export default DocumentCopy20Filled;