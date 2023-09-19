package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Clover20: ImageVector
  get() {
    if (_clover20 != null) {
      return _clover20!!
    }
    _clover20 = fluentIcon(name = "Filled.Clover20", 20f) {
      materialPath {
          moveTo(5.5F, 2.0F)
          curveTo(3.567F, 2.0F, 2.0F, 3.567F, 2.0F, 5.5F)
          reflectiveCurveTo(3.567F, 9.0F, 5.5F, 9.0F)
          horizontalLineToRelative(3.0F)
          curveTo(8.776F, 9.0F, 9.0F, 8.776F, 9.0F, 8.5F)
          verticalLineToRelative(-3.0F)
          curveTo(9.0F, 3.567F, 7.433F, 2.0F, 5.5F, 2.0F)
          close()
          moveToRelative(0.0F, 15.0F)
          curveTo(3.567F, 17.0F, 2.0F, 15.433F, 2.0F, 13.5F)
          reflectiveCurveTo(3.567F, 10.0F, 5.5F, 10.0F)
          horizontalLineToRelative(3.0F)
          curveTo(8.776F, 10.0F, 9.0F, 10.224F, 9.0F, 10.5F)
          verticalLineToRelative(3.0F)
          curveTo(9.0F, 15.433F, 7.433F, 17.0F, 5.5F, 17.0F)
          close()
          moveToRelative(8.0F, -15.0F)
          curveTo(15.433F, 2.0F, 17.0F, 3.567F, 17.0F, 5.5F)
          reflectiveCurveTo(15.433F, 9.0F, 13.5F, 9.0F)
          horizontalLineToRelative(-3.0F)
          curveTo(10.224F, 9.0F, 10.0F, 8.776F, 10.0F, 8.5F)
          verticalLineToRelative(-3.0F)
          curveTo(10.0F, 3.567F, 11.567F, 2.0F, 13.5F, 2.0F)
          close()
          moveToRelative(0.0F, 15.0F)
          curveToRelative(1.933F, 0.0F, 3.5F, -1.567F, 3.5F, -3.5F)
          reflectiveCurveTo(15.433F, 10.0F, 13.5F, 10.0F)
          horizontalLineToRelative(-3.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, 0.224F, -0.5F, 0.5F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 1.933F, 1.567F, 3.5F, 3.5F, 3.5F)
          close()        
      }
    }
    return _clover20!!
  }

private var _clover20: ImageVector? = null
