package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Info16: ImageVector
  get() {
    if (_info16 != null) {
      return _info16!!
    }
    _info16 = fluentIcon(name = "Regular.Info16", 16f) {
      materialPath {
          moveTo(8.0F, 7.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          verticalLineToRelative(3.0F)
          curveTo(8.5F, 10.776F, 8.276F, 11.0F, 8.0F, 11.0F)
          reflectiveCurveToRelative(-0.5F, -0.224F, -0.5F, -0.5F)
          verticalLineToRelative(-3.0F)
          curveTo(7.5F, 7.224F, 7.724F, 7.0F, 8.0F, 7.0F)
          close()
          moveToRelative(0.0F, -0.75F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(8.413F, 4.751F, 8.0F, 4.751F)
          reflectiveCurveTo(7.251F, 5.086F, 7.251F, 5.5F)
          reflectiveCurveTo(7.586F, 6.25F, 8.0F, 6.25F)
          close()
          moveTo(2.0F, 8.0F)
          curveToRelative(0.0F, -3.314F, 2.686F, -6.0F, 6.0F, -6.0F)
          reflectiveCurveToRelative(6.0F, 2.686F, 6.0F, 6.0F)
          reflectiveCurveToRelative(-2.686F, 6.0F, -6.0F, 6.0F)
          reflectiveCurveToRelative(-6.0F, -2.686F, -6.0F, -6.0F)
          close()
          moveToRelative(6.0F, -5.0F)
          curveTo(5.239F, 3.0F, 3.0F, 5.239F, 3.0F, 8.0F)
          reflectiveCurveToRelative(2.239F, 5.0F, 5.0F, 5.0F)
          reflectiveCurveToRelative(5.0F, -2.239F, 5.0F, -5.0F)
          reflectiveCurveToRelative(-2.239F, -5.0F, -5.0F, -5.0F)
          close()        
      }
    }
    return _info16!!
  }

private var _info16: ImageVector? = null
