package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Autosum24: ImageVector
  get() {
    if (_autosum24 != null) {
      return _autosum24!!
    }
    _autosum24 = fluentIcon(name = "Regular.Autosum24", 24f) {
      materialPath {
          moveTo(5.06F, 4.457F)
          curveTo(5.176F, 4.18F, 5.449F, 4.0F, 5.75F, 4.0F)
          horizontalLineToRelative(12.5F)
          curveTo(18.664F, 4.0F, 19.0F, 4.336F, 19.0F, 4.75F)
          reflectiveCurveTo(18.664F, 5.5F, 18.25F, 5.5F)
          horizontalLineTo(7.52F)
          lineToRelative(5.36F, 5.539F)
          curveToRelative(0.27F, 0.278F, 0.282F, 0.716F, 0.03F, 1.01F)
          lineTo(7.38F, 18.5F)
          horizontalLineToRelative(10.87F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(18.664F, 20.0F, 18.25F, 20.0F)
          horizontalLineTo(5.75F)
          curveToRelative(-0.293F, 0.0F, -0.559F, -0.17F, -0.681F, -0.437F)
          curveToRelative(-0.123F, -0.266F, -0.079F, -0.579F, 0.112F, -0.801F)
          lineToRelative(6.146F, -7.17F)
          lineToRelative(-6.116F, -6.32F)
          curveTo(5.001F, 5.055F, 4.942F, 4.734F, 5.06F, 4.457F)
          close()        
      }
    }
    return _autosum24!!
  }

private var _autosum24: ImageVector? = null
