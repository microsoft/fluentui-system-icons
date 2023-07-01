package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.AlignEndVertical20: ImageVector
  get() {
    if (_alignEndVertical20 != null) {
      return _alignEndVertical20!!
    }
    _alignEndVertical20 = fluentIcon(name = "Filled.AlignEndVertical20", 20f) {
      materialPath {
          moveTo(4.0F, 10.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(6.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineToRelative(-2.0F)
          close()
          moveToRelative(-2.0F, 6.5F)
          curveTo(2.0F, 16.224F, 2.224F, 16.0F, 2.5F, 16.0F)
          horizontalLineToRelative(15.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(17.776F, 17.0F, 17.5F, 17.0F)
          horizontalLineToRelative(-15.0F)
          curveTo(2.224F, 17.0F, 2.0F, 16.776F, 2.0F, 16.5F)
          close()        
      }
    }
    return _alignEndVertical20!!
  }

private var _alignEndVertical20: ImageVector? = null
