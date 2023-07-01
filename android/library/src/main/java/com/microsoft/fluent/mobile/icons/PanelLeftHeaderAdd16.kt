package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PanelLeftHeaderAdd16: ImageVector
  get() {
    if (_panelLeftHeaderAdd16 != null) {
      return _panelLeftHeaderAdd16!!
    }
    _panelLeftHeaderAdd16 = fluentIcon(name = "Filled.PanelLeftHeaderAdd16", 16f) {
      materialPath {
          moveTo(3.5F, 2.0F)
          curveTo(2.12F, 2.0F, 1.0F, 3.12F, 1.0F, 4.5F)
          verticalLineToRelative(5.0F)
          curveTo(1.0F, 10.88F, 2.12F, 12.0F, 3.5F, 12.0F)
          horizontalLineTo(6.0F)
          verticalLineTo(6.5F)
          horizontalLineToRelative(7.0F)
          verticalLineToRelative(-2.0F)
          curveTo(13.0F, 3.12F, 11.88F, 2.0F, 10.5F, 2.0F)
          horizontalLineToRelative(-7.0F)
          close()
          moveTo(12.0F, 5.5F)
          horizontalLineTo(6.0F)
          verticalLineTo(3.0F)
          horizontalLineToRelative(4.5F)
          curveTo(11.328F, 3.0F, 12.0F, 3.672F, 12.0F, 4.5F)
          verticalLineToRelative(1.0F)
          close()
          moveTo(11.5F, 16.0F)
          curveTo(9.015F, 16.0F, 7.0F, 13.985F, 7.0F, 11.5F)
          reflectiveCurveTo(9.015F, 7.0F, 11.5F, 7.0F)
          reflectiveCurveTo(16.0F, 9.015F, 16.0F, 11.5F)
          reflectiveCurveTo(13.985F, 16.0F, 11.5F, 16.0F)
          close()
          moveTo(12.0F, 9.5F)
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
    return _panelLeftHeaderAdd16!!
  }

private var _panelLeftHeaderAdd16: ImageVector? = null
