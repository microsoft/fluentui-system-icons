package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DoorTag20: ImageVector
  get() {
    if (_doorTag20 != null) {
      return _doorTag20!!
    }
    _doorTag20 = fluentIcon(name = "Filled.DoorTag20", 20f) {
      materialPath {
          moveTo(9.293F, 6.293F)
          curveToRelative(0.39F, -0.39F, 1.024F, -0.39F, 1.414F, 0.0F)
          curveToRelative(0.39F, 0.39F, 0.39F, 1.024F, 0.0F, 1.414F)
          curveTo(10.512F, 7.902F, 10.256F, 8.0F, 10.0F, 8.0F)
          horizontalLineTo(7.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, 0.895F, -2.0F, 2.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(7.048F)
          curveToRelative(0.012F, -1.296F, -0.476F, -2.595F, -1.464F, -3.583F)
          curveToRelative(-1.953F, -1.953F, -5.119F, -1.953F, -7.071F, 0.0F)
          curveToRelative(-0.781F, 0.78F, -0.781F, 2.047F, 0.0F, 2.828F)
          curveToRelative(0.78F, 0.78F, 2.047F, 0.78F, 2.828F, 0.0F)
          close()
          moveTo(8.0F, 14.0F)
          horizontalLineToRelative(4.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(12.276F, 15.0F, 12.0F, 15.0F)
          horizontalLineTo(8.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, -0.224F, -0.5F, -0.5F)
          reflectiveCurveTo(7.724F, 14.0F, 8.0F, 14.0F)
          close()        
      }
    }
    return _doorTag20!!
  }

private var _doorTag20: ImageVector? = null
