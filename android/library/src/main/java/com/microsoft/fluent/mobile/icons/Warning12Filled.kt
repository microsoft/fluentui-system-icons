package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Warning12: ImageVector
  get() {
    if (_warning12 != null) {
      return _warning12!!
    }
    _warning12 = fluentIcon(name = "Filled.Warning12", 12f) {
      materialPath {
          moveTo(5.214F, 1.459F)
          curveToRelative(0.349F, -0.612F, 1.223F, -0.612F, 1.572F, 0.0F)
          lineToRelative(4.092F, 7.169F)
          curveTo(11.226F, 9.238F, 10.789F, 10.0F, 10.09F, 10.0F)
          horizontalLineTo(1.91F)
          curveToRelative(-0.7F, 0.0F, -1.136F, -0.762F, -0.788F, -1.372F)
          lineToRelative(4.092F, -7.17F)
          close()
          moveTo(5.5F, 4.5F)
          verticalLineToRelative(1.0F)
          curveTo(5.5F, 5.776F, 5.724F, 6.0F, 6.0F, 6.0F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-1.0F)
          curveTo(6.5F, 4.224F, 6.276F, 4.0F, 6.0F, 4.0F)
          reflectiveCurveTo(5.5F, 4.224F, 5.5F, 4.5F)
          close()
          moveTo(6.0F, 6.75F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          reflectiveCurveTo(5.586F, 8.25F, 6.0F, 8.25F)
          reflectiveCurveTo(6.75F, 7.914F, 6.75F, 7.5F)
          reflectiveCurveTo(6.414F, 6.75F, 6.0F, 6.75F)
          close()        
      }
    }
    return _warning12!!
  }

private var _warning12: ImageVector? = null
