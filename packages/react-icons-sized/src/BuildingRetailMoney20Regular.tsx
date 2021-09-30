import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4.5C2 3.67 2.67 3 3.5 3h13a1.5 1.5 0 01.5 2.91V12h-1V6H4v10h1v-3.5c0-.28.22-.5.5-.5h4c.2 0 .38.12.46.3A2 2 0 009 14v-1H6v3h3v1H3.5a.5.5 0 01-.5-.5V5.91c-.58-.2-1-.76-1-1.41zM3.5 4a.5.5 0 000 1h13a.5.5 0 000-1h-13zm2 3a.5.5 0 00-.5.5v3c0 .28.22.5.5.5h9a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-9zm.5 3V8h8v2H6zm13 4.5v3c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5v-3c0-.83.67-1.5 1.5-1.5h6c.83 0 1.5.67 1.5 1.5zM17.5 18c0-.28.22-.5.5-.5v-1c-.83 0-1.5.67-1.5 1.5h1zm.5-3.5a.5.5 0 01-.5-.5h-1c0 .83.67 1.5 1.5 1.5v-1zm-6.5-.5a.5.5 0 01-.5.5v1c.83 0 1.5-.67 1.5-1.5h-1zm-.5 3.5c.28 0 .5.22.5.5h1c0-.83-.67-1.5-1.5-1.5v1zm3.5-3a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill={primaryFill} /></svg>;
}

const BuildingRetailMoney20Regular = wrapIcon(rawSvg({}), 'BuildingRetailMoney20Regular');
export default BuildingRetailMoney20Regular;
      