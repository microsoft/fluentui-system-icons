import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextGrammarSettings20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 5.75a.75.75 0 00-.75-.75H2.75a.75.75 0 100 1.5h14.5c.41 0 .75-.34.75-.75z" fill={primaryFill} /><path d="M18 8.75a.75.75 0 00-.75-.75H2.75a.75.75 0 100 1.5h9.46a5.48 5.48 0 014.58 0h.46c.41 0 .75-.34.75-.75z" fill={primaryFill} /><path d="M9.1 15.5H2.74a.75.75 0 010-1.5h6.27a5.57 5.57 0 00.07 1.5z" fill={primaryFill} /><path d="M9.37 12.5H2.75a.75.75 0 010-1.5h7.5a5.5 5.5 0 00-.88 1.5z" fill={primaryFill} /><path d="M10.42 13.06a2 2 0 010 2.88l-.15.14c.17.49.41.94.72 1.33l.2-.06a2 2 0 012.51 1.45l.07.3a4.38 4.38 0 001.46 0l.07-.3a2 2 0 012.51-1.45l.2.06c.3-.4.55-.84.72-1.33l-.15-.14a2 2 0 010-2.88l.15-.14a4.7 4.7 0 00-.72-1.33l-.2.06a2 2 0 01-2.51-1.45l-.07-.3a4.38 4.38 0 00-1.46 0l-.07.3a2 2 0 01-2.51 1.45l-.2-.06c-.3.4-.55.84-.72 1.33l.15.14zm4.08 2.7c-.68 0-1.23-.56-1.23-1.26s.55-1.27 1.23-1.27c.68 0 1.23.57 1.23 1.27 0 .7-.55 1.27-1.23 1.27z" fill={primaryFill} /></svg>;
};

export default TextGrammarSettings20Filled;