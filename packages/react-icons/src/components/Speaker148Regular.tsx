import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Speaker148Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M25.08 6.42A1.75 1.75 0 0128 7.72v32.56c0 1.51-1.8 2.31-2.92 1.3l-8.2-7.36c-.88-.79-2-1.22-3.18-1.22H9a5.25 5.25 0 01-5.25-5.25v-7.5C3.75 17.35 6.1 15 9 15h4.7c1.17 0 2.3-.43 3.18-1.22l8.2-7.36zm.42 2.98l-6.95 6.25a7.25 7.25 0 01-4.85 1.85H9a2.75 2.75 0 00-2.75 2.75v7.5A2.75 2.75 0 009 30.5h4.7c1.79 0 3.51.66 4.85 1.85l6.95 6.25V9.4z" fill={primaryFill} /><path d="M32.33 14.4c.47-.5 1.26-.54 1.77-.07v.01l.02.02a3.13 3.13 0 01.18.17c.12.12.27.3.45.51a13.98 13.98 0 01-.59 18.56l-.01.02-.03.03h-.01v.01a1.25 1.25 0 01-1.71-1.82l.01-.02a4.2 4.2 0 00.43-.47 11.48 11.48 0 00-.43-15.17l-.01-.02a1.25 1.25 0 01-.07-1.76z" fill={primaryFill} /></svg>;
};

export default Speaker148Regular;