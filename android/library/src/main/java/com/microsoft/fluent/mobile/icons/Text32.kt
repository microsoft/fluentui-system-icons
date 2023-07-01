package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Text32: ImageVector
  get() {
    if (_text32 != null) {
      return _text32!!
    }
    _text32 = fluentIcon(name = "Filled.Text32", 32f) {
      materialPath {
          moveTo(6.0F, 5.25F)
          curveTo(6.0F, 4.56F, 6.56F, 4.0F, 7.25F, 4.0F)
          horizontalLineToRelative(17.5F)
          curveTo(25.44F, 4.0F, 26.0F, 4.56F, 26.0F, 5.25F)
          verticalLineToRelative(3.5F)
          curveTo(26.0F, 9.44F, 25.44F, 10.0F, 24.75F, 10.0F)
          reflectiveCurveTo(23.5F, 9.44F, 23.5F, 8.75F)
          verticalLineTo(6.5F)
          horizontalLineToRelative(-6.25F)
          verticalLineToRelative(19.0F)
          horizontalLineToRelative(1.5F)
          curveToRelative(0.69F, 0.0F, 1.25F, 0.56F, 1.25F, 1.25F)
          reflectiveCurveTo(19.44F, 28.0F, 18.75F, 28.0F)
          horizontalLineToRelative(-5.5F)
          curveTo(12.56F, 28.0F, 12.0F, 27.44F, 12.0F, 26.75F)
          reflectiveCurveToRelative(0.56F, -1.25F, 1.25F, -1.25F)
          horizontalLineToRelative(1.5F)
          verticalLineToRelative(-19.0F)
          horizontalLineTo(8.5F)
          verticalLineToRelative(2.25F)
          curveTo(8.5F, 9.44F, 7.94F, 10.0F, 7.25F, 10.0F)
          reflectiveCurveTo(6.0F, 9.44F, 6.0F, 8.75F)
          verticalLineToRelative(-3.5F)
          close()        
      }
    }
    return _text32!!
  }

private var _text32: ImageVector? = null
