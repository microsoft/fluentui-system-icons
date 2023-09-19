package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.AlignStartHorizontal20: ImageVector
  get() {
    if (_alignStartHorizontal20 != null) {
      return _alignStartHorizontal20!!
    }
    _alignStartHorizontal20 = fluentIcon(name = "Filled.AlignStartHorizontal20", 20f) {
      materialPath {
          moveTo(3.0F, 17.5F)
          curveTo(3.0F, 17.776F, 3.224F, 18.0F, 3.5F, 18.0F)
          reflectiveCurveTo(4.0F, 17.776F, 4.0F, 17.5F)
          verticalLineToRelative(-15.0F)
          curveTo(4.0F, 2.224F, 3.776F, 2.0F, 3.5F, 2.0F)
          reflectiveCurveTo(3.0F, 2.224F, 3.0F, 2.5F)
          verticalLineToRelative(15.0F)
          close()
          moveTo(8.0F, 4.0F)
          curveTo(6.895F, 4.0F, 6.0F, 4.895F, 6.0F, 6.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(2.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(8.0F)
          close()        
      }
    }
    return _alignStartHorizontal20!!
  }

private var _alignStartHorizontal20: ImageVector? = null
