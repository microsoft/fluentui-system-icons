import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Info24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a10 10 0 110 20 10 10 0 010-20zm0 1.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zm0 7c.38 0 .69.28.74.65v.1l.01 5.5a.75.75 0 01-1.5.1v-5.6c0-.41.33-.75.75-.75zM12 7a1 1 0 110 2 1 1 0 010-2z" fill={primaryFill} /></svg>;
};

export default Info24Regular;