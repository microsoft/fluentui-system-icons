package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.SlideTransition20: ImageVector
  get() {
    if (_slideTransition20 != null) {
      return _slideTransition20!!
    }
    _slideTransition20 = fluentIcon(name = "Regular.SlideTransition20", 20f) {
      materialPath {
          moveTo(4.75F, 4.0F)
          curveTo(3.231F, 4.0F, 2.0F, 5.231F, 2.0F, 6.75F)
          verticalLineToRelative(6.5F)
          curveTo(2.0F, 14.769F, 3.231F, 16.0F, 4.75F, 16.0F)
          horizontalLineToRelative(10.5F)
          curveToRelative(1.519F, 0.0F, 2.75F, -1.231F, 2.75F, -2.75F)
          verticalLineToRelative(-6.5F)
          curveTo(18.0F, 5.231F, 16.769F, 4.0F, 15.25F, 4.0F)
          horizontalLineTo(4.75F)
          close()
          moveTo(12.0F, 5.0F)
          verticalLineToRelative(10.0F)
          horizontalLineTo(9.0F)
          verticalLineTo(5.0F)
          horizontalLineToRelative(3.0F)
          close()
          moveToRelative(1.0F, 10.0F)
          verticalLineTo(5.0F)
          horizontalLineToRelative(2.25F)
          curveTo(16.216F, 5.0F, 17.0F, 5.784F, 17.0F, 6.75F)
          verticalLineToRelative(6.5F)
          curveToRelative(0.0F, 0.966F, -0.784F, 1.75F, -1.75F, 1.75F)
          horizontalLineTo(13.0F)
          close()
          moveToRelative(-5.0F, 0.0F)
          horizontalLineTo(6.0F)
          verticalLineTo(5.0F)
          horizontalLineToRelative(2.0F)
          verticalLineToRelative(10.0F)
          close()
          moveTo(5.0F, 5.0F)
          verticalLineToRelative(10.0F)
          horizontalLineTo(4.75F)
          curveTo(3.784F, 15.0F, 3.0F, 14.216F, 3.0F, 13.25F)
          verticalLineToRelative(-6.5F)
          curveTo(3.0F, 5.784F, 3.784F, 5.0F, 4.75F, 5.0F)
          horizontalLineTo(5.0F)
          close()        
      }
    }
    return _slideTransition20!!
  }

private var _slideTransition20: ImageVector? = null
