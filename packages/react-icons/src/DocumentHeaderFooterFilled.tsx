import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 4c0-1.1.9-2 2-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 1a1 1 0 001 1h6a1 1 0 100-2H7a1 1 0 00-1 1zm0 10a1 1 0 001 1h6a1 1 0 100-2H7a1 1 0 00-1 1z" fill={primaryFill} /></svg>;
}

const DocumentHeaderFooterFilled = wrapIcon(rawSvg({}), 'DocumentHeaderFooterFilled');
export default DocumentHeaderFooterFilled;
      