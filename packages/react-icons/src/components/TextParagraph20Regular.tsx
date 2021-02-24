import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextParagraph20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.5 8a2.5 2.5 0 000 5h.5V8h-.5zm.5 6h-.5a3.5 3.5 0 110-7h4a.5.5 0 010 1H17v9.5a.5.5 0 01-1 0V8h-1v9.5a.5.5 0 01-1 0V14z" fill={primaryFill} /><path d="M2.5 5a.5.5 0 000 1h15a.5.5 0 000-1h-15z" fill={primaryFill} /><path d="M9.26 9H2.5a.5.5 0 000 1h6.53c.04-.35.11-.68.23-1z" fill={primaryFill} /><path d="M9.76 13H2.5a.5.5 0 000 1h8.17a4.53 4.53 0 01-.91-1z" fill={primaryFill} /></svg>;
};

export default TextParagraph20Regular;