package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Autosum20: ImageVector
  get() {
    if (_autosum20 != null) {
      return _autosum20!!
    }
    _autosum20 = fluentIcon(name = "Filled.Autosum20", 20f) {
      materialPath {
          moveTo(3.81F, 3.706F)
          curveTo(3.928F, 3.43F, 4.2F, 3.25F, 4.5F, 3.25F)
          horizontalLineToRelative(11.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineTo(6.262F)
          lineToRelative(4.146F, 4.308F)
          curveToRelative(0.265F, 0.276F, 0.28F, 0.707F, 0.035F, 1.001F)
          lineTo(6.104F, 15.25F)
          horizontalLineTo(15.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineToRelative(-11.0F)
          curveToRelative(-0.291F, 0.0F, -0.556F, -0.169F, -0.68F, -0.432F)
          curveToRelative(-0.123F, -0.264F, -0.082F, -0.576F, 0.105F, -0.799F)
          lineTo(8.86F, 9.613F)
          lineTo(3.96F, 4.52F)
          curveTo(3.75F, 4.303F, 3.692F, 3.983F, 3.81F, 3.706F)
          close()        
      }
    }
    return _autosum20!!
  }

private var _autosum20: ImageVector? = null
