package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowImport20: ImageVector
  get() {
    if (_arrowImport20 != null) {
      return _arrowImport20!!
    }
    _arrowImport20 = fluentIcon(name = "Filled.ArrowImport20", 20f) {
      materialPath {
          moveTo(17.25F, 3.75F)
          curveTo(17.664F, 3.75F, 18.0F, 4.086F, 18.0F, 4.5F)
          verticalLineToRelative(11.0F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveToRelative(-0.75F, -0.336F, -0.75F, -0.75F)
          verticalLineToRelative(-11.0F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          close()
          moveTo(2.0F, 10.0F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          horizontalLineToRelative(10.19F)
          lineToRelative(-2.72F, -2.72F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineToRelative(3.997F, 3.996F)
          lineToRelative(0.035F, 0.038F)
          curveToRelative(0.05F, 0.056F, 0.09F, 0.12F, 0.12F, 0.185F)
          curveTo(15.477F, 9.784F, 15.5F, 9.89F, 15.5F, 10.0F)
          curveToRelative(0.0F, 0.112F, -0.025F, 0.219F, -0.069F, 0.314F)
          curveToRelative(-0.03F, 0.064F, -0.068F, 0.124F, -0.116F, 0.179F)
          lineToRelative(-0.038F, 0.041F)
          lineToRelative(-3.997F, 3.996F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(2.72F, -2.72F)
          horizontalLineTo(2.75F)
          curveTo(2.336F, 10.75F, 2.0F, 10.414F, 2.0F, 10.0F)
          close()        
      }
    }
    return _arrowImport20!!
  }

private var _arrowImport20: ImageVector? = null
