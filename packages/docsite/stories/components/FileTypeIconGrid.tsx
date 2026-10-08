import {
  DEFAULT_BASE_URL,
  FileIconType,
  FileTypeIcon,
  ICON_SIZES,
  type FileTypeIconSize,
} from '@fluentui/react-icons-file-type';
import { CopyRegular } from '@fluentui/react-icons';
import { Button, makeStyles, MessageBar, Toaster, tokens } from '@fluentui/react-components';
import * as React from 'react';
import fileIconTypes from '../../../react-icons-file-type/src/common/fileIconTypes.json';
import fileTypeIconMap from '../../../react-icons-file-type/src/common/fileTypeIconMap.json';
import IconCatalogControls from './IconCatalogControls';
import { useIconCatalogClipboard } from './useIconCatalogClipboard';

type FileIconTypeName = keyof typeof FileIconType;
const SIZE_OPTIONS = ICON_SIZES.map((size) => ({ value: String(size), label: `${size}px` }));

type CatalogIcon = {
  aliases: string[];
  extension?: string;
  name: string;
  typeName?: FileIconTypeName;
};

const CATALOG_ICONS: CatalogIcon[] = Object.entries(fileTypeIconMap)
  .map(([name, extensions]) => {
    const aliases = extensions ?? [];
    const matchingTypes = fileIconTypes.filter(({ icon }) => (icon ?? 'genericfile') === name);

    return {
      aliases,
      extension: aliases.includes(name) ? name : aliases[0],
      name,
      typeName: matchingTypes[0]?.name as FileIconTypeName | undefined,
    };
  })
  .sort((first, second) => first.name.localeCompare(second.name));

const useClasses = makeStyles({
  message: {
    marginBottom: tokens.spacingVerticalM,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: tokens.spacingHorizontalM,
  },
  tile: {
    position: 'relative',
    display: 'grid',
    gridTemplateRows: '112px auto auto',
    justifyItems: 'center',
    alignItems: 'center',
    minWidth: 0,
    minHeight: '188px',
    padding: tokens.spacingVerticalM,
    overflow: 'hidden',
    borderRadius: tokens.borderRadiusSmall,
    backgroundColor: tokens.colorNeutralBackground2,
    boxShadow: tokens.shadow2,
  },
  copyButton: {
    position: 'absolute',
    top: tokens.spacingVerticalXS,
    right: tokens.spacingHorizontalXS,
  },
  preview: {
    display: 'flex',
    width: '104px',
    height: '104px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    fontFamily: tokens.fontFamilyMonospace,
    fontSize: tokens.fontSizeBase200,
  },
  aliases: {
    maxWidth: '100%',
    minHeight: '20px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    color: tokens.colorNeutralForeground3,
    fontSize: tokens.fontSizeBase100,
  },
  unavailable: {
    color: tokens.colorPaletteRedForeground1,
  },
});

function getCopySnippet(icon: CatalogIcon, size: FileTypeIconSize): string | undefined {
  if (icon.extension) {
    return `<FileTypeIcon extension="${icon.extension}" size={${size}} />`;
  }

  if (icon.typeName) {
    return `<FileTypeIcon type={FileIconType.${icon.typeName}} size={${size}} />`;
  }

  return undefined;
}

const FileTypeIconGrid = () => {
  const classes = useClasses();
  const { copyIcon, toasterId } = useIconCatalogClipboard();
  const [searchQuery, setSearchQuery] = React.useState('');
  const [size, setSize] = React.useState<FileTypeIconSize>(48);
  const [unavailableIcons, setUnavailableIcons] = React.useState<Set<string>>(() => new Set());

  React.useEffect(() => {
    setUnavailableIcons(new Set());
  }, [size]);

  const normalizedQuery = searchQuery
    .trim()
    .toLowerCase()
    .replace(/^(?:fileicontype\.|\.)/, '');
  const filteredIcons = CATALOG_ICONS.filter(
    ({ aliases, name, typeName }) =>
      !normalizedQuery ||
      name.includes(normalizedQuery) ||
      aliases.some((alias) => alias.includes(normalizedQuery)) ||
      typeName?.toLowerCase().includes(normalizedQuery),
  );

  const markUnavailable = (name: string) => {
    setUnavailableIcons((current) => new Set(current).add(name));
  };

  const markAvailable = (name: string) => {
    setUnavailableIcons((current) => {
      if (!current.has(name)) {
        return current;
      }
      const next = new Set(current);
      next.delete(name);
      return next;
    });
  };

  return (
    <div>
      <Toaster toasterId={toasterId} />

      <IconCatalogControls
        searchPlaceholder="Search icons or file extensions"
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        size={String(size)}
        sizeOptions={SIZE_OPTIONS}
        onSizeChange={(value) => setSize(Number(value) as FileTypeIconSize)}
        resultCount={filteredIcons.length}
      />

      {filteredIcons.length === 0 ? (
        <MessageBar intent="warning" className={classes.message}>
          No file type icons found. Try another search.
        </MessageBar>
      ) : (
        <div className={classes.grid}>
          {filteredIcons.map((icon) => {
            const snippet = getCopySnippet(icon, size);
            const isUnavailable = unavailableIcons.has(icon.name);
            const aliases = icon.aliases.join(', ');

            return (
              <div className={classes.tile} key={icon.name}>
                {snippet && (
                  <Button
                    appearance="transparent"
                    aria-label={`Copy ${icon.name} JSX`}
                    className={classes.copyButton}
                    icon={<CopyRegular />}
                    onClick={() => void copyIcon(snippet)}
                    title="Copy icon JSX to clipboard"
                  />
                )}

                <div className={classes.preview}>
                  {icon.extension ? (
                    <FileTypeIcon
                      alt={icon.name}
                      extension={icon.extension}
                      onError={() => markUnavailable(icon.name)}
                      onLoad={() => markAvailable(icon.name)}
                      size={size}
                    />
                  ) : icon.typeName ? (
                    <FileTypeIcon
                      alt={icon.name}
                      onError={() => markUnavailable(icon.name)}
                      onLoad={() => markAvailable(icon.name)}
                      size={size}
                      type={FileIconType[icon.typeName]}
                    />
                  ) : (
                    <img
                      alt={icon.name}
                      height={size}
                      onError={() => markUnavailable(icon.name)}
                      onLoad={() => markAvailable(icon.name)}
                      src={`${DEFAULT_BASE_URL}${size}/${icon.name}.svg`}
                      width={size}
                    />
                  )}
                </div>

                <code className={classes.name} title={icon.name}>
                  {icon.name}
                </code>
                <span
                  className={isUnavailable ? classes.unavailable : classes.aliases}
                  title={isUnavailable ? 'Unavailable on current CDN' : aliases}
                >
                  {isUnavailable ? 'Unavailable on current CDN' : aliases}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FileTypeIconGrid;
