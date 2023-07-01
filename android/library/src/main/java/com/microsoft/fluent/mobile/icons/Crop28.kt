package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Crop28: ImageVector
  get() {
    if (_crop28 != null) {
      return _crop28!!
    }
    _crop28 = fluentIcon(name = "Filled.Crop28", 28f) {
      materialPath {
          moveTo(8.0F, 3.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          reflectiveCurveTo(6.0F, 2.448F, 6.0F, 3.0F)
          verticalLineToRelative(3.0F)
          horizontalLineTo(3.0F)
          curveTo(2.448F, 6.0F, 2.0F, 6.448F, 2.0F, 7.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(3.0F)
          verticalLineToRelative(9.75F)
          curveTo(6.0F, 20.097F, 7.903F, 22.0F, 10.25F, 22.0F)
          horizontalLineTo(20.0F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          reflectiveCurveToRelative(1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineToRelative(-3.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(10.25F)
          curveTo(9.007F, 20.0F, 8.0F, 18.993F, 8.0F, 17.75F)
          verticalLineTo(3.0F)
          close()
          moveToRelative(12.0F, 7.25F)
          verticalLineTo(19.0F)
          horizontalLineToRelative(2.0F)
          verticalLineToRelative(-8.75F)
          curveTo(22.0F, 7.903F, 20.097F, 6.0F, 17.75F, 6.0F)
          horizontalLineTo(9.0F)
          verticalLineToRelative(2.0F)
          horizontalLineToRelative(8.75F)
          curveTo(18.993F, 8.0F, 20.0F, 9.007F, 20.0F, 10.25F)
          close()        
      }
    }
    return _crop28!!
  }

private var _crop28: ImageVector? = null
