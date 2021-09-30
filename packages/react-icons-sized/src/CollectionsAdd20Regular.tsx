import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.5 7A2.5 2.5 0 0118 9.34v.92c-.3-.26-.64-.48-1-.66v-.1c0-.78-.6-1.42-1.36-1.5H9.5c-.78 0-1.42.6-1.5 1.36v6.14c0 .78.6 1.42 1.36 1.5H9.6c.18.36.4.7.66 1H9.5A2.5 2.5 0 017 15.66V9.5A2.5 2.5 0 019.34 7h6.16z" fill={primaryFill} /><path d="M12.66 3.7l.05.15.57 2.15h-1.03l-.5-1.89a1.5 1.5 0 00-1.7-1.09l-.14.03L4.1 4.6a1.5 1.5 0 00-1.09 1.7l.03.14 1.55 5.8a1.5 1.5 0 001.4 1.1v1a2.5 2.5 0 01-2.31-1.67l-.05-.18L2.08 6.7A2.5 2.5 0 013.7 3.69l.15-.05 5.8-1.56a2.5 2.5 0 012.96 1.46l.05.16z" fill={primaryFill} /><path d="M19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 10-1 0V14h-1.5a.5.5 0 000 1H14v1.5a.5.5 0 101 0V15h1.5a.5.5 0 100-1H15v-1.5z" fill={primaryFill} /></svg>;
}

const CollectionsAdd20Regular = wrapIcon(rawSvg({}), 'CollectionsAdd20Regular');
export default CollectionsAdd20Regular;
      