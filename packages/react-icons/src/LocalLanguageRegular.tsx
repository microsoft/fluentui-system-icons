import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.5 2a.5.5 0 000 1H13v1.86C13 6.03 11.83 7 10.5 7a.5.5 0 000 1C12.21 8 14 6.74 14 4.86V2.5a.5.5 0 00-.5-.5h-4zM7.96 5.3a.5.5 0 00-.92 0l-5 12a.5.5 0 10.92.4L4.5 14h6l1.54 3.7a.5.5 0 10.92-.39l-1.66-3.99v-.02l-3.34-8zm2.12 7.7H4.92L7.5 6.8l2.58 6.2zM15.5 2c.28 0 .5.22.5.5V6h1.5a.5.5 0 010 1H16v6.5a.5.5 0 11-1 0v-11c0-.28.23-.5.5-.5z" fill={primaryFill} /></svg>;
}

const LocalLanguageRegular = wrapIcon(rawSvg({}), 'LocalLanguageRegular');
export default LocalLanguageRegular;
      