package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.AlignCenterVertical16: ImageVector
  get() {
    if (_alignCenterVertical16 != null) {
      return _alignCenterVertical16!!
    }
    _alignCenterVertical16 = fluentIcon(name = "Filled.AlignCenterVertical16", 16f) {
      materialPath {
          moveTo(8.5F, 15.0F)
          curveTo(8.224F, 15.0F, 8.0F, 14.776F, 8.0F, 14.5F)
          verticalLineTo(14.0F)
          horizontalLineTo(6.75F)
          curveTo(5.784F, 14.0F, 5.0F, 13.216F, 5.0F, 12.25F)
          verticalLineToRelative(-1.5F)
          curveTo(5.0F, 9.784F, 5.784F, 9.0F, 6.75F, 9.0F)
          horizontalLineTo(8.0F)
          verticalLineTo(7.0F)
          horizontalLineTo(5.75F)
          curveTo(4.784F, 7.0F, 4.0F, 6.216F, 4.0F, 5.25F)
          verticalLineToRelative(-1.5F)
          curveTo(4.0F, 2.784F, 4.784F, 2.0F, 5.75F, 2.0F)
          horizontalLineTo(8.0F)
          verticalLineTo(1.5F)
          curveTo(8.0F, 1.224F, 8.224F, 1.0F, 8.5F, 1.0F)
          reflectiveCurveTo(9.0F, 1.224F, 9.0F, 1.5F)
          verticalLineTo(2.0F)
          horizontalLineToRelative(2.25F)
          curveTo(12.216F, 2.0F, 13.0F, 2.784F, 13.0F, 3.75F)
          verticalLineToRelative(1.5F)
          curveTo(13.0F, 6.216F, 12.216F, 7.0F, 11.25F, 7.0F)
          horizontalLineTo(9.0F)
          verticalLineToRelative(2.0F)
          horizontalLineToRelative(1.25F)
          curveTo(11.216F, 9.0F, 12.0F, 9.784F, 12.0F, 10.75F)
          verticalLineToRelative(1.5F)
          curveToRelative(0.0F, 0.966F, -0.784F, 1.75F, -1.75F, 1.75F)
          horizontalLineTo(9.0F)
          verticalLineToRelative(0.5F)
          curveTo(9.0F, 14.776F, 8.776F, 15.0F, 8.5F, 15.0F)
          close()        
      }
    }
    return _alignCenterVertical16!!
  }

private var _alignCenterVertical16: ImageVector? = null
