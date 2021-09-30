import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 5a.5.5 0 010 1h-15a.5.5 0 010-1h15z" fill={primaryFill} /><path d="M17.5 8a.5.5 0 010 1h-15a.5.5 0 010-1h15z" fill={primaryFill} /><path d="M10.26 11c-.26.3-.48.64-.66 1H2.5a.5.5 0 010-1h7.76z" fill={primaryFill} /><path d="M9 14.5c0 .17 0 .34.02.5H2.5a.5.5 0 010-1h6.52l-.02.5z" fill={primaryFill} /><path d="M14.5 19a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm1.15-2.65l-1.15-1.14-1.15 1.14a.5.5 0 01-.7-.7l1.14-1.15-1.14-1.15a.5.5 0 01.7-.7l1.15 1.14 1.15-1.14a.5.5 0 01.7.7l-1.14 1.15 1.14 1.15a.5.5 0 01-.7.7z" fill={primaryFill} /></svg>;
}

const TextGrammarDismiss20Regular = wrapIcon(rawSvg({}), 'TextGrammarDismiss20Regular');
export default TextGrammarDismiss20Regular;
      