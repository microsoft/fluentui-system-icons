package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowDown24: ImageVector
  get() {
    if (_arrowDown24 != null) {
      return _arrowDown24!!
    }
    _arrowDown24 = fluentIcon(name = "Regular.ArrowDown24", 24f) {
      materialPath {
          moveTo(19.79F, 13.267F)
          curveToRelative(0.286F, -0.3F, 0.275F, -0.774F, -0.025F, -1.06F)
          curveToRelative(-0.3F, -0.286F, -0.775F, -0.274F, -1.06F, 0.026F)
          lineToRelative(-5.955F, 6.251F)
          verticalLineTo(3.75F)
          curveTo(12.75F, 3.336F, 12.414F, 3.0F, 12.0F, 3.0F)
          reflectiveCurveToRelative(-0.75F, 0.336F, -0.75F, 0.75F)
          verticalLineToRelative(14.734F)
          lineToRelative(-5.955F, -6.251F)
          curveToRelative(-0.286F, -0.3F, -0.76F, -0.312F, -1.06F, -0.026F)
          curveToRelative(-0.3F, 0.286F, -0.312F, 0.76F, -0.026F, 1.06F)
          lineToRelative(7.067F, 7.42F)
          curveToRelative(0.16F, 0.168F, 0.366F, 0.268F, 0.58F, 0.3F)
          curveTo(11.902F, 20.994F, 11.95F, 21.0F, 12.0F, 21.0F)
          curveToRelative(0.05F, 0.0F, 0.098F, -0.005F, 0.145F, -0.014F)
          curveToRelative(0.213F, -0.031F, 0.418F, -0.131F, 0.579F, -0.3F)
          lineToRelative(7.067F, -7.419F)
          close()        
      }
    }
    return _arrowDown24!!
  }

private var _arrowDown24: ImageVector? = null
