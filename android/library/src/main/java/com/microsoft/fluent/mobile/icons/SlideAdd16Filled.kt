package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SlideAdd16: ImageVector
  get() {
    if (_slideAdd16 != null) {
      return _slideAdd16!!
    }
    _slideAdd16 = fluentIcon(name = "Filled.SlideAdd16", 16f) {
      materialPath {
          moveTo(1.0F, 4.5F)
          curveTo(1.0F, 3.12F, 2.12F, 2.0F, 3.5F, 2.0F)
          horizontalLineToRelative(9.0F)
          curveTo(13.88F, 2.0F, 15.0F, 3.12F, 15.0F, 4.5F)
          verticalLineToRelative(2.757F)
          curveTo(14.05F, 6.472F, 12.83F, 6.0F, 11.5F, 6.0F)
          curveTo(8.462F, 6.0F, 6.0F, 8.462F, 6.0F, 11.5F)
          curveToRelative(0.0F, 0.168F, 0.008F, 0.335F, 0.022F, 0.5F)
          horizontalLineTo(3.5F)
          curveTo(2.12F, 12.0F, 1.0F, 10.88F, 1.0F, 9.5F)
          verticalLineToRelative(-5.0F)
          close()
          moveToRelative(15.0F, 7.0F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          reflectiveCurveTo(7.0F, 13.985F, 7.0F, 11.5F)
          reflectiveCurveTo(9.015F, 7.0F, 11.5F, 7.0F)
          reflectiveCurveTo(16.0F, 9.015F, 16.0F, 11.5F)
          close()
          moveToRelative(-4.0F, -2.0F)
          curveTo(12.0F, 9.224F, 11.776F, 9.0F, 11.5F, 9.0F)
          reflectiveCurveTo(11.0F, 9.224F, 11.0F, 9.5F)
          verticalLineTo(11.0F)
          horizontalLineTo(9.5F)
          curveTo(9.224F, 11.0F, 9.0F, 11.224F, 9.0F, 11.5F)
          reflectiveCurveTo(9.224F, 12.0F, 9.5F, 12.0F)
          horizontalLineTo(11.0F)
          verticalLineToRelative(1.5F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineTo(12.0F)
          horizontalLineToRelative(1.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(13.776F, 11.0F, 13.5F, 11.0F)
          horizontalLineTo(12.0F)
          verticalLineTo(9.5F)
          close()        
      }
    }
    return _slideAdd16!!
  }

private var _slideAdd16: ImageVector? = null
