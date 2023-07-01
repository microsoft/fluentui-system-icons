package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PhoneAdd20: ImageVector
  get() {
    if (_phoneAdd20 != null) {
      return _phoneAdd20!!
    }
    _phoneAdd20 = fluentIcon(name = "Filled.PhoneAdd20", 20f) {
      materialPath {
          moveTo(5.5F, 2.0F)
          curveTo(4.672F, 2.0F, 4.0F, 2.672F, 4.0F, 3.5F)
          verticalLineToRelative(13.0F)
          curveTo(4.0F, 17.328F, 4.672F, 18.0F, 5.5F, 18.0F)
          horizontalLineToRelative(4.757F)
          curveToRelative(-0.686F, -0.83F, -1.132F, -1.866F, -1.235F, -3.0F)
          horizontalLineTo(7.5F)
          curveTo(7.224F, 15.0F, 7.0F, 14.776F, 7.0F, 14.5F)
          reflectiveCurveTo(7.224F, 14.0F, 7.5F, 14.0F)
          horizontalLineToRelative(1.522F)
          curveTo(9.26F, 11.361F, 11.362F, 9.26F, 14.0F, 9.022F)
          verticalLineTo(3.5F)
          curveTo(14.0F, 2.672F, 13.328F, 2.0F, 12.5F, 2.0F)
          horizontalLineToRelative(-7.0F)
          close()
          moveTo(19.0F, 14.5F)
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
    return _phoneAdd20!!
  }

private var _phoneAdd20: ImageVector? = null
