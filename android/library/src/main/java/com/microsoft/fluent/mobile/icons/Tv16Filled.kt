package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Tv16: ImageVector
  get() {
    if (_tv16 != null) {
      return _tv16!!
    }
    _tv16 = fluentIcon(name = "Filled.Tv16", 16f) {
      materialPath {
          moveTo(4.0F, 3.0F)
          curveTo(2.895F, 3.0F, 2.0F, 3.895F, 2.0F, 5.0F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(4.0F)
          close()
          moveToRelative(0.0F, 9.5F)
          curveTo(4.0F, 12.224F, 4.224F, 12.0F, 4.5F, 12.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(11.776F, 13.0F, 11.5F, 13.0F)
          horizontalLineToRelative(-7.0F)
          curveTo(4.224F, 13.0F, 4.0F, 12.776F, 4.0F, 12.5F)
          close()        
      }
    }
    return _tv16!!
  }

private var _tv16: ImageVector? = null
