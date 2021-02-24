import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ShareScreenStart24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 6.25C2 5.01 3 4 4.25 4h15.5C20.99 4 22 5 22 6.25v11.5c0 1.24-1 2.25-2.25 2.25H4.25C3.01 20 2 19 2 17.75V6.25zm2.25-.75a.75.75 0 00-.75.75v11.5c0 .41.34.75.75.75h15.5c.41 0 .75-.34.75-.75V6.25a.75.75 0 00-.75-.75H4.25z" fill={primaryFill} /><path d="M12 7.25c.2 0 .39.07.53.22l3.25 3.25a.75.75 0 11-1.06 1.06l-1.97-1.97v6.44a.75.75 0 01-1.5 0V9.81l-1.97 1.97a.75.75 0 11-1.06-1.06l3.25-3.25a.75.75 0 01.53-.22z" fill={primaryFill} /></svg>;
};

export default ShareScreenStart24Regular;