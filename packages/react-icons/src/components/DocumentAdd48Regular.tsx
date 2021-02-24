import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DocumentAdd48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 8.25c0-.97.78-1.75 1.75-1.75H24v8.75A3.75 3.75 0 0027.75 19h9.75v20.75c0 .97-.78 1.75-1.75 1.75H24.26c-.52.9-1.16 1.75-1.88 2.5h13.37C38.1 44 40 42.1 40 39.75V18.41c0-.6-.24-1.16-.66-1.59L27.18 4.66c-.43-.42-1-.66-1.6-.66H12.26A4.25 4.25 0 008 8.25V23c.8-.34 1.63-.6 2.5-.76V8.25zm24.98 8.25h-7.73c-.69 0-1.25-.56-1.25-1.25V7.52l8.98 8.98z" fill={primaryFill} /><path d="M24 35a11 11 0 11-22 0 11 11 0 0122 0zm-10-7a1 1 0 10-2 0v6H6a1 1 0 100 2h6v6a1 1 0 102 0v-6h6a1 1 0 100-2h-6v-6z" fill={primaryFill} /></svg>;
};

export default DocumentAdd48Regular;