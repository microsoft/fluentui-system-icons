package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SubtractCircle16: ImageVector
  get() {
    if (_subtractCircle16 != null) {
      return _subtractCircle16!!
    }
    _subtractCircle16 = fluentIcon(name = "Filled.SubtractCircle16", 16f) {
      materialPath {
          moveTo(8.0F, 2.0F)
          curveTo(4.686F, 2.0F, 2.0F, 4.686F, 2.0F, 8.0F)
          reflectiveCurveToRelative(2.686F, 6.0F, 6.0F, 6.0F)
          reflectiveCurveToRelative(6.0F, -2.686F, 6.0F, -6.0F)
          reflectiveCurveToRelative(-2.686F, -6.0F, -6.0F, -6.0F)
          close()
          moveTo(5.5F, 7.5F)
          horizontalLineToRelative(5.0F)
          curveTo(10.776F, 7.5F, 11.0F, 7.724F, 11.0F, 8.0F)
          reflectiveCurveToRelative(-0.224F, 0.5F, -0.5F, 0.5F)
          horizontalLineToRelative(-5.0F)
          curveTo(5.224F, 8.5F, 5.0F, 8.276F, 5.0F, 8.0F)
          reflectiveCurveToRelative(0.224F, -0.5F, 0.5F, -0.5F)
          close()        
      }
    }
    return _subtractCircle16!!
  }

private var _subtractCircle16: ImageVector? = null
