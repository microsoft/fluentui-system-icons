package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.SearchInfo20: ImageVector
  get() {
    if (_searchInfo20 != null) {
      return _searchInfo20!!
    }
    _searchInfo20 = fluentIcon(name = "Regular.SearchInfo20", 20f) {
      materialPath {
          moveTo(8.5F, 3.0F)
          curveTo(11.538F, 3.0F, 14.0F, 5.462F, 14.0F, 8.5F)
          curveToRelative(0.0F, 1.339F, -0.478F, 2.566F, -1.273F, 3.52F)
          lineToRelative(4.127F, 4.126F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          curveToRelative(-0.174F, 0.173F, -0.443F, 0.192F, -0.638F, 0.057F)
          lineToRelative(-0.07F, -0.057F)
          lineToRelative(-4.126F, -4.127F)
          curveTo(11.066F, 13.522F, 9.839F, 14.0F, 8.5F, 14.0F)
          curveTo(5.462F, 14.0F, 3.0F, 11.538F, 3.0F, 8.5F)
          reflectiveCurveTo(5.462F, 3.0F, 8.5F, 3.0F)
          close()
          moveToRelative(0.0F, 1.0F)
          curveTo(6.015F, 4.0F, 4.0F, 6.015F, 4.0F, 8.5F)
          reflectiveCurveTo(6.015F, 13.0F, 8.5F, 13.0F)
          reflectiveCurveTo(13.0F, 10.985F, 13.0F, 8.5F)
          reflectiveCurveTo(10.985F, 4.0F, 8.5F, 4.0F)
          close()
          moveToRelative(0.0F, 4.0F)
          curveTo(8.776F, 8.0F, 9.0F, 8.224F, 9.0F, 8.5F)
          verticalLineToRelative(2.0F)
          curveTo(9.0F, 10.776F, 8.776F, 11.0F, 8.5F, 11.0F)
          reflectiveCurveTo(8.0F, 10.776F, 8.0F, 10.5F)
          verticalLineToRelative(-2.0F)
          curveTo(8.0F, 8.224F, 8.224F, 8.0F, 8.5F, 8.0F)
          close()
          moveTo(9.0F, 6.5F)
          curveTo(9.0F, 6.776F, 8.776F, 7.0F, 8.5F, 7.0F)
          reflectiveCurveTo(8.0F, 6.776F, 8.0F, 6.5F)
          reflectiveCurveTo(8.224F, 6.0F, 8.5F, 6.0F)
          reflectiveCurveTo(9.0F, 6.224F, 9.0F, 6.5F)
          close()        
      }
    }
    return _searchInfo20!!
  }

private var _searchInfo20: ImageVector? = null
