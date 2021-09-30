import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.5 5a.5.5 0 000 1h15a.5.5 0 000-1h-15z" fill={primaryFill} /><path d="M2.5 8a.5.5 0 000 1h15a.5.5 0 000-1h-15z" fill={primaryFill} /><path d="M9 14.5c0-.17 0-.34.02-.5H2.5a.5.5 0 000 1h6.52a5.57 5.57 0 01-.02-.5z" fill={primaryFill} /><path d="M9.6 12c.18-.36.4-.7.66-1H2.5a.5.5 0 000 1h7.1z" fill={primaryFill} /><path d="M19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM14.5 12a.5.5 0 00-.5.5v2a.5.5 0 001 0v-2a.5.5 0 00-.5-.5zm0 5.13a.62.62 0 100-1.25.62.62 0 000 1.24z" fill={primaryFill} /></svg>;
}

const TextGrammarError20Regular = wrapIcon(rawSvg({}), 'TextGrammarError20Regular');
export default TextGrammarError20Regular;
      