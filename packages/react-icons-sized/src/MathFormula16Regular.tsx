import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.33 1.23a2.5 2.5 0 00-3.52 2.1L4.7 5H3.5a.5.5 0 000 1h1.13l-.44 6.6a1.5 1.5 0 01-2.11 1.26l-.38-.17a.5.5 0 10-.4.92l.37.16a2.5 2.5 0 003.52-2.1L5.63 6H7.5a.5.5 0 000-1H5.7l.1-1.6a1.5 1.5 0 012.12-1.26l.37.17a.5.5 0 10.42-.92l-.38-.16zm-.17 6.82a.25.25 0 01.4.05l1.32 2.32-2.73 2.73a.5.5 0 00.7.7l2.54-2.53 1.19 2.08c.4.71 1.39.84 1.97.26l.3-.3a.5.5 0 00-.7-.71l-.3.3a.25.25 0 01-.4-.05l-1.33-2.32 2.73-2.73a.5.5 0 10-.7-.7L10.6 9.68 9.42 7.6a1.25 1.25 0 00-1.97-.26l-.3.3a.5.5 0 10.7.71l.3-.3z" fill={primaryFill} /></svg>;
}

const MathFormula16Regular = wrapIcon(rawSvg({}), 'MathFormula16Regular');
export default MathFormula16Regular;
      