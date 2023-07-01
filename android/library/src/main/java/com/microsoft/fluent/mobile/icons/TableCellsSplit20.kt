package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TableCellsSplit20: ImageVector
  get() {
    if (_tableCellsSplit20 != null) {
      return _tableCellsSplit20!!
    }
    _tableCellsSplit20 = fluentIcon(name = "Filled.TableCellsSplit20", 20f) {
      materialPath {
          moveTo(10.0F, 6.0F)
          horizontalLineToRelative(7.0F)
          verticalLineTo(5.5F)
          curveTo(17.0F, 4.12F, 15.88F, 3.0F, 14.5F, 3.0F)
          horizontalLineTo(10.0F)
          verticalLineToRelative(3.0F)
          close()
          moveToRelative(7.0F, 7.0F)
          verticalLineTo(7.0F)
          horizontalLineTo(3.0F)
          verticalLineToRelative(6.0F)
          horizontalLineToRelative(14.0F)
          close()
          moveToRelative(-7.0F, -5.0F)
          verticalLineToRelative(4.0F)
          horizontalLineTo(9.0F)
          verticalLineTo(8.0F)
          horizontalLineToRelative(1.0F)
          close()
          moveToRelative(0.0F, 9.0F)
          horizontalLineToRelative(4.5F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineTo(14.0F)
          horizontalLineToRelative(-7.0F)
          verticalLineToRelative(3.0F)
          close()
          moveToRelative(-1.0F, -3.0F)
          horizontalLineTo(3.0F)
          verticalLineToRelative(0.5F)
          curveTo(3.0F, 15.88F, 4.12F, 17.0F, 5.5F, 17.0F)
          horizontalLineTo(9.0F)
          verticalLineToRelative(-3.0F)
          close()
          moveToRelative(0.0F, -8.0F)
          verticalLineTo(3.0F)
          horizontalLineTo(5.5F)
          curveTo(4.12F, 3.0F, 3.0F, 4.12F, 3.0F, 5.5F)
          verticalLineTo(6.0F)
          horizontalLineToRelative(6.0F)
          close()        
      }
    }
    return _tableCellsSplit20!!
  }

private var _tableCellsSplit20: ImageVector? = null
