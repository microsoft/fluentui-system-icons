import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 1h3v3.5c0 .83.67 1.5 1.5 1.5H14v7a2 2 0 01-2 2H8.67A5.5 5.5 0 004 5.2V3c0-1.1.9-2 2-2zm4.5 4H14l-4-4v3.5c0 .28.22.5.5.5zm-.5 5.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4.5 1.88a.62.62 0 100 1.25.62.62 0 000-1.25zm0-4.88c-1.05 0-1.86.82-1.85 1.96a.5.5 0 101-.01c0-.58.36-.95.85-.95.47 0 .85.4.85.95 0 .2-.07.32-.36.55l-.27.21c-.51.4-.72.72-.72 1.29a.5.5 0 001 .09v-.16c.02-.14.1-.25.35-.44l.28-.22c.5-.41.72-.73.72-1.32 0-1.1-.82-1.95-1.85-1.95z" fill={primaryFill} /></svg>;
}

const DocumentQuestionMark16Filled = wrapIcon(rawSvg({}), 'DocumentQuestionMark16Filled');
export default DocumentQuestionMark16Filled;
      