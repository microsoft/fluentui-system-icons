import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 5a.5.5 0 010 1h-15a.5.5 0 010-1h15z" fill={primaryFill} /><path d="M17.5 8a.5.5 0 010 1h-15a.5.5 0 010-1h15z" fill={primaryFill} /><path d="M9 14.5c0-.17 0-.34.02-.5H2.5a.5.5 0 000 1h6.52a5.57 5.57 0 01-.02-.5z" fill={primaryFill} /><path d="M9.6 12c.18-.36.4-.7.66-1H2.5a.5.5 0 000 1h7.1z" fill={primaryFill} /><path d="M14.5 10a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm-1.12 5.77l-1-1.23-.06-.06a.5.5 0 00-.72.7l1.34 1.64.07.07c.2.16.48.15.67-.02l3.5-3.65.07-.06a.5.5 0 00-.75-.66l-3.12 3.27z" fill={primaryFill} /></svg>;
}

const TextGrammarCheckmark20Regular = wrapIcon(rawSvg({}), 'TextGrammarCheckmark20Regular');
export default TextGrammarCheckmark20Regular;
      