package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CircleImage20: ImageVector
  get() {
    if (_circleImage20 != null) {
      return _circleImage20!!
    }
    _circleImage20 = fluentIcon(name = "Filled.CircleImage20", 20f) {
      materialPath {
          moveTo(10.5F, 7.0F)
          horizontalLineToRelative(2.478F)
          curveTo(12.725F, 4.197F, 10.369F, 2.0F, 7.5F, 2.0F)
          curveTo(4.462F, 2.0F, 2.0F, 4.462F, 2.0F, 7.5F)
          curveToRelative(0.0F, 2.869F, 2.197F, 5.225F, 5.0F, 5.478F)
          verticalLineTo(10.5F)
          curveTo(7.0F, 8.567F, 8.567F, 7.0F, 10.5F, 7.0F)
          close()
          moveToRelative(0.0F, 1.0F)
          curveTo(9.12F, 8.0F, 8.0F, 9.12F, 8.0F, 10.5F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 0.51F, 0.152F, 0.983F, 0.414F, 1.379F)
          lineToRelative(3.172F, -3.172F)
          curveToRelative(0.78F, -0.78F, 2.047F, -0.78F, 2.828F, 0.0F)
          lineToRelative(3.172F, 3.172F)
          curveTo(17.848F, 16.483F, 18.0F, 16.009F, 18.0F, 15.5F)
          verticalLineToRelative(-5.0F)
          curveTo(18.0F, 9.12F, 16.88F, 8.0F, 15.5F, 8.0F)
          horizontalLineToRelative(-5.0F)
          close()
          moveToRelative(5.5F, 3.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          reflectiveCurveToRelative(-1.0F, -0.448F, -1.0F, -1.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          reflectiveCurveToRelative(1.0F, 0.448F, 1.0F, 1.0F)
          close()
          moveToRelative(0.879F, 6.586F)
          lineToRelative(-3.172F, -3.172F)
          curveToRelative(-0.39F, -0.39F, -1.024F, -0.39F, -1.414F, 0.0F)
          lineTo(9.12F, 17.586F)
          curveTo(9.517F, 17.848F, 9.991F, 18.0F, 10.5F, 18.0F)
          horizontalLineToRelative(5.0F)
          curveToRelative(0.51F, 0.0F, 0.983F, -0.152F, 1.379F, -0.414F)
          close()        
      }
    }
    return _circleImage20!!
  }

private var _circleImage20: ImageVector? = null
