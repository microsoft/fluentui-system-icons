import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5.25a1.25 1.25 0 012.3-.7.5.5 0 10.82-.55 2.25 2.25 0 10-1.74 3.5H15.5a.5.5 0 000-1H4.38a.5.5 0 00-.06 0A1.25 1.25 0 013 5.25z" fill={primaryFill} /><path d="M8.5 4a.5.5 0 000 1h9a.5.5 0 000-1h-9z" fill={primaryFill} /><path d="M5.5 9a.5.5 0 000 1h5.84c.9-.63 1.98-1 3.16-1h-9z" fill={primaryFill} /><path d="M2.5 11.5h7.39c-.2.31-.38.65-.52 1H2.5a.5.5 0 010-1z" fill={primaryFill} /><path d="M5.5 14h3.52a5.57 5.57 0 000 1H5.5a.5.5 0 010-1z" fill={primaryFill} /><path d="M19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V14h-1.5a.5.5 0 000 1H14v1.5a.5.5 0 001 0V15h1.5a.5.5 0 000-1H15v-1.5z" fill={primaryFill} /></svg>;
}

const ReadingListAddRegular = wrapIcon(rawSvg({}), 'ReadingListAddRegular');
export default ReadingListAddRegular;
      