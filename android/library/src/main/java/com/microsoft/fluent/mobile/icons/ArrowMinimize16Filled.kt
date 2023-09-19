package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowMinimize16: ImageVector
  get() {
    if (_arrowMinimize16 != null) {
      return _arrowMinimize16!!
    }
    _arrowMinimize16 = fluentIcon(name = "Filled.ArrowMinimize16", 16f) {
      materialPath {
          moveTo(13.78F, 3.28F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineTo(10.5F, 4.44F)
          verticalLineTo(3.25F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          reflectiveCurveTo(9.0F, 2.836F, 9.0F, 3.25F)
          verticalLineToRelative(2.9F)
          curveToRelative(0.0F, 0.017F, 0.0F, 0.035F, 0.002F, 0.052F)
          curveTo(8.988F, 6.409F, 9.06F, 6.622F, 9.22F, 6.78F)
          curveToRelative(0.158F, 0.16F, 0.37F, 0.232F, 0.578F, 0.218F)
          curveTo(9.815F, 7.0F, 9.833F, 7.0F, 9.85F, 7.0F)
          horizontalLineToRelative(2.9F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(13.164F, 5.5F, 12.75F, 5.5F)
          horizontalLineToRelative(-1.19F)
          lineToRelative(2.22F, -2.22F)
          close()
          moveTo(6.25F, 13.5F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          verticalLineToRelative(-1.19F)
          lineToRelative(-2.22F, 2.22F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(2.22F, -2.22F)
          horizontalLineTo(3.25F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          reflectiveCurveTo(2.836F, 9.0F, 3.25F, 9.0F)
          horizontalLineToRelative(2.9F)
          curveToRelative(0.017F, 0.0F, 0.035F, 0.0F, 0.052F, 0.002F)
          curveTo(6.409F, 8.988F, 6.622F, 9.06F, 6.78F, 9.22F)
          curveToRelative(0.16F, 0.158F, 0.232F, 0.37F, 0.218F, 0.578F)
          curveTo(7.0F, 9.815F, 7.0F, 9.833F, 7.0F, 9.85F)
          verticalLineToRelative(2.9F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          close()        
      }
    }
    return _arrowMinimize16!!
  }

private var _arrowMinimize16: ImageVector? = null
