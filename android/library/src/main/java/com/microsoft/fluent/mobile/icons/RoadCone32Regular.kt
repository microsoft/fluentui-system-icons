package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.RoadCone32: ImageVector
  get() {
    if (_roadCone32 != null) {
      return _roadCone32!!
    }
    _roadCone32 = fluentIcon(name = "Regular.RoadCone32", 32f) {
      materialPath {
          moveTo(14.77F, 2.0F)
          curveToRelative(-0.66F, 0.0F, -1.242F, 0.432F, -1.434F, 1.064F)
          lineTo(5.758F, 28.0F)
          horizontalLineTo(3.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(26.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineToRelative(-2.759F)
          lineTo(18.665F, 3.064F)
          curveTo(18.473F, 2.432F, 17.89F, 2.0F, 17.229F, 2.0F)
          horizontalLineToRelative(-2.458F)
          close()
          moveTo(7.85F, 28.0F)
          lineToRelative(1.66F, -5.462F)
          curveToRelative(0.144F, 0.082F, 0.31F, 0.129F, 0.49F, 0.129F)
          horizontalLineToRelative(8.5F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          curveToRelative(0.0F, -0.553F, -0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineToRelative(-8.423F)
          lineTo(10.887F, 18.0F)
          horizontalLineTo(17.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineToRelative(-5.505F)
          lineToRelative(3.646F, -12.0F)
          horizontalLineToRelative(1.718F)
          lineToRelative(7.292F, 24.0F)
          horizontalLineTo(7.849F)
          close()        
      }
    }
    return _roadCone32!!
  }

private var _roadCone32: ImageVector? = null
