package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.AlignRight48: ImageVector
  get() {
    if (_alignRight48 != null) {
      return _alignRight48!!
    }
    _alignRight48 = fluentIcon(name = "Filled.AlignRight48", 48f) {
      materialPath {
          moveTo(41.5F, 5.25F)
          curveTo(41.5F, 4.56F, 40.94F, 4.0F, 40.25F, 4.0F)
          reflectiveCurveTo(39.0F, 4.56F, 39.0F, 5.25F)
          verticalLineToRelative(37.5F)
          curveToRelative(0.0F, 0.69F, 0.56F, 1.25F, 1.25F, 1.25F)
          reflectiveCurveToRelative(1.25F, -0.56F, 1.25F, -1.25F)
          verticalLineTo(5.25F)
          close()
          moveTo(32.25F, 26.0F)
          curveToRelative(2.347F, 0.0F, 4.25F, 1.903F, 4.25F, 4.25F)
          verticalLineToRelative(5.5F)
          curveToRelative(0.0F, 2.347F, -1.903F, 4.25F, -4.25F, 4.25F)
          horizontalLineToRelative(-15.0F)
          curveTo(14.903F, 40.0F, 13.0F, 38.097F, 13.0F, 35.75F)
          verticalLineToRelative(-5.5F)
          curveToRelative(0.0F, -2.347F, 1.903F, -4.25F, 4.25F, -4.25F)
          horizontalLineToRelative(15.0F)
          close()
          moveToRelative(4.25F, -13.75F)
          verticalLineToRelative(5.5F)
          curveToRelative(0.0F, 2.347F, -1.903F, 4.25F, -4.25F, 4.25F)
          horizontalLineTo(10.0F)
          curveToRelative(-2.347F, 0.0F, -4.25F, -1.903F, -4.25F, -4.25F)
          verticalLineToRelative(-5.5F)
          curveTo(5.75F, 9.903F, 7.653F, 8.0F, 10.0F, 8.0F)
          horizontalLineToRelative(22.25F)
          curveToRelative(2.347F, 0.0F, 4.25F, 1.903F, 4.25F, 4.25F)
          close()        
      }
    }
    return _alignRight48!!
  }

private var _alignRight48: ImageVector? = null
