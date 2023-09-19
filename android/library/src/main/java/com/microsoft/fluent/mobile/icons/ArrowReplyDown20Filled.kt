package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowReplyDown20: ImageVector
  get() {
    if (_arrowReplyDown20 != null) {
      return _arrowReplyDown20!!
    }
    _arrowReplyDown20 = fluentIcon(name = "Filled.ArrowReplyDown20", 20f) {
      materialPath {
          moveTo(4.31F, 10.498F)
          lineToRelative(2.963F, -2.963F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.768F, 0.0F, -1.06F)
          curveToRelative(-0.266F, -0.267F, -0.683F, -0.29F, -0.977F, -0.073F)
          lineTo(6.212F, 6.475F)
          lineTo(1.97F, 10.717F)
          curveToRelative(-0.267F, 0.266F, -0.29F, 0.683F, -0.073F, 0.977F)
          lineToRelative(0.073F, 0.084F)
          lineToRelative(4.242F, 4.243F)
          curveToRelative(0.293F, 0.293F, 0.768F, 0.293F, 1.061F, 0.0F)
          curveToRelative(0.266F, -0.267F, 0.29F, -0.683F, 0.073F, -0.977F)
          lineTo(7.273F, 14.96F)
          lineTo(4.31F, 11.998F)
          horizontalLineTo(10.0F)
          curveToRelative(4.198F, 0.0F, 7.616F, -3.338F, 7.746F, -7.504F)
          lineToRelative(0.004F, -0.246F)
          curveToRelative(0.0F, -0.415F, -0.336F, -0.75F, -0.75F, -0.75F)
          reflectiveCurveToRelative(-0.75F, 0.335F, -0.75F, 0.75F)
          curveToRelative(0.0F, 3.375F, -2.675F, 6.125F, -6.02F, 6.245F)
          lineTo(10.0F, 10.498F)
          horizontalLineTo(4.31F)
          lineToRelative(2.963F, -2.963F)
          lineToRelative(-2.963F, 2.963F)
          close()        
      }
    }
    return _arrowReplyDown20!!
  }

private var _arrowReplyDown20: ImageVector? = null
