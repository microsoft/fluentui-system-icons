import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.5 17a.5.5 0 01.09 1H4.5a.5.5 0 01-.09-1H15.5zM10 2a.5.5 0 01.5.41V14.3l3.64-3.65a.5.5 0 01.64-.06l.07.06c.17.17.2.44.06.63l-.06.07-4.5 4.5a.5.5 0 01-.25.14L10 16a.5.5 0 01-.4-.2l-4.46-4.45a.5.5 0 01.64-.76l.07.06 3.65 3.64V2.5c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
}

const ArrowDownload20Regular = wrapIcon(rawSvg({}), 'ArrowDownload20Regular');
export default ArrowDownload20Regular;
      