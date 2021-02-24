import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TableResizeRow24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.75 15.58V8.42l1 .9a.75.75 0 001-1.13l-2.25-2a.75.75 0 00-1 0l-2.25 2a.75.75 0 101 1.12l1-.89v7.16l-1-.89a.75.75 0 10-1 1.12l2.25 2 .01.01a.75.75 0 001-.01l2.24-2a.75.75 0 00-1-1.12l-1 .89z" fill={primaryFill} /><path d="M17.75 21c1.8 0 3.25-1.46 3.25-3.25V6.25C21 4.45 19.54 3 17.75 3H6.25A3.25 3.25 0 003 6.25v11.5C3 19.55 4.46 21 6.25 21h11.5zm1.75-3.25c0 .97-.78 1.75-1.75 1.75H6.25c-.97 0-1.75-.78-1.75-1.75v-.25h5.15l-1.06-.94a1.75 1.75 0 01-.42-.56H4.5V8h3.67c.1-.2.24-.4.42-.56l1.06-.94H4.5v-.25c0-.97.78-1.75 1.75-1.75h11.5c.97 0 1.75.78 1.75 1.75v.25h-5.15l1.06.94c.18.16.32.35.42.56h3.67v8h-3.67c-.1.2-.24.4-.42.56l-1.06.94h5.15v.25z" fill={primaryFill} /></svg>;
};

export default TableResizeRow24Regular;