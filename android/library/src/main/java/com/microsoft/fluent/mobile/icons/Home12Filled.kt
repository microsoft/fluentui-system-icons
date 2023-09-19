package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Home12: ImageVector
  get() {
    if (_home12 != null) {
      return _home12!!
    }
    _home12 = fluentIcon(name = "Filled.Home12", 12f) {
      materialPath {
          moveTo(5.37F, 1.222F)
          curveToRelative(0.368F, -0.297F, 0.892F, -0.297F, 1.26F, 0.0F)
          lineToRelative(3.814F, 3.09F)
          curveTo(10.796F, 4.595F, 11.0F, 5.023F, 11.0F, 5.476F)
          verticalLineTo(10.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(8.5F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineTo(7.5F)
          curveTo(7.5F, 7.224F, 7.276F, 7.0F, 7.0F, 7.0F)
          horizontalLineTo(5.0F)
          curveTo(4.724F, 7.0F, 4.5F, 7.224F, 4.5F, 7.5F)
          verticalLineTo(10.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(2.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineTo(5.477F)
          curveToRelative(0.0F, -0.453F, 0.204F, -0.881F, 0.556F, -1.166F)
          lineToRelative(3.815F, -3.089F)
          close()        
      }
    }
    return _home12!!
  }

private var _home12: ImageVector? = null
