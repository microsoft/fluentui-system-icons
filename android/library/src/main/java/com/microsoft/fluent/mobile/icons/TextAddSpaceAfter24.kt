package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextAddSpaceAfter24: ImageVector
  get() {
    if (_textAddSpaceAfter24 != null) {
      return _textAddSpaceAfter24!!
    }
    _textAddSpaceAfter24 = fluentIcon(name = "Regular.TextAddSpaceAfter24", 24f) {
      materialPath {
          moveTo(3.0F, 6.75F)
          curveTo(3.0F, 6.336F, 3.336F, 6.0F, 3.75F, 6.0F)
          horizontalLineToRelative(16.5F)
          curveTo(20.664F, 6.0F, 21.0F, 6.336F, 21.0F, 6.75F)
          reflectiveCurveTo(20.664F, 7.5F, 20.25F, 7.5F)
          horizontalLineTo(3.75F)
          curveTo(3.336F, 7.5F, 3.0F, 7.164F, 3.0F, 6.75F)
          close()
          moveToRelative(0.0F, 6.0F)
          curveTo(3.0F, 12.336F, 3.336F, 12.0F, 3.75F, 12.0F)
          horizontalLineToRelative(16.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineTo(3.75F)
          curveTo(3.336F, 13.5F, 3.0F, 13.164F, 3.0F, 12.75F)
          close()
          moveToRelative(6.47F, 5.47F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          lineTo(12.0F, 17.81F)
          lineToRelative(1.47F, 1.47F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(-2.0F, -2.0F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineToRelative(-2.0F, 2.0F)
          close()        
      }
    }
    return _textAddSpaceAfter24!!
  }

private var _textAddSpaceAfter24: ImageVector? = null
