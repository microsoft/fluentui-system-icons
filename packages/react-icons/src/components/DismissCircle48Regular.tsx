import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DismissCircle48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 4a20 20 0 110 40 20 20 0 010-40zm0 2.5a17.5 17.5 0 100 35 17.5 17.5 0 000-35zm-6.22 9.52l.1.1L24 22.23l6.12-6.11a1.25 1.25 0 011.66-.1l.1.1c.46.45.49 1.17.1 1.66l-.1.1L25.77 24l6.11 6.12c.46.45.49 1.17.1 1.66l-.1.1c-.45.46-1.17.49-1.66.1l-.1-.1L24 25.77l-6.12 6.11c-.45.46-1.17.49-1.66.1l-.1-.1a1.25 1.25 0 01-.1-1.66l.1-.1L22.23 24l-6.11-6.12a1.25 1.25 0 01-.1-1.66l.1-.1a1.25 1.25 0 011.66-.1z" fill={primaryFill} /></svg>;
};

export default DismissCircle48Regular;