package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SidebarSearchRtl20: ImageVector
  get() {
    if (_sidebarSearchRtl20 != null) {
      return _sidebarSearchRtl20!!
    }
    _sidebarSearchRtl20 = fluentIcon(name = "Filled.SidebarSearchRtl20", 20f) {
      materialPath {
          moveTo(3.0F, 5.5F)
          curveTo(3.0F, 4.12F, 4.12F, 3.0F, 5.5F, 3.0F)
          horizontalLineToRelative(9.0F)
          curveTo(15.88F, 3.0F, 17.0F, 4.12F, 17.0F, 5.5F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, -2.485F, -2.015F, -4.5F, -4.5F, -4.5F)
          reflectiveCurveTo(8.0F, 10.015F, 8.0F, 12.5F)
          reflectiveCurveToRelative(2.015F, 4.5F, 4.5F, 4.5F)
          horizontalLineToRelative(-7.0F)
          curveTo(4.12F, 17.0F, 3.0F, 15.88F, 3.0F, 14.5F)
          verticalLineToRelative(-9.0F)
          close()
          moveToRelative(3.0F, 1.0F)
          verticalLineToRelative(7.0F)
          curveTo(6.0F, 13.776F, 6.224F, 14.0F, 6.5F, 14.0F)
          reflectiveCurveTo(7.0F, 13.776F, 7.0F, 13.5F)
          verticalLineToRelative(-7.0F)
          curveTo(7.0F, 6.224F, 6.776F, 6.0F, 6.5F, 6.0F)
          reflectiveCurveTo(6.0F, 6.224F, 6.0F, 6.5F)
          close()
          moveToRelative(10.0F, 6.0F)
          curveToRelative(0.0F, 0.786F, -0.26F, 1.512F, -0.697F, 2.096F)
          lineToRelative(2.55F, 2.55F)
          curveToRelative(0.196F, 0.196F, 0.196F, 0.512F, 0.0F, 0.707F)
          curveToRelative(-0.195F, 0.196F, -0.511F, 0.196F, -0.707F, 0.0F)
          lineToRelative(-2.55F, -2.55F)
          curveTo(14.012F, 15.741F, 13.286F, 16.0F, 12.5F, 16.0F)
          curveTo(10.567F, 16.0F, 9.0F, 14.433F, 9.0F, 12.5F)
          reflectiveCurveTo(10.567F, 9.0F, 12.5F, 9.0F)
          reflectiveCurveToRelative(3.5F, 1.567F, 3.5F, 3.5F)
          close()
          moveToRelative(-1.0F, 0.0F)
          curveToRelative(0.0F, -1.38F, -1.12F, -2.5F, -2.5F, -2.5F)
          reflectiveCurveTo(10.0F, 11.12F, 10.0F, 12.5F)
          reflectiveCurveToRelative(1.12F, 2.5F, 2.5F, 2.5F)
          reflectiveCurveToRelative(2.5F, -1.12F, 2.5F, -2.5F)
          close()        
      }
    }
    return _sidebarSearchRtl20!!
  }

private var _sidebarSearchRtl20: ImageVector? = null
