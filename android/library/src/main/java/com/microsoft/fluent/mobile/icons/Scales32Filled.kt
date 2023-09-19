package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Scales32: ImageVector
  get() {
    if (_scales32 != null) {
      return _scales32!!
    }
    _scales32 = fluentIcon(name = "Filled.Scales32", 32f) {
      materialPath {
          moveTo(5.0F, 4.0F)
          curveTo(4.448F, 4.0F, 4.0F, 4.448F, 4.0F, 5.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(1.557F)
          lineToRelative(-3.491F, 9.143F)
          curveTo(3.022F, 15.257F, 3.0F, 15.378F, 3.0F, 15.5F)
          curveTo(3.0F, 18.077F, 4.923F, 20.0F, 7.5F, 20.0F)
          reflectiveCurveToRelative(4.5F, -1.923F, 4.5F, -4.5F)
          curveToRelative(0.0F, -0.122F, -0.022F, -0.243F, -0.066F, -0.357F)
          lineTo(8.444F, 6.0F)
          horizontalLineTo(15.0F)
          verticalLineToRelative(16.0F)
          horizontalLineTo(9.0F)
          curveToRelative(-1.657F, 0.0F, -3.0F, 1.343F, -3.0F, 3.0F)
          reflectiveCurveToRelative(1.343F, 3.0F, 3.0F, 3.0F)
          horizontalLineToRelative(14.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, -1.343F, 3.0F, -3.0F)
          reflectiveCurveToRelative(-1.343F, -3.0F, -3.0F, -3.0F)
          horizontalLineToRelative(-6.0F)
          verticalLineTo(6.0F)
          horizontalLineToRelative(6.434F)
          lineToRelative(-3.372F, 9.154F)
          curveTo(20.02F, 15.265F, 20.0F, 15.382F, 20.0F, 15.5F)
          curveToRelative(0.0F, 2.577F, 1.923F, 4.5F, 4.5F, 4.5F)
          reflectiveCurveToRelative(4.5F, -1.923F, 4.5F, -4.5F)
          curveToRelative(0.0F, -0.118F, -0.02F, -0.235F, -0.062F, -0.346F)
          lineTo(25.566F, 6.0F)
          horizontalLineTo(27.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(5.0F)
          close()
          moveToRelative(2.5F, 5.137F)
          lineTo(9.548F, 14.5F)
          horizontalLineTo(5.452F)
          lineTo(7.5F, 9.137F)
          close()
          moveTo(22.434F, 14.5F)
          lineTo(24.5F, 8.893F)
          lineToRelative(2.066F, 5.607F)
          horizontalLineToRelative(-4.132F)
          close()        
      }
    }
    return _scales32!!
  }

private var _scales32: ImageVector? = null
