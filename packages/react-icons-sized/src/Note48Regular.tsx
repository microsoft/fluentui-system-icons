import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.25 6A6.25 6.25 0 006 12.25v23.5C6 39.2 8.8 42 12.25 42h13.68c1.66 0 3.25-.66 4.42-1.83l9.82-9.82A6.25 6.25 0 0042 25.93V12.25C42 8.8 39.2 6 35.75 6h-23.5zM8.5 12.25a3.75 3.75 0 013.75-3.75h23.5a3.75 3.75 0 013.75 3.75V26h-7.25A6.25 6.25 0 0026 32.25v7.25H12.25a3.75 3.75 0 01-3.75-3.75v-23.5zm20 26.23v-6.23a3.75 3.75 0 013.75-3.75h6.23l-.08.08-9.82 9.82-.08.08z" fill={primaryFill} /></svg>;
}

const Note48Regular = wrapIcon(rawSvg({}), 'Note48Regular');
export default Note48Regular;
      