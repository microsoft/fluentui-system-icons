package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DualScreenHeader20: ImageVector
  get() {
    if (_dualScreenHeader20 != null) {
      return _dualScreenHeader20!!
    }
    _dualScreenHeader20 = fluentIcon(name = "Filled.DualScreenHeader20", 20f) {
      materialPath {
          moveTo(16.0F, 16.0F)
          horizontalLineToRelative(-5.5F)
          verticalLineTo(8.0F)
          horizontalLineTo(18.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          close()
          moveToRelative(2.0F, -9.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineToRelative(-5.5F)
          verticalLineToRelative(3.0F)
          horizontalLineTo(18.0F)
          close()
          moveTo(9.5F, 7.0F)
          verticalLineTo(4.0F)
          horizontalLineTo(4.0F)
          curveTo(2.895F, 4.0F, 2.0F, 4.895F, 2.0F, 6.0F)
          verticalLineToRelative(1.0F)
          horizontalLineToRelative(7.5F)
          close()
          moveTo(2.0F, 8.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(5.5F)
          verticalLineTo(8.0F)
          horizontalLineTo(2.0F)
          close()        
      }
    }
    return _dualScreenHeader20!!
  }

private var _dualScreenHeader20: ImageVector? = null
