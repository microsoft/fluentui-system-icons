package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowReply28: ImageVector
  get() {
    if (_arrowReply28 != null) {
      return _arrowReply28!!
    }
    _arrowReply28 = fluentIcon(name = "Filled.ArrowReply28", 28f) {
      materialPath {
          moveTo(10.457F, 5.543F)
          curveToRelative(0.39F, 0.39F, 0.39F, 1.024F, 0.0F, 1.414F)
          lineTo(6.414F, 11.0F)
          horizontalLineToRelative(7.836F)
          curveToRelative(6.075F, 0.0F, 11.0F, 4.925F, 11.0F, 11.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          reflectiveCurveToRelative(-1.0F, -0.448F, -1.0F, -1.0F)
          curveToRelative(0.0F, -4.97F, -4.03F, -9.0F, -9.0F, -9.0F)
          horizontalLineTo(6.414F)
          lineToRelative(4.043F, 4.043F)
          curveToRelative(0.39F, 0.39F, 0.39F, 1.024F, 0.0F, 1.414F)
          curveToRelative(-0.39F, 0.39F, -1.024F, 0.39F, -1.414F, 0.0F)
          lineToRelative(-5.75F, -5.75F)
          curveToRelative(-0.39F, -0.39F, -0.39F, -1.024F, 0.0F, -1.414F)
          lineToRelative(5.75F, -5.75F)
          curveToRelative(0.39F, -0.39F, 1.024F, -0.39F, 1.414F, 0.0F)
          close()        
      }
    }
    return _arrowReply28!!
  }

private var _arrowReply28: ImageVector? = null
