package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowRight24: ImageVector
  get() {
    if (_arrowRight24 != null) {
      return _arrowRight24!!
    }
    _arrowRight24 = fluentIcon(name = "Regular.ArrowRight24", 24f) {
      materialPath {
          moveTo(13.267F, 4.209F)
          curveToRelative(-0.3F, -0.286F, -0.774F, -0.274F, -1.06F, 0.026F)
          curveToRelative(-0.286F, 0.3F, -0.274F, 0.774F, 0.026F, 1.06F)
          lineToRelative(6.251F, 5.955F)
          horizontalLineTo(3.75F)
          curveTo(3.336F, 11.25F, 3.0F, 11.585F, 3.0F, 12.0F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(14.734F)
          lineToRelative(-6.251F, 5.954F)
          curveToRelative(-0.3F, 0.286F, -0.312F, 0.76F, -0.026F, 1.06F)
          curveToRelative(0.286F, 0.3F, 0.76F, 0.312F, 1.06F, 0.027F)
          lineToRelative(7.42F, -7.067F)
          curveToRelative(0.168F, -0.161F, 0.268F, -0.366F, 0.3F, -0.58F)
          curveTo(20.994F, 12.098F, 21.0F, 12.05F, 21.0F, 12.0F)
          curveToRelative(0.0F, -0.05F, -0.005F, -0.098F, -0.014F, -0.145F)
          curveToRelative(-0.031F, -0.213F, -0.131F, -0.419F, -0.3F, -0.58F)
          lineTo(13.267F, 4.21F)
          close()        
      }
    }
    return _arrowRight24!!
  }

private var _arrowRight24: ImageVector? = null
