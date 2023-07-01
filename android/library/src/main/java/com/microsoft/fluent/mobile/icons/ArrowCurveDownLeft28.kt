package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowCurveDownLeft28: ImageVector
  get() {
    if (_arrowCurveDownLeft28 != null) {
      return _arrowCurveDownLeft28!!
    }
    _arrowCurveDownLeft28 = fluentIcon(name = "Regular.ArrowCurveDownLeft28", 28f) {
      materialPath {
          moveTo(19.401F, 3.378F)
          curveToRelative(-0.205F, -0.36F, -0.663F, -0.485F, -1.023F, -0.28F)
          curveTo(13.072F, 6.132F, 13.0F, 11.269F, 13.0F, 14.75F)
          verticalLineToRelative(7.69F)
          lineToRelative(-4.72F, -4.72F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.768F, 0.0F, 1.06F)
          lineToRelative(6.0F, 6.0F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          lineToRelative(6.0F, -6.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineToRelative(-4.72F, 4.72F)
          verticalLineToRelative(-7.69F)
          curveToRelative(0.0F, -3.518F, 0.128F, -7.78F, 4.622F, -10.349F)
          curveToRelative(0.36F, -0.205F, 0.485F, -0.663F, 0.28F, -1.023F)
          close()        
      }
    }
    return _arrowCurveDownLeft28!!
  }

private var _arrowCurveDownLeft28: ImageVector? = null
