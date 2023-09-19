package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Balloon20: ImageVector
  get() {
    if (_balloon20 != null) {
      return _balloon20!!
    }
    _balloon20 = fluentIcon(name = "Filled.Balloon20", 20f) {
      materialPath {
          moveTo(5.0F, 7.0F)
          curveToRelative(0.0F, -2.761F, 2.239F, -5.0F, 5.0F, -5.0F)
          reflectiveCurveToRelative(5.0F, 2.239F, 5.0F, 5.0F)
          curveToRelative(0.0F, 1.866F, -0.665F, 3.593F, -1.598F, 4.859F)
          curveToRelative(-0.791F, 1.074F, -1.837F, 1.892F, -2.902F, 2.093F)
          verticalLineTo(14.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineTo(14.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(0.5F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          reflectiveCurveTo(15.0F, 17.776F, 15.0F, 17.5F)
          verticalLineTo(17.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineToRelative(-2.5F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineToRelative(-0.048F)
          curveToRelative(-1.065F, -0.2F, -2.11F, -1.017F, -2.902F, -2.091F)
          curveTo(5.665F, 10.596F, 5.0F, 8.868F, 5.0F, 7.0F)
          close()
          moveToRelative(5.568F, -2.995F)
          curveToRelative(-0.274F, -0.039F, -0.527F, 0.151F, -0.566F, 0.425F)
          curveToRelative(-0.039F, 0.273F, 0.152F, 0.526F, 0.425F, 0.565F)
          curveToRelative(0.814F, 0.116F, 1.459F, 0.76F, 1.575F, 1.574F)
          curveToRelative(0.04F, 0.273F, 0.293F, 0.463F, 0.566F, 0.423F)
          curveToRelative(0.274F, -0.039F, 0.463F, -0.292F, 0.424F, -0.566F)
          curveToRelative(-0.18F, -1.253F, -1.17F, -2.243F, -2.424F, -2.421F)
          close()        
      }
    }
    return _balloon20!!
  }

private var _balloon20: ImageVector? = null
