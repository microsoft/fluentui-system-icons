package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowSprint20: ImageVector
  get() {
    if (_arrowSprint20 != null) {
      return _arrowSprint20!!
    }
    _arrowSprint20 = fluentIcon(name = "Regular.ArrowSprint20", 20f) {
      materialPath {
          moveTo(10.0F, 6.0F)
          curveTo(8.526F, 6.0F, 7.265F, 6.91F, 6.75F, 8.2F)
          curveTo(6.587F, 8.602F, 6.5F, 9.04F, 6.5F, 9.5F)
          curveToRelative(0.0F, 1.933F, 1.567F, 3.5F, 3.5F, 3.5F)
          horizontalLineToRelative(7.293F)
          lineToRelative(-1.147F, -1.146F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          lineToRelative(2.0F, 2.0F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(-2.0F, 2.0F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          lineTo(17.293F, 14.0F)
          horizontalLineTo(10.0F)
          curveToRelative(-2.485F, 0.0F, -4.5F, -2.015F, -4.5F, -4.5F)
          curveToRelative(0.0F, -0.518F, 0.088F, -1.016F, 0.249F, -1.479F)
          curveTo(6.36F, 6.262F, 8.033F, 5.0F, 10.0F, 5.0F)
          curveToRelative(2.485F, 0.0F, 4.5F, 2.015F, 4.5F, 4.5F)
          curveToRelative(0.0F, 0.925F, -0.28F, 1.785F, -0.758F, 2.5F)
          horizontalLineTo(12.45F)
          curveToRelative(0.649F, -0.635F, 1.051F, -1.52F, 1.051F, -2.5F)
          curveTo(13.5F, 7.567F, 11.933F, 6.0F, 10.0F, 6.0F)
          close()
          moveToRelative(-7.5F, 7.0F)
          horizontalLineToRelative(3.257F)
          curveToRelative(0.314F, 0.38F, 0.677F, 0.716F, 1.08F, 1.0F)
          horizontalLineTo(2.5F)
          curveTo(2.224F, 14.0F, 2.0F, 13.776F, 2.0F, 13.5F)
          reflectiveCurveTo(2.224F, 13.0F, 2.5F, 13.0F)
          close()        
      }
    }
    return _arrowSprint20!!
  }

private var _arrowSprint20: ImageVector? = null
