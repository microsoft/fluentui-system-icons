package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Open32: ImageVector
  get() {
    if (_open32 != null) {
      return _open32!!
    }
    _open32 = fluentIcon(name = "Filled.Open32", 32f) {
      materialPath {
          moveTo(7.75F, 5.5F)
          curveTo(6.507F, 5.5F, 5.5F, 6.507F, 5.5F, 7.75F)
          verticalLineToRelative(16.5F)
          curveToRelative(0.0F, 1.243F, 1.007F, 2.25F, 2.25F, 2.25F)
          horizontalLineToRelative(16.5F)
          curveToRelative(1.243F, 0.0F, 2.25F, -1.007F, 2.25F, -2.25F)
          verticalLineToRelative(-5.0F)
          curveToRelative(0.0F, -0.69F, 0.56F, -1.25F, 1.25F, -1.25F)
          reflectiveCurveTo(29.0F, 18.56F, 29.0F, 19.25F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 2.623F, -2.127F, 4.75F, -4.75F, 4.75F)
          horizontalLineTo(7.75F)
          curveTo(5.127F, 29.0F, 3.0F, 26.873F, 3.0F, 24.25F)
          verticalLineTo(7.75F)
          curveTo(3.0F, 5.127F, 5.127F, 3.0F, 7.75F, 3.0F)
          horizontalLineToRelative(5.0F)
          curveTo(13.44F, 3.0F, 14.0F, 3.56F, 14.0F, 4.25F)
          reflectiveCurveTo(13.44F, 5.5F, 12.75F, 5.5F)
          horizontalLineToRelative(-5.0F)
          close()
          moveTo(18.0F, 4.25F)
          curveTo(18.0F, 3.56F, 18.56F, 3.0F, 19.25F, 3.0F)
          horizontalLineToRelative(8.5F)
          curveTo(28.44F, 3.0F, 29.0F, 3.56F, 29.0F, 4.25F)
          verticalLineToRelative(8.5F)
          curveToRelative(0.0F, 0.69F, -0.56F, 1.25F, -1.25F, 1.25F)
          reflectiveCurveToRelative(-1.25F, -0.56F, -1.25F, -1.25F)
          verticalLineTo(7.268F)
          lineToRelative(-6.366F, 6.366F)
          curveToRelative(-0.488F, 0.488F, -1.28F, 0.488F, -1.768F, 0.0F)
          reflectiveCurveToRelative(-0.488F, -1.28F, 0.0F, -1.768F)
          lineTo(24.732F, 5.5F)
          horizontalLineTo(19.25F)
          curveTo(18.56F, 5.5F, 18.0F, 4.94F, 18.0F, 4.25F)
          close()        
      }
    }
    return _open32!!
  }

private var _open32: ImageVector? = null
