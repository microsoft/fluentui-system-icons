package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowNext12: ImageVector
  get() {
    if (_arrowNext12 != null) {
      return _arrowNext12!!
    }
    _arrowNext12 = fluentIcon(name = "Filled.ArrowNext12", 12f) {
      materialPath {
          moveTo(2.47F, 3.28F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineToRelative(3.25F, 3.25F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          lineTo(3.53F, 9.78F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          lineTo(5.19F, 6.0F)
          lineTo(2.47F, 3.28F)
          close()
          moveTo(9.75F, 10.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineToRelative(-6.5F)
          curveTo(10.5F, 2.336F, 10.164F, 2.0F, 9.75F, 2.0F)
          reflectiveCurveTo(9.0F, 2.336F, 9.0F, 2.75F)
          verticalLineToRelative(6.5F)
          curveTo(9.0F, 9.664F, 9.336F, 10.0F, 9.75F, 10.0F)
          close()        
      }
    }
    return _arrowNext12!!
  }

private var _arrowNext12: ImageVector? = null
