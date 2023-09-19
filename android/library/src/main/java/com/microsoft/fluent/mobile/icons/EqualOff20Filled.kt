package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.EqualOff20: ImageVector
  get() {
    if (_equalOff20 != null) {
      return _equalOff20!!
    }
    _equalOff20 = fluentIcon(name = "Filled.EqualOff20", 20f) {
      materialPath {
          moveTo(2.853F, 2.147F)
          curveToRelative(-0.195F, -0.196F, -0.511F, -0.196F, -0.707F, 0.0F)
          curveToRelative(-0.195F, 0.195F, -0.195F, 0.511F, 0.0F, 0.707F)
          lineTo(5.793F, 6.5F)
          horizontalLineTo(3.75F)
          curveTo(3.336F, 6.5F, 3.0F, 6.836F, 3.0F, 7.25F)
          reflectiveCurveTo(3.336F, 8.0F, 3.75F, 8.0F)
          horizontalLineToRelative(3.543F)
          lineToRelative(3.5F, 3.5F)
          horizontalLineTo(3.75F)
          curveTo(3.336F, 11.5F, 3.0F, 11.836F, 3.0F, 12.25F)
          reflectiveCurveTo(3.336F, 13.0F, 3.75F, 13.0F)
          horizontalLineToRelative(8.543F)
          lineToRelative(4.853F, 4.854F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-15.0F, -15.0F)
          close()
          moveTo(13.622F, 11.5F)
          lineToRelative(1.5F, 1.5F)
          horizontalLineToRelative(1.129F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineToRelative(-2.629F)
          close()
          moveToRelative(-5.0F, -5.0F)
          lineToRelative(1.5F, 1.5F)
          horizontalLineToRelative(6.129F)
          curveTo(16.664F, 8.0F, 17.0F, 7.664F, 17.0F, 7.25F)
          reflectiveCurveTo(16.664F, 6.5F, 16.25F, 6.5F)
          horizontalLineTo(8.621F)
          close()        
      }
    }
    return _equalOff20!!
  }

private var _equalOff20: ImageVector? = null
