package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowSplit24: ImageVector
  get() {
    if (_arrowSplit24 != null) {
      return _arrowSplit24!!
    }
    _arrowSplit24 = fluentIcon(name = "Filled.ArrowSplit24", 24f) {
      materialPath {
          moveTo(12.0F, 3.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(5.0F)
          horizontalLineToRelative(2.25F)
          curveTo(16.769F, 9.0F, 18.0F, 10.231F, 18.0F, 11.75F)
          verticalLineToRelative(5.836F)
          lineToRelative(1.293F, -1.293F)
          curveToRelative(0.39F, -0.39F, 1.024F, -0.39F, 1.414F, 0.0F)
          curveToRelative(0.39F, 0.39F, 0.39F, 1.024F, 0.0F, 1.414F)
          lineToRelative(-3.0F, 3.0F)
          curveToRelative(-0.39F, 0.39F, -1.024F, 0.39F, -1.414F, 0.0F)
          lineToRelative(-3.0F, -3.0F)
          curveToRelative(-0.39F, -0.39F, -0.39F, -1.024F, 0.0F, -1.414F)
          curveToRelative(0.39F, -0.39F, 1.024F, -0.39F, 1.414F, 0.0F)
          lineTo(16.0F, 17.586F)
          verticalLineTo(11.75F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineToRelative(-6.5F)
          curveTo(8.336F, 11.0F, 8.0F, 11.336F, 8.0F, 11.75F)
          verticalLineToRelative(5.836F)
          lineToRelative(1.293F, -1.293F)
          curveToRelative(0.39F, -0.39F, 1.024F, -0.39F, 1.414F, 0.0F)
          curveToRelative(0.39F, 0.39F, 0.39F, 1.024F, 0.0F, 1.414F)
          lineToRelative(-3.0F, 3.0F)
          curveToRelative(-0.39F, 0.39F, -1.024F, 0.39F, -1.414F, 0.0F)
          lineToRelative(-3.0F, -3.0F)
          curveToRelative(-0.39F, -0.39F, -0.39F, -1.024F, 0.0F, -1.414F)
          curveToRelative(0.39F, -0.39F, 1.024F, -0.39F, 1.414F, 0.0F)
          lineTo(6.0F, 17.586F)
          verticalLineTo(11.75F)
          curveTo(6.0F, 10.231F, 7.231F, 9.0F, 8.75F, 9.0F)
          horizontalLineTo(11.0F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          close()        
      }
    }
    return _arrowSplit24!!
  }

private var _arrowSplit24: ImageVector? = null
