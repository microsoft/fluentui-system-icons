import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Signed24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.84 2.03l.32.14 1.29.63c.35.17.75.17 1.1 0l1.28-.63a2.75 2.75 0 013.69 1.25l.07.17.06.16.46 1.36c.13.36.42.65.78.78l1.36.46a2.75 2.75 0 011.58 3.81l-.63 1.29c-.17.35-.17.75 0 1.1l.63 1.28a2.75 2.75 0 01-1.58 3.82l-1.36.46c-.36.13-.65.42-.78.78l-.46 1.36a2.75 2.75 0 01-3.82 1.58l-1.28-.63a1.25 1.25 0 00-1.1 0l-1.29.63a2.75 2.75 0 01-3.81-1.58l-.46-1.36a1.25 1.25 0 00-.78-.78l-1.36-.46a2.75 2.75 0 01-1.58-3.82l.63-1.28c.17-.35.17-.75 0-1.1l-.63-1.29a2.75 2.75 0 011.58-3.81l1.36-.46c.36-.13.65-.42.78-.78l.46-1.36a2.75 2.75 0 013.49-1.72zm5.63 6.94l-5.42 5.42-1.97-2.37a.75.75 0 10-1.16.96l2.5 3c.29.34.8.36 1.11.05l6-6a.75.75 0 10-1.06-1.06z" fill={primaryFill} /></svg>;
};

export default Signed24Filled;