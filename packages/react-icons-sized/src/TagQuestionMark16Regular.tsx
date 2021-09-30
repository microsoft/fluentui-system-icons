import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 12.88a.62.62 0 110 1.25.62.62 0 010-1.25zM12.5 2c.83 0 1.5.67 1.5 1.5v3.64c0 .4-.16.78-.44 1.06l-.1.1a4.02 4.02 0 00-.77-.65l.16-.16a.5.5 0 00.15-.35V3.5a.5.5 0 00-.5-.5H8.78a.5.5 0 00-.27.15L3.15 8.5a.5.5 0 000 .71l3.64 3.63a.5.5 0 00.24.14 4 4 0 00.7.89 1.5 1.5 0 01-1.65-.32L2.44 9.93a1.5 1.5 0 010-2.12L7.8 2.44c.25-.25.57-.4.91-.43L8.86 2h3.64zm-2 6c1.03 0 1.85.85 1.85 1.95 0 .59-.21.91-.72 1.32l-.28.22c-.25.19-.33.3-.35.44v.16a.5.5 0 01-1-.09c0-.57.21-.88.72-1.29l.27-.21c.3-.23.36-.35.36-.55 0-.56-.38-.95-.85-.95-.5 0-.86.37-.85.95a.5.5 0 01-1 0C8.64 8.83 9.45 8 10.5 8zm.02-3.13a.62.62 0 110 1.25.62.62 0 010-1.25z" fill={primaryFill} /></svg>;
}

const TagQuestionMark16Regular = wrapIcon(rawSvg({}), 'TagQuestionMark16Regular');
export default TagQuestionMark16Regular;
      