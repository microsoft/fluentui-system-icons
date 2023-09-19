package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowSplit16: ImageVector
  get() {
    if (_arrowSplit16 != null) {
      return _arrowSplit16!!
    }
    _arrowSplit16 = fluentIcon(name = "Filled.ArrowSplit16", 16f) {
      materialPath {
          moveTo(8.0F, 2.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          verticalLineTo(6.0F)
          horizontalLineTo(11.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, 0.672F, 1.5F, 1.5F)
          verticalLineToRelative(3.94F)
          lineToRelative(0.72F, -0.72F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(-2.0F, 2.0F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          lineToRelative(-2.0F, -2.0F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineTo(11.0F, 11.44F)
          verticalLineTo(7.5F)
          horizontalLineTo(5.0F)
          verticalLineToRelative(3.94F)
          lineToRelative(0.72F, -0.72F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(-2.0F, 2.0F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          lineToRelative(-2.0F, -2.0F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineToRelative(0.72F, 0.72F)
          verticalLineTo(7.5F)
          curveTo(3.5F, 6.672F, 4.172F, 6.0F, 5.0F, 6.0F)
          horizontalLineToRelative(2.25F)
          verticalLineTo(2.75F)
          curveTo(7.25F, 2.336F, 7.586F, 2.0F, 8.0F, 2.0F)
          close()        
      }
    }
    return _arrowSplit16!!
  }

private var _arrowSplit16: ImageVector? = null
