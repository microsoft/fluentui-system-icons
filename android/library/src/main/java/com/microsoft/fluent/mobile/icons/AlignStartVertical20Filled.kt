package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.AlignStartVertical20: ImageVector
  get() {
    if (_alignStartVertical20 != null) {
      return _alignStartVertical20!!
    }
    _alignStartVertical20 = fluentIcon(name = "Filled.AlignStartVertical20", 20f) {
      materialPath {
          moveTo(2.5F, 3.0F)
          curveTo(2.224F, 3.0F, 2.0F, 3.224F, 2.0F, 3.5F)
          reflectiveCurveTo(2.224F, 4.0F, 2.5F, 4.0F)
          horizontalLineToRelative(15.0F)
          curveTo(17.776F, 4.0F, 18.0F, 3.776F, 18.0F, 3.5F)
          reflectiveCurveTo(17.776F, 3.0F, 17.5F, 3.0F)
          horizontalLineToRelative(-15.0F)
          close()
          moveTo(6.0F, 6.0F)
          curveTo(4.895F, 6.0F, 4.0F, 6.895F, 4.0F, 8.0F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(8.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(6.0F)
          close()        
      }
    }
    return _alignStartVertical20!!
  }

private var _alignStartVertical20: ImageVector? = null
