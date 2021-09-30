import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.5 19a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm.62-2a.62.62 0 11-1.24 0 .62.62 0 011.24 0zm1.23-3.55c0 .59-.21.91-.72 1.32l-.28.22c-.25.19-.33.3-.35.44v.16a.5.5 0 01-1-.09c0-.57.21-.88.72-1.29l.27-.21c.3-.23.36-.35.36-.55 0-.55-.38-.95-.85-.95-.5 0-.86.37-.85.95a.5.5 0 11-1 0c-.01-1.13.8-1.95 1.85-1.95 1.03 0 1.85.85 1.85 1.95z" fill={primaryFill} /><path d="M9 2a4 4 0 100 8 4 4 0 000-8z" fill={primaryFill} /><path d="M4 11a2 2 0 00-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 009 18c.41 0 .82-.02 1.21-.06a5.48 5.48 0 01.05-6.94H4z" fill={primaryFill} /></svg>;
}

const PersonQuestionMark20Filled = wrapIcon(rawSvg({}), 'PersonQuestionMark20Filled');
export default PersonQuestionMark20Filled;
      