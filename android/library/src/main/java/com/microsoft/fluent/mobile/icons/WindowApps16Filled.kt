package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.WindowApps16: ImageVector
  get() {
    if (_windowApps16 != null) {
      return _windowApps16!!
    }
    _windowApps16 = fluentIcon(name = "Filled.WindowApps16", 16f) {
      materialPath {
          moveTo(2.0F, 4.5F)
          curveTo(2.0F, 3.12F, 3.12F, 2.0F, 4.5F, 2.0F)
          horizontalLineToRelative(7.0F)
          curveTo(12.88F, 2.0F, 14.0F, 3.12F, 14.0F, 4.5F)
          verticalLineTo(6.0F)
          horizontalLineTo(3.0F)
          verticalLineToRelative(5.5F)
          curveTo(3.0F, 12.328F, 3.672F, 13.0F, 4.5F, 13.0F)
          horizontalLineTo(6.0F)
          verticalLineToRelative(1.0F)
          horizontalLineTo(4.5F)
          curveTo(3.12F, 14.0F, 2.0F, 12.88F, 2.0F, 11.5F)
          verticalLineToRelative(-7.0F)
          close()
          moveTo(12.75F, 7.0F)
          curveTo(11.784F, 7.0F, 11.0F, 7.784F, 11.0F, 8.75F)
          verticalLineTo(11.0F)
          horizontalLineTo(8.75F)
          curveTo(7.784F, 11.0F, 7.0F, 11.784F, 7.0F, 12.75F)
          verticalLineToRelative(1.5F)
          curveTo(7.0F, 15.216F, 7.784F, 16.0F, 8.75F, 16.0F)
          horizontalLineTo(14.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(8.75F)
          curveTo(16.0F, 7.784F, 15.216F, 7.0F, 14.25F, 7.0F)
          horizontalLineToRelative(-1.5F)
          close()
          moveTo(11.0F, 12.0F)
          verticalLineToRelative(3.0F)
          horizontalLineTo(8.75F)
          curveTo(8.336F, 15.0F, 8.0F, 14.664F, 8.0F, 14.25F)
          verticalLineToRelative(-1.5F)
          curveTo(8.0F, 12.336F, 8.336F, 12.0F, 8.75F, 12.0F)
          horizontalLineTo(11.0F)
          close()
          moveToRelative(1.0F, 3.0F)
          verticalLineToRelative(-3.0F)
          horizontalLineToRelative(3.0F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineToRelative(-2.0F)
          close()
          moveToRelative(0.0F, -4.0F)
          verticalLineTo(8.75F)
          curveTo(12.0F, 8.336F, 12.336F, 8.0F, 12.75F, 8.0F)
          horizontalLineToRelative(1.5F)
          curveTo(14.664F, 8.0F, 15.0F, 8.336F, 15.0F, 8.75F)
          verticalLineTo(11.0F)
          horizontalLineToRelative(-3.0F)
          close()        
      }
    }
    return _windowApps16!!
  }

private var _windowApps16: ImageVector? = null
