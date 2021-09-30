import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 2c.6 0 1.16.36 1.4.92l2.37 5.4 3.23-.2a1.88 1.88 0 012 1.76V10c0 1.04-.84 1.88-1.88 1.88H16l-3.23-.2-2.37 5.4c-.24.56-.8.92-1.4.92a.88.88 0 01-.88-.88v-.06l.7-5.63-2.46-.16-1.14 2.28a.8.8 0 01-.72.45.5.5 0 01-.5-.5v-2.38l-1.06-.06a1 1 0 01-.94-1v-.12a1 1 0 01.94-1L4 8.88V6.5c0-.28.22-.5.5-.5.3 0 .59.17.72.45l1.14 2.28 2.46-.16L8.12 3A.88.88 0 019 2z" fill={primaryFill} /></svg>;
}

const AirplaneFilled = wrapIcon(rawSvg({}), 'AirplaneFilled');
export default AirplaneFilled;
      