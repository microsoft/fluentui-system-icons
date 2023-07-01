package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowStepInRight24: ImageVector
  get() {
    if (_arrowStepInRight24 != null) {
      return _arrowStepInRight24!!
    }
    _arrowStepInRight24 = fluentIcon(name = "Filled.ArrowStepInRight24", 24f) {
      materialPath {
          moveTo(8.706F, 16.234F)
          curveToRelative(-0.285F, 0.3F, -0.272F, 0.776F, 0.028F, 1.06F)
          curveToRelative(0.3F, 0.285F, 0.776F, 0.273F, 1.06F, -0.028F)
          lineToRelative(4.5F, -4.75F)
          curveToRelative(0.274F, -0.29F, 0.274F, -0.742F, 0.0F, -1.032F)
          lineToRelative(-4.5F, -4.75F)
          curveToRelative(-0.284F, -0.3F, -0.76F, -0.313F, -1.06F, -0.029F)
          curveToRelative(-0.3F, 0.285F, -0.313F, 0.76F, -0.028F, 1.06F)
          lineToRelative(3.3F, 3.485F)
          horizontalLineTo(2.75F)
          curveTo(2.336F, 11.25F, 2.0F, 11.586F, 2.0F, 12.0F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(9.256F)
          lineToRelative(-3.3F, 3.484F)
          close()
          moveTo(22.0F, 12.0F)
          curveToRelative(0.0F, -1.657F, -1.343F, -3.0F, -3.0F, -3.0F)
          reflectiveCurveToRelative(-3.0F, 1.343F, -3.0F, 3.0F)
          reflectiveCurveToRelative(1.343F, 3.0F, 3.0F, 3.0F)
          reflectiveCurveToRelative(3.0F, -1.343F, 3.0F, -3.0F)
          close()        
      }
    }
    return _arrowStepInRight24!!
  }

private var _arrowStepInRight24: ImageVector? = null
