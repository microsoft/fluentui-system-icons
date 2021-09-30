import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.2 7H2.42a.5.5 0 00.09 1h7.1c-.16-.32-.3-.65-.4-1zm2.8 8.5a.5.5 0 00-.5-.5H6.41a.5.5 0 00.09 1h5.09a.5.5 0 00.41-.5zm1.5-4.5H4.41a.5.5 0 00.09 1h9.09a.5.5 0 00-.09-1zm1-1a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm1.85-6.35c.2.2.2.5 0 .7L15.21 5.5l1.14 1.15a.5.5 0 01-.7.7L14.5 6.21l-1.15 1.14a.5.5 0 01-.7-.7l1.14-1.15-1.14-1.15a.5.5 0 01.7-.7l1.15 1.14 1.15-1.14c.2-.2.5-.2.7 0z" fill={primaryFill} /></svg>;
}

const FilterDismissRegular = wrapIcon(rawSvg({}), 'FilterDismissRegular');
export default FilterDismissRegular;
      