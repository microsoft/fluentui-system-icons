import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4.5C2 3.67 2.67 3 3.5 3h13a1.5 1.5 0 01.5 2.91V9.5c-.3-.22-.63-.38-1-.45V6H4v10h1v-3.5c0-.28.22-.5.5-.5h4c-.31.42-.5.94-.5 1.5V13H6v3h3v1H3.5a.5.5 0 01-.5-.5V5.91c-.58-.2-1-.76-1-1.41zM3.5 4a.5.5 0 000 1h13a.5.5 0 000-1h-13zM15 7.5V9h-1V8H6v2h5.5c-.22.3-.38.63-.45 1H5.5a.5.5 0 01-.5-.5v-3c0-.28.22-.5.5-.5h9c.28 0 .5.22.5.5zM12 12v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15h-2v-.5a.5.5 0 00-1 0v.5h-3v-.5a.5.5 0 00-1 0v.5h-2v-1.5c0-.83.67-1.5 1.5-1.5h.5zm1-.5v.5h3v-.5a.5.5 0 00-.5-.5h-2a.5.5 0 00-.5.5zm4 5V16h2v1.5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5V16h2v.5a.5.5 0 001 0V16h3v.5a.5.5 0 001 0z" fill={primaryFill} /></svg>;
}

const BuildingRetailToolboxRegular = wrapIcon(rawSvg({}), 'BuildingRetailToolboxRegular');
export default BuildingRetailToolboxRegular;
      