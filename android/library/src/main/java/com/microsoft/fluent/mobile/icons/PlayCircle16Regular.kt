package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PlayCircle16: ImageVector
  get() {
    if (_playCircle16 != null) {
      return _playCircle16!!
    }
    _playCircle16 = fluentIcon(name = "Regular.PlayCircle16", 16f) {
      materialPath {
          moveTo(10.5F, 8.0F)
          curveToRelative(0.0F, 0.18F, -0.097F, 0.346F, -0.254F, 0.435F)
          lineTo(7.62F, 9.924F)
          curveTo(7.12F, 10.207F, 6.5F, 9.846F, 6.5F, 9.27F)
          verticalLineTo(6.729F)
          curveToRelative(0.0F, -0.575F, 0.62F, -0.936F, 1.12F, -0.652F)
          lineToRelative(2.626F, 1.488F)
          curveTo(10.403F, 7.654F, 10.5F, 7.82F, 10.5F, 8.0F)
          close()
          moveTo(8.0F, 2.0F)
          curveTo(4.686F, 2.0F, 2.0F, 4.686F, 2.0F, 8.0F)
          reflectiveCurveToRelative(2.686F, 6.0F, 6.0F, 6.0F)
          reflectiveCurveToRelative(6.0F, -2.686F, 6.0F, -6.0F)
          reflectiveCurveToRelative(-2.686F, -6.0F, -6.0F, -6.0F)
          close()
          moveTo(3.0F, 8.0F)
          curveToRelative(0.0F, -2.761F, 2.239F, -5.0F, 5.0F, -5.0F)
          reflectiveCurveToRelative(5.0F, 2.239F, 5.0F, 5.0F)
          reflectiveCurveToRelative(-2.239F, 5.0F, -5.0F, 5.0F)
          reflectiveCurveToRelative(-5.0F, -2.239F, -5.0F, -5.0F)
          close()        
      }
    }
    return _playCircle16!!
  }

private var _playCircle16: ImageVector? = null
