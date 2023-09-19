package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SearchInfo20: ImageVector
  get() {
    if (_searchInfo20 != null) {
      return _searchInfo20!!
    }
    _searchInfo20 = fluentIcon(name = "Filled.SearchInfo20", 20f) {
      materialPath {
          moveTo(14.0F, 8.5F)
          curveTo(14.0F, 5.462F, 11.538F, 3.0F, 8.5F, 3.0F)
          reflectiveCurveTo(3.0F, 5.462F, 3.0F, 8.5F)
          reflectiveCurveTo(5.462F, 14.0F, 8.5F, 14.0F)
          curveToRelative(1.339F, 0.0F, 2.566F, -0.478F, 3.52F, -1.273F)
          lineToRelative(4.126F, 4.127F)
          lineToRelative(0.07F, 0.057F)
          curveToRelative(0.195F, 0.135F, 0.464F, 0.116F, 0.638F, -0.057F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-4.127F, -4.126F)
          curveTo(13.522F, 11.066F, 14.0F, 9.839F, 14.0F, 8.5F)
          close()
          moveTo(8.5F, 7.0F)
          curveTo(8.224F, 7.0F, 8.0F, 6.776F, 8.0F, 6.5F)
          reflectiveCurveTo(8.224F, 6.0F, 8.5F, 6.0F)
          reflectiveCurveTo(9.0F, 6.224F, 9.0F, 6.5F)
          reflectiveCurveTo(8.776F, 7.0F, 8.5F, 7.0F)
          close()
          moveTo(9.0F, 8.5F)
          verticalLineToRelative(2.0F)
          curveTo(9.0F, 10.776F, 8.776F, 11.0F, 8.5F, 11.0F)
          reflectiveCurveTo(8.0F, 10.776F, 8.0F, 10.5F)
          verticalLineToRelative(-2.0F)
          curveTo(8.0F, 8.224F, 8.224F, 8.0F, 8.5F, 8.0F)
          reflectiveCurveTo(9.0F, 8.224F, 9.0F, 8.5F)
          close()        
      }
    }
    return _searchInfo20!!
  }

private var _searchInfo20: ImageVector? = null
