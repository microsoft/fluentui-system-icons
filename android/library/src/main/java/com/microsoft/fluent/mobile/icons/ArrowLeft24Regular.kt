package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowLeft24: ImageVector
  get() {
    if (_arrowLeft24 != null) {
      return _arrowLeft24!!
    }
    _arrowLeft24 = fluentIcon(name = "Regular.ArrowLeft24", 24f) {
      materialPath {
          moveTo(10.733F, 19.79F)
          curveToRelative(0.3F, 0.286F, 0.774F, 0.275F, 1.06F, -0.025F)
          curveToRelative(0.286F, -0.3F, 0.274F, -0.775F, -0.026F, -1.06F)
          lineTo(5.516F, 12.75F)
          horizontalLineTo(20.25F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          curveToRelative(0.0F, -0.415F, -0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineTo(5.516F)
          lineToRelative(6.251F, -5.955F)
          curveToRelative(0.3F, -0.286F, 0.312F, -0.76F, 0.026F, -1.06F)
          curveToRelative(-0.286F, -0.3F, -0.76F, -0.312F, -1.06F, -0.026F)
          lineToRelative(-7.42F, 7.067F)
          curveToRelative(-0.168F, 0.16F, -0.268F, 0.366F, -0.3F, 0.58F)
          curveTo(3.006F, 11.901F, 3.0F, 11.95F, 3.0F, 12.0F)
          curveToRelative(0.0F, 0.05F, 0.005F, 0.098F, 0.014F, 0.145F)
          curveToRelative(0.031F, 0.213F, 0.131F, 0.418F, 0.3F, 0.579F)
          lineToRelative(7.419F, 7.067F)
          close()        
      }
    }
    return _arrowLeft24!!
  }

private var _arrowLeft24: ImageVector? = null
