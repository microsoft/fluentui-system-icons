package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowCircleLeft24: ImageVector
  get() {
    if (_arrowCircleLeft24 != null) {
      return _arrowCircleLeft24!!
    }
    _arrowCircleLeft24 = fluentIcon(name = "Filled.ArrowCircleLeft24", 24f) {
      materialPath {
          moveTo(12.0F, 2.0F)
          curveTo(6.477F, 2.0F, 2.0F, 6.477F, 2.0F, 12.0F)
          reflectiveCurveToRelative(4.477F, 10.0F, 10.0F, 10.0F)
          reflectiveCurveToRelative(10.0F, -4.477F, 10.0F, -10.0F)
          reflectiveCurveTo(17.523F, 2.0F, 12.0F, 2.0F)
          close()
          moveToRelative(0.28F, 14.53F)
          curveToRelative(-0.266F, 0.267F, -0.683F, 0.291F, -0.976F, 0.073F)
          lineToRelative(-0.085F, -0.072F)
          lineToRelative(-4.0F, -4.001F)
          curveToRelative(-0.267F, -0.266F, -0.29F, -0.683F, -0.073F, -0.977F)
          lineTo(7.22F, 11.47F)
          lineToRelative(4.001F, -4.0F)
          curveToRelative(0.293F, -0.293F, 0.768F, -0.293F, 1.06F, 0.0F)
          curveToRelative(0.267F, 0.267F, 0.291F, 0.683F, 0.073F, 0.977F)
          lineTo(12.281F, 8.53F)
          lineToRelative(-2.722F, 2.72F)
          horizontalLineToRelative(6.691F)
          curveToRelative(0.38F, 0.0F, 0.694F, 0.283F, 0.744F, 0.649F)
          lineTo(17.0F, 12.0F)
          curveToRelative(0.0F, 0.38F, -0.282F, 0.694F, -0.648F, 0.743F)
          lineTo(16.25F, 12.75F)
          horizontalLineTo(9.56F)
          lineToRelative(2.72F, 2.72F)
          curveToRelative(0.266F, 0.266F, 0.29F, 0.683F, 0.073F, 0.977F)
          lineTo(12.28F, 16.53F)
          close()        
      }
    }
    return _arrowCircleLeft24!!
  }

private var _arrowCircleLeft24: ImageVector? = null
