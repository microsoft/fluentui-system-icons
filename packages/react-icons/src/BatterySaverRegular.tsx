import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 9.56c0-1.23-.62-3.03-1.83-5.27-.21-.39-.76-.38-1-.02-.32.51-.8 1.03-1.45 1.56l-.29.22-.65.51C2.43 7.64 1.9 8.61 2.02 10.03c.1 1.25.85 2.15 2.15 2.56-.46.54-1.06.96-1.81 1.28a.6.6 0 00-.32.77c.13.3.47.44.77.32a5.55 5.55 0 003.04-2.86c.22-.48.4-.96.53-1.44l.03-.12.08-.32.05-.26.04-.19.05-.37c.03-.3.05-.6.04-.88V8.5c.01-.3.26-.56.57-.56.32 0 .59.25.6.58a9.02 9.02 0 01-.7 3.5l-.01.07c-.02.07 0 .15.02.21.08.18.3.26.47.18l.09-.04.15-.11A3.81 3.81 0 009 9.56zm7-2.2A2.5 2.5 0 0013.5 5H9.53c-.3 0-.53.14-.53.5s.2.5.53.5h4.34c.64.06 1.13.6 1.13 1.24v5.63c-.06.63-.6 1.13-1.25 1.13H6c-.3 0-.5.2-.5.5s.2.5.5.5h7.65A2.5 2.5 0 0016 12.5v-.82H17.28a.83.83 0 00.72-.83V9.08a.83.83 0 00-.84-.73L16 8.33v-.98z" fill={primaryFill} /></svg>;
}

const BatterySaverRegular = wrapIcon(rawSvg({}), 'BatterySaverRegular');
export default BatterySaverRegular;
      