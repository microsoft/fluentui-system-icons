package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Comment12: ImageVector
  get() {
    if (_comment12 != null) {
      return _comment12!!
    }
    _comment12 = fluentIcon(name = "Regular.Comment12", 12f) {
      materialPath {
          moveTo(3.5F, 3.0F)
          curveTo(3.224F, 3.0F, 3.0F, 3.224F, 3.0F, 3.5F)
          verticalLineToRelative(4.0F)
          curveTo(3.0F, 7.776F, 3.224F, 8.0F, 3.5F, 8.0F)
          horizontalLineToRelative(1.0F)
          curveTo(4.776F, 8.0F, 5.0F, 8.224F, 5.0F, 8.5F)
          verticalLineToRelative(0.617F)
          lineTo(6.743F, 8.07F)
          curveTo(6.82F, 8.025F, 6.909F, 8.0F, 7.0F, 8.0F)
          horizontalLineToRelative(1.5F)
          curveTo(8.776F, 8.0F, 9.0F, 7.776F, 9.0F, 7.5F)
          verticalLineToRelative(-4.0F)
          curveTo(9.0F, 3.224F, 8.776F, 3.0F, 8.5F, 3.0F)
          horizontalLineToRelative(-5.0F)
          close()
          moveTo(2.0F, 3.5F)
          curveTo(2.0F, 2.672F, 2.672F, 2.0F, 3.5F, 2.0F)
          horizontalLineToRelative(5.0F)
          curveTo(9.328F, 2.0F, 10.0F, 2.672F, 10.0F, 3.5F)
          verticalLineToRelative(4.0F)
          curveTo(10.0F, 8.328F, 9.328F, 9.0F, 8.5F, 9.0F)
          horizontalLineTo(7.138F)
          lineToRelative(-2.38F, 1.429F)
          curveToRelative(-0.155F, 0.092F, -0.348F, 0.095F, -0.504F, 0.006F)
          curveTo(4.097F, 10.346F, 4.0F, 10.18F, 4.0F, 10.0F)
          verticalLineTo(9.0F)
          horizontalLineTo(3.5F)
          curveTo(2.672F, 9.0F, 2.0F, 8.328F, 2.0F, 7.5F)
          verticalLineToRelative(-4.0F)
          close()        
      }
    }
    return _comment12!!
  }

private var _comment12: ImageVector? = null
