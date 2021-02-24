import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TabArrowLeft24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.14 5.75A2.75 2.75 0 015.9 3h12.5a2.75 2.75 0 012.75 2.75v6.37a6.48 6.48 0 00-1.5-.76V5.75c0-.69-.56-1.25-1.25-1.25H5.9c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25h5.42c.18.53.42 1.04.71 1.5H5.9a2.75 2.75 0 01-2.75-2.75V5.75z" fill={primaryFill} /><path d="M23 17.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-5.65-2.15a.5.5 0 00-.7-.7l-2.5 2.5a.5.5 0 000 .7l2.5 2.5a.5.5 0 00.7-.7L15.71 18h4.8a.5.5 0 100-1h-4.8l1.64-1.65z" fill={primaryFill} /></svg>;
};

export default TabArrowLeft24Regular;