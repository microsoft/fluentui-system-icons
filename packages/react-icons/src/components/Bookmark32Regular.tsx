import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Bookmark32Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 7.2A4.2 4.2 0 0110.2 3h11.6A4.2 4.2 0 0126 7.2V28a1 1 0 01-1.59.81L16 22.73l-8.41 6.08A1 1 0 016 28V7.2zM10.2 5A2.2 2.2 0 008 7.2v18.84l7.41-5.35a1 1 0 011.18 0L24 26.04V7.2A2.2 2.2 0 0021.8 5H10.2z" fill={primaryFill} /></svg>;
};

export default Bookmark32Regular;