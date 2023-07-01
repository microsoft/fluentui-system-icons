package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.GlanceHorizontal16: ImageVector
  get() {
    if (_glanceHorizontal16 != null) {
      return _glanceHorizontal16!!
    }
    _glanceHorizontal16 = fluentIcon(name = "Filled.GlanceHorizontal16", 16f) {
      materialPath {
          moveTo(3.75F, 2.0F)
          curveTo(2.784F, 2.0F, 2.0F, 2.784F, 2.0F, 3.75F)
          verticalLineToRelative(2.5F)
          curveTo(2.0F, 7.216F, 2.784F, 8.0F, 3.75F, 8.0F)
          horizontalLineToRelative(3.5F)
          curveTo(8.216F, 8.0F, 9.0F, 7.216F, 9.0F, 6.25F)
          verticalLineToRelative(-2.5F)
          curveTo(9.0F, 2.784F, 8.216F, 2.0F, 7.25F, 2.0F)
          horizontalLineToRelative(-3.5F)
          close()
          moveToRelative(5.0F, 7.0F)
          curveTo(7.784F, 9.0F, 7.0F, 9.784F, 7.0F, 10.75F)
          verticalLineToRelative(1.5F)
          curveTo(7.0F, 13.216F, 7.784F, 14.0F, 8.75F, 14.0F)
          horizontalLineToRelative(3.5F)
          curveToRelative(0.966F, 0.0F, 1.75F, -0.784F, 1.75F, -1.75F)
          verticalLineToRelative(-1.5F)
          curveTo(14.0F, 9.784F, 13.216F, 9.0F, 12.25F, 9.0F)
          horizontalLineToRelative(-3.5F)
          close()
          moveToRelative(-5.0F, 0.0F)
          curveTo(2.784F, 9.0F, 2.0F, 9.784F, 2.0F, 10.75F)
          verticalLineToRelative(1.5F)
          curveTo(2.0F, 13.216F, 2.784F, 14.0F, 3.75F, 14.0F)
          horizontalLineToRelative(0.5F)
          curveTo(5.216F, 14.0F, 6.0F, 13.216F, 6.0F, 12.25F)
          verticalLineToRelative(-1.5F)
          curveTo(6.0F, 9.784F, 5.216F, 9.0F, 4.25F, 9.0F)
          horizontalLineToRelative(-0.5F)
          close()
          moveToRelative(8.0F, -7.0F)
          curveTo(10.784F, 2.0F, 10.0F, 2.784F, 10.0F, 3.75F)
          verticalLineToRelative(2.5F)
          curveTo(10.0F, 7.216F, 10.784F, 8.0F, 11.75F, 8.0F)
          horizontalLineToRelative(0.5F)
          curveTo(13.216F, 8.0F, 14.0F, 7.216F, 14.0F, 6.25F)
          verticalLineToRelative(-2.5F)
          curveTo(14.0F, 2.784F, 13.216F, 2.0F, 12.25F, 2.0F)
          horizontalLineToRelative(-0.5F)
          close()        
      }
    }
    return _glanceHorizontal16!!
  }

private var _glanceHorizontal16: ImageVector? = null
