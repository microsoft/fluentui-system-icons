package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextAddSpaceBefore24: ImageVector
  get() {
    if (_textAddSpaceBefore24 != null) {
      return _textAddSpaceBefore24!!
    }
    _textAddSpaceBefore24 = fluentIcon(name = "Regular.TextAddSpaceBefore24", 24f) {
      materialPath {
          moveTo(9.47F, 6.28F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineTo(12.0F, 6.69F)
          lineToRelative(1.47F, -1.47F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(-2.0F, 2.0F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          lineToRelative(-2.0F, -2.0F)
          close()
          moveTo(3.0F, 11.75F)
          curveTo(3.0F, 11.336F, 3.336F, 11.0F, 3.75F, 11.0F)
          horizontalLineToRelative(16.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineTo(3.75F)
          curveTo(3.336F, 12.5F, 3.0F, 12.164F, 3.0F, 11.75F)
          close()
          moveToRelative(0.0F, 6.0F)
          curveTo(3.0F, 17.336F, 3.336F, 17.0F, 3.75F, 17.0F)
          horizontalLineToRelative(16.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineTo(3.75F)
          curveTo(3.336F, 18.5F, 3.0F, 18.164F, 3.0F, 17.75F)
          close()        
      }
    }
    return _textAddSpaceBefore24!!
  }

private var _textAddSpaceBefore24: ImageVector? = null
