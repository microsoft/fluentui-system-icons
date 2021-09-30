import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.73 12.02a5.5 5.5 0 10-9.6-2.36 1.25 1.25 0 01.9-.57A4.5 4.5 0 1110 12.74c.03.4-.14.8-.46 1.06l-.16.13a5.47 5.47 0 002.64-1.2l3.9 3.9a.5.5 0 10.71-.7l-3.9-3.91zm-10.84-.7c-.4.42-.7.91-.88 1.45-.03.09 0 .19.08.25l.76.62.06.06c.18.2.15.5-.06.66l-.76.62a.23.23 0 00-.08.25c.18.54.48 1.03.88 1.45.07.07.17.1.27.06l.94-.32.08-.02a.5.5 0 01.57.38l.18.94c.02.1.1.17.2.2a4.4 4.4 0 001.75 0c.1-.03.17-.1.19-.2l.18-.94.02-.07a.5.5 0 01.63-.29l.94.32c.1.04.2.01.27-.06.4-.42.7-.91.88-1.45.03-.09 0-.19-.08-.25l-.76-.62a.46.46 0 010-.72l.76-.62c.08-.06.1-.16.08-.25a3.96 3.96 0 00-.88-1.45.25.25 0 00-.27-.06l-.94.32a.5.5 0 01-.65-.36l-.18-.94a.24.24 0 00-.2-.2 4.4 4.4 0 00-1.75 0c-.1.03-.17.1-.19.2l-.18.94-.02.07a.5.5 0 01-.63.29l-.94-.32c-.1-.04-.2-.01-.27.06zM5 15.17A1.2 1.2 0 013.78 14c0-.64.55-1.17 1.22-1.17.67 0 1.22.53 1.22 1.17A1.2 1.2 0 015 15.17z" fill={primaryFill} /></svg>;
}

const SearchSettings20Regular = wrapIcon(rawSvg({}), 'SearchSettings20Regular');
export default SearchSettings20Regular;
      