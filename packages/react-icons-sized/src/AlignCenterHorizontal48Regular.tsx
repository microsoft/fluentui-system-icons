import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M44 24.25c0 .69-.56 1.25-1.25 1.25H40v6.25C40 34.1 38.1 36 35.75 36h-5.5A4.25 4.25 0 0126 31.75V25.5h-4v10.25C22 38.1 20.1 40 17.75 40h-5.5A4.25 4.25 0 018 35.75V25.5H5.25a1.25 1.25 0 110-2.5H8V12.25C8 9.9 9.9 8 12.25 8h5.5C20.1 8 22 9.9 22 12.25V23h4v-6.75C26 13.9 27.9 12 30.25 12h5.5C38.1 12 40 13.9 40 16.25V23h2.75c.69 0 1.25.56 1.25 1.25zm-6.5-8c0-.97-.78-1.75-1.75-1.75h-5.5c-.97 0-1.75.78-1.75 1.75v15.5c0 .97.78 1.75 1.75 1.75h5.5c.97 0 1.75-.78 1.75-1.75v-15.5zM17.75 10.5h-5.5c-.97 0-1.75.78-1.75 1.75v23.5c0 .97.78 1.75 1.75 1.75h5.5c.97 0 1.75-.78 1.75-1.75v-23.5c0-.97-.78-1.75-1.75-1.75z" fill={primaryFill} /></svg>;
}

const AlignCenterHorizontal48Regular = wrapIcon(rawSvg({}), 'AlignCenterHorizontal48Regular');
export default AlignCenterHorizontal48Regular;
      