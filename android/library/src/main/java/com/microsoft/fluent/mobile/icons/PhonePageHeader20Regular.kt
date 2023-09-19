package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PhonePageHeader20: ImageVector
  get() {
    if (_phonePageHeader20 != null) {
      return _phonePageHeader20!!
    }
    _phonePageHeader20 = fluentIcon(name = "Regular.PhonePageHeader20", 20f) {
      materialPath {
          moveTo(7.0F, 2.0F)
          curveTo(5.895F, 2.0F, 5.0F, 2.895F, 5.0F, 4.0F)
          verticalLineToRelative(12.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(7.0F)
          close()
          moveTo(6.0F, 5.0F)
          horizontalLineToRelative(8.0F)
          verticalLineToRelative(11.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(7.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineTo(5.0F)
          close()        
      }
    }
    return _phonePageHeader20!!
  }

private var _phonePageHeader20: ImageVector? = null
