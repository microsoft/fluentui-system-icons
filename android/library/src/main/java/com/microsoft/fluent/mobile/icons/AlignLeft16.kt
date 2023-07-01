package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.AlignLeft16: ImageVector
  get() {
    if (_alignLeft16 != null) {
      return _alignLeft16!!
    }
    _alignLeft16 = fluentIcon(name = "Filled.AlignLeft16", 16f) {
      materialPath {
          moveTo(2.0F, 1.5F)
          curveTo(2.0F, 1.224F, 2.224F, 1.0F, 2.5F, 1.0F)
          reflectiveCurveTo(3.0F, 1.224F, 3.0F, 1.5F)
          verticalLineToRelative(13.0F)
          curveTo(3.0F, 14.776F, 2.776F, 15.0F, 2.5F, 15.0F)
          reflectiveCurveTo(2.0F, 14.776F, 2.0F, 14.5F)
          verticalLineToRelative(-13.0F)
          close()
          moveTo(5.75F, 2.0F)
          curveTo(4.784F, 2.0F, 4.0F, 2.784F, 4.0F, 3.75F)
          verticalLineToRelative(1.5F)
          curveTo(4.0F, 6.216F, 4.784F, 7.0F, 5.75F, 7.0F)
          horizontalLineToRelative(6.5F)
          curveTo(13.216F, 7.0F, 14.0F, 6.216F, 14.0F, 5.25F)
          verticalLineToRelative(-1.5F)
          curveTo(14.0F, 2.784F, 13.216F, 2.0F, 12.25F, 2.0F)
          horizontalLineToRelative(-6.5F)
          close()
          moveToRelative(0.0F, 7.0F)
          curveTo(4.784F, 9.0F, 4.0F, 9.784F, 4.0F, 10.75F)
          verticalLineToRelative(1.5F)
          curveTo(4.0F, 13.216F, 4.784F, 14.0F, 5.75F, 14.0F)
          horizontalLineToRelative(4.5F)
          curveToRelative(0.966F, 0.0F, 1.75F, -0.784F, 1.75F, -1.75F)
          verticalLineToRelative(-1.5F)
          curveTo(12.0F, 9.784F, 11.216F, 9.0F, 10.25F, 9.0F)
          horizontalLineToRelative(-4.5F)
          close()        
      }
    }
    return _alignLeft16!!
  }

private var _alignLeft16: ImageVector? = null
