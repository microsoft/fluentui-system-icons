import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ScaleFit16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 5v6c0 1.1.9 2 2 2h8a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2zm7.65 4.86a.5.5 0 010-.71l.65-.65H8.75a.5.5 0 010-1h1.54l-.64-.64a.5.5 0 11.7-.71l1.5 1.5c.2.2.2.51 0 .7l-1.5 1.5a.5.5 0 01-.7 0zm-3.3-3.71c.2.2.2.51 0 .7l-.64.65h1.54a.5.5 0 010 1H5.7l.65.65a.5.5 0 11-.7.7l-1.5-1.5a.5.5 0 010-.7l1.5-1.5c.19-.2.5-.2.7 0z" fill={primaryFill} /></svg>;
};

export default ScaleFit16Filled;