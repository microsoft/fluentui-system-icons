import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextGrammarArrowRight24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.75 5h18.5a.75.75 0 01.1 1.5H2.75a.75.75 0 01-.1-1.5h.1z" fill={primaryFill} /><path d="M21.25 9H2.65a.75.75 0 00.1 1.5h18.6a.75.75 0 00-.1-1.5z" fill={primaryFill} /><path d="M2.75 14.5h8.98c.29-.55.65-1.06 1.08-1.5H2.65a.75.75 0 00.1 1.5z" fill={primaryFill} /><path d="M2.75 17h8.27a6.62 6.62 0 00.06 1.5H2.75a.75.75 0 01-.1-1.5h.1z" fill={primaryFill} /><path d="M12 17.5a5.5 5.5 0 1011 0 5.5 5.5 0 00-11 0zm6.35 2.85l-.07.06a.5.5 0 01-.64-.06l-.05-.07a.5.5 0 01.05-.63L19.3 18H14.4a.5.5 0 01-.41-.5v-.09a.5.5 0 01.5-.41h4.79l-1.65-1.65-.05-.07a.5.5 0 01.76-.63l2.52 2.51.05.07.03.06.03.08.01.09v.1l-.02.1-.02.05-.04.08-.04.05-2.52 2.51z" fill={primaryFill} /></svg>;
};

export default TextGrammarArrowRight24Regular;