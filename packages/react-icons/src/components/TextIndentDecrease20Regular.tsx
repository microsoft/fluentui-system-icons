import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextIndentDecrease20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 4.5c0-.28.22-.5.5-.5h8a.5.5 0 110 1h-8a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M3.56 7.73a.5.5 0 01.7.7L3.22 9.5l1.06 1.06a.5.5 0 11-.7.7l-1.42-1.4a.5.5 0 010-.71l1.41-1.42z" fill={primaryFill} /><path d="M6.5 9a.5.5 0 000 1h11a.5.5 0 100-1h-11z" fill={primaryFill} /><path d="M6 14.5c0-.28.22-.5.5-.5h6a.5.5 0 110 1h-6a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
};

export default TextIndentDecrease20Regular;