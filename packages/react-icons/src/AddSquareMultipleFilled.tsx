import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 5.27c.6.34 1 .99 1 1.73v6a4 4 0 01-4 4H7a2 2 0 01-1.73-1H13a3 3 0 003-3V5.27zM15 5a2 2 0 00-2-2H5a2 2 0 00-2 2v8c0 1.1.9 2 2 2h8a2 2 0 002-2V5zm-3 4a.5.5 0 01-.5.5h-2v2a.5.5 0 01-1 0v-2h-2a.5.5 0 110-1h2v-2a.5.5 0 111 0v2h2c.28 0 .5.22.5.5z" fill={primaryFill} /></svg>;
}

const AddSquareMultipleFilled = wrapIcon(rawSvg({}), 'AddSquareMultipleFilled');
export default AddSquareMultipleFilled;
      