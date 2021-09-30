import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.75 2.5a.75.75 0 000 1.5h10.5a.75.75 0 000-1.5H2.75z" fill={primaryFill} /><path d="M4.44 12.44l.94-.94H2.75a.75.75 0 000 1.5h1.33c.08-.2.2-.4.36-.56z" fill={primaryFill} /><path d="M2.75 8.5H6c0 .64.4 1.19.97 1.4l-.1.1H2.76a.75.75 0 010-1.5z" fill={primaryFill} /><path d="M2.75 5.5a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5z" fill={primaryFill} /><path d="M11 5.44a.5.5 0 00-1 0l-.09.73a2 2 0 01-1.74 1.74l-.73.1a.5.5 0 000 .99l.73.09a2 2 0 011.74 1.74l.1.73a.5.5 0 00.99 0l.09-.73a2 2 0 011.74-1.74l.73-.1a.5.5 0 000-.99l-.73-.09a2 2 0 01-1.74-1.74l-.1-.73z" fill={primaryFill} /><path d="M8.85 10.15c.2.2.2.5 0 .7l-3 3a.5.5 0 11-.7-.7l3-3c.2-.2.5-.2.7 0z" fill={primaryFill} /></svg>;
}

const TextGrammarWand16Filled = wrapIcon(rawSvg({}), 'TextGrammarWand16Filled');
export default TextGrammarWand16Filled;
      