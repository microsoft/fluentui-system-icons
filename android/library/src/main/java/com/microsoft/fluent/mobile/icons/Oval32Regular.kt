package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Oval32: ImageVector
  get() {
    if (_oval32 != null) {
      return _oval32!!
    }
    _oval32 = fluentIcon(name = "Regular.Oval32", 32f) {
      materialPath {
          moveTo(12.0F, 8.0F)
          curveToRelative(-4.418F, 0.0F, -8.0F, 3.582F, -8.0F, 8.0F)
          reflectiveCurveToRelative(3.582F, 8.0F, 8.0F, 8.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(4.418F, 0.0F, 8.0F, -3.582F, 8.0F, -8.0F)
          reflectiveCurveToRelative(-3.582F, -8.0F, -8.0F, -8.0F)
          horizontalLineToRelative(-8.0F)
          close()
          moveTo(2.0F, 16.0F)
          curveTo(2.0F, 10.477F, 6.477F, 6.0F, 12.0F, 6.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(5.523F, 0.0F, 10.0F, 4.477F, 10.0F, 10.0F)
          reflectiveCurveToRelative(-4.477F, 10.0F, -10.0F, 10.0F)
          horizontalLineToRelative(-8.0F)
          curveTo(6.477F, 26.0F, 2.0F, 21.523F, 2.0F, 16.0F)
          close()        
      }
    }
    return _oval32!!
  }

private var _oval32: ImageVector? = null
