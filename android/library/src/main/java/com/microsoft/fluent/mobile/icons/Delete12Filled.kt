package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Delete12: ImageVector
  get() {
    if (_delete12 != null) {
      return _delete12!!
    }
    _delete12 = fluentIcon(name = "Filled.Delete12", 12f) {
      materialPath {
          moveTo(5.0F, 3.0F)
          horizontalLineToRelative(2.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          reflectiveCurveTo(5.0F, 2.448F, 5.0F, 3.0F)
          close()
          moveTo(4.0F, 3.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          reflectiveCurveToRelative(2.0F, 0.895F, 2.0F, 2.0F)
          horizontalLineToRelative(2.5F)
          curveTo(10.776F, 3.0F, 11.0F, 3.224F, 11.0F, 3.5F)
          reflectiveCurveTo(10.776F, 4.0F, 10.5F, 4.0F)
          horizontalLineToRelative(-0.441F)
          lineTo(9.616F, 9.17F)
          curveTo(9.527F, 10.206F, 8.66F, 11.0F, 7.623F, 11.0F)
          horizontalLineTo(4.377F)
          curveToRelative(-1.038F, 0.0F, -1.904F, -0.795F, -1.993F, -1.83F)
          lineTo(1.941F, 4.0F)
          horizontalLineTo(1.5F)
          curveTo(1.224F, 4.0F, 1.0F, 3.776F, 1.0F, 3.5F)
          reflectiveCurveTo(1.224F, 3.0F, 1.5F, 3.0F)
          horizontalLineTo(4.0F)
          close()
          moveToRelative(3.5F, 3.0F)
          curveToRelative(0.0F, -0.276F, -0.224F, -0.5F, -0.5F, -0.5F)
          reflectiveCurveTo(6.5F, 5.724F, 6.5F, 6.0F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveTo(7.5F, 8.276F, 7.5F, 8.0F)
          verticalLineTo(6.0F)
          close()
          moveTo(5.0F, 5.5F)
          curveTo(4.724F, 5.5F, 4.5F, 5.724F, 4.5F, 6.0F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveTo(5.5F, 8.276F, 5.5F, 8.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -0.276F, -0.224F, -0.5F, -0.5F, -0.5F)
          close()        
      }
    }
    return _delete12!!
  }

private var _delete12: ImageVector? = null
