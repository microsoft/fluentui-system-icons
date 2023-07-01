package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowUndo28: ImageVector
  get() {
    if (_arrowUndo28 != null) {
      return _arrowUndo28!!
    }
    _arrowUndo28 = fluentIcon(name = "Regular.ArrowUndo28", 28f) {
      materialPath {
          moveTo(7.558F, 10.5F)
          lineToRelative(5.34F, -5.353F)
          curveToRelative(2.196F, -2.196F, 5.758F, -2.196F, 7.954F, 0.0F)
          curveToRelative(2.197F, 2.197F, 2.197F, 5.759F, 0.0F, 7.955F)
          lineTo(9.22F, 24.72F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.768F, 0.0F, 1.061F)
          curveToRelative(0.292F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          lineToRelative(11.633F, -11.617F)
          curveToRelative(2.783F, -2.782F, 2.783F, -7.294F, 0.0F, -10.076F)
          curveToRelative(-2.782F, -2.783F, -7.294F, -2.782F, -10.077F, 0.0F)
          lineTo(6.5F, 9.438F)
          verticalLineTo(2.75F)
          curveTo(6.5F, 2.336F, 6.164F, 2.0F, 5.75F, 2.0F)
          reflectiveCurveTo(5.0F, 2.336F, 5.0F, 2.75F)
          verticalLineToRelative(8.5F)
          curveToRelative(0.0F, 0.199F, 0.079F, 0.39F, 0.22F, 0.53F)
          curveTo(5.36F, 11.921F, 5.55F, 12.0F, 5.75F, 12.0F)
          horizontalLineToRelative(8.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineTo(7.558F)
          close()        
      }
    }
    return _arrowUndo28!!
  }

private var _arrowUndo28: ImageVector? = null
