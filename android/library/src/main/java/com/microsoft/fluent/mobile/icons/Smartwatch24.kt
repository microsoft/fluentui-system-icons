package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Smartwatch24: ImageVector
  get() {
    if (_smartwatch24 != null) {
      return _smartwatch24!!
    }
    _smartwatch24 = fluentIcon(name = "Filled.Smartwatch24", 24f) {
      materialPath {
          moveTo(9.5F, 2.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, 0.895F, -2.0F, 2.0F)
          verticalLineToRelative(1.29F)
          curveTo(7.963F, 5.104F, 8.47F, 5.0F, 9.0F, 5.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(0.53F, 0.0F, 1.037F, 0.103F, 1.5F, 0.29F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineToRelative(-5.0F)
          close()
          moveTo(9.0F, 6.0F)
          curveTo(7.343F, 6.0F, 6.0F, 7.343F, 6.0F, 9.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 1.657F, 1.343F, 3.0F, 3.0F, 3.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, -1.343F, 3.0F, -3.0F)
          verticalLineToRelative(-2.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineToRelative(-1.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          verticalLineTo(9.0F)
          curveToRelative(0.0F, -1.657F, -1.343F, -3.0F, -3.0F, -3.0F)
          horizontalLineTo(9.0F)
          close()
          moveToRelative(0.0F, 13.0F)
          curveToRelative(-0.53F, 0.0F, -1.037F, -0.103F, -1.5F, -0.29F)
          verticalLineTo(20.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(5.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineToRelative(-1.29F)
          curveTo(16.037F, 18.896F, 15.53F, 19.0F, 15.0F, 19.0F)
          horizontalLineTo(9.0F)
          close()        
      }
    }
    return _smartwatch24!!
  }

private var _smartwatch24: ImageVector? = null
