import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 3.5a.5.5 0 011 0v1a.5.5 0 01-1 0v-1zm0 3a.5.5 0 011 0v2a.5.5 0 01-1 0v-2zm0 4a.5.5 0 011 0v2a.5.5 0 01-1 0v-2zm0 4a.5.5 0 011 0v1a.5.5 0 01-1 0v-1zm2.15-4.65a.5.5 0 010-.7l4.5-4.5a.5.5 0 11.7.7L5.71 9h9.79a.5.5 0 010 1H5.7l3.65 3.65a.5.5 0 01-.7.7l-4.5-4.5zM17 3.5a.5.5 0 011 0v12a.5.5 0 01-1 0v-12z" fill={primaryFill} /></svg>;
}

const PaddingLeftRegular = wrapIcon(rawSvg({}), 'PaddingLeftRegular');
export default PaddingLeftRegular;
      