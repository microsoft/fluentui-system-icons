import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.5 7A2.5 2.5 0 0118 9.34v.92A5.5 5.5 0 0010.26 18H9.5A2.5 2.5 0 017 15.66V9.5A2.5 2.5 0 019.34 7h6.16z" fill={primaryFill} /><path d="M12.66 3.7l.05.15.57 2.15H9a3 3 0 00-3 2.82V14.35a2.5 2.5 0 01-2.31-1.68l-.05-.18L2.08 6.7A2.5 2.5 0 013.7 3.69l.15-.05 5.8-1.56a2.5 2.5 0 012.96 1.46l.05.16z" fill={primaryFill} /><path d="M19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 10-1 0V14h-1.5a.5.5 0 000 1H14v1.5a.5.5 0 101 0V15h1.5a.5.5 0 100-1H15v-1.5z" fill={primaryFill} /></svg>;
}

const CollectionsAddFilled = wrapIcon(rawSvg({}), 'CollectionsAddFilled');
export default CollectionsAddFilled;
      