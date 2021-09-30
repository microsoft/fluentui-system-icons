import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.53 11.72l-.08-.07a.75.75 0 00-.98.07l-2.72 2.72V7.65A.75.75 0 0012 7h-.1a.75.75 0 00-.65.75v6.7l-2.72-2.73-.08-.07a.75.75 0 00-.98 1.13l4 4 .08.07c.3.22.71.2.98-.07l4-4 .07-.08c.22-.3.2-.71-.07-.98z" fill={primaryFill} /><path d="M6.25 3A3.25 3.25 0 003 6.25v11.5C3 19.55 4.46 21 6.25 21h11.5c1.8 0 3.25-1.46 3.25-3.25V6.25C21 4.45 19.54 3 17.75 3H6.25zM4.5 6.25c0-.97.78-1.75 1.75-1.75h11.5c.97 0 1.75.78 1.75 1.75v11.5c0 .97-.78 1.75-1.75 1.75H6.25c-.97 0-1.75-.78-1.75-1.75V6.25z" fill={primaryFill} /></svg>;
}

const ArrowSquareDown24Regular = wrapIcon(rawSvg({}), 'ArrowSquareDown24Regular');
export default ArrowSquareDown24Regular;
      