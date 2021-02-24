import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const City16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 1c.28 0 .5.22.5.5V2h1c.83 0 1.5.67 1.5 1.5V6h1.5c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 012 12.5V7.8c0-.51.26-.99.68-1.27l2-1.3c.1-.06.21-.11.32-.15V3.5C5 2.67 5.67 2 6.5 2h1v-.5c0-.28.22-.5.5-.5zM6 5.08c.56.2 1 .73 1 1.42V13h2V7.5c0-.65.42-1.2 1-1.41V3.5a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5v1.58zM10.5 7a.5.5 0 00-.5.5V13h2.5a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5h-2zm-5.27-.92l-2 1.3a.5.5 0 00-.23.41v4.71c0 .28.22.5.5.5H6V6.5a.5.5 0 00-.77-.42z" fill={primaryFill} /></svg>;
};

export default City16Regular;