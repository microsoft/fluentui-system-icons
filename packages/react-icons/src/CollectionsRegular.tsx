import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.5 7A2.5 2.5 0 0118 9.34v6.16a2.5 2.5 0 01-2.34 2.5H9.5A2.5 2.5 0 017 15.66V9.5A2.5 2.5 0 019.34 7h6.16zm0 1h-6c-.78 0-1.42.6-1.5 1.36v6.14c0 .78.6 1.42 1.36 1.5h6.14c.78 0 1.42-.6 1.5-1.36V9.5c0-.78-.6-1.42-1.36-1.5h-.14zm-3 1a.5.5 0 01.5.41V12h2.5a.5.5 0 01.09 1H13v2.5a.5.5 0 01-1 .09V13H9.5a.5.5 0 01-.09-1H12V9.5c0-.28.22-.5.5-.5zm.16-5.3l.05.15.57 2.15h-1.03l-.5-1.89a1.5 1.5 0 00-1.7-1.09l-.14.03L4.1 4.6a1.5 1.5 0 00-1.09 1.7l.03.14 1.55 5.8a1.5 1.5 0 001.4 1.1v1a2.5 2.5 0 01-2.31-1.67l-.05-.18L2.08 6.7A2.5 2.5 0 013.7 3.69l.15-.05 5.8-1.56a2.5 2.5 0 012.96 1.46l.05.16z" fill={primaryFill} /></svg>;
}

const CollectionsRegular = wrapIcon(rawSvg({}), 'CollectionsRegular');
export default CollectionsRegular;
      