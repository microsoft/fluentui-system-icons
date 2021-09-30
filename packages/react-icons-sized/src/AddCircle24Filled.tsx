import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a10 10 0 110 20 10 10 0 010-20zm0 5c-.38 0-.7.28-.74.65l-.01.1v3.5h-3.5a.75.75 0 00-.1 1.5h3.6v3.5a.75.75 0 001.5.1v-3.6h3.5a.75.75 0 00.1-1.5h-3.6v-3.5A.75.75 0 0012 7z" fill={primaryFill} /></svg>;
}

const AddCircle24Filled = wrapIcon(rawSvg({}), 'AddCircle24Filled');
export default AddCircle24Filled;
      