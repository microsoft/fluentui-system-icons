import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.85 6.5c0-.28.22-.5.5-.5h3.2c.28 0 .5.22.5.5v3a.5.5 0 01-.5.5h-3.2a.5.5 0 01-.5-.5v-3zm1 2.5h2.2V7h-2.2v2z" fill={primaryFill} /><path d="M1.27 4.01A3.29 3.29 0 014.2 2H12c1.44 0 3 1.19 3 3 0 1.06-.6 1.95-1 2.4-.01.55.01 1.28.04 2.06v.23c.03.8.06 1.62.06 2.31 0 .64-.07 1.24-.5 1.61-.2.2-.46.28-.72.33-.26.05-.56.06-.88.06H4c-.94 0-1.55-.28-1.87-.8-.24-.42-.24-.9-.23-1.13V7.42a2.97 2.97 0 01-.63-3.4zM4.2 3c-.87 0-1.66.6-2.02 1.41-.35.8-.26 1.72.54 2.4.12.1.18.24.18.39v4.87c0 .27 0 .46.1.61.05.1.24.32 1 .32h6c.31 0 .52-.01.68-.04.14-.03.18-.07.2-.08 0-.01.04-.05.07-.2.04-.15.05-.36.05-.68v-1.57c-.02-1.11-.02-2.26 0-3.04a.5.5 0 01.15-.34l.23-.23c.2-.18.36-.34.52-.57.19-.28.34-.65.34-1.25 0-.66-.3-1.14-.73-1.48A2.55 2.55 0 0010 3H4.2z" fill={primaryFill} /></svg>;
}

const FoodToast16Filled = wrapIcon(rawSvg({}), 'FoodToast16Filled');
export default FoodToast16Filled;
      