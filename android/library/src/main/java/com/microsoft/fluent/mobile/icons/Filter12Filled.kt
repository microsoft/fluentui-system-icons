package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Filter12: ImageVector
  get() {
    if (_filter12 != null) {
      return _filter12!!
    }
    _filter12 = fluentIcon(name = "Filled.Filter12", 12f) {
      materialPath {
          moveTo(1.0F, 2.75F)
          curveTo(1.0F, 2.336F, 1.336F, 2.0F, 1.75F, 2.0F)
          horizontalLineToRelative(8.5F)
          curveTo(10.664F, 2.0F, 11.0F, 2.336F, 11.0F, 2.75F)
          reflectiveCurveTo(10.664F, 3.5F, 10.25F, 3.5F)
          horizontalLineToRelative(-8.5F)
          curveTo(1.336F, 3.5F, 1.0F, 3.164F, 1.0F, 2.75F)
          close()
          moveToRelative(2.0F, 3.0F)
          curveTo(3.0F, 5.336F, 3.336F, 5.0F, 3.75F, 5.0F)
          horizontalLineToRelative(4.5F)
          curveTo(8.664F, 5.0F, 9.0F, 5.336F, 9.0F, 5.75F)
          reflectiveCurveTo(8.664F, 6.5F, 8.25F, 6.5F)
          horizontalLineToRelative(-4.5F)
          curveTo(3.336F, 6.5F, 3.0F, 6.164F, 3.0F, 5.75F)
          close()
          moveTo(5.25F, 8.0F)
          curveTo(4.836F, 8.0F, 4.5F, 8.336F, 4.5F, 8.75F)
          reflectiveCurveTo(4.836F, 9.5F, 5.25F, 9.5F)
          horizontalLineToRelative(1.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(7.164F, 8.0F, 6.75F, 8.0F)
          horizontalLineToRelative(-1.5F)
          close()        
      }
    }
    return _filter12!!
  }

private var _filter12: ImageVector? = null
