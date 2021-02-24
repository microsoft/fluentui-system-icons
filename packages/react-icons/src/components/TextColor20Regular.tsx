import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextColor20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.46 2.31a.5.5 0 00-.92 0l-3 7.5a.5.5 0 10.92.38L8.54 7.5h2.92l1.08 2.69a.5.5 0 10.92-.38l-3-7.5zM10 3.85l1.06 2.65H8.94L10 3.85z" fill={primaryFill} /><path d="M4.5 12c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-11zM4 13.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v3a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-3z" fill={primaryFill} /></svg>;
};

export default TextColor20Regular;