package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Cart16: ImageVector
  get() {
    if (_cart16 != null) {
      return _cart16!!
    }
    _cart16 = fluentIcon(name = "Filled.Cart16", 16f) {
      materialPath {
          moveTo(2.5F, 2.0F)
          curveTo(2.224F, 2.0F, 2.0F, 2.224F, 2.0F, 2.5F)
          reflectiveCurveTo(2.224F, 3.0F, 2.5F, 3.0F)
          horizontalLineToRelative(0.246F)
          curveToRelative(0.223F, 0.0F, 0.42F, 0.148F, 0.48F, 0.363F)
          lineToRelative(1.586F, 5.55F)
          curveTo(4.996F, 9.555F, 5.585F, 10.0F, 6.254F, 10.0F)
          horizontalLineToRelative(4.569F)
          curveToRelative(0.613F, 0.0F, 1.165F, -0.373F, 1.393F, -0.943F)
          lineToRelative(1.474F, -3.686F)
          curveTo(13.953F, 4.714F, 13.469F, 4.0F, 12.762F, 4.0F)
          horizontalLineTo(4.448F)
          lineToRelative(-0.26F, -0.912F)
          curveTo(4.004F, 2.444F, 3.415F, 2.0F, 2.746F, 2.0F)
          horizontalLineTo(2.5F)
          close()
          moveToRelative(4.0F, 12.0F)
          curveTo(7.328F, 14.0F, 8.0F, 13.328F, 8.0F, 12.5F)
          reflectiveCurveTo(7.328F, 11.0F, 6.5F, 11.0F)
          reflectiveCurveTo(5.0F, 11.672F, 5.0F, 12.5F)
          reflectiveCurveTo(5.672F, 14.0F, 6.5F, 14.0F)
          close()
          moveToRelative(4.0F, 0.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          reflectiveCurveTo(11.328F, 11.0F, 10.5F, 11.0F)
          reflectiveCurveTo(9.0F, 11.672F, 9.0F, 12.5F)
          reflectiveCurveTo(9.672F, 14.0F, 10.5F, 14.0F)
          close()        
      }
    }
    return _cart16!!
  }

private var _cart16: ImageVector? = null
