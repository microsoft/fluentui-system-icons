package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowUp24: ImageVector
  get() {
    if (_arrowUp24 != null) {
      return _arrowUp24!!
    }
    _arrowUp24 = fluentIcon(name = "Regular.ArrowUp24", 24f) {
      materialPath {
          moveTo(4.209F, 10.733F)
          curveToRelative(-0.286F, 0.3F, -0.274F, 0.774F, 0.026F, 1.06F)
          curveToRelative(0.3F, 0.286F, 0.774F, 0.274F, 1.06F, -0.026F)
          lineToRelative(5.954F, -6.251F)
          verticalLineTo(20.25F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          curveToRelative(0.415F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineTo(5.516F)
          lineToRelative(5.955F, 6.251F)
          curveToRelative(0.286F, 0.3F, 0.76F, 0.312F, 1.06F, 0.026F)
          curveToRelative(0.3F, -0.286F, 0.312F, -0.76F, 0.027F, -1.06F)
          lineToRelative(-7.067F, -7.42F)
          curveToRelative(-0.161F, -0.168F, -0.367F, -0.268F, -0.58F, -0.3F)
          curveTo(12.097F, 3.006F, 12.049F, 3.0F, 11.999F, 3.0F)
          curveToRelative(-0.05F, 0.0F, -0.098F, 0.005F, -0.145F, 0.014F)
          curveToRelative(-0.213F, 0.031F, -0.418F, 0.131F, -0.578F, 0.3F)
          lineToRelative(-7.067F, 7.419F)
          close()        
      }
    }
    return _arrowUp24!!
  }

private var _arrowUp24: ImageVector? = null
