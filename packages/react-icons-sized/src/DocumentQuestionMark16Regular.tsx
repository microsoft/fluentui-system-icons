import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 1a2 2 0 00-2 2v2.2c.32-.09.66-.15 1-.18V3a1 1 0 011-1h3v2.5c0 .83.67 1.5 1.5 1.5H13v7a1 1 0 01-1 1H9.74c-.3.38-.67.71-1.07 1H12a2 2 0 002-2V5.42c0-.4-.16-.78-.44-1.06l-2.92-2.92A1.5 1.5 0 009.58 1H6zm4 3.5V2.21l2.8 2.8h-2.3a.5.5 0 01-.5-.5zm0 6a4.5 4.5 0 10-9 0 4.5 4.5 0 009 0zm-4.5 1.88a.62.62 0 110 1.25.62.62 0 010-1.25zm0-4.88c1.03 0 1.85.85 1.85 1.95 0 .59-.21.91-.72 1.32l-.28.22c-.25.19-.33.3-.35.44v.16a.5.5 0 01-1-.09c0-.57.21-.88.72-1.29l.27-.21c.3-.23.36-.35.36-.55 0-.56-.38-.95-.85-.95-.5 0-.86.37-.85.95a.5.5 0 11-1 0c-.01-1.13.8-1.95 1.85-1.95z" fill={primaryFill} /></svg>;
}

const DocumentQuestionMark16Regular = wrapIcon(rawSvg({}), 'DocumentQuestionMark16Regular');
export default DocumentQuestionMark16Regular;
      