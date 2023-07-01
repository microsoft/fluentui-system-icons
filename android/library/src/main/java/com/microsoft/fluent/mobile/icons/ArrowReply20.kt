package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowReply20: ImageVector
  get() {
    if (_arrowReply20 != null) {
      return _arrowReply20!!
    }
    _arrowReply20 = fluentIcon(name = "Filled.ArrowReply20", 20f) {
      materialPath {
          moveTo(4.31F, 9.5F)
          lineToRelative(2.963F, 2.963F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.768F, 0.0F, 1.06F)
          curveToRelative(-0.266F, 0.267F, -0.683F, 0.29F, -0.977F, 0.073F)
          lineToRelative(-0.084F, -0.073F)
          lineTo(1.97F, 9.281F)
          curveTo(1.703F, 9.014F, 1.68F, 8.598F, 1.897F, 8.304F)
          lineTo(1.97F, 8.22F)
          lineToRelative(4.242F, -4.243F)
          curveToRelative(0.293F, -0.292F, 0.768F, -0.292F, 1.061F, 0.0F)
          curveToRelative(0.266F, 0.267F, 0.29F, 0.683F, 0.073F, 0.977F)
          lineTo(7.273F, 5.038F)
          lineTo(4.31F, 8.0F)
          horizontalLineTo(10.0F)
          curveToRelative(4.198F, 0.0F, 7.616F, 3.338F, 7.746F, 7.504F)
          lineToRelative(0.004F, 0.247F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveToRelative(-0.75F, -0.336F, -0.75F, -0.75F)
          curveToRelative(0.0F, -3.376F, -2.675F, -6.126F, -6.02F, -6.246F)
          lineTo(10.0F, 9.5F)
          horizontalLineTo(4.31F)
          lineToRelative(2.963F, 2.963F)
          lineTo(4.31F, 9.5F)
          close()        
      }
    }
    return _arrowReply20!!
  }

private var _arrowReply20: ImageVector? = null
