package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TableCellsSplit16: ImageVector
  get() {
    if (_tableCellsSplit16 != null) {
      return _tableCellsSplit16!!
    }
    _tableCellsSplit16 = fluentIcon(name = "Filled.TableCellsSplit16", 16f) {
      materialPath {
          moveTo(8.0F, 4.0F)
          horizontalLineToRelative(5.95F)
          curveToRelative(-0.232F, -1.141F, -1.24F, -2.0F, -2.45F, -2.0F)
          horizontalLineTo(8.0F)
          verticalLineToRelative(2.0F)
          close()
          moveTo(7.0F, 2.0F)
          horizontalLineTo(4.5F)
          curveTo(3.29F, 2.0F, 2.282F, 2.859F, 2.05F, 4.0F)
          horizontalLineTo(7.0F)
          verticalLineTo(2.0F)
          close()
          moveToRelative(1.0F, 12.0F)
          horizontalLineToRelative(3.5F)
          curveToRelative(1.21F, 0.0F, 2.218F, -0.859F, 2.45F, -2.0F)
          horizontalLineTo(8.0F)
          verticalLineToRelative(2.0F)
          close()
          moveToRelative(-1.0F, -2.0F)
          horizontalLineTo(2.05F)
          curveToRelative(0.232F, 1.141F, 1.24F, 2.0F, 2.45F, 2.0F)
          horizontalLineTo(7.0F)
          verticalLineToRelative(-2.0F)
          close()
          moveToRelative(-5.0F, -1.0F)
          verticalLineTo(5.0F)
          horizontalLineToRelative(12.0F)
          verticalLineToRelative(6.0F)
          horizontalLineTo(2.0F)
          close()
          moveToRelative(5.0F, -5.0F)
          verticalLineToRelative(4.0F)
          horizontalLineToRelative(1.0F)
          verticalLineTo(6.0F)
          horizontalLineTo(7.0F)
          close()        
      }
    }
    return _tableCellsSplit16!!
  }

private var _tableCellsSplit16: ImageVector? = null
