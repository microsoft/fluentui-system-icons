package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Question24: ImageVector
  get() {
    if (_question24 != null) {
      return _question24!!
    }
    _question24 = fluentIcon(name = "Regular.Question24", 24f) {
      materialPath {
          moveTo(12.0F, 4.0F)
          curveTo(9.236F, 4.0F, 7.0F, 6.236F, 7.0F, 9.0F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveTo(8.5F, 9.414F, 8.5F, 9.0F)
          curveToRelative(0.0F, -1.936F, 1.564F, -3.5F, 3.5F, -3.5F)
          reflectiveCurveToRelative(3.5F, 1.564F, 3.5F, 3.5F)
          curveToRelative(0.0F, 0.852F, -0.222F, 1.42F, -0.529F, 1.86F)
          curveToRelative(-0.324F, 0.463F, -0.767F, 0.823F, -1.302F, 1.232F)
          lineToRelative(-0.138F, 0.105F)
          curveTo(12.521F, 12.965F, 11.25F, 13.93F, 11.25F, 16.0F)
          verticalLineToRelative(0.25F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineTo(16.0F)
          curveToRelative(0.0F, -1.317F, 0.714F, -1.863F, 1.785F, -2.682F)
          lineToRelative(0.046F, -0.035F)
          curveToRelative(0.527F, -0.403F, 1.147F, -0.887F, 1.62F, -1.564F)
          curveTo(16.69F, 11.018F, 17.0F, 10.149F, 17.0F, 9.0F)
          curveToRelative(0.0F, -2.764F, -2.236F, -5.0F, -5.0F, -5.0F)
          close()
          moveToRelative(0.0F, 17.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          reflectiveCurveToRelative(-1.0F, 0.448F, -1.0F, 1.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          close()        
      }
    }
    return _question24!!
  }

private var _question24: ImageVector? = null
