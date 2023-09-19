package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowStepInLeft24: ImageVector
  get() {
    if (_arrowStepInLeft24 != null) {
      return _arrowStepInLeft24!!
    }
    _arrowStepInLeft24 = fluentIcon(name = "Regular.ArrowStepInLeft24", 24f) {
      materialPath {
          moveTo(15.294F, 16.234F)
          curveToRelative(0.285F, 0.3F, 0.272F, 0.776F, -0.028F, 1.06F)
          curveToRelative(-0.3F, 0.285F, -0.776F, 0.273F, -1.06F, -0.028F)
          lineToRelative(-4.5F, -4.75F)
          curveToRelative(-0.274F, -0.29F, -0.274F, -0.742F, 0.0F, -1.032F)
          lineToRelative(4.5F, -4.75F)
          curveToRelative(0.284F, -0.3F, 0.76F, -0.313F, 1.06F, -0.029F)
          curveToRelative(0.3F, 0.285F, 0.313F, 0.76F, 0.028F, 1.06F)
          lineToRelative(-3.3F, 3.485F)
          horizontalLineToRelative(9.256F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineToRelative(-9.256F)
          lineToRelative(3.3F, 3.484F)
          close()
          moveTo(2.0F, 12.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          reflectiveCurveToRelative(3.0F, 1.343F, 3.0F, 3.0F)
          reflectiveCurveToRelative(-1.343F, 3.0F, -3.0F, 3.0F)
          reflectiveCurveToRelative(-3.0F, -1.343F, -3.0F, -3.0F)
          close()
          moveToRelative(1.5F, 0.0F)
          curveToRelative(0.0F, 0.828F, 0.672F, 1.5F, 1.5F, 1.5F)
          reflectiveCurveToRelative(1.5F, -0.672F, 1.5F, -1.5F)
          reflectiveCurveToRelative(-0.672F, -1.5F, -1.5F, -1.5F)
          reflectiveCurveToRelative(-1.5F, 0.672F, -1.5F, 1.5F)
          close()        
      }
    }
    return _arrowStepInLeft24!!
  }

private var _arrowStepInLeft24: ImageVector? = null
