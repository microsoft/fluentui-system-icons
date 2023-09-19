package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowUndo28: ImageVector
  get() {
    if (_arrowUndo28 != null) {
      return _arrowUndo28!!
    }
    _arrowUndo28 = fluentIcon(name = "Filled.ArrowUndo28", 28f) {
      materialPath {
          moveTo(13.251F, 5.501F)
          curveToRelative(2.002F, -2.001F, 5.246F, -2.001F, 7.248F, 0.0F)
          curveToRelative(2.001F, 2.002F, 2.001F, 5.247F, 0.0F, 7.248F)
          lineTo(8.955F, 24.293F)
          curveToRelative(-0.39F, 0.39F, -0.39F, 1.024F, 0.0F, 1.414F)
          curveToRelative(0.39F, 0.39F, 1.024F, 0.39F, 1.414F, 0.0F)
          lineToRelative(11.544F, -11.544F)
          curveToRelative(2.783F, -2.782F, 2.783F, -7.294F, 0.0F, -10.076F)
          curveToRelative(-2.782F, -2.783F, -7.294F, -2.783F, -10.076F, 0.0F)
          lineToRelative(-4.5F, 4.499F)
          verticalLineTo(3.0F)
          curveToRelative(0.0F, -0.552F, -0.447F, -1.0F, -1.0F, -1.0F)
          curveToRelative(-0.551F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 0.552F, 0.449F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(8.003F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(8.752F)
          lineToRelative(4.499F, -4.499F)
          close()        
      }
    }
    return _arrowUndo28!!
  }

private var _arrowUndo28: ImageVector? = null
