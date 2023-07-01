package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Table32: ImageVector
  get() {
    if (_table32 != null) {
      return _table32!!
    }
    _table32 = fluentIcon(name = "Filled.Table32", 32f) {
      materialPath {
          moveTo(20.0F, 4.0F)
          horizontalLineToRelative(-8.0F)
          verticalLineToRelative(6.0F)
          horizontalLineToRelative(8.0F)
          verticalLineTo(4.0F)
          close()
          moveToRelative(0.0F, 8.0F)
          horizontalLineToRelative(-8.0F)
          verticalLineToRelative(8.0F)
          horizontalLineToRelative(8.0F)
          verticalLineToRelative(-8.0F)
          close()
          moveToRelative(2.0F, 8.0F)
          verticalLineToRelative(-8.0F)
          horizontalLineToRelative(6.0F)
          verticalLineToRelative(8.0F)
          horizontalLineToRelative(-6.0F)
          close()
          moveToRelative(-2.0F, 2.0F)
          horizontalLineToRelative(-8.0F)
          verticalLineToRelative(6.0F)
          horizontalLineToRelative(8.0F)
          verticalLineToRelative(-6.0F)
          close()
          moveToRelative(2.0F, 6.0F)
          verticalLineToRelative(-6.0F)
          horizontalLineToRelative(6.0F)
          verticalLineToRelative(1.0F)
          curveToRelative(0.0F, 2.761F, -2.239F, 5.0F, -5.0F, 5.0F)
          horizontalLineToRelative(-1.0F)
          close()
          moveToRelative(0.0F, -18.0F)
          verticalLineTo(4.0F)
          horizontalLineToRelative(1.0F)
          curveToRelative(2.761F, 0.0F, 5.0F, 2.239F, 5.0F, 5.0F)
          verticalLineToRelative(1.0F)
          horizontalLineToRelative(-6.0F)
          close()
          moveTo(9.0F, 4.0F)
          horizontalLineToRelative(1.0F)
          verticalLineToRelative(6.0F)
          horizontalLineTo(4.0F)
          verticalLineTo(9.0F)
          curveToRelative(0.0F, -2.761F, 2.239F, -5.0F, 5.0F, -5.0F)
          close()
          moveToRelative(-5.0F, 8.0F)
          horizontalLineToRelative(6.0F)
          verticalLineToRelative(8.0F)
          horizontalLineTo(4.0F)
          verticalLineToRelative(-8.0F)
          close()
          moveToRelative(0.0F, 10.0F)
          horizontalLineToRelative(6.0F)
          verticalLineToRelative(6.0F)
          horizontalLineTo(9.0F)
          curveToRelative(-2.761F, 0.0F, -5.0F, -2.239F, -5.0F, -5.0F)
          verticalLineToRelative(-1.0F)
          close()        
      }
    }
    return _table32!!
  }

private var _table32: ImageVector? = null
