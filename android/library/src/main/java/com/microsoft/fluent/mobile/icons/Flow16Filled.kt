package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Flow16: ImageVector
  get() {
    if (_flow16 != null) {
      return _flow16!!
    }
    _flow16 = fluentIcon(name = "Filled.Flow16", 16f) {
      materialPath {
          moveTo(10.05F, 6.0F)
          horizontalLineTo(9.5F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(5.95F)
          curveToRelative(-0.232F, 1.141F, -1.24F, 2.0F, -2.45F, 2.0F)
          curveTo(2.12F, 13.0F, 1.0F, 11.88F, 1.0F, 10.5F)
          reflectiveCurveTo(2.12F, 8.0F, 3.5F, 8.0F)
          curveToRelative(1.21F, 0.0F, 2.218F, 0.859F, 2.45F, 2.0F)
          horizontalLineTo(6.5F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineTo(7.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(0.55F)
          curveToRelative(0.232F, -1.141F, 1.24F, -2.0F, 2.45F, -2.0F)
          curveTo(13.88F, 3.0F, 15.0F, 4.12F, 15.0F, 5.5F)
          reflectiveCurveTo(13.88F, 8.0F, 12.5F, 8.0F)
          curveToRelative(-1.21F, 0.0F, -2.218F, -0.859F, -2.45F, -2.0F)
          close()        
      }
    }
    return _flow16!!
  }

private var _flow16: ImageVector? = null
