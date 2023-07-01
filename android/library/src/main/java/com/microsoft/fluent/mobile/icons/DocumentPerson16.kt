package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DocumentPerson16: ImageVector
  get() {
    if (_documentPerson16 != null) {
      return _documentPerson16!!
    }
    _documentPerson16 = fluentIcon(name = "Filled.DocumentPerson16", 16f) {
      materialPath {
          moveTo(8.0F, 1.0F)
          verticalLineToRelative(3.5F)
          curveTo(8.0F, 5.328F, 8.672F, 6.0F, 9.5F, 6.0F)
          horizontalLineTo(13.0F)
          verticalLineToRelative(7.5F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineTo(7.81F)
          lineToRelative(0.018F, -0.015F)
          curveTo(8.632F, 14.315F, 9.0F, 13.402F, 9.0F, 12.5F)
          curveToRelative(0.0F, -1.304F, -0.999F, -2.375F, -2.273F, -2.49F)
          curveTo(7.207F, 9.478F, 7.5F, 8.773F, 7.5F, 8.0F)
          curveToRelative(0.0F, -1.657F, -1.343F, -3.0F, -3.0F, -3.0F)
          curveTo(3.954F, 5.0F, 3.441F, 5.146F, 3.0F, 5.401F)
          verticalLineTo(2.5F)
          curveTo(3.0F, 1.672F, 3.672F, 1.0F, 4.5F, 1.0F)
          horizontalLineTo(8.0F)
          close()
          moveToRelative(1.0F, 0.25F)
          verticalLineTo(4.5F)
          curveTo(9.0F, 4.776F, 9.224F, 5.0F, 9.5F, 5.0F)
          horizontalLineToRelative(3.25F)
          lineTo(9.0F, 1.25F)
          close()
          moveTo(6.5F, 8.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          reflectiveCurveToRelative(-2.0F, -0.895F, -2.0F, -2.0F)
          reflectiveCurveToRelative(0.895F, -2.0F, 2.0F, -2.0F)
          reflectiveCurveToRelative(2.0F, 0.895F, 2.0F, 2.0F)
          close()
          moveTo(8.0F, 12.5F)
          curveTo(8.0F, 13.745F, 7.0F, 15.0F, 4.5F, 15.0F)
          reflectiveCurveTo(1.0F, 13.75F, 1.0F, 12.5F)
          curveTo(1.0F, 11.672F, 1.672F, 11.0F, 2.5F, 11.0F)
          horizontalLineToRelative(4.0F)
          curveTo(7.328F, 11.0F, 8.0F, 11.672F, 8.0F, 12.5F)
          close()        
      }
    }
    return _documentPerson16!!
  }

private var _documentPerson16: ImageVector? = null
