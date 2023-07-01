package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Delete32: ImageVector
  get() {
    if (_delete32 != null) {
      return _delete32!!
    }
    _delete32 = fluentIcon(name = "Filled.Delete32", 32f) {
      materialPath {
          moveTo(13.5F, 6.5F)
          verticalLineTo(7.0F)
          horizontalLineToRelative(5.0F)
          verticalLineTo(6.5F)
          curveTo(18.5F, 5.12F, 17.38F, 4.0F, 16.0F, 4.0F)
          reflectiveCurveToRelative(-2.5F, 1.12F, -2.5F, 2.5F)
          close()
          moveToRelative(-2.0F, 0.5F)
          verticalLineTo(6.5F)
          curveTo(11.5F, 4.015F, 13.515F, 2.0F, 16.0F, 2.0F)
          reflectiveCurveToRelative(4.5F, 2.015F, 4.5F, 4.5F)
          verticalLineTo(7.0F)
          horizontalLineTo(28.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveToRelative(-0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineToRelative(-1.508F)
          lineTo(24.6F, 25.568F)
          curveTo(24.31F, 28.093F, 22.173F, 30.0F, 19.63F, 30.0F)
          horizontalLineToRelative(-7.26F)
          curveToRelative(-2.542F, 0.0F, -4.68F, -1.907F, -4.968F, -4.432F)
          lineTo(5.508F, 9.0F)
          horizontalLineTo(4.0F)
          curveTo(3.448F, 9.0F, 3.0F, 8.552F, 3.0F, 8.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(7.5F)
          close()
          moveToRelative(2.5F, 6.5F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          reflectiveCurveToRelative(-1.0F, 0.448F, -1.0F, 1.0F)
          verticalLineToRelative(10.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          reflectiveCurveToRelative(1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineToRelative(-10.0F)
          close()
          moveToRelative(5.0F, -1.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          verticalLineToRelative(10.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          reflectiveCurveToRelative(1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineToRelative(-10.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          close()        
      }
    }
    return _delete32!!
  }

private var _delete32: ImageVector? = null
