import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextDirectionHorizontalLtr20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 3c.2 0 .4.13.47.32l3 8a.5.5 0 01-.94.36L8.03 9H4.97l-1 2.68a.5.5 0 01-.94-.36l3-8A.5.5 0 016.5 3zm0 1.92L5.35 8h2.3L6.5 4.92z" fill={primaryFill} /><path d="M14.85 4.15a.5.5 0 10-.7.7L15.29 6H10.5a.5.5 0 000 1h4.8l-1.15 1.15a.5.5 0 10.7.7l2-2a.5.5 0 000-.7l-2-2z" fill={primaryFill} /><path d="M14.85 12.15a.5.5 0 00-.7.7L15.29 14H3.5a.5.5 0 000 1h11.8l-1.15 1.15a.5.5 0 00.7.7l2-2a.5.5 0 000-.7l-2-2z" fill={primaryFill} /></svg>;
};

export default TextDirectionHorizontalLtr20Regular;