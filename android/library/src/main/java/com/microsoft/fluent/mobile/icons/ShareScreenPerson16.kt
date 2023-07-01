package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ShareScreenPerson16: ImageVector
  get() {
    if (_shareScreenPerson16 != null) {
      return _shareScreenPerson16!!
    }
    _shareScreenPerson16 = fluentIcon(name = "Filled.ShareScreenPerson16", 16f) {
      materialPath {
          moveTo(3.5F, 3.0F)
          curveTo(2.12F, 3.0F, 1.0F, 4.12F, 1.0F, 5.5F)
          verticalLineToRelative(5.0F)
          curveTo(1.0F, 11.88F, 2.12F, 13.0F, 3.5F, 13.0F)
          horizontalLineToRelative(3.538F)
          curveTo(7.013F, 12.834F, 7.0F, 12.667F, 7.0F, 12.5F)
          curveToRelative(0.0F, -1.304F, 0.999F, -2.375F, 2.273F, -2.49F)
          curveTo(8.793F, 9.478F, 8.5F, 8.773F, 8.5F, 8.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          curveToRelative(1.573F, 0.0F, 2.863F, 1.21F, 2.99F, 2.75F)
          curveTo(14.5F, 7.888F, 14.612F, 8.0F, 14.75F, 8.0F)
          reflectiveCurveTo(15.0F, 7.888F, 15.0F, 7.75F)
          verticalLineTo(5.5F)
          curveTo(15.0F, 4.12F, 13.88F, 3.0F, 12.5F, 3.0F)
          horizontalLineToRelative(-9.0F)
          close()
          moveToRelative(10.0F, 5.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          reflectiveCurveToRelative(-2.0F, -0.895F, -2.0F, -2.0F)
          reflectiveCurveToRelative(0.895F, -2.0F, 2.0F, -2.0F)
          reflectiveCurveToRelative(2.0F, 0.895F, 2.0F, 2.0F)
          close()
          moveToRelative(1.5F, 4.5F)
          curveToRelative(0.0F, 1.245F, -1.0F, 2.5F, -3.5F, 2.5F)
          reflectiveCurveTo(8.0F, 13.75F, 8.0F, 12.5F)
          curveTo(8.0F, 11.672F, 8.672F, 11.0F, 9.5F, 11.0F)
          horizontalLineToRelative(4.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, 0.672F, 1.5F, 1.5F)
          close()        
      }
    }
    return _shareScreenPerson16!!
  }

private var _shareScreenPerson16: ImageVector? = null
