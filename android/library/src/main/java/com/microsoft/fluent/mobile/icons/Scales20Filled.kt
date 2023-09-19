package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Scales20: ImageVector
  get() {
    if (_scales20 != null) {
      return _scales20!!
    }
    _scales20 = fluentIcon(name = "Filled.Scales20", 20f) {
      materialPath {
          moveTo(3.5F, 3.0F)
          curveTo(3.224F, 3.0F, 3.0F, 3.224F, 3.0F, 3.5F)
          reflectiveCurveTo(3.224F, 4.0F, 3.5F, 4.0F)
          horizontalLineToRelative(0.75F)
          lineTo(2.077F, 9.215F)
          curveToRelative(-0.05F, 0.119F, -0.08F, 0.257F, -0.075F, 0.405F)
          curveTo(2.066F, 11.22F, 3.383F, 12.5F, 5.0F, 12.5F)
          curveToRelative(1.617F, 0.0F, 2.935F, -1.279F, 2.998F, -2.88F)
          curveToRelative(0.006F, -0.148F, -0.026F, -0.286F, -0.075F, -0.405F)
          lineTo(5.75F, 4.0F)
          horizontalLineTo(9.5F)
          verticalLineToRelative(11.0F)
          horizontalLineToRelative(-4.0F)
          curveTo(4.672F, 15.0F, 4.0F, 15.672F, 4.0F, 16.5F)
          reflectiveCurveTo(4.672F, 18.0F, 5.5F, 18.0F)
          horizontalLineToRelative(9.0F)
          curveToRelative(0.829F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          reflectiveCurveTo(15.33F, 15.0F, 14.5F, 15.0F)
          horizontalLineToRelative(-4.0F)
          verticalLineTo(4.0F)
          horizontalLineToRelative(3.75F)
          lineToRelative(-2.173F, 5.215F)
          curveToRelative(-0.05F, 0.119F, -0.08F, 0.257F, -0.075F, 0.405F)
          curveToRelative(0.063F, 1.601F, 1.381F, 2.88F, 2.998F, 2.88F)
          curveToRelative(1.617F, 0.0F, 2.935F, -1.279F, 2.998F, -2.88F)
          curveToRelative(0.005F, -0.148F, -0.026F, -0.286F, -0.075F, -0.405F)
          lineTo(15.75F, 4.0F)
          horizontalLineToRelative(0.75F)
          curveTo(16.776F, 4.0F, 17.0F, 3.776F, 17.0F, 3.5F)
          reflectiveCurveTo(16.776F, 3.0F, 16.5F, 3.0F)
          horizontalLineToRelative(-13.0F)
          close()
          moveTo(5.0F, 4.8F)
          lineTo(6.75F, 9.0F)
          horizontalLineToRelative(-3.5F)
          lineTo(5.0F, 4.8F)
          close()
          moveTo(16.75F, 9.0F)
          horizontalLineToRelative(-3.5F)
          lineTo(15.0F, 4.8F)
          lineTo(16.75F, 9.0F)
          close()        
      }
    }
    return _scales20!!
  }

private var _scales20: ImageVector? = null
