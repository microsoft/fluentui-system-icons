package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Cloud28: ImageVector
  get() {
    if (_cloud28 != null) {
      return _cloud28!!
    }
    _cloud28 = fluentIcon(name = "Regular.Cloud28", 28f) {
      materialPath {
          moveTo(7.519F, 12.0F)
          curveTo(7.774F, 8.644F, 10.579F, 6.0F, 14.0F, 6.0F)
          curveToRelative(3.422F, 0.0F, 6.226F, 2.644F, 6.481F, 6.0F)
          horizontalLineToRelative(0.269F)
          curveToRelative(2.623F, 0.0F, 4.75F, 2.127F, 4.75F, 4.75F)
          reflectiveCurveToRelative(-2.127F, 4.75F, -4.75F, 4.75F)
          horizontalLineTo(7.25F)
          curveToRelative(-2.623F, 0.0F, -4.75F, -2.127F, -4.75F, -4.75F)
          reflectiveCurveTo(4.627F, 12.0F, 7.25F, 12.0F)
          horizontalLineToRelative(0.269F)
          close()
          moveTo(14.0F, 7.5F)
          curveToRelative(-2.761F, 0.0F, -5.0F, 2.239F, -5.0F, 5.0F)
          verticalLineToRelative(0.25F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineToRelative(-1.0F)
          curveTo(5.455F, 13.5F, 4.0F, 14.955F, 4.0F, 16.75F)
          reflectiveCurveTo(5.455F, 20.0F, 7.25F, 20.0F)
          horizontalLineToRelative(13.5F)
          curveToRelative(1.795F, 0.0F, 3.25F, -1.455F, 3.25F, -3.25F)
          reflectiveCurveToRelative(-1.455F, -3.25F, -3.25F, -3.25F)
          horizontalLineToRelative(-1.0F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          verticalLineTo(12.5F)
          curveToRelative(0.0F, -2.761F, -2.239F, -5.0F, -5.0F, -5.0F)
          close()        
      }
    }
    return _cloud28!!
  }

private var _cloud28: ImageVector? = null
