package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextColumnOneNarrow24: ImageVector
  get() {
    if (_textColumnOneNarrow24 != null) {
      return _textColumnOneNarrow24!!
    }
    _textColumnOneNarrow24 = fluentIcon(name = "Regular.TextColumnOneNarrow24", 24f) {
      materialPath {
          moveTo(8.75F, 5.0F)
          curveTo(8.336F, 5.0F, 8.0F, 5.336F, 8.0F, 5.75F)
          reflectiveCurveTo(8.336F, 6.5F, 8.75F, 6.5F)
          horizontalLineToRelative(6.5F)
          curveTo(15.664F, 6.5F, 16.0F, 6.164F, 16.0F, 5.75F)
          reflectiveCurveTo(15.664F, 5.0F, 15.25F, 5.0F)
          horizontalLineToRelative(-6.5F)
          close()
          moveToRelative(0.0F, 4.0F)
          curveTo(8.336F, 9.0F, 8.0F, 9.336F, 8.0F, 9.75F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(6.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(15.664F, 9.0F, 15.25F, 9.0F)
          horizontalLineToRelative(-6.5F)
          close()
          moveTo(8.0F, 13.75F)
          curveTo(8.0F, 13.336F, 8.336F, 13.0F, 8.75F, 13.0F)
          horizontalLineToRelative(6.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineToRelative(-6.5F)
          curveTo(8.336F, 14.5F, 8.0F, 14.164F, 8.0F, 13.75F)
          close()
          moveTo(8.75F, 17.0F)
          curveTo(8.336F, 17.0F, 8.0F, 17.336F, 8.0F, 17.75F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(6.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(15.664F, 17.0F, 15.25F, 17.0F)
          horizontalLineToRelative(-6.5F)
          close()        
      }
    }
    return _textColumnOneNarrow24!!
  }

private var _textColumnOneNarrow24: ImageVector? = null
