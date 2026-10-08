import * as ReactIcons from '@fluentui/react-icons';
import {
  Button,
  makeStyles,
  MessageBar,
  Toaster,
  tokens,
  useIsomorphicLayoutEffect,
  useScrollbarWidth,
} from '@fluentui/react-components';
import * as React from 'react';
import { FixedSizeGrid, type GridChildComponentProps } from 'react-window';
import { IconCatalogControls } from './IconCatalogControls';
import { isSizedIconName, SIZED_ICON_RE } from './sized-icons';
import { useIconCatalogClipboard } from './useIconCatalogClipboard';

const ICON_CELL_WIDTH = 250;
const RESIZABLE_ICON_SIZE = 48;
const SIZE_OPTIONS = [
  { value: 'all', label: 'All sizes' },
  { value: 'resizable', label: 'Resizable' },
  ...[16, 20, 24, 28, 32, 48].map((size) => ({ value: String(size), label: `${size}px` })),
];
const VARIANT_OPTIONS = [
  { value: 'all', label: 'All variants' },
  ...['Regular', 'Filled', 'Light', 'Color'].map((variant) => ({ value: variant, label: variant })),
];

const ICONS_LIST: React.FC<ReactIcons.FluentIconsProps>[] = (
  Object.values(ReactIcons) as React.FC<ReactIcons.FluentIconsProps>[]
).filter((icon) => !!icon && !!icon.displayName);

const useClasses = makeStyles({
  message: {
    marginBottom: tokens.spacingVerticalM,
  },

  pane: {
    borderRadius: tokens.borderRadiusSmall,
    boxShadow: tokens.shadow2,
  },

  iconCell: {
    alignItems: 'center',
    backgroundColor: tokens.colorNeutralBackground2,
    display: 'grid',
    justifyItems: 'center',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr auto',
    gap: `${tokens.spacingVerticalMNudge} ${tokens.spacingHorizontalMNudge}`,
    fontSize: `${RESIZABLE_ICON_SIZE}px`,
    padding: `${tokens.spacingVerticalS} ${tokens.spacingHorizontalS}`,
    overflow: 'hidden',
    boxShadow: tokens.shadow2,
    margin: `${tokens.spacingVerticalS} ${tokens.spacingHorizontalS}`,
    borderRadius: tokens.borderRadiusSmall,
  },
  iconCopyButton: {
    gridArea: '1 / 1 / 2 / 2',
    zIndex: 1,
    justifySelf: 'end',
  },
  iconGlyph: {
    gridArea: '1 / 1 / 2 / 2',
  },
  iconCode: {
    gridArea: '2 / 1 / 3 / 2',

    '> code': {
      fontSize: `${tokens.fontSizeBase200} !important`,
      display: 'block !important',
    },
  },
});

type IconCellData = {
  classes: ReturnType<typeof useClasses>;

  columnCount: number;
  icons: typeof ICONS_LIST;

  onCopy: (iconName: string) => void;
};

const renderIconCell = (itemProps: GridChildComponentProps & { data: IconCellData }) => {
  const { columnIndex, data: _data, rowIndex, style } = itemProps;
  const { classes, columnCount, icons, onCopy } = _data as IconCellData;

  const Icon = icons[rowIndex * columnCount + columnIndex];

  if (!Icon) {
    return <div style={style} />;
  }

  return (
    <div style={style}>
      <div className={classes.iconCell}>
        <div className={classes.iconCopyButton}>
          <Button
            appearance="transparent"
            aria-label={`Copy ${Icon.displayName} JSX`}
            icon={<ReactIcons.CopyRegular />}
            onClick={() => onCopy(Icon.displayName as string)}
            title="Copy icon JSX to clipboard"
          />
        </div>
        <Icon className={classes.iconGlyph} aria-label={Icon.displayName} />
        <div className={classes.iconCode}>
          <code>{Icon.displayName}</code>
        </div>
      </div>
    </div>
  );
};

export const ReactIconGrid = () => {
  const classes = useClasses();
  const scrollBarWidth = useScrollbarWidth({ targetDocument: document }) ?? 0;

  const { copyIcon, toasterId } = useIconCatalogClipboard();

  const [searchQuery, setSearchQuery] = React.useState('');
  const [size, setSize] = React.useState<string>('resizable');
  const [variant, setVariant] = React.useState('all');

  const areaRef = React.useRef<HTMLDivElement>(null);
  const [width, setWidth] = React.useState<number>(1000);

  const filteredIcons = React.useMemo(
    () =>
      ICONS_LIST.filter((icon) => {
        const name = icon.displayName;
        if (!name || !name.toLowerCase().includes(searchQuery.toLowerCase())) {
          return false;
        }
        if (variant !== 'all' && !name.endsWith(variant)) {
          return false;
        }
        if (size === 'all') {
          return true;
        }
        if (size === 'resizable') {
          return !isSizedIconName(name);
        }

        return isSizedIconName(name) && name.match(SIZED_ICON_RE)?.[1] === size;
      }),
    [searchQuery, size, variant],
  );

  const columnCount = Math.max(1, Math.floor(width / ICON_CELL_WIDTH));
  const previewSize = size === 'all' || size === 'resizable' ? RESIZABLE_ICON_SIZE : Number(size);
  const rowHeight = Math.max(30, previewSize) + 55;
  const height = Math.min(Math.ceil(filteredIcons.length / columnCount) * rowHeight + 10, 1000);

  const iconCellData: IconCellData = {
    icons: filteredIcons,
    classes,
    columnCount,
    onCopy: (iconName: string) => void copyIcon(`<${iconName} />`),
  };

  useIsomorphicLayoutEffect(() => {
    const observer = new ResizeObserver((entries) => {
      const nextWidth = entries[0].contentRect.width;
      if (nextWidth > 0) {
        setWidth(nextWidth);
      }
    });

    if (areaRef.current) {
      observer.observe(areaRef.current);

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return (
    <div ref={areaRef}>
      <Toaster toasterId={toasterId} />

      <IconCatalogControls
        searchPlaceholder="Icon name..."
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        size={size}
        sizeOptions={SIZE_OPTIONS}
        onSizeChange={setSize}
        variantFilter={{ value: variant, options: VARIANT_OPTIONS, onChange: setVariant }}
        resultCount={filteredIcons.length}
      />

      {filteredIcons.length === 0 ? (
        <MessageBar intent="warning" className={classes.message}>
          No icons found for the search query. Try another one.
        </MessageBar>
      ) : (
        <div className={classes.pane}>
          <FixedSizeGrid
            itemData={iconCellData}
            columnCount={columnCount}
            columnWidth={width / columnCount - scrollBarWidth / columnCount}
            height={height}
            rowCount={Math.ceil(filteredIcons.length / columnCount)}
            rowHeight={rowHeight}
            width={width}
          >
            {renderIconCell}
          </FixedSizeGrid>
        </div>
      )}
    </div>
  );
};
