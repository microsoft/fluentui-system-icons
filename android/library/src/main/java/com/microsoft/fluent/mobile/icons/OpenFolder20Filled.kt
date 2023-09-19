package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.OpenFolder20: ImageVector
  get() {
    if (_openFolder20 != null) {
      return _openFolder20!!
    }
    _openFolder20 = fluentIcon(name = "Filled.OpenFolder20", 20f) {
      materialPath {
          moveTo(3.0F, 6.25F)
          curveTo(3.0F, 4.455F, 4.455F, 3.0F, 6.25F, 3.0F)
          horizontalLineTo(14.0F)
          curveToRelative(1.795F, 0.0F, 3.25F, 1.455F, 3.25F, 3.25F)
          verticalLineToRelative(2.0F)
          curveTo(17.25F, 8.664F, 16.914F, 9.0F, 16.5F, 9.0F)
          reflectiveCurveToRelative(-0.75F, -0.336F, -0.75F, -0.75F)
          verticalLineToRelative(-2.0F)
          curveToRelative(0.0F, -0.966F, -0.784F, -1.75F, -1.75F, -1.75F)
          horizontalLineTo(6.25F)
          curveTo(5.284F, 4.5F, 4.5F, 5.284F, 4.5F, 6.25F)
          verticalLineToRelative(7.5F)
          curveToRelative(0.0F, 0.966F, 0.784F, 1.75F, 1.75F, 1.75F)
          horizontalLineToRelative(4.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(10.664F, 17.0F, 10.25F, 17.0F)
          horizontalLineToRelative(-4.0F)
          curveTo(4.455F, 17.0F, 3.0F, 15.545F, 3.0F, 13.75F)
          verticalLineToRelative(-7.5F)
          close()
          moveToRelative(5.0F, 2.5F)
          curveTo(8.0F, 8.336F, 8.336F, 8.0F, 8.75F, 8.0F)
          horizontalLineToRelative(4.5F)
          curveTo(13.664F, 8.0F, 14.0F, 8.336F, 14.0F, 8.75F)
          reflectiveCurveTo(13.664F, 9.5F, 13.25F, 9.5F)
          horizontalLineToRelative(-2.69F)
          lineToRelative(5.22F, 5.22F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          lineTo(9.5F, 10.56F)
          verticalLineToRelative(2.69F)
          curveTo(9.5F, 13.664F, 9.164F, 14.0F, 8.75F, 14.0F)
          reflectiveCurveTo(8.0F, 13.664F, 8.0F, 13.25F)
          verticalLineToRelative(-4.5F)
          close()        
      }
    }
    return _openFolder20!!
  }

private var _openFolder20: ImageVector? = null
