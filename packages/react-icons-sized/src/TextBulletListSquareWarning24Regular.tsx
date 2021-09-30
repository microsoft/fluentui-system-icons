import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.25 3C4.01 3 3 4 3 5.25v13.5C3 19.99 4 21 5.25 21h5.8c.05-.26.15-.51.28-.74l.43-.76H5.25a.75.75 0 01-.75-.75V5.25c0-.41.34-.75.75-.75h13.5c.41 0 .75.34.75.75V13l.17.26L21 15.59V5.25C21 4.01 20 3 18.75 3H5.25z" fill={primaryFill} /><path d="M17.5 12a.75.75 0 00-.75-.75h-5.5a.75.75 0 100 1.5h4.47A2.5 2.5 0 0117.5 12z" fill={primaryFill} /><path d="M14.34 15h-3.09a.75.75 0 100 1.5h2.23l.86-1.5z" fill={primaryFill} /><path d="M7.75 9.25a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M11.25 7.5a.75.75 0 000 1.5h5.5a.75.75 0 000-1.5h-5.5z" fill={primaryFill} /><path d="M7.75 13a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M7.75 16.75a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M17.1 13.05a1.49 1.49 0 011.7.7l4 7A1.5 1.5 0 0121.5 23h-8a1.49 1.49 0 01-1.5-1.5c0-.26.07-.52.2-.75l4-7c.2-.36.54-.6.9-.7zm.9 2.45a.5.5 0 00-1 0v3a.5.5 0 001 0v-3zm-.5 6a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /></svg>;
}

const TextBulletListSquareWarning24Regular = wrapIcon(rawSvg({}), 'TextBulletListSquareWarning24Regular');
export default TextBulletListSquareWarning24Regular;
      