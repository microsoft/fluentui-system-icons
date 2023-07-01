package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Compose20: ImageVector
  get() {
    if (_compose20 != null) {
      return _compose20!!
    }
    _compose20 = fluentIcon(name = "Regular.Compose20", 20f) {
      materialPath {
          moveTo(17.854F, 2.853F)
          curveToRelative(0.195F, -0.195F, 0.195F, -0.511F, 0.0F, -0.707F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.707F, 0.0F)
          lineToRelative(-8.0F, 8.0F)
          lineTo(9.0F, 11.0F)
          lineToRelative(0.854F, -0.146F)
          lineToRelative(8.0F, -8.0F)
          close()
          moveTo(5.5F, 3.0F)
          curveTo(4.12F, 3.0F, 3.0F, 4.12F, 3.0F, 5.5F)
          verticalLineToRelative(9.0F)
          curveTo(3.0F, 15.88F, 4.12F, 17.0F, 5.5F, 17.0F)
          horizontalLineToRelative(9.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-6.0F)
          curveTo(17.0F, 8.224F, 16.776F, 8.0F, 16.5F, 8.0F)
          reflectiveCurveTo(16.0F, 8.224F, 16.0F, 8.5F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-9.0F)
          curveTo(4.672F, 16.0F, 4.0F, 15.328F, 4.0F, 14.5F)
          verticalLineToRelative(-9.0F)
          curveTo(4.0F, 4.671F, 4.672F, 4.0F, 5.5F, 4.0F)
          horizontalLineToRelative(6.005F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(11.78F, 3.0F, 11.505F, 3.0F)
          horizontalLineTo(5.5F)
          close()        
      }
    }
    return _compose20!!
  }

private var _compose20: ImageVector? = null
