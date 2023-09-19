package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.XboxConsole24: ImageVector
  get() {
    if (_xboxConsole24 != null) {
      return _xboxConsole24!!
    }
    _xboxConsole24 = fluentIcon(name = "Filled.XboxConsole24", 24f) {
      materialPath {
          moveTo(5.75F, 2.0F)
          curveTo(5.336F, 2.0F, 5.0F, 2.336F, 5.0F, 2.75F)
          verticalLineToRelative(18.5F)
          curveTo(5.0F, 21.664F, 5.336F, 22.0F, 5.75F, 22.0F)
          horizontalLineTo(8.0F)
          verticalLineTo(11.75F)
          curveTo(8.0F, 11.336F, 8.336F, 11.0F, 8.75F, 11.0F)
          reflectiveCurveToRelative(0.75F, 0.336F, 0.75F, 0.75F)
          verticalLineTo(22.0F)
          horizontalLineToRelative(8.75F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineTo(2.75F)
          curveTo(19.0F, 2.336F, 18.664F, 2.0F, 18.25F, 2.0F)
          horizontalLineTo(5.75F)
          close()
          moveTo(9.5F, 5.75F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveTo(8.0F, 6.164F, 8.0F, 5.75F)
          reflectiveCurveTo(8.336F, 5.0F, 8.75F, 5.0F)
          reflectiveCurveTo(9.5F, 5.336F, 9.5F, 5.75F)
          close()        
      }
    }
    return _xboxConsole24!!
  }

private var _xboxConsole24: ImageVector? = null
