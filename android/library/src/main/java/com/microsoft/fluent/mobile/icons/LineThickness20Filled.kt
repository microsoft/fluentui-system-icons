package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.LineThickness20: ImageVector
  get() {
    if (_lineThickness20 != null) {
      return _lineThickness20!!
    }
    _lineThickness20 = fluentIcon(name = "Filled.LineThickness20", 20f) {
      materialPath {
          moveTo(2.75F, 4.0F)
          curveTo(2.336F, 4.0F, 2.0F, 4.336F, 2.0F, 4.75F)
          reflectiveCurveTo(2.336F, 5.5F, 2.75F, 5.5F)
          horizontalLineToRelative(14.5F)
          curveTo(17.664F, 5.5F, 18.0F, 5.164F, 18.0F, 4.75F)
          reflectiveCurveTo(17.664F, 4.0F, 17.25F, 4.0F)
          horizontalLineTo(2.75F)
          close()
          moveTo(2.0F, 9.25F)
          curveTo(2.0F, 8.56F, 2.56F, 8.0F, 3.25F, 8.0F)
          horizontalLineToRelative(13.5F)
          curveTo(17.44F, 8.0F, 18.0F, 8.56F, 18.0F, 9.25F)
          reflectiveCurveToRelative(-0.56F, 1.25F, -1.25F, 1.25F)
          horizontalLineTo(3.25F)
          curveTo(2.56F, 10.5F, 2.0F, 9.94F, 2.0F, 9.25F)
          close()
          moveToRelative(0.0F, 5.5F)
          curveTo(2.0F, 13.784F, 2.784F, 13.0F, 3.75F, 13.0F)
          horizontalLineToRelative(12.5F)
          curveToRelative(0.966F, 0.0F, 1.75F, 0.784F, 1.75F, 1.75F)
          reflectiveCurveToRelative(-0.784F, 1.75F, -1.75F, 1.75F)
          horizontalLineTo(3.75F)
          curveTo(2.784F, 16.5F, 2.0F, 15.716F, 2.0F, 14.75F)
          close()        
      }
    }
    return _lineThickness20!!
  }

private var _lineThickness20: ImageVector? = null
