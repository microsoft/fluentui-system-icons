package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Headset32: ImageVector
  get() {
    if (_headset32 != null) {
      return _headset32!!
    }
    _headset32 = fluentIcon(name = "Filled.Headset32", 32f) {
      materialPath {
          moveTo(6.0F, 12.0F)
          curveTo(6.0F, 6.477F, 10.477F, 2.0F, 16.0F, 2.0F)
          reflectiveCurveToRelative(10.0F, 4.477F, 10.0F, 10.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 2.21F, -1.79F, 4.0F, -4.0F, 4.0F)
          horizontalLineToRelative(-2.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineToRelative(-6.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(4.0F)
          curveToRelative(0.0F, -4.418F, -3.582F, -8.0F, -8.0F, -8.0F)
          reflectiveCurveToRelative(-8.0F, 3.582F, -8.0F, 8.0F)
          horizontalLineToRelative(4.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(8.0F)
          curveToRelative(0.0F, 2.21F, 1.79F, 4.0F, 4.0F, 4.0F)
          horizontalLineToRelative(1.17F)
          curveToRelative(0.412F, -1.165F, 1.524F, -2.0F, 2.83F, -2.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, 1.343F, 3.0F, 3.0F)
          reflectiveCurveToRelative(-1.343F, 3.0F, -3.0F, 3.0F)
          curveToRelative(-1.306F, 0.0F, -2.418F, -0.835F, -2.83F, -2.0F)
          horizontalLineTo(12.0F)
          curveToRelative(-3.314F, 0.0F, -6.0F, -2.686F, -6.0F, -6.0F)
          verticalLineTo(12.0F)
          close()        
      }
    }
    return _headset32!!
  }

private var _headset32: ImageVector? = null
