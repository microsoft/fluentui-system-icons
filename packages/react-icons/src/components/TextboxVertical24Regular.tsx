import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextboxVertical24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21 18.25A2.75 2.75 0 0118.25 21H5.75A2.75 2.75 0 013 18.25V5.75A2.75 2.75 0 015.75 3h12.5A2.75 2.75 0 0121 5.75v12.5zm-1.5 0V5.75c0-.69-.56-1.25-1.25-1.25H5.75c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25zm-7-4v-7.6a.75.75 0 00-1.5.1v7.6a.75.75 0 001.5-.1zm-4-7.5v10.5a.75.75 0 01-1.5.1V6.75a.75.75 0 011.5-.1v.1zm8 10.5V6.65a.75.75 0 00-1.5.1v10.6a.75.75 0 001.5-.1z" fill={primaryFill} /></svg>;
};

export default TextboxVertical24Regular;