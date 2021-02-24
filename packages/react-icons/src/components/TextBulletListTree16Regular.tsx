import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextBulletListTree16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 5.5a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M2 9a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M7 11.5a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M5.5 4a.5.5 0 000 1h9a.5.5 0 000-1h-9z" fill={primaryFill} /><path d="M5 8c0-.28.22-.5.5-.5h9a.5.5 0 010 1h-9A.5.5 0 015 8z" fill={primaryFill} /><path d="M9.5 11a.5.5 0 000 1h5a.5.5 0 000-1h-5z" fill={primaryFill} /></svg>;
};

export default TextBulletListTree16Regular;