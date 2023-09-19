package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Scales24: ImageVector
  get() {
    if (_scales24 != null) {
      return _scales24!!
    }
    _scales24 = fluentIcon(name = "Filled.Scales24", 24f) {
      materialPath {
          moveTo(3.75F, 3.0F)
          curveTo(3.336F, 3.0F, 3.0F, 3.336F, 3.0F, 3.75F)
          reflectiveCurveTo(3.336F, 4.5F, 3.75F, 4.5F)
          horizontalLineToRelative(1.042F)
          lineToRelative(-2.737F, 6.717F)
          curveTo(2.02F, 11.307F, 2.0F, 11.403F, 2.0F, 11.5F)
          curveTo(2.0F, 13.433F, 3.567F, 15.0F, 5.5F, 15.0F)
          reflectiveCurveTo(9.0F, 13.433F, 9.0F, 11.5F)
          curveToRelative(0.0F, -0.097F, -0.019F, -0.193F, -0.055F, -0.283F)
          lineTo(6.208F, 4.5F)
          horizontalLineToRelative(5.042F)
          verticalLineToRelative(12.0F)
          horizontalLineTo(7.253F)
          curveToRelative(-1.243F, 0.0F, -2.25F, 1.007F, -2.25F, 2.25F)
          reflectiveCurveTo(6.01F, 21.0F, 7.253F, 21.0F)
          horizontalLineToRelative(9.497F)
          curveToRelative(1.243F, 0.0F, 2.25F, -1.007F, 2.25F, -2.25F)
          reflectiveCurveToRelative(-1.007F, -2.25F, -2.25F, -2.25F)
          horizontalLineToRelative(-4.0F)
          verticalLineToRelative(-12.0F)
          horizontalLineToRelative(5.042F)
          lineToRelative(-2.737F, 6.717F)
          curveTo(15.02F, 11.307F, 15.0F, 11.403F, 15.0F, 11.5F)
          curveToRelative(0.0F, 1.933F, 1.567F, 3.5F, 3.5F, 3.5F)
          reflectiveCurveToRelative(3.5F, -1.567F, 3.5F, -3.5F)
          curveToRelative(0.0F, -0.097F, -0.019F, -0.193F, -0.055F, -0.283F)
          lineTo(19.208F, 4.5F)
          horizontalLineToRelative(1.042F)
          curveTo(20.664F, 4.5F, 21.0F, 4.164F, 21.0F, 3.75F)
          reflectiveCurveTo(20.664F, 3.0F, 20.25F, 3.0F)
          horizontalLineTo(3.75F)
          close()
          moveTo(5.5F, 6.738F)
          lineToRelative(1.635F, 4.012F)
          horizontalLineToRelative(-3.27F)
          lineTo(5.5F, 6.738F)
          close()
          moveToRelative(11.365F, 4.012F)
          lineTo(18.5F, 6.738F)
          lineToRelative(1.635F, 4.012F)
          horizontalLineToRelative(-3.27F)
          close()        
      }
    }
    return _scales24!!
  }

private var _scales24: ImageVector? = null
