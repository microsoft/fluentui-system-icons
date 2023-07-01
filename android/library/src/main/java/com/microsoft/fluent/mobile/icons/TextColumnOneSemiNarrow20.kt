package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextColumnOneSemiNarrow20: ImageVector
  get() {
    if (_textColumnOneSemiNarrow20 != null) {
      return _textColumnOneSemiNarrow20!!
    }
    _textColumnOneSemiNarrow20 = fluentIcon(name = "Filled.TextColumnOneSemiNarrow20", 20f) {
      materialPath {
          moveTo(6.75F, 5.0F)
          curveTo(6.336F, 5.0F, 6.0F, 5.336F, 6.0F, 5.75F)
          reflectiveCurveTo(6.336F, 6.5F, 6.75F, 6.5F)
          horizontalLineToRelative(6.5F)
          curveTo(13.664F, 6.5F, 14.0F, 6.164F, 14.0F, 5.75F)
          reflectiveCurveTo(13.664F, 5.0F, 13.25F, 5.0F)
          horizontalLineToRelative(-6.5F)
          close()
          moveToRelative(0.0F, 3.0F)
          curveTo(6.336F, 8.0F, 6.0F, 8.336F, 6.0F, 8.75F)
          reflectiveCurveTo(6.336F, 9.5F, 6.75F, 9.5F)
          horizontalLineToRelative(6.5F)
          curveTo(13.664F, 9.5F, 14.0F, 9.164F, 14.0F, 8.75F)
          reflectiveCurveTo(13.664F, 8.0F, 13.25F, 8.0F)
          horizontalLineToRelative(-6.5F)
          close()
          moveTo(6.0F, 11.75F)
          curveTo(6.0F, 11.336F, 6.336F, 11.0F, 6.75F, 11.0F)
          horizontalLineToRelative(6.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineToRelative(-6.5F)
          curveTo(6.336F, 12.5F, 6.0F, 12.164F, 6.0F, 11.75F)
          close()
          moveTo(6.75F, 14.0F)
          curveTo(6.336F, 14.0F, 6.0F, 14.336F, 6.0F, 14.75F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(6.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(13.664F, 14.0F, 13.25F, 14.0F)
          horizontalLineToRelative(-6.5F)
          close()        
      }
    }
    return _textColumnOneSemiNarrow20!!
  }

private var _textColumnOneSemiNarrow20: ImageVector? = null
