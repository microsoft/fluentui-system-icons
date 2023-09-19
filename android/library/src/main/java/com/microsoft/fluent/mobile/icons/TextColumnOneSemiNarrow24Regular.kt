package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextColumnOneSemiNarrow24: ImageVector
  get() {
    if (_textColumnOneSemiNarrow24 != null) {
      return _textColumnOneSemiNarrow24!!
    }
    _textColumnOneSemiNarrow24 = fluentIcon(name = "Regular.TextColumnOneSemiNarrow24", 24f) {
      materialPath {
          moveTo(7.75F, 5.0F)
          curveTo(7.336F, 5.0F, 7.0F, 5.336F, 7.0F, 5.75F)
          reflectiveCurveTo(7.336F, 6.5F, 7.75F, 6.5F)
          horizontalLineToRelative(8.5F)
          curveTo(16.664F, 6.5F, 17.0F, 6.164F, 17.0F, 5.75F)
          reflectiveCurveTo(16.664F, 5.0F, 16.25F, 5.0F)
          horizontalLineToRelative(-8.5F)
          close()
          moveToRelative(0.0F, 4.0F)
          curveTo(7.336F, 9.0F, 7.0F, 9.336F, 7.0F, 9.75F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(8.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(16.664F, 9.0F, 16.25F, 9.0F)
          horizontalLineToRelative(-8.5F)
          close()
          moveTo(7.0F, 13.75F)
          curveTo(7.0F, 13.336F, 7.336F, 13.0F, 7.75F, 13.0F)
          horizontalLineToRelative(8.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineToRelative(-8.5F)
          curveTo(7.336F, 14.5F, 7.0F, 14.164F, 7.0F, 13.75F)
          close()
          moveTo(7.75F, 17.0F)
          curveTo(7.336F, 17.0F, 7.0F, 17.336F, 7.0F, 17.75F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(8.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(16.664F, 17.0F, 16.25F, 17.0F)
          horizontalLineToRelative(-8.5F)
          close()        
      }
    }
    return _textColumnOneSemiNarrow24!!
  }

private var _textColumnOneSemiNarrow24: ImageVector? = null
