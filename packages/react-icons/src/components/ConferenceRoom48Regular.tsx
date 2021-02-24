import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ConferenceRoom48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22.5 7.78l14.5 3c.58.12 1 .63 1 1.22v24c0 .6-.42 1.1-1 1.22l-14.5 3c-.77.16-1.5-.43-1.5-1.22V9c0-.8.73-1.38 1.5-1.22zM18 10v2.5h-5.5v23H18V38h-6.75c-.65 0-1.18-.5-1.24-1.12l-.01-.13v-25.5c0-.65.5-1.18 1.12-1.24l.13-.01H18zm5.5.54v26.93l12-2.49V13.02l-12-2.48zm3 11.96a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" fill={primaryFill} /></svg>;
};

export default ConferenceRoom48Regular;