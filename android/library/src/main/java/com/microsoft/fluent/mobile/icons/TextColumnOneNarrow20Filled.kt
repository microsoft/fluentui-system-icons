package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextColumnOneNarrow20: ImageVector
  get() {
    if (_textColumnOneNarrow20 != null) {
      return _textColumnOneNarrow20!!
    }
    _textColumnOneNarrow20 = fluentIcon(name = "Filled.TextColumnOneNarrow20", 20f) {
      materialPath {
          moveTo(7.75F, 5.0F)
          curveTo(7.336F, 5.0F, 7.0F, 5.336F, 7.0F, 5.75F)
          reflectiveCurveTo(7.336F, 6.5F, 7.75F, 6.5F)
          horizontalLineToRelative(4.5F)
          curveTo(12.664F, 6.5F, 13.0F, 6.164F, 13.0F, 5.75F)
          reflectiveCurveTo(12.664F, 5.0F, 12.25F, 5.0F)
          horizontalLineToRelative(-4.5F)
          close()
          moveToRelative(0.0F, 3.0F)
          curveTo(7.336F, 8.0F, 7.0F, 8.336F, 7.0F, 8.75F)
          reflectiveCurveTo(7.336F, 9.5F, 7.75F, 9.5F)
          horizontalLineToRelative(4.5F)
          curveTo(12.664F, 9.5F, 13.0F, 9.164F, 13.0F, 8.75F)
          reflectiveCurveTo(12.664F, 8.0F, 12.25F, 8.0F)
          horizontalLineToRelative(-4.5F)
          close()
          moveTo(7.0F, 11.75F)
          curveTo(7.0F, 11.336F, 7.336F, 11.0F, 7.75F, 11.0F)
          horizontalLineToRelative(4.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineToRelative(-4.5F)
          curveTo(7.336F, 12.5F, 7.0F, 12.164F, 7.0F, 11.75F)
          close()
          moveTo(7.75F, 14.0F)
          curveTo(7.336F, 14.0F, 7.0F, 14.336F, 7.0F, 14.75F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(4.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(12.664F, 14.0F, 12.25F, 14.0F)
          horizontalLineToRelative(-4.5F)
          close()        
      }
    }
    return _textColumnOneNarrow20!!
  }

private var _textColumnOneNarrow20: ImageVector? = null
