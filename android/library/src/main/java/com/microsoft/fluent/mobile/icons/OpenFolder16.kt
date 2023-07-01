package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.OpenFolder16: ImageVector
  get() {
    if (_openFolder16 != null) {
      return _openFolder16!!
    }
    _openFolder16 = fluentIcon(name = "Filled.OpenFolder16", 16f) {
      materialPath {
          moveTo(2.0F, 5.25F)
          curveTo(2.0F, 3.455F, 3.455F, 2.0F, 5.25F, 2.0F)
          horizontalLineToRelative(5.5F)
          curveTo(12.545F, 2.0F, 14.0F, 3.455F, 14.0F, 5.25F)
          verticalLineToRelative(2.0F)
          curveTo(14.0F, 7.664F, 13.664F, 8.0F, 13.25F, 8.0F)
          reflectiveCurveTo(12.5F, 7.664F, 12.5F, 7.25F)
          verticalLineToRelative(-2.0F)
          curveToRelative(0.0F, -0.966F, -0.784F, -1.75F, -1.75F, -1.75F)
          horizontalLineToRelative(-5.5F)
          curveTo(4.284F, 3.5F, 3.5F, 4.284F, 3.5F, 5.25F)
          verticalLineToRelative(5.5F)
          curveToRelative(0.0F, 0.966F, 0.784F, 1.75F, 1.75F, 1.75F)
          horizontalLineToRelative(3.0F)
          curveTo(8.664F, 12.5F, 9.0F, 12.836F, 9.0F, 13.25F)
          reflectiveCurveTo(8.664F, 14.0F, 8.25F, 14.0F)
          horizontalLineToRelative(-3.0F)
          curveTo(3.455F, 14.0F, 2.0F, 12.545F, 2.0F, 10.75F)
          verticalLineToRelative(-5.5F)
          close()
          moveToRelative(4.0F, 1.5F)
          curveTo(6.0F, 6.336F, 6.336F, 6.0F, 6.75F, 6.0F)
          horizontalLineToRelative(3.5F)
          curveTo(10.664F, 6.0F, 11.0F, 6.336F, 11.0F, 6.75F)
          reflectiveCurveTo(10.664F, 7.5F, 10.25F, 7.5F)
          horizontalLineTo(8.56F)
          lineToRelative(4.22F, 4.22F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          lineTo(7.5F, 8.56F)
          verticalLineToRelative(1.69F)
          curveTo(7.5F, 10.664F, 7.164F, 11.0F, 6.75F, 11.0F)
          reflectiveCurveTo(6.0F, 10.664F, 6.0F, 10.25F)
          verticalLineToRelative(-3.5F)
          close()        
      }
    }
    return _openFolder16!!
  }

private var _openFolder16: ImageVector? = null
