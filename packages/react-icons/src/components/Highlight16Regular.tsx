import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Highlight16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.5 1c.28 0 .5.22.5.5v3c0 .28.22.5.5.5h9a.5.5 0 00.5-.5v-3a.5.5 0 011 0v3c0 .65-.42 1.2-1 1.42V7a2 2 0 01-2 2v1.74c0 .51-.26.99-.69 1.26l-4.54 2.92A.5.5 0 015 14.5V9a2 2 0 01-2-2V5.91c-.58-.2-1-.76-1-1.41v-3c0-.28.22-.5.5-.5zM6 9v4.58l3.77-2.42a.5.5 0 00.23-.42V9H6zM4 7a1 1 0 001 1h6a1 1 0 001-1V6H4v1z" fill={primaryFill} /></svg>;
};

export default Highlight16Regular;