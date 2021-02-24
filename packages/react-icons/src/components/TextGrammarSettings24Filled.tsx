import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextGrammarSettings24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.02 17H2.88A1 1 0 003 19h8.17a6.52 6.52 0 01-.15-2z" fill={primaryFill} /><path d="M11.5 15H3a1 1 0 01-.12-2h9.93a6.5 6.5 0 00-1.31 2z" fill={primaryFill} /><path d="M3 11a1 1 0 01-.12-2H21a1 1 0 01.12 2H3z" fill={primaryFill} /><path d="M21 5H2.88A1 1 0 003 7h18.12A1 1 0 0021 5z" fill={primaryFill} /><path d="M17.5 12c.3 0 .58.02.86.07l.17.72a2 2 0 002.42 1.47l.1-.02.6-.18c.36.46.65 1 .85 1.57l-.45.43a2 2 0 00-.17 2.7l.14.15.48.46c-.2.57-.5 1.1-.85 1.57l-.6-.18a2 2 0 00-2.49 1.35l-.03.1-.17.72a5.17 5.17 0 01-1.72 0l-.17-.72a2 2 0 00-2.42-1.47l-.1.02-.6.18c-.36-.47-.65-1-.85-1.57l.45-.43a2 2 0 00.05-2.83l-.05-.05-.45-.43c.2-.58.5-1.1.85-1.57l.6.18a2 2 0 002.49-1.35l.03-.1.17-.72c.28-.05.57-.07.86-.07zm0 4c-.8 0-1.45.67-1.45 1.5S16.7 19 17.5 19c.8 0 1.45-.67 1.45-1.5S18.3 16 17.5 16z" fill={primaryFill} /></svg>;
};

export default TextGrammarSettings24Filled;