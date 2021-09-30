import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 2a2 2 0 100 4h5a2 2 0 100-4H4zm0 6a2 2 0 100 4h8a2 2 0 100-4H4zm0 6a2 2 0 100 4h12a2 2 0 100-4H4z" fill={primaryFill} /></svg>;
}

const DataBarHorizontalFilled = wrapIcon(rawSvg({}), 'DataBarHorizontalFilled');
export default DataBarHorizontalFilled;
      