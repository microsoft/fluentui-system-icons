package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.BorderAll24: ImageVector
  get() {
    if (_borderAll24 != null) {
      return _borderAll24!!
    }
    _borderAll24 = fluentIcon(name = "Regular.BorderAll24", 24f) {
      materialPath {
          moveTo(3.0F, 5.75F)
          curveTo(3.0F, 4.231F, 4.231F, 3.0F, 5.75F, 3.0F)
          horizontalLineToRelative(12.5F)
          curveTo(19.769F, 3.0F, 21.0F, 4.231F, 21.0F, 5.75F)
          verticalLineToRelative(12.5F)
          curveToRelative(0.0F, 1.519F, -1.231F, 2.75F, -2.75F, 2.75F)
          horizontalLineTo(5.75F)
          curveTo(4.231F, 21.0F, 3.0F, 19.769F, 3.0F, 18.25F)
          verticalLineTo(5.75F)
          close()
          moveToRelative(9.75F, 13.75F)
          horizontalLineToRelative(5.5F)
          curveToRelative(0.69F, 0.0F, 1.25F, -0.56F, 1.25F, -1.25F)
          verticalLineToRelative(-5.5F)
          horizontalLineToRelative(-6.75F)
          verticalLineToRelative(6.75F)
          close()
          moveToRelative(-1.5F, -6.75F)
          horizontalLineTo(4.5F)
          verticalLineToRelative(5.5F)
          curveToRelative(0.0F, 0.69F, 0.56F, 1.25F, 1.25F, 1.25F)
          horizontalLineToRelative(5.5F)
          verticalLineToRelative(-6.75F)
          close()
          moveToRelative(1.5F, -1.5F)
          horizontalLineToRelative(6.75F)
          verticalLineToRelative(-5.5F)
          curveToRelative(0.0F, -0.69F, -0.56F, -1.25F, -1.25F, -1.25F)
          horizontalLineToRelative(-5.5F)
          verticalLineToRelative(6.75F)
          close()
          moveToRelative(-1.5F, -6.75F)
          horizontalLineToRelative(-5.5F)
          curveTo(5.06F, 4.5F, 4.5F, 5.06F, 4.5F, 5.75F)
          verticalLineToRelative(5.5F)
          horizontalLineToRelative(6.75F)
          verticalLineTo(4.5F)
          close()        
      }
    }
    return _borderAll24!!
  }

private var _borderAll24: ImageVector? = null
