import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 4v11.25A3.75 3.75 0 0027.75 19H40v21a3 3 0 01-3 3H11a3 3 0 01-3-3V7a3 3 0 013-3h13z" fill={primaryFill} /><path d="M26.5 4.46v10.79c0 .69.56 1.25 1.25 1.25h11.71L26.5 4.46z" fill={primaryFill} /></svg>;
}

const Document48Filled = wrapIcon(rawSvg({}), 'Document48Filled');
export default Document48Filled;
      