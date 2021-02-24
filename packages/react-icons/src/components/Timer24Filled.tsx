import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Timer24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 5a8.5 8.5 0 110 17 8.5 8.5 0 010-17zm0 3c-.38 0-.7.28-.74.65l-.01.1v4.6a.75.75 0 001.5 0V8.65A.75.75 0 0012 8zm7.17-2.88l.08.06 1.15 1a.75.75 0 01-.9 1.2l-.08-.06-1.15-1a.75.75 0 01.9-1.2zM14.25 2.5a.75.75 0 01.1 1.5h-4.6a.75.75 0 01-.1-1.5h4.6z" fill={primaryFill} /></svg>;
};

export default Timer24Filled;