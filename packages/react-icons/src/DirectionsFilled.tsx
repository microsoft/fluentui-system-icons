import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.77 3.06a2.5 2.5 0 00-3.54 0L3.06 8.23a2.5 2.5 0 000 3.54l5.17 5.17a2.5 2.5 0 003.54 0l5.17-5.17a2.5 2.5 0 000-3.54l-5.17-5.17zm-1.12 3.09c.2-.2.5-.2.7 0l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 01-.7-.7l.64-.65h-.79C9.67 8.5 9 9.17 9 10v2.5a.5.5 0 01-1 0V10a2.5 2.5 0 012.5-2.5h.8l-.65-.65a.5.5 0 010-.7z" fill={primaryFill} /></svg>;
}

const DirectionsFilled = wrapIcon(rawSvg({}), 'DirectionsFilled');
export default DirectionsFilled;
      