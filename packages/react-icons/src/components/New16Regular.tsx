import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const New16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 11h5a.5.5 0 01.1 1H3.5a.5.5 0 01-.09-1h5.1-5zm1.65-5.85a.5.5 0 01.64-.06l.07.06 4 4a.5.5 0 01-.64.76l-.07-.06-4-4a.5.5 0 010-.7zM11.5 3a.5.5 0 01.5.41V8.5a.5.5 0 01-.99.09V3.5c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
};

export default New16Regular;