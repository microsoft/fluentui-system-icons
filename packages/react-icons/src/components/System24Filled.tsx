import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const System24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.95 5h14.1C20.68 5 22 6.3 22 7.92v8.16A2.93 2.93 0 0119.05 19H4.95A2.93 2.93 0 012 16.08V7.92A2.93 2.93 0 014.95 5zm0 2a.93.93 0 00-.95.92v8.16c0 .5.42.92.95.92h14.1c.53 0 .95-.41.95-.92V7.92c0-.5-.42-.92-.95-.92H4.95z" fill={primaryFill} /></svg>;
};

export default System24Filled;