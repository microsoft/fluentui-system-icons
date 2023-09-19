package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Payment20: ImageVector
  get() {
    if (_payment20 != null) {
      return _payment20!!
    }
    _payment20 = fluentIcon(name = "Regular.Payment20", 20f) {
      materialPath {
          moveTo(13.5F, 13.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, 0.224F, -0.5F, 0.5F)
          reflectiveCurveToRelative(0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineToRelative(2.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(15.776F, 13.0F, 15.5F, 13.0F)
          horizontalLineToRelative(-2.0F)
          close()
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
          moveTo(4.75F, 5.0F)
          curveTo(3.784F, 5.0F, 3.0F, 5.784F, 3.0F, 6.75F)
          verticalLineTo(8.0F)
          horizontalLineToRelative(14.0F)
          verticalLineTo(6.75F)
          curveTo(17.0F, 5.784F, 16.216F, 5.0F, 15.25F, 5.0F)
          horizontalLineTo(4.75F)
          close()
          moveTo(17.0F, 9.0F)
          horizontalLineTo(3.0F)
          verticalLineToRelative(4.25F)
          curveTo(3.0F, 14.216F, 3.784F, 15.0F, 4.75F, 15.0F)
          horizontalLineToRelative(10.5F)
          curveToRelative(0.966F, 0.0F, 1.75F, -0.784F, 1.75F, -1.75F)
          verticalLineTo(9.0F)
          close()        
      }
    }
    return _payment20!!
  }

private var _payment20: ImageVector? = null
