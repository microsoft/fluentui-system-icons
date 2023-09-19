package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SlideAdd20: ImageVector
  get() {
    if (_slideAdd20 != null) {
      return _slideAdd20!!
    }
    _slideAdd20 = fluentIcon(name = "Filled.SlideAdd20", 20f) {
      materialPath {
          moveTo(2.0F, 6.75F)
          curveTo(2.0F, 5.231F, 3.231F, 4.0F, 4.75F, 4.0F)
          horizontalLineToRelative(10.5F)
          curveTo(16.769F, 4.0F, 18.0F, 5.231F, 18.0F, 6.75F)
          verticalLineToRelative(3.507F)
          curveTo(17.05F, 9.472F, 15.83F, 9.0F, 14.5F, 9.0F)
          curveTo(11.462F, 9.0F, 9.0F, 11.462F, 9.0F, 14.5F)
          curveToRelative(0.0F, 0.52F, 0.072F, 1.023F, 0.207F, 1.5F)
          horizontalLineTo(4.75F)
          curveTo(3.231F, 16.0F, 2.0F, 14.769F, 2.0F, 13.25F)
          verticalLineToRelative(-6.5F)
          close()
          moveToRelative(17.0F, 7.75F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          reflectiveCurveTo(10.0F, 16.985F, 10.0F, 14.5F)
          reflectiveCurveToRelative(2.015F, -4.5F, 4.5F, -4.5F)
          reflectiveCurveToRelative(4.5F, 2.015F, 4.5F, 4.5F)
          close()
          moveToRelative(-4.0F, -2.0F)
          curveToRelative(0.0F, -0.276F, -0.224F, -0.5F, -0.5F, -0.5F)
          reflectiveCurveTo(14.0F, 12.224F, 14.0F, 12.5F)
          verticalLineTo(14.0F)
          horizontalLineToRelative(-1.5F)
          curveToRelative(-0.276F, 0.0F, -0.5F, 0.224F, -0.5F, 0.5F)
          reflectiveCurveToRelative(0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineTo(14.0F)
          verticalLineToRelative(1.5F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineTo(15.0F)
          horizontalLineToRelative(1.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(16.776F, 14.0F, 16.5F, 14.0F)
          horizontalLineTo(15.0F)
          verticalLineToRelative(-1.5F)
          close()        
      }
    }
    return _slideAdd20!!
  }

private var _slideAdd20: ImageVector? = null
