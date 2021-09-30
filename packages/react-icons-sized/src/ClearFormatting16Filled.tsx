import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.96 2a.75.75 0 00-.73.57L2 3.5a.75.75 0 001.46.37l.1-.38h2.02l-1.23 7h-.38a.75.75 0 000 1.5h2.06a5.57 5.57 0 01.07-1.5h-.22l1.22-7h2.23v.01a.75.75 0 001.45.37l.24-.95a.75.75 0 00-.73-.93H2.96zM1.75 12.5h4.34c.1.53.27 1.03.51 1.5H1.75a.75.75 0 010-1.5zm14.25-1a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.65-1.15a.5.5 0 00-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 00-.7.7l1.14 1.15-1.14 1.15a.5.5 0 00.7.7l1.15-1.14 1.15 1.14a.5.5 0 00.7-.7l-1.14-1.15 1.14-1.15z" fill={primaryFill} /></svg>;
}

const ClearFormatting16Filled = wrapIcon(rawSvg({}), 'ClearFormatting16Filled');
export default ClearFormatting16Filled;
      