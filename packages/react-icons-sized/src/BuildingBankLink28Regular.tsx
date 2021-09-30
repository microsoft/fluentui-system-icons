import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm.9-6.7a1.5 1.5 0 00-1.79 0l-9.5 7a1.5 1.5 0 00.9 2.7H5v7.25c-1.18.49-2 1.65-2 3v1.5c0 .41.33.75.74.75h9.58c-.18-.47-.3-.97-.32-1.5H4.5v-.75c0-.97.78-1.75 1.74-1.75h7.32c.31-.58.75-1.1 1.27-1.5h-.09v-7h2.75v6H19v-6h2.5v6H23v-6h.5a1.5 1.5 0 00.89-2.7l-9.5-7zM6.5 19v-7H9v7H6.5zm6.75-7v7H10.5v-7h2.75zM4.5 10.5l9.5-7 9.5 7h-19zm13.25 10a2.25 2.25 0 000 4.5h.5a.75.75 0 010 1.5h-.5a3.75 3.75 0 010-7.5h.5a.75.75 0 010 1.5h-.5zM17 22.75c0-.41.34-.75.75-.75h5.5a.75.75 0 010 1.5h-5.5a.75.75 0 01-.75-.75zM23.25 25a2.25 2.25 0 000-4.5h-.5a.75.75 0 010-1.5h.5a3.75 3.75 0 010 7.5h-.5a.75.75 0 010-1.5h.5z" fill={primaryFill} /></svg>;
}

const BuildingBankLink28Regular = wrapIcon(rawSvg({}), 'BuildingBankLink28Regular');
export default BuildingBankLink28Regular;
      