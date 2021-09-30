import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 10a4 4 0 014-4h20a4 4 0 014 4v10a4 4 0 01-2.33 3.64 3 3 0 00-.55-.76l-8-8A3 3 0 0014 17v7H6a4 4 0 01-4-4V10z" fill={primaryFill} /><path d="M16 29a1 1 0 001.8.6l2.7-3.6H25a1 1 0 00.7-1.7l-8-8a1 1 0 00-1.7.7v12z" fill={primaryFill} /></svg>;
}

const CursorHover32Filled = wrapIcon(rawSvg({}), 'CursorHover32Filled');
export default CursorHover32Filled;
      