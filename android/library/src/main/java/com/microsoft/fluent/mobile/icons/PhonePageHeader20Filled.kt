package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PhonePageHeader20: ImageVector
  get() {
    if (_phonePageHeader20 != null) {
      return _phonePageHeader20!!
    }
    _phonePageHeader20 = fluentIcon(name = "Filled.PhonePageHeader20", 20f) {
      materialPath {
          moveTo(5.0F, 4.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(1.0F)
          horizontalLineTo(5.0F)
          verticalLineTo(4.0F)
          close()
          moveToRelative(0.0F, 2.0F)
          verticalLineToRelative(10.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(6.0F)
          horizontalLineTo(5.0F)
          close()        
      }
    }
    return _phonePageHeader20!!
  }

private var _phonePageHeader20: ImageVector? = null
