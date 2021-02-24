import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const EmojiSurprise20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm5.5-.5a1 1 0 100-2 1 1 0 000 2zm4.25 3a1.75 1.75 0 10-3.5 0 1.75 1.75 0 003.5 0zm.75-3a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /></svg>;
};

export default EmojiSurprise20Filled;