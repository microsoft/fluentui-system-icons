package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Compose16: ImageVector
  get() {
    if (_compose16 != null) {
      return _compose16!!
    }
    _compose16 = fluentIcon(name = "Regular.Compose16", 16f) {
      materialPath {
          moveTo(14.854F, 1.853F)
          curveToRelative(0.195F, -0.195F, 0.195F, -0.511F, 0.0F, -0.706F)
          curveToRelative(-0.196F, -0.196F, -0.512F, -0.196F, -0.708F, 0.0F)
          lineToRelative(-8.0F, 8.0F)
          lineTo(6.0F, 10.0F)
          lineToRelative(0.854F, -0.146F)
          lineToRelative(8.0F, -8.0F)
          close()
          moveTo(4.5F, 2.0F)
          curveTo(3.12F, 2.0F, 2.0F, 3.12F, 2.0F, 4.5F)
          verticalLineToRelative(7.0F)
          curveTo(2.0F, 12.88F, 3.12F, 14.0F, 4.5F, 14.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-5.0F)
          curveTo(14.0F, 6.224F, 13.776F, 6.0F, 13.5F, 6.0F)
          reflectiveCurveTo(13.0F, 6.224F, 13.0F, 6.5F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-7.0F)
          curveTo(3.672F, 13.0F, 3.0F, 12.328F, 3.0F, 11.5F)
          verticalLineToRelative(-7.0F)
          curveTo(3.0F, 3.672F, 3.672F, 3.0F, 4.5F, 3.0F)
          horizontalLineToRelative(5.005F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(9.78F, 2.0F, 9.505F, 2.0F)
          horizontalLineTo(4.5F)
          close()        
      }
    }
    return _compose16!!
  }

private var _compose16: ImageVector? = null
