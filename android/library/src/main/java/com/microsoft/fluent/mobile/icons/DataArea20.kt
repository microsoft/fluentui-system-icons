package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.DataArea20: ImageVector
  get() {
    if (_dataArea20 != null) {
      return _dataArea20!!
    }
    _dataArea20 = fluentIcon(name = "Regular.DataArea20", 20f) {
      materialPath {
          moveTo(3.0F, 2.5F)
          curveTo(3.0F, 2.224F, 2.776F, 2.0F, 2.5F, 2.0F)
          reflectiveCurveTo(2.0F, 2.224F, 2.0F, 2.5F)
          verticalLineToRelative(15.0F)
          curveTo(2.0F, 17.776F, 2.224F, 18.0F, 2.5F, 18.0F)
          horizontalLineToRelative(15.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(17.776F, 17.0F, 17.5F, 17.0F)
          horizontalLineTo(16.0F)
          verticalLineTo(5.5F)
          curveToRelative(0.0F, -0.192F, -0.11F, -0.367F, -0.283F, -0.45F)
          curveToRelative(-0.174F, -0.084F, -0.38F, -0.06F, -0.53F, 0.06F)
          lineToRelative(-4.734F, 3.787F)
          lineToRelative(-3.205F, -1.831F)
          curveTo(7.11F, 6.986F, 6.942F, 6.979F, 6.797F, 7.043F)
          lineTo(3.0F, 8.731F)
          verticalLineTo(2.5F)
          close()
          moveToRelative(0.0F, 7.325F)
          lineTo(6.972F, 8.06F)
          lineToRelative(3.28F, 1.874F)
          curveToRelative(0.178F, 0.102F, 0.4F, 0.085F, 0.56F, -0.044F)
          lineTo(15.0F, 6.54F)
          verticalLineTo(17.0F)
          horizontalLineTo(3.0F)
          verticalLineTo(9.825F)
          close()        
      }
    }
    return _dataArea20!!
  }

private var _dataArea20: ImageVector? = null
