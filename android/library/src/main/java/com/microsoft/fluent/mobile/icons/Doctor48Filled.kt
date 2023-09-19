package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Doctor48: ImageVector
  get() {
    if (_doctor48 != null) {
      return _doctor48!!
    }
    _doctor48 = fluentIcon(name = "Filled.Doctor48", 48f) {
      materialPath {
          moveTo(18.25F, 6.0F)
          curveTo(17.007F, 6.0F, 16.0F, 7.007F, 16.0F, 8.25F)
          verticalLineTo(16.0F)
          horizontalLineTo(8.25F)
          curveTo(7.007F, 16.0F, 6.0F, 17.007F, 6.0F, 18.25F)
          verticalLineToRelative(11.5F)
          curveTo(6.0F, 30.993F, 7.007F, 32.0F, 8.25F, 32.0F)
          horizontalLineTo(16.0F)
          verticalLineToRelative(7.75F)
          curveToRelative(0.0F, 1.243F, 1.007F, 2.25F, 2.25F, 2.25F)
          horizontalLineToRelative(11.5F)
          curveToRelative(1.243F, 0.0F, 2.25F, -1.007F, 2.25F, -2.25F)
          verticalLineTo(32.0F)
          horizontalLineToRelative(7.75F)
          curveToRelative(1.243F, 0.0F, 2.25F, -1.007F, 2.25F, -2.25F)
          verticalLineToRelative(-11.5F)
          curveToRelative(0.0F, -1.243F, -1.007F, -2.25F, -2.25F, -2.25F)
          horizontalLineTo(32.0F)
          verticalLineTo(8.25F)
          curveTo(32.0F, 7.007F, 30.993F, 6.0F, 29.75F, 6.0F)
          horizontalLineToRelative(-11.5F)
          close()        
      }
    }
    return _doctor48!!
  }

private var _doctor48: ImageVector? = null
