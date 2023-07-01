package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.EqualOff16: ImageVector
  get() {
    if (_equalOff16 != null) {
      return _equalOff16!!
    }
    _equalOff16 = fluentIcon(name = "Filled.EqualOff16", 16f) {
      materialPath {
          moveTo(10.293F, 11.0F)
          lineToRelative(3.853F, 3.854F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-13.0F, -13.0F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineTo(3.793F, 4.5F)
          horizontalLineTo(2.75F)
          curveTo(2.336F, 4.5F, 2.0F, 4.836F, 2.0F, 5.25F)
          reflectiveCurveTo(2.336F, 6.0F, 2.75F, 6.0F)
          horizontalLineToRelative(2.543F)
          lineToRelative(3.5F, 3.5F)
          horizontalLineTo(2.75F)
          curveTo(2.336F, 9.5F, 2.0F, 9.836F, 2.0F, 10.25F)
          reflectiveCurveTo(2.336F, 11.0F, 2.75F, 11.0F)
          horizontalLineToRelative(7.543F)
          close()
          moveToRelative(1.328F, -1.5F)
          lineToRelative(1.5F, 1.5F)
          horizontalLineToRelative(0.129F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(13.664F, 9.5F, 13.25F, 9.5F)
          horizontalLineToRelative(-1.629F)
          close()
          moveToRelative(-5.0F, -5.0F)
          lineToRelative(1.5F, 1.5F)
          horizontalLineToRelative(5.129F)
          curveTo(13.664F, 6.0F, 14.0F, 5.664F, 14.0F, 5.25F)
          reflectiveCurveTo(13.664F, 4.5F, 13.25F, 4.5F)
          horizontalLineTo(6.621F)
          close()        
      }
    }
    return _equalOff16!!
  }

private var _equalOff16: ImageVector? = null
