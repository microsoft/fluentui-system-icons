package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.EqualOff12: ImageVector
  get() {
    if (_equalOff12 != null) {
      return _equalOff12!!
    }
    _equalOff12 = fluentIcon(name = "Regular.EqualOff12", 12f) {
      materialPath {
          moveTo(1.853F, 1.147F)
          curveToRelative(-0.195F, -0.196F, -0.511F, -0.196F, -0.706F, 0.0F)
          curveToRelative(-0.196F, 0.195F, -0.196F, 0.511F, 0.0F, 0.706F)
          lineTo(3.292F, 4.0F)
          horizontalLineTo(2.0F)
          curveTo(1.724F, 4.0F, 1.5F, 4.224F, 1.5F, 4.5F)
          reflectiveCurveTo(1.724F, 5.0F, 2.0F, 5.0F)
          horizontalLineToRelative(2.293F)
          lineToRelative(2.0F, 2.0F)
          horizontalLineTo(2.0F)
          curveTo(1.724F, 7.0F, 1.5F, 7.224F, 1.5F, 7.5F)
          reflectiveCurveTo(1.724F, 8.0F, 2.0F, 8.0F)
          horizontalLineToRelative(5.293F)
          lineToRelative(2.853F, 2.854F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-9.0F, -9.0F)
          close()
          moveTo(9.121F, 7.0F)
          lineToRelative(0.988F, 0.988F)
          curveTo(10.333F, 7.938F, 10.5F, 7.738F, 10.5F, 7.5F)
          curveTo(10.5F, 7.224F, 10.276F, 7.0F, 10.0F, 7.0F)
          horizontalLineTo(9.121F)
          close()
          moveToRelative(-3.0F, -3.0F)
          lineToRelative(1.0F, 1.0F)
          horizontalLineTo(10.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(10.276F, 4.0F, 10.0F, 4.0F)
          horizontalLineTo(6.121F)
          close()        
      }
    }
    return _equalOff12!!
  }

private var _equalOff12: ImageVector? = null
