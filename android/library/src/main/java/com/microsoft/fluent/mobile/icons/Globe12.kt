package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Globe12: ImageVector
  get() {
    if (_globe12 != null) {
      return _globe12!!
    }
    _globe12 = fluentIcon(name = "Filled.Globe12", 12f) {
      materialPath {
          moveTo(7.99F, 6.5F)
          horizontalLineTo(4.011F)
          curveToRelative(0.06F, 1.325F, 0.353F, 2.477F, 0.762F, 3.295F)
          curveTo(5.264F, 10.775F, 5.755F, 11.0F, 6.0F, 11.0F)
          curveToRelative(0.245F, 0.0F, 0.737F, -0.225F, 1.227F, -1.205F)
          curveToRelative(0.41F, -0.818F, 0.703F, -1.97F, 0.762F, -3.295F)
          close()
          moveToRelative(-3.978F, -1.0F)
          curveToRelative(0.06F, -1.325F, 0.353F, -2.477F, 0.762F, -3.295F)
          curveTo(5.264F, 1.225F, 5.755F, 1.0F, 6.0F, 1.0F)
          reflectiveCurveToRelative(0.737F, 0.225F, 1.227F, 1.205F)
          curveTo(7.637F, 3.023F, 7.93F, 4.175F, 7.989F, 5.5F)
          horizontalLineTo(4.012F)
          close()
          moveToRelative(-1.001F, 0.0F)
          horizontalLineTo(1.025F)
          curveToRelative(0.186F, -1.866F, 1.397F, -3.43F, 3.062F, -4.12F)
          curveToRelative(-0.604F, 1.0F, -1.008F, 2.465F, -1.076F, 4.12F)
          close()
          moveToRelative(0.0F, 1.0F)
          horizontalLineTo(1.025F)
          curveToRelative(0.186F, 1.866F, 1.397F, 3.43F, 3.062F, 4.12F)
          curveToRelative(-0.604F, -1.0F, -1.008F, -2.465F, -1.076F, -4.12F)
          close()
          moveToRelative(5.98F, 0.0F)
          horizontalLineToRelative(1.985F)
          curveToRelative(-0.185F, 1.866F, -1.396F, 3.43F, -3.061F, 4.12F)
          curveToRelative(0.603F, -1.0F, 1.007F, -2.465F, 1.075F, -4.12F)
          close()
          moveToRelative(1.985F, -1.0F)
          horizontalLineTo(8.99F)
          curveTo(8.922F, 3.845F, 8.518F, 2.38F, 7.915F, 1.38F)
          curveTo(9.58F, 2.07F, 10.79F, 3.633F, 10.976F, 5.5F)
          close()        
      }
    }
    return _globe12!!
  }

private var _globe12: ImageVector? = null
