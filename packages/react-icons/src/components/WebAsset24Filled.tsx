import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WebAsset24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.75 3C20.55 3 22 4.46 22 6.25v11.5c0 1.8-1.46 3.25-3.25 3.25H5.25A3.25 3.25 0 012 17.75V6.25C2 4.45 3.46 3 5.25 3h13.5zm-1.5 3.5H6.75a.75.75 0 100 1.5h10.5a.75.75 0 000-1.5z" fill={primaryFill} /></svg>;
};

export default WebAsset24Filled;