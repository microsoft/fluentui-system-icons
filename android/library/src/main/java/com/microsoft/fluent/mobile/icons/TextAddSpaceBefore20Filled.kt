package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextAddSpaceBefore20: ImageVector
  get() {
    if (_textAddSpaceBefore20 != null) {
      return _textAddSpaceBefore20!!
    }
    _textAddSpaceBefore20 = fluentIcon(name = "Filled.TextAddSpaceBefore20", 20f) {
      materialPath {
          moveTo(12.03F, 5.78F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineTo(10.0F, 5.69F)
          lineTo(9.03F, 4.72F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(1.5F, 1.5F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          lineToRelative(1.5F, -1.5F)
          close()
          moveTo(3.0F, 10.75F)
          curveTo(3.0F, 10.336F, 3.336F, 10.0F, 3.75F, 10.0F)
          horizontalLineToRelative(12.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineTo(3.75F)
          curveTo(3.336F, 11.5F, 3.0F, 11.164F, 3.0F, 10.75F)
          close()
          moveToRelative(0.0F, 4.0F)
          curveTo(3.0F, 14.336F, 3.336F, 14.0F, 3.75F, 14.0F)
          horizontalLineToRelative(12.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineTo(3.75F)
          curveTo(3.336F, 15.5F, 3.0F, 15.164F, 3.0F, 14.75F)
          close()        
      }
    }
    return _textAddSpaceBefore20!!
  }

private var _textAddSpaceBefore20: ImageVector? = null
