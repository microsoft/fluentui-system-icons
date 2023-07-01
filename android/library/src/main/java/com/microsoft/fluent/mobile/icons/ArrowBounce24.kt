package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowBounce24: ImageVector
  get() {
    if (_arrowBounce24 != null) {
      return _arrowBounce24!!
    }
    _arrowBounce24 = fluentIcon(name = "Regular.ArrowBounce24", 24f) {
      materialPath {
          moveTo(11.002F, 6.75F)
          curveToRelative(0.0F, -0.414F, -0.335F, -0.75F, -0.75F, -0.75F)
          horizontalLineToRelative(-7.5F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          verticalLineToRelative(7.5F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineTo(8.56F)
          lineToRelative(8.718F, 8.72F)
          curveToRelative(0.14F, 0.141F, 0.331F, 0.22F, 0.53F, 0.22F)
          curveToRelative(0.2F, 0.0F, 0.39F, -0.079F, 0.53F, -0.22F)
          lineToRelative(8.5F, -8.5F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineToRelative(-7.97F, 7.97F)
          lineTo(4.562F, 7.5F)
          horizontalLineToRelative(5.69F)
          curveToRelative(0.415F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          close()        
      }
    }
    return _arrowBounce24!!
  }

private var _arrowBounce24: ImageVector? = null
