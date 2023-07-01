package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.BorderAll16: ImageVector
  get() {
    if (_borderAll16 != null) {
      return _borderAll16!!
    }
    _borderAll16 = fluentIcon(name = "Filled.BorderAll16", 16f) {
      materialPath {
          moveTo(4.75F, 3.5F)
          curveTo(4.06F, 3.5F, 3.5F, 4.06F, 3.5F, 4.75F)
          verticalLineToRelative(2.5F)
          horizontalLineToRelative(3.75F)
          verticalLineTo(3.5F)
          horizontalLineToRelative(-2.5F)
          close()
          moveToRelative(4.0F, 0.0F)
          verticalLineToRelative(3.75F)
          horizontalLineToRelative(3.75F)
          verticalLineToRelative(-2.5F)
          curveToRelative(0.0F, -0.69F, -0.56F, -1.25F, -1.25F, -1.25F)
          horizontalLineToRelative(-2.5F)
          close()
          moveToRelative(3.75F, 5.25F)
          horizontalLineTo(8.75F)
          verticalLineToRelative(3.75F)
          horizontalLineToRelative(2.5F)
          curveToRelative(0.69F, 0.0F, 1.25F, -0.56F, 1.25F, -1.25F)
          verticalLineToRelative(-2.5F)
          close()
          moveTo(7.25F, 12.5F)
          verticalLineTo(8.75F)
          horizontalLineTo(3.5F)
          verticalLineToRelative(2.5F)
          curveToRelative(0.0F, 0.69F, 0.56F, 1.25F, 1.25F, 1.25F)
          horizontalLineToRelative(2.5F)
          close()
          moveTo(2.0F, 4.75F)
          curveTo(2.0F, 3.231F, 3.231F, 2.0F, 4.75F, 2.0F)
          horizontalLineToRelative(6.5F)
          curveTo(12.769F, 2.0F, 14.0F, 3.231F, 14.0F, 4.75F)
          verticalLineToRelative(6.5F)
          curveToRelative(0.0F, 1.519F, -1.231F, 2.75F, -2.75F, 2.75F)
          horizontalLineToRelative(-6.5F)
          curveTo(3.231F, 14.0F, 2.0F, 12.769F, 2.0F, 11.25F)
          verticalLineToRelative(-6.5F)
          close()        
      }
    }
    return _borderAll16!!
  }

private var _borderAll16: ImageVector? = null
