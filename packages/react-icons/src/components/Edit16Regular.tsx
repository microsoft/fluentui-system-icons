import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Edit16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.66 2.34a2 2 0 010 2.83l-7.39 7.39a2.5 2.5 0 01-1.16.66l-2.3.57a.5.5 0 01-.6-.6l.57-2.3c.11-.44.34-.84.66-1.16l7.39-7.39a2 2 0 012.83 0zm-3.54 2.12l-5.97 5.98c-.2.19-.33.43-.4.7l-.37 1.48 1.49-.37c.26-.07.5-.2.7-.4l5.97-5.97-1.42-1.42zm1.42-1.4l-.71.7 1.41 1.41.71-.7a1 1 0 00-1.41-1.42z" fill={primaryFill} /></svg>;
};

export default Edit16Regular;