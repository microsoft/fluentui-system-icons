package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowHookDownLeft24: ImageVector
  get() {
    if (_arrowHookDownLeft24 != null) {
      return _arrowHookDownLeft24!!
    }
    _arrowHookDownLeft24 = fluentIcon(name = "Filled.ArrowHookDownLeft24", 24f) {
      materialPath {
          moveTo(7.0F, 5.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(5.0F)
          curveToRelative(2.242F, 0.0F, 4.01F, 0.778F, 5.218F, 2.023F)
          curveTo(19.414F, 7.256F, 20.0F, 8.887F, 20.0F, 10.5F)
          curveToRelative(0.0F, 1.613F, -0.586F, 3.244F, -1.782F, 4.477F)
          curveTo(17.01F, 16.222F, 15.242F, 17.0F, 13.0F, 17.0F)
          horizontalLineTo(8.414F)
          lineToRelative(2.043F, 2.043F)
          curveToRelative(0.39F, 0.39F, 0.39F, 1.024F, 0.0F, 1.414F)
          curveToRelative(-0.39F, 0.39F, -1.024F, 0.39F, -1.414F, 0.0F)
          lineToRelative(-3.75F, -3.75F)
          curveToRelative(-0.39F, -0.39F, -0.39F, -1.024F, 0.0F, -1.414F)
          lineToRelative(3.75F, -3.75F)
          curveToRelative(0.39F, -0.39F, 1.024F, -0.39F, 1.414F, 0.0F)
          curveToRelative(0.39F, 0.39F, 0.39F, 1.024F, 0.0F, 1.414F)
          lineTo(8.414F, 15.0F)
          horizontalLineTo(13.0F)
          curveToRelative(1.758F, 0.0F, 2.99F, -0.597F, 3.782F, -1.415F)
          curveTo(17.586F, 12.755F, 18.0F, 11.637F, 18.0F, 10.5F)
          reflectiveCurveToRelative(-0.414F, -2.256F, -1.218F, -3.085F)
          curveTo(15.99F, 6.597F, 14.758F, 6.0F, 13.0F, 6.0F)
          horizontalLineTo(8.0F)
          curveTo(7.448F, 6.0F, 7.0F, 5.552F, 7.0F, 5.0F)
          close()        
      }
    }
    return _arrowHookDownLeft24!!
  }

private var _arrowHookDownLeft24: ImageVector? = null
