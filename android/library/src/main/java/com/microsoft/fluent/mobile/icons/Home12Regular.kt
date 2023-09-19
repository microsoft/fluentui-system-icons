package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Home12: ImageVector
  get() {
    if (_home12 != null) {
      return _home12!!
    }
    _home12 = fluentIcon(name = "Regular.Home12", 12f) {
      materialPath {
          moveTo(5.37F, 1.222F)
          curveToRelative(0.368F, -0.297F, 0.892F, -0.297F, 1.26F, 0.0F)
          lineToRelative(3.814F, 3.09F)
          curveTo(10.796F, 4.595F, 11.0F, 5.023F, 11.0F, 5.476F)
          verticalLineTo(10.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(8.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineTo(7.0F)
          horizontalLineTo(5.0F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(2.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineTo(5.477F)
          curveToRelative(0.0F, -0.453F, 0.204F, -0.881F, 0.556F, -1.166F)
          lineToRelative(3.815F, -3.089F)
          close()
          moveToRelative(4.445F, 3.866F)
          lineTo(6.0F, 2.0F)
          lineTo(2.185F, 5.088F)
          curveTo(2.068F, 5.183F, 2.0F, 5.326F, 2.0F, 5.477F)
          verticalLineTo(10.0F)
          horizontalLineToRelative(2.0F)
          verticalLineTo(7.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(2.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(3.0F)
          horizontalLineToRelative(2.0F)
          verticalLineTo(5.477F)
          curveToRelative(0.0F, -0.15F, -0.068F, -0.294F, -0.185F, -0.389F)
          close()        
      }
    }
    return _home12!!
  }

private var _home12: ImageVector? = null
