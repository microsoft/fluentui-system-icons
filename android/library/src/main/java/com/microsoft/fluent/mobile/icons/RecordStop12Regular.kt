package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.RecordStop12: ImageVector
  get() {
    if (_recordStop12 != null) {
      return _recordStop12!!
    }
    _recordStop12 = fluentIcon(name = "Regular.RecordStop12", 12f) {
      materialPath {
          moveTo(5.0F, 4.0F)
          curveTo(4.448F, 4.0F, 4.0F, 4.448F, 4.0F, 5.0F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(2.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(5.0F)
          close()
          moveToRelative(6.0F, 2.0F)
          curveToRelative(0.0F, 2.761F, -2.239F, 5.0F, -5.0F, 5.0F)
          reflectiveCurveTo(1.0F, 8.761F, 1.0F, 6.0F)
          reflectiveCurveToRelative(2.239F, -5.0F, 5.0F, -5.0F)
          reflectiveCurveToRelative(5.0F, 2.239F, 5.0F, 5.0F)
          close()
          moveToRelative(-1.0F, 0.0F)
          curveToRelative(0.0F, -2.21F, -1.79F, -4.0F, -4.0F, -4.0F)
          reflectiveCurveTo(2.0F, 3.79F, 2.0F, 6.0F)
          reflectiveCurveToRelative(1.79F, 4.0F, 4.0F, 4.0F)
          reflectiveCurveToRelative(4.0F, -1.79F, 4.0F, -4.0F)
          close()        
      }
    }
    return _recordStop12!!
  }

private var _recordStop12: ImageVector? = null
