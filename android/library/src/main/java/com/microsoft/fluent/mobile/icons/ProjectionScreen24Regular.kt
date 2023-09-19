package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ProjectionScreen24: ImageVector
  get() {
    if (_projectionScreen24 != null) {
      return _projectionScreen24!!
    }
    _projectionScreen24 = fluentIcon(name = "Regular.ProjectionScreen24", 24f) {
      materialPath {
          moveTo(3.5F, 3.0F)
          curveTo(2.672F, 3.0F, 2.0F, 3.672F, 2.0F, 4.5F)
          curveToRelative(0.0F, 0.653F, 0.417F, 1.209F, 1.0F, 1.415F)
          verticalLineToRelative(7.335F)
          curveTo(3.0F, 15.321F, 4.679F, 17.0F, 6.75F, 17.0F)
          horizontalLineToRelative(4.5F)
          verticalLineToRelative(2.5F)
          horizontalLineToRelative(-3.5F)
          curveTo(7.336F, 19.5F, 7.0F, 19.836F, 7.0F, 20.25F)
          reflectiveCurveTo(7.336F, 21.0F, 7.75F, 21.0F)
          horizontalLineToRelative(8.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineToRelative(-3.5F)
          verticalLineTo(17.0F)
          horizontalLineToRelative(4.5F)
          curveToRelative(2.071F, 0.0F, 3.75F, -1.679F, 3.75F, -3.75F)
          verticalLineTo(5.915F)
          curveToRelative(0.583F, -0.206F, 1.0F, -0.762F, 1.0F, -1.415F)
          curveTo(22.0F, 3.672F, 21.328F, 3.0F, 20.5F, 3.0F)
          horizontalLineToRelative(-17.0F)
          close()
          moveToRelative(1.0F, 3.0F)
          horizontalLineToRelative(15.0F)
          verticalLineToRelative(7.25F)
          curveToRelative(0.0F, 1.243F, -1.007F, 2.25F, -2.25F, 2.25F)
          horizontalLineTo(6.75F)
          curveToRelative(-1.243F, 0.0F, -2.25F, -1.007F, -2.25F, -2.25F)
          verticalLineTo(6.0F)
          close()        
      }
    }
    return _projectionScreen24!!
  }

private var _projectionScreen24: ImageVector? = null
