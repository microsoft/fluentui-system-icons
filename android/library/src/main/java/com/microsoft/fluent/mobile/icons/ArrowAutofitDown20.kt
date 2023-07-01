package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowAutofitDown20: ImageVector
  get() {
    if (_arrowAutofitDown20 != null) {
      return _arrowAutofitDown20!!
    }
    _arrowAutofitDown20 = fluentIcon(name = "Regular.ArrowAutofitDown20", 20f) {
      materialPath {
          moveTo(16.142F, 15.19F)
          lineToRelative(-1.14F, 1.18F)
          verticalLineTo(2.5F)
          curveToRelative(0.0F, -0.276F, -0.223F, -0.5F, -0.5F, -0.5F)
          curveToRelative(-0.275F, 0.0F, -0.5F, 0.224F, -0.5F, 0.5F)
          verticalLineToRelative(13.874F)
          lineToRelative(-1.142F, -1.183F)
          curveToRelative(-0.192F, -0.199F, -0.509F, -0.204F, -0.707F, -0.013F)
          curveToRelative(-0.199F, 0.192F, -0.205F, 0.509F, -0.013F, 0.707F)
          lineToRelative(1.821F, 1.886F)
          curveToRelative(0.295F, 0.305F, 0.784F, 0.305F, 1.08F, 0.0F)
          lineToRelative(1.82F, -1.886F)
          curveToRelative(0.192F, -0.198F, 0.187F, -0.515F, -0.012F, -0.707F)
          curveToRelative(-0.199F, -0.191F, -0.515F, -0.186F, -0.707F, 0.013F)
          close()
          moveTo(5.0F, 17.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(6.5F)
          curveTo(11.776F, 3.0F, 12.0F, 3.224F, 12.0F, 3.5F)
          reflectiveCurveTo(11.776F, 4.0F, 11.5F, 4.0F)
          horizontalLineTo(5.0F)
          curveTo(4.448F, 4.0F, 4.0F, 4.448F, 4.0F, 5.0F)
          verticalLineToRelative(10.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(4.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(9.776F, 17.0F, 9.5F, 17.0F)
          horizontalLineTo(5.0F)
          close()        
      }
    }
    return _arrowAutofitDown20!!
  }

private var _arrowAutofitDown20: ImageVector? = null
