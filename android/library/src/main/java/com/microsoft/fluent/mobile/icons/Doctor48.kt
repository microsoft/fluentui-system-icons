package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Doctor48: ImageVector
  get() {
    if (_doctor48 != null) {
      return _doctor48!!
    }
    _doctor48 = fluentIcon(name = "Regular.Doctor48", 48f) {
      materialPath {
          moveTo(18.5F, 8.5F)
          verticalLineToRelative(8.75F)
          curveToRelative(0.0F, 0.69F, -0.56F, 1.25F, -1.25F, 1.25F)
          horizontalLineTo(8.5F)
          verticalLineToRelative(11.0F)
          horizontalLineToRelative(8.75F)
          curveToRelative(0.69F, 0.0F, 1.25F, 0.56F, 1.25F, 1.25F)
          verticalLineToRelative(8.75F)
          horizontalLineToRelative(11.0F)
          verticalLineToRelative(-8.75F)
          curveToRelative(0.0F, -0.69F, 0.56F, -1.25F, 1.25F, -1.25F)
          horizontalLineToRelative(8.75F)
          verticalLineToRelative(-11.0F)
          horizontalLineToRelative(-8.75F)
          curveToRelative(-0.69F, 0.0F, -1.25F, -0.56F, -1.25F, -1.25F)
          verticalLineTo(8.5F)
          horizontalLineToRelative(-11.0F)
          close()
          moveTo(16.0F, 8.25F)
          curveTo(16.0F, 7.007F, 17.007F, 6.0F, 18.25F, 6.0F)
          horizontalLineToRelative(11.5F)
          curveTo(30.993F, 6.0F, 32.0F, 7.007F, 32.0F, 8.25F)
          verticalLineTo(16.0F)
          horizontalLineToRelative(7.75F)
          curveToRelative(1.243F, 0.0F, 2.25F, 1.007F, 2.25F, 2.25F)
          verticalLineToRelative(11.5F)
          curveToRelative(0.0F, 1.243F, -1.007F, 2.25F, -2.25F, 2.25F)
          horizontalLineTo(32.0F)
          verticalLineToRelative(7.75F)
          curveToRelative(0.0F, 1.243F, -1.007F, 2.25F, -2.25F, 2.25F)
          horizontalLineToRelative(-11.5F)
          curveTo(17.007F, 42.0F, 16.0F, 40.993F, 16.0F, 39.75F)
          verticalLineTo(32.0F)
          horizontalLineTo(8.25F)
          curveTo(7.007F, 32.0F, 6.0F, 30.993F, 6.0F, 29.75F)
          verticalLineToRelative(-11.5F)
          curveTo(6.0F, 17.007F, 7.007F, 16.0F, 8.25F, 16.0F)
          horizontalLineTo(16.0F)
          verticalLineTo(8.25F)
          close()        
      }
    }
    return _doctor48!!
  }

private var _doctor48: ImageVector? = null
