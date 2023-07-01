package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowStepOut24: ImageVector
  get() {
    if (_arrowStepOut24 != null) {
      return _arrowStepOut24!!
    }
    _arrowStepOut24 = fluentIcon(name = "Filled.ArrowStepOut24", 24f) {
      materialPath {
          moveTo(12.75F, 13.75F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveToRelative(-0.75F, -0.336F, -0.75F, -0.75F)
          verticalLineTo(4.494F)
          lineToRelative(-3.484F, 3.3F)
          curveToRelative(-0.3F, 0.285F, -0.776F, 0.272F, -1.06F, -0.028F)
          curveToRelative(-0.285F, -0.3F, -0.272F, -0.776F, 0.028F, -1.06F)
          lineToRelative(4.75F, -4.5F)
          curveToRelative(0.29F, -0.274F, 0.742F, -0.274F, 1.032F, 0.0F)
          lineToRelative(4.75F, 4.5F)
          curveToRelative(0.3F, 0.284F, 0.313F, 0.76F, 0.029F, 1.06F)
          curveToRelative(-0.285F, 0.3F, -0.76F, 0.313F, -1.06F, 0.029F)
          lineTo(12.75F, 4.494F)
          verticalLineToRelative(9.256F)
          close()
          moveTo(15.0F, 19.0F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          reflectiveCurveToRelative(-3.0F, -1.343F, -3.0F, -3.0F)
          reflectiveCurveToRelative(1.343F, -3.0F, 3.0F, -3.0F)
          reflectiveCurveToRelative(3.0F, 1.343F, 3.0F, 3.0F)
          close()        
      }
    }
    return _arrowStepOut24!!
  }

private var _arrowStepOut24: ImageVector? = null
