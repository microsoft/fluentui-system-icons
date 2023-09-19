package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Open20: ImageVector
  get() {
    if (_open20 != null) {
      return _open20!!
    }
    _open20 = fluentIcon(name = "Filled.Open20", 20f) {
      materialPath {
          moveTo(6.25F, 4.5F)
          curveTo(5.284F, 4.5F, 4.5F, 5.284F, 4.5F, 6.25F)
          verticalLineToRelative(7.5F)
          curveToRelative(0.0F, 0.966F, 0.784F, 1.75F, 1.75F, 1.75F)
          horizontalLineToRelative(7.5F)
          curveToRelative(0.966F, 0.0F, 1.75F, -0.784F, 1.75F, -1.75F)
          verticalLineToRelative(-2.0F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          reflectiveCurveTo(17.0F, 11.336F, 17.0F, 11.75F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 1.795F, -1.455F, 3.25F, -3.25F, 3.25F)
          horizontalLineToRelative(-7.5F)
          curveTo(4.455F, 17.0F, 3.0F, 15.545F, 3.0F, 13.75F)
          verticalLineToRelative(-7.5F)
          curveTo(3.0F, 4.455F, 4.455F, 3.0F, 6.25F, 3.0F)
          horizontalLineToRelative(2.0F)
          curveTo(8.664F, 3.0F, 9.0F, 3.336F, 9.0F, 3.75F)
          reflectiveCurveTo(8.664F, 4.5F, 8.25F, 4.5F)
          horizontalLineToRelative(-2.0F)
          close()
          moveToRelative(4.25F, -0.75F)
          curveTo(10.5F, 3.336F, 10.836F, 3.0F, 11.25F, 3.0F)
          horizontalLineToRelative(5.0F)
          curveTo(16.664F, 3.0F, 17.0F, 3.336F, 17.0F, 3.75F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveTo(15.5F, 9.164F, 15.5F, 8.75F)
          verticalLineTo(5.56F)
          lineToRelative(-3.72F, 3.72F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(3.72F, -3.72F)
          horizontalLineToRelative(-3.19F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          close()        
      }
    }
    return _open20!!
  }

private var _open20: ImageVector? = null
