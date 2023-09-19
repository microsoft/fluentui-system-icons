package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextPositionFront24: ImageVector
  get() {
    if (_textPositionFront24 != null) {
      return _textPositionFront24!!
    }
    _textPositionFront24 = fluentIcon(name = "Regular.TextPositionFront24", 24f) {
      materialPath {
          moveTo(3.75F, 4.0F)
          curveTo(3.336F, 4.0F, 3.0F, 4.336F, 3.0F, 4.75F)
          reflectiveCurveTo(3.336F, 5.5F, 3.75F, 5.5F)
          horizontalLineToRelative(16.5F)
          curveTo(20.664F, 5.5F, 21.0F, 5.164F, 21.0F, 4.75F)
          reflectiveCurveTo(20.664F, 4.0F, 20.25F, 4.0F)
          horizontalLineTo(3.75F)
          close()
          moveTo(12.0F, 8.5F)
          curveToRelative(-1.025F, 0.0F, -1.906F, 0.617F, -2.292F, 1.5F)
          horizontalLineTo(8.126F)
          curveTo(8.57F, 8.275F, 10.136F, 7.0F, 12.0F, 7.0F)
          curveToRelative(1.864F, 0.0F, 3.43F, 1.275F, 3.874F, 3.0F)
          horizontalLineToRelative(-1.582F)
          curveTo(13.906F, 9.117F, 13.025F, 8.5F, 12.0F, 8.5F)
          close()
          moveToRelative(-4.0F, 5.0F)
          horizontalLineToRelative(1.5F)
          verticalLineToRelative(2.25F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveTo(8.0F, 16.164F, 8.0F, 15.75F)
          verticalLineTo(13.5F)
          close()
          moveToRelative(8.0F, 0.0F)
          horizontalLineToRelative(-1.5F)
          verticalLineToRelative(2.25F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveTo(16.0F, 16.164F, 16.0F, 15.75F)
          verticalLineTo(13.5F)
          close()
          moveToRelative(4.25F, -2.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineTo(3.75F)
          curveTo(3.336F, 12.5F, 3.0F, 12.164F, 3.0F, 11.75F)
          reflectiveCurveTo(3.336F, 11.0F, 3.75F, 11.0F)
          horizontalLineToRelative(16.5F)
          close()
          moveTo(3.0F, 18.75F)
          curveTo(3.0F, 18.336F, 3.336F, 18.0F, 3.75F, 18.0F)
          horizontalLineToRelative(16.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineTo(3.75F)
          curveTo(3.336F, 19.5F, 3.0F, 19.164F, 3.0F, 18.75F)
          close()        
      }
    }
    return _textPositionFront24!!
  }

private var _textPositionFront24: ImageVector? = null
