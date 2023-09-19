package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PhonePageHeader24: ImageVector
  get() {
    if (_phonePageHeader24 != null) {
      return _phonePageHeader24!!
    }
    _phonePageHeader24 = fluentIcon(name = "Filled.PhonePageHeader24", 24f) {
      materialPath {
          moveTo(18.0F, 6.005F)
          verticalLineTo(19.75F)
          curveToRelative(0.0F, 1.243F, -1.007F, 2.25F, -2.25F, 2.25F)
          horizontalLineToRelative(-7.5F)
          curveTo(7.007F, 22.0F, 6.0F, 20.993F, 6.0F, 19.75F)
          verticalLineTo(6.005F)
          horizontalLineToRelative(12.0F)
          close()
          moveTo(15.75F, 2.0F)
          curveTo(16.993F, 2.0F, 18.0F, 3.007F, 18.0F, 4.25F)
          verticalLineTo(5.0F)
          horizontalLineTo(6.0F)
          verticalLineTo(4.25F)
          curveTo(6.0F, 3.007F, 7.007F, 2.0F, 8.25F, 2.0F)
          horizontalLineToRelative(7.5F)
          close()        
      }
    }
    return _phonePageHeader24!!
  }

private var _phonePageHeader24: ImageVector? = null
