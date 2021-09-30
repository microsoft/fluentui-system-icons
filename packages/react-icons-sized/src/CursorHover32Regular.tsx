import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 10a4 4 0 014-4h20a4 4 0 014 4v10a4 4 0 01-2.33 3.64 3 3 0 00-.55-.76l-.89-.9A2 2 0 0028 20V10a2 2 0 00-2-2H6a2 2 0 00-2 2v10c0 1.1.9 2 2 2h8v2H6a4 4 0 01-4-4V10zm15.7 6.3a1 1 0 00-1.7.7v12a1 1 0 001.8.6l2.7-3.6H25a1 1 0 00.7-1.7l-8-8zM18 26v-6.59L22.59 24H20a1 1 0 00-.8.4L18 26z" fill={primaryFill} /></svg>;
}

const CursorHover32Regular = wrapIcon(rawSvg({}), 'CursorHover32Regular');
export default CursorHover32Regular;
      