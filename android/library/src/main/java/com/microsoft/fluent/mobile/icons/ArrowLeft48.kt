package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowLeft48: ImageVector
  get() {
    if (_arrowLeft48 != null) {
      return _arrowLeft48!!
    }
    _arrowLeft48 = fluentIcon(name = "Regular.ArrowLeft48", 48f) {
      materialPath {
          moveTo(44.0F, 24.0F)
          curveToRelative(0.0F, 0.69F, -0.56F, 1.25F, -1.25F, 1.25F)
          horizontalLineTo(10.304F)
          lineToRelative(12.822F, 12.609F)
          curveToRelative(0.493F, 0.484F, 0.5F, 1.275F, 0.015F, 1.767F)
          curveToRelative(-0.484F, 0.492F, -1.275F, 0.5F, -1.767F, 0.015F)
          lineTo(6.386F, 24.903F)
          lineToRelative(-0.027F, -0.027F)
          curveToRelative(-0.212F, -0.215F, -0.33F, -0.488F, -0.354F, -0.767F)
          curveToRelative(-0.007F, -0.08F, -0.006F, -0.16F, 0.002F, -0.241F)
          curveToRelative(0.029F, -0.271F, 0.146F, -0.535F, 0.352F, -0.745F)
          lineToRelative(0.04F, -0.04F)
          lineTo(21.375F, 8.359F)
          curveToRelative(0.492F, -0.484F, 1.283F, -0.478F, 1.767F, 0.015F)
          curveToRelative(0.484F, 0.492F, 0.478F, 1.283F, -0.015F, 1.767F)
          lineTo(10.304F, 22.75F)
          horizontalLineTo(42.75F)
          curveToRelative(0.69F, 0.0F, 1.25F, 0.56F, 1.25F, 1.25F)
          close()        
      }
    }
    return _arrowLeft48!!
  }

private var _arrowLeft48: ImageVector? = null
