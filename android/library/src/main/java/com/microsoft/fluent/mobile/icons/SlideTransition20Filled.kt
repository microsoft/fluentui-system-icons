package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SlideTransition20: ImageVector
  get() {
    if (_slideTransition20 != null) {
      return _slideTransition20!!
    }
    _slideTransition20 = fluentIcon(name = "Filled.SlideTransition20", 20f) {
      materialPath {
          moveTo(2.0F, 6.75F)
          curveTo(2.0F, 5.231F, 3.231F, 4.0F, 4.75F, 4.0F)
          horizontalLineToRelative(10.5F)
          curveTo(16.769F, 4.0F, 18.0F, 5.231F, 18.0F, 6.75F)
          verticalLineToRelative(6.5F)
          curveToRelative(0.0F, 1.519F, -1.231F, 2.75F, -2.75F, 2.75F)
          horizontalLineTo(4.75F)
          curveTo(3.231F, 16.0F, 2.0F, 14.769F, 2.0F, 13.25F)
          verticalLineToRelative(-6.5F)
          close()
          moveTo(6.0F, 5.0F)
          horizontalLineTo(5.0F)
          verticalLineToRelative(10.0F)
          horizontalLineToRelative(1.0F)
          verticalLineTo(5.0F)
          close()
          moveToRelative(3.0F, 0.0F)
          horizontalLineTo(8.0F)
          verticalLineToRelative(10.0F)
          horizontalLineToRelative(1.0F)
          verticalLineTo(5.0F)
          close()
          moveToRelative(3.0F, 0.0F)
          verticalLineToRelative(10.0F)
          horizontalLineToRelative(1.0F)
          verticalLineTo(5.0F)
          horizontalLineToRelative(-1.0F)
          close()        
      }
    }
    return _slideTransition20!!
  }

private var _slideTransition20: ImageVector? = null
