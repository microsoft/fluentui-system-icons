import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SplitVertical24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.5 2.75a.75.75 0 00-1.5 0v18.5a.75.75 0 001.5 0V2.75zM4.25 4C3.01 4 2 5 2 6.25v11.5C2 18.99 3 20 4.25 20H10v-1.5H4.25a.75.75 0 01-.75-.75V6.25c0-.41.34-.75.75-.75H10V4H4.25zm15 14.5H13.5V20h5.75c1.24 0 2.25-1 2.25-2.25V6.25c0-1.24-1-2.25-2.25-2.25H13.5v1.5h5.75c.41 0 .75.34.75.75v11.5c0 .41-.34.75-.75.75z" fill={primaryFill} /></svg>;
};

export default SplitVertical24Regular;