package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.AlignCenterHorizontal16: ImageVector
  get() {
    if (_alignCenterHorizontal16 != null) {
      return _alignCenterHorizontal16!!
    }
    _alignCenterHorizontal16 = fluentIcon(name = "Filled.AlignCenterHorizontal16", 16f) {
      materialPath {
          moveTo(15.0F, 7.5F)
          curveTo(15.0F, 7.776F, 14.776F, 8.0F, 14.5F, 8.0F)
          horizontalLineTo(14.0F)
          verticalLineToRelative(1.25F)
          curveToRelative(0.0F, 0.966F, -0.784F, 1.75F, -1.75F, 1.75F)
          horizontalLineToRelative(-1.5F)
          curveTo(9.784F, 11.0F, 9.0F, 10.216F, 9.0F, 9.25F)
          verticalLineTo(8.0F)
          horizontalLineTo(7.0F)
          verticalLineToRelative(2.25F)
          curveTo(7.0F, 11.216F, 6.216F, 12.0F, 5.25F, 12.0F)
          horizontalLineToRelative(-1.5F)
          curveTo(2.784F, 12.0F, 2.0F, 11.216F, 2.0F, 10.25F)
          verticalLineTo(8.0F)
          horizontalLineTo(1.5F)
          curveTo(1.224F, 8.0F, 1.0F, 7.776F, 1.0F, 7.5F)
          reflectiveCurveTo(1.224F, 7.0F, 1.5F, 7.0F)
          horizontalLineTo(2.0F)
          verticalLineTo(4.75F)
          curveTo(2.0F, 3.784F, 2.784F, 3.0F, 3.75F, 3.0F)
          horizontalLineToRelative(1.5F)
          curveTo(6.216F, 3.0F, 7.0F, 3.784F, 7.0F, 4.75F)
          verticalLineTo(7.0F)
          horizontalLineToRelative(2.0F)
          verticalLineTo(5.75F)
          curveTo(9.0F, 4.784F, 9.784F, 4.0F, 10.75F, 4.0F)
          horizontalLineToRelative(1.5F)
          curveTo(13.216F, 4.0F, 14.0F, 4.784F, 14.0F, 5.75F)
          verticalLineTo(7.0F)
          horizontalLineToRelative(0.5F)
          curveTo(14.776F, 7.0F, 15.0F, 7.224F, 15.0F, 7.5F)
          close()        
      }
    }
    return _alignCenterHorizontal16!!
  }

private var _alignCenterHorizontal16: ImageVector? = null
