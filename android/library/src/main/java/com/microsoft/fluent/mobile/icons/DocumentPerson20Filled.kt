package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DocumentPerson20: ImageVector
  get() {
    if (_documentPerson20 != null) {
      return _documentPerson20!!
    }
    _documentPerson20 = fluentIcon(name = "Filled.DocumentPerson20", 20f) {
      materialPath {
          moveTo(10.0F, 2.0F)
          verticalLineToRelative(4.5F)
          curveTo(10.0F, 7.328F, 10.672F, 8.0F, 11.5F, 8.0F)
          horizontalLineTo(16.0F)
          verticalLineToRelative(8.5F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineTo(8.632F)
          curveTo(8.882F, 17.527F, 9.0F, 17.012F, 9.0F, 16.5F)
          curveToRelative(0.0F, -1.304F, -0.999F, -2.375F, -2.273F, -2.49F)
          curveTo(7.207F, 13.478F, 7.5F, 12.773F, 7.5F, 12.0F)
          curveToRelative(0.0F, -1.657F, -1.343F, -3.0F, -3.0F, -3.0F)
          curveTo(4.33F, 9.0F, 4.163F, 9.014F, 4.0F, 9.041F)
          verticalLineTo(3.5F)
          curveTo(4.0F, 2.672F, 4.672F, 2.0F, 5.5F, 2.0F)
          horizontalLineTo(10.0F)
          close()
          moveToRelative(1.0F, 0.25F)
          verticalLineTo(6.5F)
          curveTo(11.0F, 6.776F, 11.224F, 7.0F, 11.5F, 7.0F)
          horizontalLineToRelative(4.25F)
          lineTo(11.0F, 2.25F)
          close()
          moveTo(6.5F, 12.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          reflectiveCurveToRelative(-2.0F, -0.895F, -2.0F, -2.0F)
          reflectiveCurveToRelative(0.895F, -2.0F, 2.0F, -2.0F)
          reflectiveCurveToRelative(2.0F, 0.895F, 2.0F, 2.0F)
          close()
          moveTo(8.0F, 16.5F)
          curveTo(8.0F, 17.745F, 7.0F, 19.0F, 4.5F, 19.0F)
          reflectiveCurveTo(1.0F, 17.75F, 1.0F, 16.5F)
          curveTo(1.0F, 15.672F, 1.672F, 15.0F, 2.5F, 15.0F)
          horizontalLineToRelative(4.0F)
          curveTo(7.328F, 15.0F, 8.0F, 15.672F, 8.0F, 16.5F)
          close()        
      }
    }
    return _documentPerson20!!
  }

private var _documentPerson20: ImageVector? = null
