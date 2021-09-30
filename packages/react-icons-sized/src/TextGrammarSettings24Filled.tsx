import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.02 17H2.88A1 1 0 003 19h8.17a6.52 6.52 0 01-.15-2zM21 11H3a1 1 0 01-.12-2H21a1 1 0 01.12 2H21zM3 15h8.5a6.5 6.5 0 011.31-2H2.88A1 1 0 003 15zM21 5H2.88A1 1 0 003 7h18.12A1 1 0 0021 5zm-6.72 8.98l-.2-.7c.44-.37.94-.68 1.48-.9l.5.52a2 2 0 002.9 0l.5-.52c.54.23 1.04.54 1.48.93l-.19.63a2 2 0 001.45 2.5l.54.14a5.73 5.73 0 010 1.8l-.58.15a2 2 0 00-1.44 2.5l.2.68c-.44.38-.94.7-1.48.91l-.5-.52a2 2 0 00-2.9 0l-.5.52a5.28 5.28 0 01-1.48-.93l.19-.63a2 2 0 00-1.45-2.5l-.54-.14a5.72 5.72 0 010-1.8l.58-.15a2 2 0 001.44-2.5zM17.5 19c.8 0 1.45-.67 1.45-1.5S18.3 16 17.5 16c-.8 0-1.45.67-1.45 1.5S16.7 19 17.5 19z" fill={primaryFill} /></svg>;
}

const TextGrammarSettings24Filled = wrapIcon(rawSvg({}), 'TextGrammarSettings24Filled');
export default TextGrammarSettings24Filled;
      