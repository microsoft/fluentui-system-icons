package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Question20: ImageVector
  get() {
    if (_question20 != null) {
      return _question20!!
    }
    _question20 = fluentIcon(name = "Regular.Question20", 20f) {
      materialPath {
          moveTo(10.0F, 3.0F)
          curveTo(7.794F, 3.0F, 6.0F, 4.794F, 6.0F, 7.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveTo(7.0F, 7.276F, 7.0F, 7.0F)
          curveToRelative(0.0F, -1.654F, 1.346F, -3.0F, 3.0F, -3.0F)
          reflectiveCurveToRelative(3.0F, 1.346F, 3.0F, 3.0F)
          curveToRelative(0.0F, 1.249F, -0.692F, 1.863F, -1.575F, 2.62F)
          lineToRelative(-0.032F, 0.027F)
          curveTo(10.534F, 10.384F, 9.5F, 11.27F, 9.5F, 13.0F)
          verticalLineToRelative(0.5F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineTo(13.0F)
          curveToRelative(0.0F, -1.249F, 0.692F, -1.863F, 1.575F, -2.62F)
          lineToRelative(0.032F, -0.027F)
          curveTo(12.966F, 9.615F, 14.0F, 8.73F, 14.0F, 7.0F)
          curveToRelative(0.0F, -2.206F, -1.794F, -4.0F, -4.0F, -4.0F)
          close()
          moveToRelative(0.0F, 14.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(10.414F, 15.5F, 10.0F, 15.5F)
          reflectiveCurveToRelative(-0.75F, 0.336F, -0.75F, 0.75F)
          reflectiveCurveTo(9.586F, 17.0F, 10.0F, 17.0F)
          close()        
      }
    }
    return _question20!!
  }

private var _question20: ImageVector? = null
