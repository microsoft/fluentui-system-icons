package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Phone16: ImageVector
  get() {
    if (_phone16 != null) {
      return _phone16!!
    }
    _phone16 = fluentIcon(name = "Regular.Phone16", 16f) {
      materialPath {
          moveTo(7.0F, 12.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, 0.224F, -0.5F, 0.5F)
          reflectiveCurveTo(6.724F, 13.0F, 7.0F, 13.0F)
          horizontalLineToRelative(2.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(9.276F, 12.0F, 9.0F, 12.0F)
          horizontalLineTo(7.0F)
          close()
          moveTo(5.75F, 1.0F)
          curveTo(4.784F, 1.0F, 4.0F, 1.784F, 4.0F, 2.75F)
          verticalLineToRelative(10.5F)
          curveTo(4.0F, 14.216F, 4.784F, 15.0F, 5.75F, 15.0F)
          horizontalLineToRelative(4.5F)
          curveToRelative(0.966F, 0.0F, 1.75F, -0.784F, 1.75F, -1.75F)
          verticalLineTo(2.75F)
          curveTo(12.0F, 1.784F, 11.216F, 1.0F, 10.25F, 1.0F)
          horizontalLineToRelative(-4.5F)
          close()
          moveTo(5.0F, 2.75F)
          curveTo(5.0F, 2.336F, 5.336F, 2.0F, 5.75F, 2.0F)
          horizontalLineToRelative(4.5F)
          curveTo(10.664F, 2.0F, 11.0F, 2.336F, 11.0F, 2.75F)
          verticalLineToRelative(10.5F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineToRelative(-4.5F)
          curveTo(5.336F, 14.0F, 5.0F, 13.664F, 5.0F, 13.25F)
          verticalLineTo(2.75F)
          close()        
      }
    }
    return _phone16!!
  }

private var _phone16: ImageVector? = null
