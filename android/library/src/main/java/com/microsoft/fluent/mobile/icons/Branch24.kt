package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Branch24: ImageVector
  get() {
    if (_branch24 != null) {
      return _branch24!!
    }
    _branch24 = fluentIcon(name = "Filled.Branch24", 24f) {
      materialPath {
          moveTo(4.0F, 5.5F)
          curveTo(4.0F, 3.567F, 5.567F, 2.0F, 7.5F, 2.0F)
          reflectiveCurveTo(11.0F, 3.567F, 11.0F, 5.5F)
          curveToRelative(0.0F, 1.59F, -1.06F, 2.932F, -2.511F, 3.358F)
          curveToRelative(0.688F, 2.253F, 2.783F, 3.892F, 5.261F, 3.892F)
          horizontalLineToRelative(0.33F)
          curveTo(14.425F, 11.177F, 15.825F, 10.0F, 17.5F, 10.0F)
          curveToRelative(1.933F, 0.0F, 3.5F, 1.567F, 3.5F, 3.5F)
          reflectiveCurveTo(19.433F, 17.0F, 17.5F, 17.0F)
          curveToRelative(-1.676F, 0.0F, -3.076F, -1.177F, -3.42F, -2.75F)
          horizontalLineToRelative(-0.33F)
          curveToRelative(-2.231F, 0.0F, -4.218F, -1.044F, -5.5F, -2.67F)
          verticalLineToRelative(3.5F)
          curveTo(9.823F, 15.425F, 11.0F, 16.825F, 11.0F, 18.5F)
          curveToRelative(0.0F, 1.933F, -1.567F, 3.5F, -3.5F, 3.5F)
          reflectiveCurveTo(4.0F, 20.433F, 4.0F, 18.5F)
          curveToRelative(0.0F, -1.676F, 1.177F, -3.076F, 2.75F, -3.42F)
          verticalLineTo(8.92F)
          curveTo(5.177F, 8.575F, 4.0F, 7.175F, 4.0F, 5.5F)
          close()        
      }
    }
    return _branch24!!
  }

private var _branch24: ImageVector? = null
