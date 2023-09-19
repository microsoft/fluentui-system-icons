package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowReplyDown20: ImageVector
  get() {
    if (_arrowReplyDown20 != null) {
      return _arrowReplyDown20!!
    }
    _arrowReplyDown20 = fluentIcon(name = "Regular.ArrowReplyDown20", 20f) {
      materialPath {
          moveTo(3.707F, 10.998F)
          lineToRelative(3.39F, -3.39F)
          curveToRelative(0.194F, -0.195F, 0.194F, -0.511F, 0.0F, -0.707F)
          curveToRelative(-0.175F, -0.173F, -0.445F, -0.191F, -0.64F, -0.058F)
          lineTo(6.39F, 6.901F)
          lineToRelative(-4.242F, 4.243F)
          curveToRelative(-0.174F, 0.174F, -0.193F, 0.443F, -0.058F, 0.638F)
          lineToRelative(0.058F, 0.07F)
          lineToRelative(4.242F, 4.242F)
          curveToRelative(0.195F, 0.195F, 0.512F, 0.195F, 0.707F, 0.0F)
          curveTo(7.27F, 15.92F, 7.29F, 15.65F, 7.154F, 15.456F)
          lineToRelative(-0.058F, -0.07F)
          lineToRelative(-3.389F, -3.388F)
          horizontalLineTo(10.0F)
          curveToRelative(4.06F, 0.0F, 7.368F, -3.228F, 7.496F, -7.258F)
          lineTo(17.5F, 4.498F)
          curveToRelative(0.0F, -0.277F, -0.224F, -0.5F, -0.5F, -0.5F)
          reflectiveCurveToRelative(-0.5F, 0.223F, -0.5F, 0.5F)
          curveToRelative(0.0F, 3.511F, -2.785F, 6.373F, -6.267F, 6.495F)
          lineTo(10.0F, 10.998F)
          horizontalLineTo(3.707F)
          lineToRelative(3.39F, -3.39F)
          lineToRelative(-3.39F, 3.39F)
          close()        
      }
    }
    return _arrowReplyDown20!!
  }

private var _arrowReplyDown20: ImageVector? = null
