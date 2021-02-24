import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Dialpad24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 17.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm0-5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm5 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm-10 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm5-5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm5 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm-10 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm5-5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm5 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm-10 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" fill={primaryFill} /></svg>;
};

export default Dialpad24Regular;