package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DataWaterfall20: ImageVector
  get() {
    if (_dataWaterfall20 != null) {
      return _dataWaterfall20!!
    }
    _dataWaterfall20 = fluentIcon(name = "Filled.DataWaterfall20", 20f) {
      materialPath {
          moveTo(1.0F, 3.5F)
          curveTo(1.0F, 3.224F, 1.224F, 3.0F, 1.5F, 3.0F)
          horizontalLineTo(7.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(4.5F)
          horizontalLineToRelative(6.0F)
          curveToRelative(1.035F, 0.0F, 2.0F, 0.741F, 2.0F, 1.8F)
          verticalLineTo(16.0F)
          horizontalLineToRelative(1.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(18.776F, 17.0F, 18.5F, 17.0F)
          horizontalLineTo(13.0F)
          curveToRelative(-1.035F, 0.0F, -2.0F, -0.741F, -2.0F, -1.8F)
          verticalLineToRelative(-4.7F)
          horizontalLineTo(5.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(4.0F)
          horizontalLineTo(1.5F)
          curveTo(1.224F, 4.0F, 1.0F, 3.776F, 1.0F, 3.5F)
          close()        
      }
    }
    return _dataWaterfall20!!
  }

private var _dataWaterfall20: ImageVector? = null
