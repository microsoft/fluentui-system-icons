package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.FlipHorizontal24: ImageVector
  get() {
    if (_flipHorizontal24 != null) {
      return _flipHorizontal24!!
    }
    _flipHorizontal24 = fluentIcon(name = "Filled.FlipHorizontal24", 24f) {
      materialPath {
          moveTo(21.837F, 19.547F)
          curveTo(21.652F, 19.83F, 21.337F, 20.0F, 21.0F, 20.0F)
          horizontalLineToRelative(-7.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineTo(3.0F)
          curveToRelative(0.0F, -0.473F, 0.332F, -0.882F, 0.795F, -0.979F)
          curveToRelative(0.464F, -0.097F, 0.931F, 0.145F, 1.121F, 0.578F)
          lineToRelative(7.0F, 16.0F)
          curveToRelative(0.135F, 0.31F, 0.106F, 0.666F, -0.08F, 0.948F)
          close()
          moveTo(15.0F, 7.781F)
          verticalLineTo(18.0F)
          horizontalLineToRelative(4.471F)
          lineTo(15.0F, 7.78F)
          close()
          moveTo(2.5F, 20.0F)
          curveToRelative(-0.171F, 0.0F, -0.33F, -0.087F, -0.422F, -0.232F)
          curveToRelative(-0.092F, -0.145F, -0.103F, -0.326F, -0.03F, -0.48F)
          lineToRelative(8.0F, -17.0F)
          curveToRelative(0.1F, -0.213F, 0.333F, -0.327F, 0.561F, -0.276F)
          curveTo(10.838F, 2.063F, 11.0F, 2.266F, 11.0F, 2.5F)
          verticalLineToRelative(17.0F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          horizontalLineToRelative(-8.0F)
          close()        
      }
    }
    return _flipHorizontal24!!
  }

private var _flipHorizontal24: ImageVector? = null
