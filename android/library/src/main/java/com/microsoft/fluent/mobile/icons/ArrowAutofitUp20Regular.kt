package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowAutofitUp20: ImageVector
  get() {
    if (_arrowAutofitUp20 != null) {
      return _arrowAutofitUp20!!
    }
    _arrowAutofitUp20 = fluentIcon(name = "Regular.ArrowAutofitUp20", 20f) {
      materialPath {
          moveTo(16.142F, 4.81F)
          lineToRelative(-1.14F, -1.18F)
          verticalLineTo(17.5F)
          curveToRelative(0.0F, 0.276F, -0.223F, 0.5F, -0.5F, 0.5F)
          curveToRelative(-0.275F, 0.0F, -0.5F, -0.224F, -0.5F, -0.5F)
          verticalLineTo(3.626F)
          lineTo(12.86F, 4.809F)
          curveToRelative(-0.192F, 0.199F, -0.509F, 0.204F, -0.707F, 0.013F)
          curveToRelative(-0.199F, -0.192F, -0.205F, -0.509F, -0.013F, -0.708F)
          lineToRelative(1.821F, -1.885F)
          curveToRelative(0.295F, -0.305F, 0.784F, -0.305F, 1.08F, 0.0F)
          lineToRelative(1.82F, 1.885F)
          curveToRelative(0.192F, 0.2F, 0.187F, 0.516F, -0.012F, 0.708F)
          curveToRelative(-0.199F, 0.191F, -0.515F, 0.186F, -0.707F, -0.013F)
          close()
          moveTo(5.0F, 3.0F)
          curveTo(3.895F, 3.0F, 3.0F, 3.895F, 3.0F, 5.0F)
          verticalLineToRelative(10.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(6.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(11.776F, 16.0F, 11.5F, 16.0F)
          horizontalLineTo(5.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(4.5F)
          curveTo(9.776F, 4.0F, 10.0F, 3.776F, 10.0F, 3.5F)
          reflectiveCurveTo(9.776F, 3.0F, 9.5F, 3.0F)
          horizontalLineTo(5.0F)
          close()        
      }
    }
    return _arrowAutofitUp20!!
  }

private var _arrowAutofitUp20: ImageVector? = null
