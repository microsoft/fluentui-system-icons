package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowExit20: ImageVector
  get() {
    if (_arrowExit20 != null) {
      return _arrowExit20!!
    }
    _arrowExit20 = fluentIcon(name = "Filled.ArrowExit20", 20f) {
      materialPath {
          moveTo(12.75F, 17.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(13.164F, 16.0F, 12.75F, 16.0F)
          horizontalLineTo(6.5F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(6.25F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(13.164F, 2.5F, 12.75F, 2.5F)
          horizontalLineTo(6.5F)
          curveTo(4.567F, 2.5F, 3.0F, 4.067F, 3.0F, 6.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.933F, 1.567F, 3.5F, 3.5F, 3.5F)
          horizontalLineToRelative(6.25F)
          close()
          moveToRelative(0.991F, -11.301F)
          curveToRelative(0.305F, -0.281F, 0.78F, -0.262F, 1.06F, 0.042F)
          lineToRelative(3.0F, 3.25F)
          curveToRelative(0.265F, 0.288F, 0.265F, 0.73F, 0.0F, 1.018F)
          lineToRelative(-3.0F, 3.25F)
          curveToRelative(-0.28F, 0.304F, -0.755F, 0.323F, -1.06F, 0.042F)
          curveToRelative(-0.304F, -0.28F, -0.323F, -0.755F, -0.042F, -1.06F)
          lineToRelative(1.838F, -1.991F)
          horizontalLineTo(7.75F)
          curveTo(7.336F, 10.75F, 7.0F, 10.414F, 7.0F, 10.0F)
          reflectiveCurveToRelative(0.336F, -0.75F, 0.75F, -0.75F)
          horizontalLineToRelative(7.787F)
          lineToRelative(-1.838F, -1.991F)
          curveToRelative(-0.281F, -0.305F, -0.262F, -0.78F, 0.042F, -1.06F)
          close()        
      }
    }
    return _arrowExit20!!
  }

private var _arrowExit20: ImageVector? = null
