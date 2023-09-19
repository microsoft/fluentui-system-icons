package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.LineThickness24: ImageVector
  get() {
    if (_lineThickness24 != null) {
      return _lineThickness24!!
    }
    _lineThickness24 = fluentIcon(name = "Regular.LineThickness24", 24f) {
      materialPath {
          moveTo(2.75F, 3.5F)
          curveTo(2.336F, 3.5F, 2.0F, 3.836F, 2.0F, 4.25F)
          reflectiveCurveTo(2.336F, 5.0F, 2.75F, 5.0F)
          horizontalLineToRelative(18.5F)
          curveTo(21.664F, 5.0F, 22.0F, 4.664F, 22.0F, 4.25F)
          reflectiveCurveTo(21.664F, 3.5F, 21.25F, 3.5F)
          horizontalLineTo(2.75F)
          close()
          moveTo(2.0F, 10.75F)
          curveTo(2.0F, 10.06F, 2.56F, 9.5F, 3.25F, 9.5F)
          horizontalLineToRelative(17.5F)
          curveToRelative(0.69F, 0.0F, 1.25F, 0.56F, 1.25F, 1.25F)
          reflectiveCurveTo(21.44F, 12.0F, 20.75F, 12.0F)
          horizontalLineTo(3.25F)
          curveTo(2.56F, 12.0F, 2.0F, 11.44F, 2.0F, 10.75F)
          close()
          moveToRelative(0.0F, 7.5F)
          curveToRelative(0.0F, -0.966F, 0.784F, -1.75F, 1.75F, -1.75F)
          horizontalLineToRelative(16.5F)
          curveToRelative(0.966F, 0.0F, 1.75F, 0.784F, 1.75F, 1.75F)
          reflectiveCurveTo(21.216F, 20.0F, 20.25F, 20.0F)
          horizontalLineTo(3.75F)
          curveTo(2.784F, 20.0F, 2.0F, 19.216F, 2.0F, 18.25F)
          close()        
      }
    }
    return _lineThickness24!!
  }

private var _lineThickness24: ImageVector? = null
