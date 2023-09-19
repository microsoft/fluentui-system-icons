package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.EqualOff12: ImageVector
  get() {
    if (_equalOff12 != null) {
      return _equalOff12!!
    }
    _equalOff12 = fluentIcon(name = "Filled.EqualOff12", 12f) {
      materialPath {
          moveTo(1.853F, 1.147F)
          curveToRelative(-0.195F, -0.196F, -0.511F, -0.196F, -0.706F, 0.0F)
          curveToRelative(-0.196F, 0.195F, -0.196F, 0.511F, 0.0F, 0.706F)
          lineTo(2.792F, 3.5F)
          horizontalLineTo(2.25F)
          curveTo(1.836F, 3.5F, 1.5F, 3.836F, 1.5F, 4.25F)
          reflectiveCurveTo(1.836F, 5.0F, 2.25F, 5.0F)
          horizontalLineToRelative(2.043F)
          lineToRelative(2.0F, 2.0F)
          horizontalLineTo(2.25F)
          curveTo(1.836F, 7.0F, 1.5F, 7.336F, 1.5F, 7.75F)
          reflectiveCurveTo(1.836F, 8.5F, 2.25F, 8.5F)
          horizontalLineToRelative(5.543F)
          lineToRelative(2.353F, 2.354F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-9.0F, -9.0F)
          close()
          moveTo(9.121F, 7.0F)
          lineToRelative(1.216F, 1.216F)
          curveTo(10.44F, 8.088F, 10.5F, 7.926F, 10.5F, 7.75F)
          curveTo(10.5F, 7.336F, 10.164F, 7.0F, 9.75F, 7.0F)
          horizontalLineTo(9.121F)
          close()
          moveToRelative(-3.5F, -3.5F)
          lineToRelative(1.5F, 1.5F)
          horizontalLineTo(9.75F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(10.164F, 3.5F, 9.75F, 3.5F)
          horizontalLineTo(5.621F)
          close()        
      }
    }
    return _equalOff12!!
  }

private var _equalOff12: ImageVector? = null
