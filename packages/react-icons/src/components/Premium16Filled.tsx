import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Premium16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.75 2a.75.75 0 00-.66.4l-2 3.75a.75.75 0 00.07.81l6.25 8a.75.75 0 001.18 0l6.25-8a.75.75 0 00.07-.81l-2-3.75a.75.75 0 00-.66-.4h-8.5zm-.88 4L4.2 3.5h1.28L4.85 6H2.87zm.61 1.5h1.55l1.03 3.3-2.58-3.3zm3.12 0h2.8L8 11.99 6.6 7.5zm4.37 0h1.55l-2.58 3.3 1.03-3.3zM13.13 6h-1.98l-.63-2.5h1.28L13.13 6zM9.6 6H6.4l.62-2.5h1.96L9.6 6z" fill={primaryFill} /></svg>;
};

export default Premium16Filled;