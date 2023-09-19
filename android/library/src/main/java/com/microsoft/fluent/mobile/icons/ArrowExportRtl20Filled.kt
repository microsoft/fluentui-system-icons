package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowExportRtl20: ImageVector
  get() {
    if (_arrowExportRtl20 != null) {
      return _arrowExportRtl20!!
    }
    _arrowExportRtl20 = fluentIcon(name = "Filled.ArrowExportRtl20", 20f) {
      materialPath {
          moveTo(17.25F, 3.75F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          verticalLineToRelative(11.0F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveTo(18.0F, 15.914F, 18.0F, 15.5F)
          verticalLineToRelative(-11.0F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          close()
          moveTo(15.0F, 10.0F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineTo(4.06F)
          lineToRelative(2.72F, -2.72F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineTo(1.723F, 9.466F)
          lineTo(1.688F, 9.504F)
          curveToRelative(-0.05F, 0.056F, -0.09F, 0.12F, -0.12F, 0.185F)
          curveTo(1.523F, 9.784F, 1.5F, 9.89F, 1.5F, 10.0F)
          curveToRelative(0.0F, 0.112F, 0.025F, 0.219F, 0.069F, 0.314F)
          curveToRelative(0.03F, 0.064F, 0.068F, 0.124F, 0.116F, 0.179F)
          lineToRelative(0.038F, 0.041F)
          lineTo(5.72F, 14.53F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(-2.72F, -2.72F)
          horizontalLineToRelative(10.19F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          close()        
      }
    }
    return _arrowExportRtl20!!
  }

private var _arrowExportRtl20: ImageVector? = null
