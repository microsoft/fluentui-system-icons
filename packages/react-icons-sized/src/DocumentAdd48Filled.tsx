import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 4v11.25A3.75 3.75 0 0027.75 19H40v21a3 3 0 01-3 3H23.25A13 13 0 008 23V7a3 3 0 013-3h13z" fill={primaryFill} /><path d="M26.5 4.46v10.79c0 .69.56 1.25 1.25 1.25h11.71L26.5 4.46z" fill={primaryFill} /><path d="M24 35a11 11 0 11-22 0 11 11 0 0122 0zm-10-7a1 1 0 10-2 0v6H6a1 1 0 100 2h6v6a1 1 0 102 0v-6h6a1 1 0 100-2h-6v-6z" fill={primaryFill} /></svg>;
}

const DocumentAdd48Filled = wrapIcon(rawSvg({}), 'DocumentAdd48Filled');
export default DocumentAdd48Filled;
      