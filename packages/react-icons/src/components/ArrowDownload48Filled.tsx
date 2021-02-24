import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowDownload48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.25 38.5h23.5a1.75 1.75 0 01.14 3.5H12.25a1.75 1.75 0 01-.14-3.5h23.64-23.5zM23.61 6.26l.14-.01c.92 0 1.67.7 1.74 1.6l.01.15v21.33l4.8-4.79a1.75 1.75 0 012.47 2.48l-7.78 7.77c-.68.69-1.8.69-2.47 0l-7.78-7.77a1.75 1.75 0 012.47-2.48L22 29.33V8c0-.92.7-1.67 1.6-1.74l.15-.01h-.14z" fill={primaryFill} /></svg>;
};

export default ArrowDownload48Filled;