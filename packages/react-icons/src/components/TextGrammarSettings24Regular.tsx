import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextGrammarSettings24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.02 17H2.65a.75.75 0 00.1 1.5h8.33a6.55 6.55 0 01-.06-1.5zm-8.27-4h10.06c-.43.44-.8.95-1.08 1.5H2.75a.75.75 0 01-.1-1.5h.1zm18.5-4H2.65a.75.75 0 00.1 1.5h18.6a.75.75 0 00-.1-1.5zm0-4H2.65a.75.75 0 00.1 1.5h18.6a.75.75 0 00-.1-1.5zm-6.97 8.98a2 2 0 01-1.44 2.5l-.59.14a5.73 5.73 0 000 1.8l.55.13a2 2 0 011.45 2.51l-.19.63c.44.39.94.7 1.49.93l.49-.52a2 2 0 012.9 0l.5.52a5.28 5.28 0 001.48-.91l-.2-.69a2 2 0 011.44-2.5l.59-.14a5.72 5.72 0 000-1.8l-.55-.13a2 2 0 01-1.45-2.51l.19-.63c-.44-.4-.94-.7-1.49-.93l-.49.52a2 2 0 01-2.9 0l-.5-.52c-.54.22-1.04.53-1.48.9l.2.7zM17.5 19c-.8 0-1.45-.67-1.45-1.5S16.7 16 17.5 16c.8 0 1.45.67 1.45 1.5S18.3 19 17.5 19z" fill={primaryFill} /></svg>;
};

export default TextGrammarSettings24Regular;