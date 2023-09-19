package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TableCellsSplit16: ImageVector
  get() {
    if (_tableCellsSplit16 != null) {
      return _tableCellsSplit16!!
    }
    _tableCellsSplit16 = fluentIcon(name = "Regular.TableCellsSplit16", 16f) {
      materialPath {
          moveTo(2.0F, 4.5F)
          curveTo(2.0F, 3.12F, 3.12F, 2.0F, 4.5F, 2.0F)
          horizontalLineToRelative(7.0F)
          curveTo(12.88F, 2.0F, 14.0F, 3.12F, 14.0F, 4.5F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineToRelative(-7.0F)
          curveTo(3.12F, 14.0F, 2.0F, 12.88F, 2.0F, 11.5F)
          verticalLineToRelative(-7.0F)
          close()
          moveTo(3.085F, 4.0F)
          horizontalLineTo(7.0F)
          verticalLineTo(3.0F)
          horizontalLineTo(4.5F)
          curveTo(3.847F, 3.0F, 3.291F, 3.417F, 3.085F, 4.0F)
          close()
          moveTo(8.0F, 3.0F)
          verticalLineToRelative(1.0F)
          horizontalLineToRelative(4.915F)
          curveToRelative(-0.206F, -0.583F, -0.762F, -1.0F, -1.415F, -1.0F)
          horizontalLineTo(8.0F)
          close()
          moveToRelative(5.0F, 2.0F)
          horizontalLineTo(3.0F)
          verticalLineToRelative(6.0F)
          horizontalLineToRelative(10.0F)
          verticalLineTo(5.0F)
          close()
          moveToRelative(-0.085F, 7.0F)
          horizontalLineTo(8.0F)
          verticalLineToRelative(1.0F)
          horizontalLineToRelative(3.5F)
          curveToRelative(0.653F, 0.0F, 1.209F, -0.417F, 1.415F, -1.0F)
          close()
          moveTo(7.0F, 13.0F)
          verticalLineToRelative(-1.0F)
          horizontalLineTo(3.085F)
          curveToRelative(0.206F, 0.583F, 0.762F, 1.0F, 1.415F, 1.0F)
          horizontalLineTo(7.0F)
          close()
          moveToRelative(0.0F, -3.0F)
          verticalLineTo(6.0F)
          horizontalLineToRelative(1.0F)
          verticalLineToRelative(4.0F)
          horizontalLineTo(7.0F)
          close()        
      }
    }
    return _tableCellsSplit16!!
  }

private var _tableCellsSplit16: ImageVector? = null
