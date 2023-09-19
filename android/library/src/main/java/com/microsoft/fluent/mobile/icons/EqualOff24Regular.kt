package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.EqualOff24: ImageVector
  get() {
    if (_equalOff24 != null) {
      return _equalOff24!!
    }
    _equalOff24 = fluentIcon(name = "Regular.EqualOff24", 24f) {
      materialPath {
          moveTo(3.28F, 2.22F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineTo(6.94F, 8.0F)
          horizontalLineTo(3.75F)
          curveTo(3.336F, 8.0F, 3.0F, 8.336F, 3.0F, 8.75F)
          reflectiveCurveTo(3.336F, 9.5F, 3.75F, 9.5F)
          horizontalLineToRelative(4.69F)
          lineToRelative(5.0F, 5.0F)
          horizontalLineTo(3.75F)
          curveTo(3.336F, 14.5F, 3.0F, 14.836F, 3.0F, 15.25F)
          reflectiveCurveTo(3.336F, 16.0F, 3.75F, 16.0F)
          horizontalLineToRelative(11.19F)
          lineToRelative(5.78F, 5.78F)
          curveToRelative(0.292F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, -0.292F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineTo(3.28F, 2.22F)
          close()
          moveTo(20.25F, 14.5F)
          horizontalLineToRelative(-2.568F)
          lineToRelative(1.5F, 1.5F)
          horizontalLineToRelative(1.068F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          close()
          moveTo(11.182F, 8.0F)
          lineToRelative(1.5F, 1.5F)
          horizontalLineToRelative(7.568F)
          curveTo(20.664F, 9.5F, 21.0F, 9.164F, 21.0F, 8.75F)
          reflectiveCurveTo(20.664F, 8.0F, 20.25F, 8.0F)
          horizontalLineToRelative(-9.068F)
          close()        
      }
    }
    return _equalOff24!!
  }

private var _equalOff24: ImageVector? = null
