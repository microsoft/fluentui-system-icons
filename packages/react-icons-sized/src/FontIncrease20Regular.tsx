import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.85 4.85a.5.5 0 01-.7-.7l2-2c.2-.2.5-.2.7 0l2 2a.5.5 0 01-.7.7L15.5 3.21l-1.65 1.64zM10 4a.5.5 0 00-.46.31l-4.5 11a.5.5 0 10.92.38l1.54-3.76V12h5v-.07l1.54 3.76a.5.5 0 10.92-.38l-4.5-11A.5.5 0 0010 4zm0 1.82L12.12 11H7.88L10 5.82z" fill={primaryFill} /></svg>;
}

const FontIncrease20Regular = wrapIcon(rawSvg({}), 'FontIncrease20Regular');
export default FontIncrease20Regular;
      