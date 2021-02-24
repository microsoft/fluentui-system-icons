import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PictureInPicture16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.75 8a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /><path d="M1 5.5A2.5 2.5 0 013.5 3h9A2.5 2.5 0 0115 5.5v5a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 011 10.5v-5zm4.5.5a.5.5 0 00-.5.5v4c0 .08.02.16.06.23l2.59-2.58c.2-.2.5-.2.7 0L11.21 11h1.29a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5h-7zm4.3 5L8 9.2 6.2 11h3.6z" fill={primaryFill} /></svg>;
};

export default PictureInPicture16Filled;