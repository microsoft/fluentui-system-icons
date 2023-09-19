package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowCircleLeft24: ImageVector
  get() {
    if (_arrowCircleLeft24 != null) {
      return _arrowCircleLeft24!!
    }
    _arrowCircleLeft24 = fluentIcon(name = "Regular.ArrowCircleLeft24", 24f) {
      materialPath {
          moveTo(12.28F, 16.53F)
          lineToRelative(0.073F, -0.083F)
          curveToRelative(0.218F, -0.294F, 0.193F, -0.71F, -0.073F, -0.977F)
          lineToRelative(-2.72F, -2.72F)
          horizontalLineToRelative(6.69F)
          lineToRelative(0.102F, -0.007F)
          curveTo(16.718F, 12.693F, 17.0F, 12.38F, 17.0F, 12.0F)
          lineToRelative(-0.006F, -0.1F)
          curveToRelative(-0.05F, -0.366F, -0.364F, -0.649F, -0.744F, -0.649F)
          horizontalLineTo(9.56F)
          lineToRelative(2.722F, -2.72F)
          lineToRelative(0.072F, -0.084F)
          curveToRelative(0.218F, -0.294F, 0.194F, -0.71F, -0.072F, -0.977F)
          curveToRelative(-0.293F, -0.293F, -0.768F, -0.293F, -1.06F, 0.0F)
          lineToRelative(-4.002F, 4.0F)
          lineToRelative(-0.073F, 0.084F)
          curveToRelative(-0.218F, 0.294F, -0.194F, 0.71F, 0.073F, 0.977F)
          lineToRelative(4.0F, 4.0F)
          lineToRelative(0.085F, 0.073F)
          curveToRelative(0.293F, 0.218F, 0.71F, 0.194F, 0.976F, -0.072F)
          close()
          moveTo(12.0F, 2.0F)
          curveTo(6.477F, 2.0F, 2.0F, 6.477F, 2.0F, 12.0F)
          reflectiveCurveToRelative(4.477F, 10.0F, 10.0F, 10.0F)
          reflectiveCurveToRelative(10.0F, -4.477F, 10.0F, -10.0F)
          reflectiveCurveTo(17.523F, 2.0F, 12.0F, 2.0F)
          close()
          moveToRelative(0.0F, 18.5F)
          curveToRelative(-4.694F, 0.0F, -8.5F, -3.806F, -8.5F, -8.5F)
          reflectiveCurveTo(7.306F, 3.5F, 12.0F, 3.5F)
          reflectiveCurveToRelative(8.5F, 3.806F, 8.5F, 8.5F)
          reflectiveCurveToRelative(-3.806F, 8.5F, -8.5F, 8.5F)
          close()        
      }
    }
    return _arrowCircleLeft24!!
  }

private var _arrowCircleLeft24: ImageVector? = null
