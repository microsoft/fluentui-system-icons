package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TableDefault32: ImageVector
  get() {
    if (_tableDefault32 != null) {
      return _tableDefault32!!
    }
    _tableDefault32 = fluentIcon(name = "Filled.TableDefault32", 32f) {
      materialPath {
          moveTo(22.0F, 29.0F)
          horizontalLineToRelative(2.5F)
          curveToRelative(2.485F, 0.0F, 4.5F, -2.015F, 4.5F, -4.5F)
          verticalLineTo(22.0F)
          horizontalLineToRelative(-7.0F)
          verticalLineToRelative(7.0F)
          close()
          moveToRelative(0.0F, -9.0F)
          horizontalLineToRelative(7.0F)
          verticalLineToRelative(-8.0F)
          horizontalLineToRelative(-7.0F)
          verticalLineToRelative(8.0F)
          close()
          moveToRelative(-2.0F, -8.0F)
          verticalLineToRelative(8.0F)
          horizontalLineToRelative(-8.0F)
          verticalLineToRelative(-8.0F)
          horizontalLineToRelative(8.0F)
          close()
          moveToRelative(2.0F, -2.0F)
          horizontalLineToRelative(7.0F)
          verticalLineTo(7.5F)
          curveTo(29.0F, 5.015F, 26.985F, 3.0F, 24.5F, 3.0F)
          horizontalLineTo(22.0F)
          verticalLineToRelative(7.0F)
          close()
          moveToRelative(-2.0F, -7.0F)
          verticalLineToRelative(7.0F)
          horizontalLineToRelative(-8.0F)
          verticalLineTo(3.0F)
          horizontalLineToRelative(8.0F)
          close()
          moveToRelative(0.0F, 19.0F)
          verticalLineToRelative(7.0F)
          horizontalLineToRelative(-8.0F)
          verticalLineToRelative(-7.0F)
          horizontalLineToRelative(8.0F)
          close()
          moveToRelative(-10.0F, -2.0F)
          verticalLineToRelative(-8.0F)
          horizontalLineTo(3.0F)
          verticalLineToRelative(8.0F)
          horizontalLineToRelative(7.0F)
          close()
          moveToRelative(0.0F, -10.0F)
          verticalLineTo(3.0F)
          horizontalLineTo(7.5F)
          curveTo(5.015F, 3.0F, 3.0F, 5.015F, 3.0F, 7.5F)
          verticalLineTo(10.0F)
          horizontalLineToRelative(7.0F)
          close()
          moveToRelative(0.0F, 19.0F)
          verticalLineToRelative(-7.0F)
          horizontalLineTo(3.0F)
          verticalLineToRelative(2.5F)
          curveTo(3.0F, 26.985F, 5.015F, 29.0F, 7.5F, 29.0F)
          horizontalLineTo(10.0F)
          close()        
      }
    }
    return _tableDefault32!!
  }

private var _tableDefault32: ImageVector? = null
