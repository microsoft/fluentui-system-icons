package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.AlignBottom16: ImageVector
  get() {
    if (_alignBottom16 != null) {
      return _alignBottom16!!
    }
    _alignBottom16 = fluentIcon(name = "Filled.AlignBottom16", 16f) {
      materialPath {
          moveTo(1.5F, 14.0F)
          curveTo(1.224F, 14.0F, 1.0F, 13.776F, 1.0F, 13.5F)
          reflectiveCurveTo(1.224F, 13.0F, 1.5F, 13.0F)
          horizontalLineToRelative(13.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(14.776F, 14.0F, 14.5F, 14.0F)
          horizontalLineToRelative(-13.0F)
          close()
          moveTo(2.0F, 10.25F)
          curveTo(2.0F, 11.216F, 2.784F, 12.0F, 3.75F, 12.0F)
          horizontalLineToRelative(1.5F)
          curveTo(6.216F, 12.0F, 7.0F, 11.216F, 7.0F, 10.25F)
          verticalLineToRelative(-6.5F)
          curveTo(7.0F, 2.784F, 6.216F, 2.0F, 5.25F, 2.0F)
          horizontalLineToRelative(-1.5F)
          curveTo(2.784F, 2.0F, 2.0F, 2.784F, 2.0F, 3.75F)
          verticalLineToRelative(6.5F)
          close()
          moveToRelative(7.0F, 0.0F)
          curveTo(9.0F, 11.216F, 9.784F, 12.0F, 10.75F, 12.0F)
          horizontalLineToRelative(1.5F)
          curveToRelative(0.966F, 0.0F, 1.75F, -0.784F, 1.75F, -1.75F)
          verticalLineToRelative(-4.5F)
          curveTo(14.0F, 4.784F, 13.216F, 4.0F, 12.25F, 4.0F)
          horizontalLineToRelative(-1.5F)
          curveTo(9.784F, 4.0F, 9.0F, 4.784F, 9.0F, 5.75F)
          verticalLineToRelative(4.5F)
          close()        
      }
    }
    return _alignBottom16!!
  }

private var _alignBottom16: ImageVector? = null
