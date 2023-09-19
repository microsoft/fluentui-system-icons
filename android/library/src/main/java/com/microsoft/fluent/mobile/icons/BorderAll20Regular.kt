package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.BorderAll20: ImageVector
  get() {
    if (_borderAll20 != null) {
      return _borderAll20!!
    }
    _borderAll20 = fluentIcon(name = "Regular.BorderAll20", 20f) {
      materialPath {
          moveTo(3.0F, 6.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, 1.343F, 3.0F, 3.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          horizontalLineTo(6.0F)
          curveToRelative(-1.657F, 0.0F, -3.0F, -1.343F, -3.0F, -3.0F)
          verticalLineTo(6.0F)
          close()
          moveToRelative(3.0F, -2.0F)
          curveTo(4.895F, 4.0F, 4.0F, 4.895F, 4.0F, 6.0F)
          verticalLineToRelative(3.5F)
          horizontalLineToRelative(5.5F)
          verticalLineTo(4.0F)
          horizontalLineTo(6.0F)
          close()
          moveToRelative(4.5F, 0.0F)
          verticalLineToRelative(5.5F)
          horizontalLineTo(16.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineToRelative(-3.5F)
          close()
          moveToRelative(5.5F, 6.5F)
          horizontalLineToRelative(-5.5F)
          verticalLineTo(16.0F)
          horizontalLineTo(14.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineToRelative(-3.5F)
          close()
          moveTo(9.5F, 16.0F)
          verticalLineToRelative(-5.5F)
          horizontalLineTo(4.0F)
          verticalLineTo(14.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(3.5F)
          close()        
      }
    }
    return _borderAll20!!
  }

private var _borderAll20: ImageVector? = null
