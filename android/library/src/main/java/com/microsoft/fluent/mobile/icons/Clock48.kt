package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Clock48: ImageVector
  get() {
    if (_clock48 != null) {
      return _clock48!!
    }
    _clock48 = fluentIcon(name = "Filled.Clock48", 48f) {
      materialPath {
          moveTo(24.0F, 5.0F)
          curveToRelative(10.493F, 0.0F, 19.0F, 8.507F, 19.0F, 19.0F)
          reflectiveCurveToRelative(-8.507F, 19.0F, -19.0F, 19.0F)
          reflectiveCurveTo(5.0F, 34.493F, 5.0F, 24.0F)
          reflectiveCurveTo(13.507F, 5.0F, 24.0F, 5.0F)
          close()
          moveToRelative(-1.25F, 7.0F)
          curveToRelative(-0.69F, 0.0F, -1.25F, 0.56F, -1.25F, 1.25F)
          verticalLineToRelative(12.0F)
          curveToRelative(0.0F, 0.69F, 0.56F, 1.25F, 1.25F, 1.25F)
          horizontalLineToRelative(8.0F)
          curveToRelative(0.69F, 0.0F, 1.25F, -0.56F, 1.25F, -1.25F)
          reflectiveCurveTo(31.44F, 24.0F, 30.75F, 24.0F)
          horizontalLineTo(24.0F)
          verticalLineTo(13.25F)
          curveToRelative(0.0F, -0.69F, -0.56F, -1.25F, -1.25F, -1.25F)
          close()        
      }
    }
    return _clock48!!
  }

private var _clock48: ImageVector? = null
