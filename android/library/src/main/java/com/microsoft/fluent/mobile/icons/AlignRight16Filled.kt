package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.AlignRight16: ImageVector
  get() {
    if (_alignRight16 != null) {
      return _alignRight16!!
    }
    _alignRight16 = fluentIcon(name = "Filled.AlignRight16", 16f) {
      materialPath {
          moveTo(14.0F, 1.5F)
          curveTo(14.0F, 1.224F, 13.776F, 1.0F, 13.5F, 1.0F)
          reflectiveCurveTo(13.0F, 1.224F, 13.0F, 1.5F)
          verticalLineToRelative(13.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-13.0F)
          close()
          moveTo(10.25F, 2.0F)
          curveTo(11.216F, 2.0F, 12.0F, 2.784F, 12.0F, 3.75F)
          verticalLineToRelative(1.5F)
          curveTo(12.0F, 6.216F, 11.216F, 7.0F, 10.25F, 7.0F)
          horizontalLineToRelative(-6.5F)
          curveTo(2.784F, 7.0F, 2.0F, 6.216F, 2.0F, 5.25F)
          verticalLineToRelative(-1.5F)
          curveTo(2.0F, 2.784F, 2.784F, 2.0F, 3.75F, 2.0F)
          horizontalLineToRelative(6.5F)
          close()
          moveToRelative(0.0F, 7.0F)
          curveTo(11.216F, 9.0F, 12.0F, 9.784F, 12.0F, 10.75F)
          verticalLineToRelative(1.5F)
          curveToRelative(0.0F, 0.966F, -0.784F, 1.75F, -1.75F, 1.75F)
          horizontalLineToRelative(-4.5F)
          curveTo(4.784F, 14.0F, 4.0F, 13.216F, 4.0F, 12.25F)
          verticalLineToRelative(-1.5F)
          curveTo(4.0F, 9.784F, 4.784F, 9.0F, 5.75F, 9.0F)
          horizontalLineToRelative(4.5F)
          close()        
      }
    }
    return _alignRight16!!
  }

private var _alignRight16: ImageVector? = null
