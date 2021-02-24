import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextboxVertical24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.25 21A2.75 2.75 0 0021 18.25V5.75A2.75 2.75 0 0018.25 3H5.75A2.75 2.75 0 003 5.75v12.5A2.75 2.75 0 005.75 21h12.5zm-5.75-6.75a.75.75 0 01-1.5.1v-7.6a.75.75 0 011.5-.1v7.6zm-4-7.5v10.5a.75.75 0 01-1.5.1V6.75a.75.75 0 011.5-.1v.1zm8 10.5a.75.75 0 01-1.5.1V6.75a.75.75 0 011.5-.1v10.6z" fill={primaryFill} /></svg>;
};

export default TextboxVertical24Filled;