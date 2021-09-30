import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 5.5a.5.5 0 00-.5-.5h-15a.5.5 0 000 1h15a.5.5 0 00.5-.5zm0 3a.5.5 0 00-.5-.5h-15a.5.5 0 000 1h15a.5.5 0 00.5-.5zm-9 6c0 .17 0 .34.02.5H2.5a.5.5 0 010-1h6.52l-.02.5zm1.26-3.5c-.26.3-.48.64-.66 1H2.5a.5.5 0 010-1h7.76zm1.8.44a2 2 0 01-1.42 2.48l-.47.12a4.7 4.7 0 00.01 1.01l.35.09A2 2 0 0112 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 012.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 011.43-2.48l.46-.12a4.73 4.73 0 00-.01-1.01l-.35-.09A2 2 0 0117 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 01-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.16.55zm2.44 4.06a1 1 0 110-2 1 1 0 010 2z" fill={primaryFill} /></svg>;
}

const TextGrammarSettingsRegular = wrapIcon(rawSvg({}), 'TextGrammarSettingsRegular');
export default TextGrammarSettingsRegular;
      