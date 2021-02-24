import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FormNew48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 11.25C6 8.35 8.35 6 11.25 6h25.5C39.65 6 42 8.35 42 11.25v12.8c-.78-.5-1.62-.92-2.5-1.25V11.25a2.75 2.75 0 00-2.75-2.75h-25.5a2.75 2.75 0 00-2.75 2.75v25.5a2.75 2.75 0 002.75 2.75H22.8c.33.88.74 1.72 1.24 2.5H11.25A5.25 5.25 0 016 36.75v-25.5z" fill={primaryFill} /><path d="M10 21.5a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zm4.5-2a2 2 0 100 4 2 2 0 000-4z" fill={primaryFill} /><path d="M14.5 29a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm-2 4.5a2 2 0 114 0 2 2 0 01-4 0z" fill={primaryFill} /><path d="M21 20.25c0-.69.56-1.25 1.25-1.25h14.5a1.25 1.25 0 110 2.5h-14.5c-.69 0-1.25-.56-1.25-1.25z" fill={primaryFill} /><path d="M11.26 11.1a1.25 1.25 0 000 2.5h25.47a1.25 1.25 0 100-2.5H11.26z" fill={primaryFill} /><path d="M46 35a11 11 0 11-22 0 11 11 0 0122 0zm-10-7a1 1 0 10-2 0v6h-6a1 1 0 100 2h6v6a1 1 0 102 0v-6h6a1 1 0 100-2h-6v-6z" fill={primaryFill} /></svg>;
};

export default FormNew48Regular;