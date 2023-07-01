package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.AlignBottom48: ImageVector
  get() {
    if (_alignBottom48 != null) {
      return _alignBottom48!!
    }
    _alignBottom48 = fluentIcon(name = "Filled.AlignBottom48", 48f) {
      materialPath {
          moveTo(5.25F, 41.5F)
          curveTo(4.56F, 41.5F, 4.0F, 40.94F, 4.0F, 40.25F)
          reflectiveCurveTo(4.56F, 39.0F, 5.25F, 39.0F)
          horizontalLineToRelative(37.5F)
          curveToRelative(0.69F, 0.0F, 1.25F, 0.56F, 1.25F, 1.25F)
          reflectiveCurveToRelative(-0.56F, 1.25F, -1.25F, 1.25F)
          horizontalLineTo(5.25F)
          close()
          moveTo(26.0F, 32.25F)
          curveToRelative(0.0F, 2.347F, 1.903F, 4.25F, 4.25F, 4.25F)
          horizontalLineToRelative(5.5F)
          curveToRelative(2.347F, 0.0F, 4.25F, -1.903F, 4.25F, -4.25F)
          verticalLineToRelative(-15.0F)
          curveToRelative(0.0F, -2.347F, -1.903F, -4.25F, -4.25F, -4.25F)
          horizontalLineToRelative(-5.5F)
          curveTo(27.903F, 13.0F, 26.0F, 14.903F, 26.0F, 17.25F)
          verticalLineToRelative(15.0F)
          close()
          moveTo(12.25F, 36.5F)
          horizontalLineToRelative(5.5F)
          curveToRelative(2.347F, 0.0F, 4.25F, -1.903F, 4.25F, -4.25F)
          verticalLineTo(10.0F)
          curveToRelative(0.0F, -2.347F, -1.903F, -4.25F, -4.25F, -4.25F)
          horizontalLineToRelative(-5.5F)
          curveTo(9.903F, 5.75F, 8.0F, 7.653F, 8.0F, 10.0F)
          verticalLineToRelative(22.25F)
          curveToRelative(0.0F, 2.347F, 1.903F, 4.25F, 4.25F, 4.25F)
          close()        
      }
    }
    return _alignBottom48!!
  }

private var _alignBottom48: ImageVector? = null
