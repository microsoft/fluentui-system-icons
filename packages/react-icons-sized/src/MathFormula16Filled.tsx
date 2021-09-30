import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.75 1.5a2.65 2.65 0 00-4.23 1.95L4.45 4.5h-.7a.75.75 0 000 1.5h.6l-.42 6.3c-.06.82-.9 1.37-1.68 1.09l-.24-.1a.75.75 0 00-.52 1.41l.25.1a2.75 2.75 0 003.69-2.4L5.85 6h1.4a.75.75 0 000-1.5h-1.3l.07-.95c.06-.92 1.1-1.4 1.83-.85l.2.15a.75.75 0 10.9-1.2l-.2-.15zm.89 6.17a1.5 1.5 0 00-2.34-.28l-.33.33a.75.75 0 001.06 1.06l.33-.33 1.2 1.94-2.34 2.33a.75.75 0 101.06 1.06l2.08-2.08 1 1.63c.51.83 1.66.96 2.34.28l.33-.33a.75.75 0 10-1.06-1.06l-.33.33-1.2-1.94 2.34-2.33a.75.75 0 00-1.06-1.06L10.64 9.3l-1-1.63z" fill={primaryFill} /></svg>;
}

const MathFormula16Filled = wrapIcon(rawSvg({}), 'MathFormula16Filled');
export default MathFormula16Filled;
      