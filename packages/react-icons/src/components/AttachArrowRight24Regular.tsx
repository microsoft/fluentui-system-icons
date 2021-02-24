import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const AttachArrowRight24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.77 3.74a6 6 0 018.87 8.07 6.46 6.46 0 00-1.49-.6l.05-.04A4.5 4.5 0 0013 4.64l-.17.16-.01.02-9.54 9.53a.75.75 0 01-1.13-.97l.07-.09 9.55-9.55zm-.56 15.41c.14.53.35 1.04.61 1.51l-.38.38-.03.03a3.72 3.72 0 01-5.4-5.1l.05-.06.08-.09.14-.15 7.44-7.45c.27-.27.68-.3.98-.07l.08.07c.27.26.3.68.08.98l-.08.08-7.59 7.61a2.23 2.23 0 003.17 3.1l.85-.84zM23 17.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-8.5-.5a.5.5 0 000 1h4.8l-1.65 1.65a.5.5 0 00.7.7l2.5-2.5a.5.5 0 000-.7l-2.5-2.5a.5.5 0 00-.7.7L19.29 17H14.5z" fill={primaryFill} /></svg>;
};

export default AttachArrowRight24Regular;