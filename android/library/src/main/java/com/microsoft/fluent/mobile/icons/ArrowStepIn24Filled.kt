package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowStepIn24: ImageVector
  get() {
    if (_arrowStepIn24 != null) {
      return _arrowStepIn24!!
    }
    _arrowStepIn24 = fluentIcon(name = "Filled.ArrowStepIn24", 24f) {
      materialPath {
          moveTo(12.0F, 2.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          verticalLineToRelative(9.256F)
          lineToRelative(3.484F, -3.3F)
          curveToRelative(0.3F, -0.285F, 0.776F, -0.272F, 1.06F, 0.028F)
          curveToRelative(0.285F, 0.3F, 0.273F, 0.776F, -0.028F, 1.06F)
          lineToRelative(-4.75F, 4.5F)
          curveToRelative(-0.29F, 0.274F, -0.742F, 0.274F, -1.032F, 0.0F)
          lineToRelative(-4.75F, -4.5F)
          curveToRelative(-0.3F, -0.284F, -0.313F, -0.76F, -0.029F, -1.06F)
          curveToRelative(0.285F, -0.3F, 0.76F, -0.313F, 1.06F, -0.028F)
          lineToRelative(3.485F, 3.3F)
          verticalLineTo(2.75F)
          curveTo(11.25F, 2.336F, 11.586F, 2.0F, 12.0F, 2.0F)
          close()
          moveToRelative(3.0F, 17.0F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          reflectiveCurveToRelative(-3.0F, -1.343F, -3.0F, -3.0F)
          reflectiveCurveToRelative(1.343F, -3.0F, 3.0F, -3.0F)
          reflectiveCurveToRelative(3.0F, 1.343F, 3.0F, 3.0F)
          close()        
      }
    }
    return _arrowStepIn24!!
  }

private var _arrowStepIn24: ImageVector? = null
