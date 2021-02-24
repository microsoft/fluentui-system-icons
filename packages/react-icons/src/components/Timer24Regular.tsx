import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Timer24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 5a8.5 8.5 0 110 17 8.5 8.5 0 010-17zm0 1.5a7 7 0 100 14 7 7 0 000-14zM12 8c.38 0 .7.28.74.65l.01.1v4.5a.75.75 0 01-1.5.1v-4.6c0-.41.34-.75.75-.75zm7.15-2.89l.08.06 1.16.97a.75.75 0 01-.88 1.21l-.08-.06-1.16-.96a.75.75 0 01.88-1.22zm-4.9-2.61a.75.75 0 01.1 1.5h-4.6a.75.75 0 01-.1-1.5h4.6z" fill={primaryFill} /></svg>;
};

export default Timer24Regular;