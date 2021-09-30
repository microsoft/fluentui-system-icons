import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M36 23a10 10 0 110 20 10 10 0 010-20zm6.11 5.65L31.65 39.11a7.5 7.5 0 0010.46-10.46zM40.25 12.5c2 0 3.64 1.57 3.74 3.55l.01.2v7.8A12 12 0 0025.6 39l-17.85.01c-2 0-3.64-1.57-3.74-3.55l-.01-.2V19H18.03c.97-.07 1.89-.5 2.55-1.23l.14-.17 4.11-5.1h15.42zM36 25.5a7.5 7.5 0 00-6.11 11.85l10.46-10.46A7.47 7.47 0 0036 25.5zM17.06 9c.83 0 1.64.28 2.3.78l.17.15 2.44 2.14-3.2 3.96-.09.1c-.2.2-.46.33-.74.36l-.14.01H4v-3.75c0-2 1.57-3.64 3.55-3.74l.2-.01h9.31z" fill={primaryFill} /></svg>;
}

const FolderProhibited48Filled = wrapIcon(rawSvg({}), 'FolderProhibited48Filled');
export default FolderProhibited48Filled;
      