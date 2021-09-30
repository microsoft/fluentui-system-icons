import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 2a2 2 0 00-2 2v12c0 1.1.9 2 2 2v-3.5a.5.5 0 011 0V18h6v-3.5a.5.5 0 011 0V18a2 2 0 002-2V4a2 2 0 00-2-2v3.5a.5.5 0 01-1 0V2H7v3.5a.5.5 0 01-1 0V2zm.5 11a.5.5 0 01-.5-.5v-5a.5.5 0 011 0v5a.5.5 0 01-.5.5zm7 0a.5.5 0 01-.5-.5v-5a.5.5 0 011 0v5a.5.5 0 01-.5.5z" fill={primaryFill} /></svg>;
}

const DocumentMarginsFilled = wrapIcon(rawSvg({}), 'DocumentMarginsFilled');
export default DocumentMarginsFilled;
      