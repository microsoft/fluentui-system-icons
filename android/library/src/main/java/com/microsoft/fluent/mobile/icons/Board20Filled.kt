package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Board20: ImageVector
  get() {
    if (_board20 != null) {
      return _board20!!
    }
    _board20 = fluentIcon(name = "Filled.Board20", 20f) {
      materialPath {
          moveTo(9.5F, 3.0F)
          verticalLineToRelative(4.0F)
          horizontalLineTo(3.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          horizontalLineToRelative(3.5F)
          close()
          moveToRelative(1.0F, 0.0F)
          verticalLineToRelative(9.0F)
          horizontalLineTo(17.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.657F, -1.343F, -3.0F, -3.0F, -3.0F)
          horizontalLineToRelative(-3.5F)
          close()
          moveTo(17.0F, 13.0F)
          horizontalLineToRelative(-6.5F)
          verticalLineToRelative(4.0F)
          horizontalLineTo(14.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, -1.343F, 3.0F, -3.0F)
          verticalLineToRelative(-1.0F)
          close()
          moveToRelative(-7.5F, 4.0F)
          verticalLineTo(8.0F)
          horizontalLineTo(3.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 1.657F, 1.343F, 3.0F, 3.0F, 3.0F)
          horizontalLineToRelative(3.5F)
          close()        
      }
    }
    return _board20!!
  }

private var _board20: ImageVector? = null
