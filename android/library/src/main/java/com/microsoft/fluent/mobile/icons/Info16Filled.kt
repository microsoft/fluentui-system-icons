package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Info16: ImageVector
  get() {
    if (_info16 != null) {
      return _info16!!
    }
    _info16 = fluentIcon(name = "Filled.Info16", 16f) {
      materialPath {
          moveTo(8.0F, 2.0F)
          curveTo(4.686F, 2.0F, 2.0F, 4.686F, 2.0F, 8.0F)
          reflectiveCurveToRelative(2.686F, 6.0F, 6.0F, 6.0F)
          reflectiveCurveToRelative(6.0F, -2.686F, 6.0F, -6.0F)
          reflectiveCurveToRelative(-2.686F, -6.0F, -6.0F, -6.0F)
          close()
          moveToRelative(0.75F, 3.5F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveTo(7.251F, 5.913F, 7.251F, 5.5F)
          reflectiveCurveTo(7.586F, 4.751F, 8.0F, 4.751F)
          reflectiveCurveTo(8.75F, 5.086F, 8.75F, 5.5F)
          close()
          moveTo(8.0F, 7.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          verticalLineToRelative(3.0F)
          curveTo(8.5F, 10.776F, 8.276F, 11.0F, 8.0F, 11.0F)
          reflectiveCurveToRelative(-0.5F, -0.224F, -0.5F, -0.5F)
          verticalLineToRelative(-3.0F)
          curveTo(7.5F, 7.224F, 7.724F, 7.0F, 8.0F, 7.0F)
          close()        
      }
    }
    return _info16!!
  }

private var _info16: ImageVector? = null
